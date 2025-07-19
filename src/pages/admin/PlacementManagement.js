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
  Progress 
} from 'antd';
import { 
  PlusOutlined, 
  EditOutlined, 
  DeleteOutlined, 
  UserOutlined, 
  DollarOutlined, 
  TrophyOutlined, 
  CalendarOutlined 
} from '@ant-design/icons';
import AdminDashboard from '../../components/admin/AdminDashboard';

const { Option } = Select;
const { TabPane } = Tabs;

const PlacementManagement = () => {
  const [plans, setPlans] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  // Initial placement plans data
  const initialPlans = [
    {
      id: 'basic',
      name: 'Basic',
      totalCost: '$1,500 + 17%',
      prePlacementCost: 1500,
      postPlacementPercentage: 17,
      paymentTerms: '4 EMI',
      resumePrep: 'From Expert',
      rucSession: '5 Support OR Training',
      interviewAssessment: 'Common',
      support: 'Recruiter',
      jobGuarantee: '1 Year',
      coverage: 180,
      status: 'active',
      enrollments: 42
    },
    {
      id: 'elite',
      name: 'Elite',
      totalCost: '$3,000 + 15%',
      prePlacementCost: 3000,
      postPlacementPercentage: 15,
      paymentTerms: '4 EMI',
      resumePrep: 'From Expert',
      rucSession: '15 Support + Training',
      interviewAssessment: 'Advance',
      support: 'Recruiter',
      jobGuarantee: '1 Year',
      coverage: 180,
      status: 'active',
      enrollments: 68,
      popular: true
    },
    {
      id: 'advance',
      name: 'Advance',
      totalCost: '$5,000 + 12%',
      prePlacementCost: 5000,
      postPlacementPercentage: 12,
      paymentTerms: '4 EMI',
      resumePrep: 'From Expert',
      rucSession: 'Unlimited Support',
      interviewAssessment: 'Professional (3+ year experience)',
      support: 'Common Recruiter',
      jobGuarantee: '2 Year',
      coverage: 150,
      status: 'active',
      enrollments: 34
    },
    {
      id: 'premium',
      name: 'Premium',
      totalCost: '$15,000',
      prePlacementCost: 6000,
      postPlacementCost: 9000,
      paymentTerms: '4 EMI',
      resumePrep: 'From Expert',
      rucSession: '30 Support + Training',
      interviewAssessment: 'Professional (6+ year experience)',
      support: 'Common Recruiter',
      jobGuarantee: '3 Year',
      coverage: 110,
      status: 'active',
      enrollments: 8
    },
    {
      id: 'platinum',
      name: 'Platinum',
      totalCost: '$20,000',
      prePlacementCost: 8000,
      postPlacementCost: 12000,
      paymentTerms: '4 EMI',
      resumePrep: 'From Expert',
      rucSession: 'Unlimited Support',
      interviewAssessment: 'Professional (6+ year experience)',
      support: 'Professional Recruiter',
      jobGuarantee: '4 Year',
      coverage: 110,
      status: 'active',
      enrollments: 4
    }
  ];

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
    // Initialize with hardcoded data
    setPlans(initialPlans);
    setEnrollments(mockEnrollments);
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
      onOk: () => {
        setPlans(plans.filter(p => p.id !== planId));
        message.success('Plan deleted successfully');
      }
    });
  };

  const handleModalOk = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      
      if (isEditMode) {
        setPlans(plans.map(p => p.id === editingPlan.id ? { ...p, ...values } : p));
        message.success('Plan updated successfully');
      } else {
        const newPlan = {
          ...values,
          id: `plan_${Date.now()}`,
          enrollments: 0,
          status: 'active'
        };
        setPlans([...plans, newPlan]);
        message.success('Plan created successfully');
      }
      
      setIsModalVisible(false);
      form.resetFields();
    } catch (error) {
      console.error('Validation failed:', error);
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
      dataIndex: 'jobGuarantee',
      key: 'jobGuarantee'
    },
    {
      title: 'Enrollments',
      dataIndex: 'enrollments',
      key: 'enrollments',
      render: (count) => (
        <Tag color="blue">{count} students</Tag>
      )
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'active' ? 'green' : 'red'}>
          {status.toUpperCase()}
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
  const totalEnrollments = plans.reduce((sum, plan) => sum + plan.enrollments, 0);
  const totalRevenue = plans.reduce((sum, plan) => sum + (plan.prePlacementCost * plan.enrollments), 0);
  const placedStudents = enrollments.filter(e => e.placementStatus === 'placed').length;
  const placementRate = enrollments.length > 0 ? (placedStudents / enrollments.length) * 100 : 0;

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
                value={plans.filter(p => p.status === 'active').length}
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
                  label="Pre-Placement Cost ($)"
                  name="prePlacementCost"
                  rules={[{ required: true, message: 'Please enter pre-placement cost' }]}
                >
                  <InputNumber
                    style={{ width: '100%' }}
                    placeholder="3000"
                    formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Post-Placement Percentage (%)"
                  name="postPlacementPercentage"
                >
                  <InputNumber
                    style={{ width: '100%' }}
                    placeholder="15"
                    min={0}
                    max={50}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Coverage Days"
                  name="coverage"
                  rules={[{ required: true, message: 'Please enter coverage days' }]}
                >
                  <InputNumber
                    style={{ width: '100%' }}
                    placeholder="180"
                    min={30}
                    max={365}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Job Guarantee"
                  name="jobGuarantee"
                  rules={[{ required: true, message: 'Please select job guarantee' }]}
                >
                  <Select placeholder="Select guarantee period">
                    <Option value="1 Year">1 Year</Option>
                    <Option value="2 Year">2 Year</Option>
                    <Option value="3 Year">3 Year</Option>
                    <Option value="4 Year">4 Year</Option>
                  </Select>
                </Form.Item>
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
              <Col xs={24}>
                <Form.Item
                  label="Resume Preparation"
                  name="resumePrep"
                  rules={[{ required: true, message: 'Please enter resume preparation details' }]}
                >
                  <Input placeholder="From Expert" />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item
                  label="RUC Session"
                  name="rucSession"
                  rules={[{ required: true, message: 'Please enter RUC session details' }]}
                >
                  <Input placeholder="15 Support + Training" />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item
                  label="Interview Assessment"
                  name="interviewAssessment"
                  rules={[{ required: true, message: 'Please enter interview assessment details' }]}
                >
                  <Input placeholder="Advance" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Support Type"
                  name="support"
                  rules={[{ required: true, message: 'Please enter support type' }]}
                >
                  <Input placeholder="Recruiter" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Status"
                  name="status"
                  rules={[{ required: true, message: 'Please select status' }]}
                >
                  <Select placeholder="Select status">
                    <Option value="active">Active</Option>
                    <Option value="inactive">Inactive</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>
      </div>
    </AdminDashboard>
  );
};

export default PlacementManagement;