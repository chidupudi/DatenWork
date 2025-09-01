import React, { useState, useEffect } from 'react';
import { 
  Card, 
  Table, 
  Button, 
  Modal, 
  Form, 
  Input, 
  Select, 
  InputNumber, 
  Space, 
  message, 
  Tabs, 
  Statistic, 
  Row, 
  Col, 
  Tag, 
  Progress,
  Switch,
  Typography,
  Divider,
  List,
  Spin,
  Alert
} from 'antd';
import { 
  PlusOutlined, 
  EditOutlined, 
  DeleteOutlined, 
  UserOutlined, 
  DollarOutlined, 
  TrophyOutlined, 
  CalendarOutlined,
  SettingOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import AdminDashboard from '../../components/admin/AdminDashboard';
import { placementPlansService, placementContentService } from '../../services/firebaseData';

const { Option } = Select;
const { TabPane } = Tabs;
const { TextArea } = Input;
const { Title, Text } = Typography;

const PlacementManagement = () => {
  const [plans, setPlans] = useState([]);
  const [content, setContent] = useState(null);
  const [enrollments, setEnrollments] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isContentModalVisible, setIsContentModalVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null);
  const [form] = Form.useForm();
  const [contentForm] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  // Load data from Firebase
  const loadData = async () => {
    try {
      setPageLoading(true);
      
      // Load plans and content in parallel
      const [plansData, contentData] = await Promise.all([
        placementPlansService.getAll(),
        placementContentService.get()
      ]);
      
      setPlans(plansData || []);
      setContent(contentData || {});
      
      if (contentData) {
        contentForm.setFieldsValue(contentData);
      }
    } catch (error) {
      console.error('Error loading placement data:', error);
      message.error('Failed to load placement data');
    } finally {
      setPageLoading(false);
    }
  };

  // Mock enrollments data
  const mockEnrollments = [
    {
      id: 1,
      studentName: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+1234567890',
      plan: 'Elite',
      enrollmentDate: '2024-01-15',
      status: 'active',
      paymentStatus: 'paid',
      progress: 65,
      placementStatus: 'in_progress'
    },
    {
      id: 2,
      studentName: 'Sarah Smith',
      email: 'sarah.smith@email.com',
      phone: '+1234567891',
      plan: 'Basic',
      enrollmentDate: '2024-01-20',
      status: 'active',
      paymentStatus: 'partial',
      progress: 45,
      placementStatus: 'resume_prep'
    },
    {
      id: 3,
      studentName: 'Mike Johnson',
      email: 'mike.johnson@email.com',
      phone: '+1234567892',
      plan: 'Advance',
      enrollmentDate: '2024-01-10',
      status: 'completed',
      paymentStatus: 'paid',
      progress: 100,
      placementStatus: 'placed'
    }
  ];

  useEffect(() => {
    loadData();
    setEnrollments(mockEnrollments); // Keep mock enrollments for now
  }, []);

  const handleAddPlan = () => {
    setIsEditMode(false);
    setEditingPlan(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEditPlan = (plan) => {
    setIsEditMode(true);
    setEditingPlan(plan);
    form.setFieldsValue(plan);
    setIsModalVisible(true);
  };

  const handleDeletePlan = (planId) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this plan?',
      content: 'This action cannot be undone.',
      onOk: async () => {
        try {
          await placementPlansService.delete(planId);
          message.success('Plan deleted successfully');
          loadData(); // Reload data
        } catch (error) {
          console.error('Error deleting plan:', error);
          message.error('Failed to delete plan');
        }
      }
    });
  };

  const handleModalOk = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      
      // Prepare plan data
      const planData = {
        ...values,
        features: {
          paymentTerms: values.paymentTerms,
          resumePrep: values.resumePrep,
          supportSessions: values.supportSessions,
          interviewTraining: values.interviewTraining,
          support: values.support,
          jobGuarantee: values.jobGuarantee,
          recruiterType: values.recruiterType,
          linkedinOptimization: values.linkedinOptimization || false,
          profileMarketing: values.profileMarketing || false,
          backgroundCheck: values.backgroundCheck || false,
          personalBranding: values.personalBranding || false,
          dedicatedManager: values.dedicatedManager || false
        },
        bulletFeatures: values.bulletFeatures || []
      };
      
      if (isEditMode) {
        await placementPlansService.update(editingPlan.id, planData);
        message.success('Plan updated successfully');
      } else {
        await placementPlansService.add({
          ...planData,
          id: `plan_${Date.now()}`,
          isActive: true
        });
        message.success('Plan created successfully');
      }
      
      setIsModalVisible(false);
      form.resetFields();
      loadData(); // Reload data
    } catch (error) {
      console.error('Error saving plan:', error);
      message.error('Failed to save plan');
    } finally {
      setLoading(false);
    }
  };
  
  const handleContentModalOk = async () => {
    try {
      setLoading(true);
      const values = await contentForm.validateFields();
      
      await placementContentService.update(values);
      message.success('Content updated successfully');
      
      setIsContentModalVisible(false);
      loadData(); // Reload data
    } catch (error) {
      console.error('Error updating content:', error);
      message.error('Failed to update content');
    } finally {
      setLoading(false);
    }
  };

  const planColumns = [
    {
      title: 'Plan Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <div>
          <strong>{text}</strong>
          {record.popular && <Tag color="gold" style={{ marginLeft: '8px' }}>Popular</Tag>}
        </div>
      )
    },
    {
      title: 'Pre-Placement Cost',
      dataIndex: 'prePlacementCost',
      key: 'prePlacementCost',
      render: (cost) => `$${cost?.toLocaleString()}`
    },
    {
      title: 'Total Cost Display',
      key: 'totalCost',
      render: (_, record) => (
        <Text strong>
          ${record.prePlacementCost?.toLocaleString()} + {record.postPlacementPercentage}%
        </Text>
      )
    },
    {
      title: 'Post-Placement %',
      dataIndex: 'postPlacementPercentage',
      key: 'postPlacementPercentage',
      render: (percentage) => percentage ? `${percentage}%` : 'Fixed Amount'
    },
    {
      title: 'Coverage Days',
      dataIndex: 'coverage',
      key: 'coverage',
      render: (days) => `${days} days`
    },
    {
      title: 'Job Guarantee',
      dataIndex: 'features',
      key: 'jobGuarantee',
      render: (features) => features?.jobGuarantee || 'N/A'
    },
    {
      title: 'Status',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (isActive) => (
        <Tag color={isActive ? 'green' : 'red'}>
          {isActive ? 'ACTIVE' : 'INACTIVE'}
        </Tag>
      )
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button 
            type="primary" 
            size="small" 
            icon={<EditOutlined />}
            onClick={() => handleEditPlan(record)}
          >
            Edit
          </Button>
          <Button 
            danger 
            size="small" 
            icon={<DeleteOutlined />}
            onClick={() => handleDeletePlan(record.id)}
          >
            Delete
          </Button>
        </Space>
      )
    }
  ];

  const enrollmentColumns = [
    {
      title: 'Student',
      key: 'student',
      render: (_, record) => (
        <div>
          <div style={{ fontWeight: '500' }}>{record.studentName}</div>
          <div style={{ fontSize: '12px', color: '#666' }}>{record.email}</div>
        </div>
      )
    },
    {
      title: 'Plan',
      dataIndex: 'plan',
      key: 'plan',
      render: (plan) => <Tag color="blue">{plan}</Tag>
    },
    {
      title: 'Enrollment Date',
      dataIndex: 'enrollmentDate',
      key: 'enrollmentDate'
    },
    {
      title: 'Progress',
      dataIndex: 'progress',
      key: 'progress',
      render: (progress) => (
        <Progress 
          percent={progress} 
          size="small" 
          strokeColor={progress >= 100 ? '#52c41a' : '#1890ff'}
        />
      )
    },
    {
      title: 'Payment Status',
      dataIndex: 'paymentStatus',
      key: 'paymentStatus',
      render: (status) => {
        const color = status === 'paid' ? 'green' : status === 'partial' ? 'orange' : 'red';
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      }
    },
    {
      title: 'Placement Status',
      dataIndex: 'placementStatus',
      key: 'placementStatus',
      render: (status) => {
        const statusConfig = {
          'resume_prep': { color: 'blue', text: 'Resume Prep' },
          'in_progress': { color: 'orange', text: 'In Progress' },
          'placed': { color: 'green', text: 'Placed' },
          'pending': { color: 'default', text: 'Pending' }
        };
        const config = statusConfig[status] || statusConfig.pending;
        return <Tag color={config.color}>{config.text}</Tag>;
      }
    }
  ];

  // Calculate statistics
  const totalEnrollments = enrollments.length;
  const totalRevenue = plans.reduce((sum, plan) => sum + (plan.prePlacementCost * 50), 0); // Estimated revenue
  const placedStudents = enrollments.filter(e => e.placementStatus === 'placed').length;
  const placementRate = enrollments.length > 0 ? (placedStudents / enrollments.length) * 100 : 0;
  
  if (pageLoading) {
    return (
      <AdminDashboard activeKey="placement">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
          <Spin size="large" />
        </div>
      </AdminDashboard>
    );
  }

  return (
    <AdminDashboard activeKey="placement">
      <div>
        {/* Page Header */}
        <div style={{
          marginBottom: '24px',
          background: 'white',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#1f2937',
                margin: '0 0 8px 0'
              }}>Placement Program Management</h1>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                margin: 0
              }}>
                Manage placement plans, pricing, and student enrollments
              </p>
            </div>
            <Space>
              <Button 
                type="primary" 
                icon={<FileTextOutlined />}
                onClick={() => setIsContentModalVisible(true)}
                size="large"
                style={{
                  background: 'linear-gradient(135deg, #1890ff 0%, #096dd9 100%)',
                  border: 'none',
                  borderRadius: '8px',
                  height: '48px',
                  padding: '0 24px',
                  fontWeight: '600'
                }}
              >
                Edit Page Content
              </Button>
              <Button 
                type="primary" 
                icon={<PlusOutlined />}
                onClick={handleAddPlan}
                size="large"
                style={{
                  background: 'linear-gradient(135deg, #722ed1 0%, #531dab 100%)',
                  border: 'none',
                  borderRadius: '8px',
                  height: '48px',
                  padding: '0 24px',
                  fontWeight: '600'
                }}
              >
                Add New Plan
              </Button>
            </Space>
          </div>
        </div>

        {/* Statistics Cards */}
        <Row gutter={[24, 24]} style={{ marginBottom: '24px' }}>
          <Col xs={24} sm={12} lg={6}>
            <Card style={{ borderRadius: '12px', textAlign: 'center' }}>
              <Statistic
                title="Total Enrollments"
                value={totalEnrollments}
                prefix={<UserOutlined style={{ color: '#1890ff' }} />}
                valueStyle={{ color: '#1890ff', fontSize: '32px', fontWeight: '700' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card style={{ borderRadius: '12px', textAlign: 'center' }}>
              <Statistic
                title="Total Revenue"
                value={totalRevenue}
                prefix={<DollarOutlined style={{ color: '#52c41a' }} />}
                precision={0}
                formatter={(value) => `$${value.toLocaleString()}`}
                valueStyle={{ color: '#52c41a', fontSize: '32px', fontWeight: '700' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card style={{ borderRadius: '12px', textAlign: 'center' }}>
              <Statistic
                title="Placement Rate"
                value={placementRate}
                suffix="%"
                prefix={<TrophyOutlined style={{ color: '#faad14' }} />}
                precision={1}
                valueStyle={{ color: '#faad14', fontSize: '32px', fontWeight: '700' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card style={{ borderRadius: '12px', textAlign: 'center' }}>
              <Statistic
                title="Active Plans"
                value={plans.filter(p => p.isActive).length}
                prefix={<CalendarOutlined style={{ color: '#722ed1' }} />}
                valueStyle={{ color: '#722ed1', fontSize: '32px', fontWeight: '700' }}
              />
            </Card>
          </Col>
        </Row>

        {/* Main Content Tabs */}
        <Card style={{ borderRadius: '12px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)' }}>
          <Tabs defaultActiveKey="plans" size="large">
            <TabPane tab="Placement Plans" key="plans">
              <Table
                columns={planColumns}
                dataSource={plans}
                rowKey="id"
                pagination={{
                  pageSize: 10,
                  showSizeChanger: true,
                  showQuickJumper: true,
                  showTotal: (total, range) => 
                    `${range[0]}-${range[1]} of ${total} plans`
                }}
                scroll={{ x: 800 }}
              />
            </TabPane>
            
            <TabPane tab="Student Enrollments" key="enrollments">
              <Table
                columns={enrollmentColumns}
                dataSource={enrollments}
                rowKey="id"
                pagination={{
                  pageSize: 10,
                  showSizeChanger: true,
                  showQuickJumper: true,
                  showTotal: (total, range) => 
                    `${range[0]}-${range[1]} of ${total} enrollments`
                }}
                scroll={{ x: 800 }}
              />
            </TabPane>
          </Tabs>
        </Card>

        {/* Add/Edit Plan Modal */}
        <Modal
          title={isEditMode ? 'Edit Placement Plan' : 'Add New Placement Plan'}
          open={isModalVisible}
          onOk={handleModalOk}
          onCancel={() => setIsModalVisible(false)}
          confirmLoading={loading}
          width={800}
          destroyOnClose
        >
          <Form
            form={form}
            layout="vertical"
            style={{ marginTop: '24px' }}
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Plan Name"
                  name="name"
                  rules={[{ required: true, message: 'Please enter plan name' }]}
                >
                  <Input placeholder="e.g., Elite Plan" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Plan Subtitle"
                  name="subtitle"
                  rules={[{ required: true, message: 'Please enter plan subtitle' }]}
                >
                  <Input placeholder="Perfect for career starters" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Pre-Placement Cost ($)"
                  name="prePlacementCost"
                  rules={[{ required: true, message: 'Please enter pre-placement cost' }]}
                >
                  <InputNumber
                    style={{ width: '100%' }}
                    placeholder="2300"
                    formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Post-Placement Percentage (%)"
                  name="postPlacementPercentage"
                  rules={[{ required: true, message: 'Please enter post-placement percentage' }]}
                >
                  <InputNumber
                    style={{ width: '100%' }}
                    placeholder="17"
                    min={0}
                    max={50}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Plan Icon (Emoji)"
                  name="icon"
                  rules={[{ required: true, message: 'Please enter plan icon' }]}
                >
                  <Input placeholder="🎯" maxLength={2} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Badge Text (Optional)"
                  name="badge"
                >
                  <Input placeholder="Most Popular" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Popular Plan"
                  name="popular"
                  valuePropName="checked"
                >
                  <Switch />
                </Form.Item>
              </Col>
              
              <Col xs={24}>
                <Divider orientation="left">Plan Features</Divider>
              </Col>
              
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Payment Terms"
                  name="paymentTerms"
                  rules={[{ required: true, message: 'Please enter payment terms' }]}
                >
                  <Input placeholder="4 EMI" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Job Guarantee"
                  name="jobGuarantee"
                  rules={[{ required: true, message: 'Please enter job guarantee' }]}
                >
                  <Input placeholder="180 Days" />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item
                  label="Resume Preparation"
                  name="resumePrep"
                  rules={[{ required: true, message: 'Please enter resume preparation details' }]}
                >
                  <Input placeholder="Professional Resume + LinkedIn" />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item
                  label="Support Sessions"
                  name="supportSessions"
                  rules={[{ required: true, message: 'Please enter support session details' }]}
                >
                  <Input placeholder="10 Support Sessions" />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item
                  label="Interview Training"
                  name="interviewTraining"
                  rules={[{ required: true, message: 'Please enter interview training details' }]}
                >
                  <Input placeholder="Mock Interview Training" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Support Type"
                  name="support"
                  rules={[{ required: true, message: 'Please enter support type' }]}
                >
                  <Input placeholder="Email & Chat Support" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Recruiter Type"
                  name="recruiterType"
                  rules={[{ required: true, message: 'Please enter recruiter type' }]}
                >
                  <Input placeholder="Certified Recruiter" />
                </Form.Item>
              </Col>
              
              <Col xs={24}>
                <Divider orientation="left">Additional Features</Divider>
              </Col>
              
              <Col xs={24} sm={8}>
                <Form.Item
                  label="LinkedIn Optimization"
                  name="linkedinOptimization"
                  valuePropName="checked"
                >
                  <Switch />
                </Form.Item>
              </Col>
              <Col xs={24} sm={8}>
                <Form.Item
                  label="Profile Marketing"
                  name="profileMarketing"
                  valuePropName="checked"
                >
                  <Switch />
                </Form.Item>
              </Col>
              <Col xs={24} sm={8}>
                <Form.Item
                  label="Background Check"
                  name="backgroundCheck"
                  valuePropName="checked"
                >
                  <Switch />
                </Form.Item>
              </Col>
              <Col xs={24} sm={8}>
                <Form.Item
                  label="Personal Branding"
                  name="personalBranding"
                  valuePropName="checked"
                >
                  <Switch />
                </Form.Item>
              </Col>
              <Col xs={24} sm={8}>
                <Form.Item
                  label="Dedicated Manager"
                  name="dedicatedManager"
                  valuePropName="checked"
                >
                  <Switch />
                </Form.Item>
              </Col>
              <Col xs={24} sm={8}>
                <Form.Item
                  label="Active Status"
                  name="isActive"
                  valuePropName="checked"
                >
                  <Switch />
                </Form.Item>
              </Col>
              
              <Col xs={24}>
                <Divider orientation="left">Plan Features (Bullet Points)</Divider>
              </Col>
              
              <Col xs={24}>
                <Form.List name="bulletFeatures">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, ...restField }) => (
                        <Card key={key} style={{ marginBottom: '16px' }}>
                          <Row gutter={16}>
                            <Col xs={24} sm={20}>
                              <Form.Item
                                {...restField}
                                name={[name, 'text']}
                                label={`Feature ${name + 1}`}
                                rules={[{ required: true, message: 'Please enter feature text' }]}
                              >
                                <Input placeholder="Professional Resume + LinkedIn" />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={4}>
                              <Form.Item
                                {...restField}
                                name={[name, 'enabled']}
                                label="Show"
                                valuePropName="checked"
                                style={{ marginTop: '8px' }}
                              >
                                <Switch />
                              </Form.Item>
                            </Col>
                            <Col xs={24}>
                              <Button type="dashed" danger onClick={() => remove(name)} style={{ marginTop: '8px' }}>
                                Remove Feature
                              </Button>
                            </Col>
                          </Row>
                        </Card>
                      ))}
                      <Form.Item>
                        <Button type="dashed" onClick={() => add({ enabled: true })} block icon={<PlusOutlined />}>
                          Add Feature Bullet Point
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>
              </Col>
            </Row>
          </Form>
        </Modal>

        {/* Content Management Modal */}
        <Modal
          title="Edit Placement Program Content"
          open={isContentModalVisible}
          onOk={handleContentModalOk}
          onCancel={() => setIsContentModalVisible(false)}
          confirmLoading={loading}
          width={900}
          destroyOnClose
        >
          <Form
            form={contentForm}
            layout="vertical"
            style={{ marginTop: '24px' }}
          >
            <Tabs defaultActiveKey="hero">
              <TabPane tab="Hero Section" key="hero">
                <Form.Item
                  label="Hero Title"
                  name={['hero', 'title']}
                  rules={[{ required: true, message: 'Please enter hero title' }]}
                >
                  <Input placeholder="US-IT Placement Program" />
                </Form.Item>
                <Form.Item
                  label="Hero Subtitle"
                  name={['hero', 'subtitle']}
                  rules={[{ required: true, message: 'Please enter hero subtitle' }]}
                >
                  <TextArea 
                    rows={4}
                    placeholder="Transform your career with guaranteed placement in top US companies..."
                  />
                </Form.Item>
                
                <Divider orientation="left">Hero Badges</Divider>
                <Form.List name={['hero', 'badges']}>
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, ...restField }) => (
                        <Card key={key} style={{ marginBottom: '16px' }}>
                          <Row gutter={16}>
                            <Col xs={24} sm={6}>
                              <Form.Item
                                {...restField}
                                name={[name, 'icon']}
                                label="Icon (Emoji)"
                                rules={[{ required: true, message: 'Please enter icon' }]}
                              >
                                <Input placeholder="🎯" maxLength={2} />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={12}>
                              <Form.Item
                                {...restField}
                                name={[name, 'text']}
                                label="Badge Text"
                                rules={[{ required: true, message: 'Please enter badge text' }]}
                              >
                                <Input placeholder="100% Job Guarantee" />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={6}>
                              <Form.Item
                                {...restField}
                                name={[name, 'color']}
                                label="Color"
                              >
                                <Input placeholder="#059669" />
                              </Form.Item>
                            </Col>
                            <Col xs={24}>
                              <Button type="dashed" danger onClick={() => remove(name)}>
                                Remove Badge
                              </Button>
                            </Col>
                          </Row>
                        </Card>
                      ))}
                      <Form.Item>
                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                          Add Hero Badge
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>
              </TabPane>
              
              <TabPane tab="Features" key="features">
                <Alert
                  message="Manage Features"
                  description="Edit the features displayed on the placement program page"
                  type="info"
                  style={{ marginBottom: '16px' }}
                />
                <Form.List name="features">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, ...restField }) => (
                        <Card key={key} style={{ marginBottom: '16px' }}>
                          <Row gutter={16}>
                            <Col xs={24} sm={8}>
                              <Form.Item
                                {...restField}
                                name={[name, 'icon']}
                                label="Icon (Emoji)"
                                rules={[{ required: true, message: 'Please enter icon' }]}
                              >
                                <Input placeholder="🎯" maxLength={2} />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={16}>
                              <Form.Item
                                {...restField}
                                name={[name, 'title']}
                                label="Title"
                                rules={[{ required: true, message: 'Please enter title' }]}
                              >
                                <Input placeholder="Feature Title" />
                              </Form.Item>
                            </Col>
                            <Col xs={24}>
                              <Form.Item
                                {...restField}
                                name={[name, 'description']}
                                label="Description"
                                rules={[{ required: true, message: 'Please enter description' }]}
                              >
                                <TextArea rows={3} placeholder="Feature description..." />
                              </Form.Item>
                            </Col>
                            <Col xs={24}>
                              <Button type="dashed" danger onClick={() => remove(name)}>
                                Remove Feature
                              </Button>
                            </Col>
                          </Row>
                        </Card>
                      ))}
                      <Form.Item>
                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                          Add Feature
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>
              </TabPane>
              
              <TabPane tab="Statistics" key="stats">
                <Form.List name="stats">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, ...restField }) => (
                        <Card key={key} style={{ marginBottom: '16px' }}>
                          <Row gutter={16}>
                            <Col xs={24} sm={6}>
                              <Form.Item
                                {...restField}
                                name={[name, 'icon']}
                                label="Icon"
                              >
                                <Input placeholder="🎯" maxLength={2} />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={6}>
                              <Form.Item
                                {...restField}
                                name={[name, 'stat']}
                                label="Statistic"
                              >
                                <Input placeholder="100%" />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={8}>
                              <Form.Item
                                {...restField}
                                name={[name, 'label']}
                                label="Label"
                              >
                                <Input placeholder="Job Guarantee" />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={4}>
                              <Form.Item
                                {...restField}
                                name={[name, 'color']}
                                label="Color"
                              >
                                <Input placeholder="#10b981" />
                              </Form.Item>
                            </Col>
                            <Col xs={24}>
                              <Button type="dashed" danger onClick={() => remove(name)}>
                                Remove Stat
                              </Button>
                            </Col>
                          </Row>
                        </Card>
                      ))}
                      <Form.Item>
                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                          Add Statistic
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>
              </TabPane>
            </Tabs>
          </Form>
        </Modal>
      </div>
    </AdminDashboard>
  );
};

export default PlacementManagement;