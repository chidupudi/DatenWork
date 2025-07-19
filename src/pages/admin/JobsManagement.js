import React, { useState, useEffect } from 'react';
import { Card, Table, Button, Modal, Form, Input, Select, Tag, Space, Popconfirm, message, Row, Col, InputNumber } from 'antd';
import { 
  PlusOutlined, 
  EditOutlined, 
  DeleteOutlined,
  SaveOutlined,
  BankOutlined,
  DollarOutlined,
  EnvironmentOutlined,
  UserOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';
import AdminDashboard from '../../components/admin/AdminDashboard';
import { jobsService } from '../../services/firebaseData';

const { Option } = Select;

const JobsManagement = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    setLoading(true);
    try {
      const jobsData = await jobsService.getAll();
      setJobs(jobsData);
    } catch (error) {
      console.error('Error loading jobs:', error);
      message.error('Failed to load jobs');
    } finally {
      setLoading(false);
    }
  };

  const handleAddJob = () => {
    setEditingJob(null);
    form.resetFields();
    form.setFieldsValue({
      skills: [],
      isActive: true,
      openings: 1,
      urgency: 'This Month'
    });
    setModalVisible(true);
  };

  const handleEditJob = (job) => {
    setEditingJob(job);
    form.setFieldsValue(job);
    setModalVisible(true);
  };

  const handleDeleteJob = async (jobId) => {
    try {
      await jobsService.delete(jobId);
      message.success('Job deleted successfully');
      loadJobs();
    } catch (error) {
      console.error('Error deleting job:', error);
      message.error('Failed to delete job');
    }
  };

  const handleSaveJob = async (values) => {
    try {
      setLoading(true);
      
      const formattedValues = {
        ...values,
        isActive: values.isActive !== false
      };

      if (editingJob) {
        await jobsService.update(editingJob.id, formattedValues);
        message.success('Job updated successfully');
      } else {
        await jobsService.add(formattedValues);
        message.success('Job created successfully');
      }
      
      setModalVisible(false);
      form.resetFields();
      setEditingJob(null);
      loadJobs();
    } catch (error) {
      console.error('Error saving job:', error);
      message.error('Failed to save job');
    } finally {
      setLoading(false);
    }
  };

  const getUrgencyColor = (urgency) => {
    const colors = {
      'Immediate': 'red',
      'This Week': 'orange',
      'Next Week': 'blue',
      'This Month': 'green'
    };
    return colors[urgency] || 'default';
  };

  const getIndustryColor = (industry) => {
    const colors = {
      'FinTech': 'blue',
      'Healthcare': 'green',
      'E-commerce': 'purple',
      'EdTech': 'orange',
      'Cybersecurity': 'red',
      'AI/ML': 'cyan',
      'Startup': 'magenta',
      'Enterprise': 'gold'
    };
    return colors[industry] || 'default';
  };

  const columns = [
    {
      title: 'Job Details',
      key: 'jobDetails',
      render: (_, record) => (
        <div>
          <div style={{ fontWeight: '600', color: '#1f2937', marginBottom: '4px' }}>
            {record.title}
          </div>
          <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px' }}>
            {record.company}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Tag color={getIndustryColor(record.industry)} style={{ fontSize: '10px' }}>
              {record.industry}
            </Tag>
            <Tag color={getUrgencyColor(record.urgency)} style={{ fontSize: '10px' }}>
              {record.urgency}
            </Tag>
          </div>
        </div>
      ),
      width: 250
    },
    {
      title: 'Requirements',
      key: 'requirements',
      render: (_, record) => (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            <DollarOutlined style={{ color: '#52c41a', fontSize: '12px' }} />
            <span style={{ fontSize: '12px', fontWeight: '500' }}>{record.package}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            <UserOutlined style={{ color: '#1890ff', fontSize: '12px' }} />
            <span style={{ fontSize: '12px' }}>{record.experience}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <EnvironmentOutlined style={{ color: '#faad14', fontSize: '12px' }} />
            <span style={{ fontSize: '12px' }}>{record.location}</span>
          </div>
        </div>
      )
    },
    {
      title: 'Skills Required',
      dataIndex: 'skills',
      key: 'skills',
      render: (skills) => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
          {skills?.slice(0, 3).map((skill, index) => (
            <Tag key={index} color="blue" style={{ fontSize: '10px', margin: '1px' }}>
              {skill}
            </Tag>
          ))}
          {skills?.length > 3 && (
            <Tag color="default" style={{ fontSize: '10px', margin: '1px' }}>
              +{skills.length - 3}
            </Tag>
          )}
        </div>
      )
    },
    {
      title: 'Openings',
      dataIndex: 'openings',
      key: 'openings',
      render: (openings) => (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '18px', fontWeight: '600', color: '#1890ff' }}>
            {openings}
          </div>
          <div style={{ fontSize: '10px', color: '#6b7280' }}>
            positions
          </div>
        </div>
      ),
      width: 80
    },
    {
      title: 'Status',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (isActive) => (
        <Tag color={isActive ? 'green' : 'red'}>
          {isActive ? 'Active' : 'Inactive'}
        </Tag>
      )
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => handleEditJob(record)}
            style={{ color: '#1890ff' }}
          />
          <Popconfirm
            title="Are you sure you want to delete this job?"
            onConfirm={() => handleDeleteJob(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="text"
              icon={<DeleteOutlined />}
              danger
            />
          </Popconfirm>
        </Space>
      )
    }
  ];

  const industryOptions = [
    'FinTech', 'Healthcare', 'E-commerce', 'EdTech', 'Cybersecurity', 
    'AI/ML', 'Startup', 'Enterprise', 'Gaming', 'Media', 'Automotive'
  ];

  const urgencyOptions = [
    'Immediate', 'This Week', 'Next Week', 'This Month'
  ];

  const commonSkills = [
    'React', 'Node.js', 'Python', 'JavaScript', 'TypeScript', 'AWS', 
    'MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes', 'Git', 'Linux',
    'Java', 'Spring Boot', 'Angular', 'Vue.js', 'MySQL', 'Redis',
    'Machine Learning', 'TensorFlow', 'PyTorch', 'Scikit-learn'
  ];

  return (
    <AdminDashboard activeKey="jobs">
      <div>
        {/* Page Header */}
        <div style={{
          marginBottom: '32px',
          background: 'white',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h1 style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#1f2937',
                margin: '0 0 8px 0'
              }}>Industry Jobs Management</h1>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                margin: 0
              }}>
                Manage job opportunities from partner companies to showcase current industry requirements.
              </p>
            </div>
            <Button 
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleAddJob}
              style={{
                background: 'linear-gradient(135deg, #1890ff 0%, #096dd9 100%)',
                border: 'none',
                borderRadius: '8px',
                height: '40px',
                fontWeight: '600'
              }}
            >
              Add Job Opening
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
          marginBottom: '32px'
        }}>
          <Card style={{ textAlign: 'center', borderRadius: '12px', border: '1px solid #f0f0f0' }}>
            <div style={{ fontSize: '32px', fontWeight: '700', color: '#1890ff', marginBottom: '8px' }}>
              {jobs.length}
            </div>
            <div style={{ color: '#6b7280' }}>Total Jobs</div>
          </Card>
          <Card style={{ textAlign: 'center', borderRadius: '12px', border: '1px solid #f0f0f0' }}>
            <div style={{ fontSize: '32px', fontWeight: '700', color: '#52c41a', marginBottom: '8px' }}>
              {jobs.filter(j => j.isActive).length}
            </div>
            <div style={{ color: '#6b7280' }}>Active Jobs</div>
          </Card>
          <Card style={{ textAlign: 'center', borderRadius: '12px', border: '1px solid #f0f0f0' }}>
            <div style={{ fontSize: '32px', fontWeight: '700', color: '#faad14', marginBottom: '8px' }}>
              {jobs.reduce((sum, job) => sum + (job.openings || 0), 0)}
            </div>
            <div style={{ color: '#6b7280' }}>Total Openings</div>
          </Card>
          <Card style={{ textAlign: 'center', borderRadius: '12px', border: '1px solid #f0f0f0' }}>
            <div style={{ fontSize: '32px', fontWeight: '700', color: '#f759ab', marginBottom: '8px' }}>
              {jobs.filter(j => j.urgency === 'Immediate').length}
            </div>
            <div style={{ color: '#6b7280' }}>Urgent Openings</div>
          </Card>
        </div>

        {/* Jobs Table */}
        <Card 
          title={
            <span style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937' }}>
              <BankOutlined style={{ marginRight: '8px' }} />
              Job Opportunities ({jobs.length})
            </span>
          }
          style={{
            borderRadius: '12px',
            border: '1px solid #f0f0f0',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
          }}
        >
          <Table
            columns={columns}
            dataSource={jobs}
            loading={loading}
            rowKey="id"
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} jobs`
            }}
            scroll={{ x: 1000 }}
          />
        </Card>

        {/* Add/Edit Job Modal */}
        <Modal
          title={editingJob ? 'Edit Job Opening' : 'Add New Job Opening'}
          open={modalVisible}
          onCancel={() => {
            setModalVisible(false);
            form.resetFields();
            setEditingJob(null);
          }}
          footer={null}
          width={700}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSaveJob}
            style={{ marginTop: '24px' }}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Job Title"
                  name="title"
                  rules={[{ required: true, message: 'Please enter job title' }]}
                >
                  <Input placeholder="e.g., Senior Full Stack Developer" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Company"
                  name="company"
                  rules={[{ required: true, message: 'Please enter company name' }]}
                >
                  <Input placeholder="e.g., Leading Financial Services" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Industry"
                  name="industry"
                  rules={[{ required: true, message: 'Please select industry' }]}
                >
                  <Select placeholder="Select industry">
                    {industryOptions.map(industry => (
                      <Option key={industry} value={industry}>
                        {industry}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Location"
                  name="location"
                  rules={[{ required: true, message: 'Please enter location' }]}
                >
                  <Input placeholder="e.g., Bangalore, Hyderabad" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Experience Required"
                  name="experience"
                  rules={[{ required: true, message: 'Please enter experience requirement' }]}
                >
                  <Input placeholder="e.g., 3-5 years" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Package"
                  name="package"
                  rules={[{ required: true, message: 'Please enter package range' }]}
                >
                  <Input placeholder="e.g., ₹12-18 LPA" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Required Skills"
              name="skills"
              rules={[{ required: true, message: 'Please add required skills' }]}
            >
              <Select
                mode="tags"
                placeholder="Select or add skills"
                style={{ width: '100%' }}
              >
                {commonSkills.map(skill => (
                  <Option key={skill} value={skill}>
                    {skill}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Urgency"
                  name="urgency"
                  rules={[{ required: true, message: 'Please select urgency' }]}
                >
                  <Select placeholder="Select urgency">
                    {urgencyOptions.map(urgency => (
                      <Option key={urgency} value={urgency}>
                        {urgency}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Number of Openings"
                  name="openings"
                  rules={[{ required: true, message: 'Please enter number of openings' }]}
                >
                  <InputNumber
                    min={1}
                    style={{ width: '100%' }}
                    placeholder="e.g., 5"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Job Active"
              name="isActive"
              valuePropName="checked"
            >
              <Select defaultValue={true}>
                <Option value={true}>Active</Option>
                <Option value={false}>Inactive</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Space>
                <Button 
                  type="primary" 
                  htmlType="submit"
                  loading={loading}
                  icon={<SaveOutlined />}
                  style={{
                    background: 'linear-gradient(135deg, #52c41a 0%, #389e0d 100%)',
                    border: 'none',
                    borderRadius: '8px',
                    height: '40px',
                    fontWeight: '600'
                  }}
                >
                  {editingJob ? 'Update Job' : 'Create Job'}
                </Button>
                <Button 
                  onClick={() => {
                    setModalVisible(false);
                    form.resetFields();
                    setEditingJob(null);
                  }}
                  style={{ borderRadius: '8px', height: '40px' }}
                >
                  Cancel
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </AdminDashboard>
  );
};

export default JobsManagement;