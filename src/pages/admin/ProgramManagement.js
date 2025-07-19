import React, { useState, useEffect } from 'react';
import { Card, Table, Button, Modal, Form, Input, Select, InputNumber, Tag, Space, Popconfirm, message, Row, Col } from 'antd';
import { 
  PlusOutlined, 
  EditOutlined, 
  DeleteOutlined, 
  SaveOutlined,
  BookOutlined,
  StarOutlined,
  UserOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';
import AdminDashboard from '../../components/admin/AdminDashboard';
import { programsService } from '../../services/firebaseData';

const { TextArea } = Input;
const { Option } = Select;

const ProgramManagement = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingProgram, setEditingProgram] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    loadPrograms();
  }, []);

  const loadPrograms = async () => {
    setLoading(true);
    try {
      const programsData = await programsService.getAll();
      setPrograms(programsData);
    } catch (error) {
      console.error('Error loading programs:', error);
      message.error('Failed to load programs');
    } finally {
      setLoading(false);
    }
  };

  const handleAddProgram = () => {
    setEditingProgram(null);
    form.resetFields();
    form.setFieldsValue({
      curriculum: [],
      features: [],
      isActive: true,
      rating: 4.5,
      students: 0
    });
    setModalVisible(true);
  };

  const handleEditProgram = (program) => {
    setEditingProgram(program);
    form.setFieldsValue({
      ...program,
      price: parseFloat(program.price.replace('₹', '').replace(',', '')),
      originalPrice: parseFloat(program.originalPrice.replace('₹', '').replace(',', ''))
    });
    setModalVisible(true);
  };

  const handleDeleteProgram = async (programId) => {
    try {
      await programsService.delete(programId);
      message.success('Program deleted successfully');
      loadPrograms();
    } catch (error) {
      console.error('Error deleting program:', error);
      message.error('Failed to delete program');
    }
  };

  const handleSaveProgram = async (values) => {
    try {
      setLoading(true);
      
      const formattedValues = {
        ...values,
        price: `₹${values.price.toLocaleString()}`,
        originalPrice: `₹${values.originalPrice.toLocaleString()}`,
        discount: `${Math.round(((values.originalPrice - values.price) / values.originalPrice) * 100)}% OFF`,
        isActive: values.isActive !== false
      };

      if (editingProgram) {
        await programsService.update(editingProgram.id, formattedValues);
        message.success('Program updated successfully');
      } else {
        await programsService.add(formattedValues);
        message.success('Program created successfully');
      }
      
      setModalVisible(false);
      form.resetFields();
      setEditingProgram(null);
      loadPrograms();
    } catch (error) {
      console.error('Error saving program:', error);
      message.error('Failed to save program');
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: 'Program',
      key: 'program',
      render: (_, record) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            fontSize: '24px',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: record.gradient,
            borderRadius: '8px'
          }}>
            {record.icon}
          </div>
          <div>
            <div style={{ fontWeight: '600', color: '#1f2937' }}>
              {record.title}
            </div>
            <div style={{ fontSize: '12px', color: '#6b7280' }}>
              {record.duration} • {record.level}
            </div>
          </div>
        </div>
      ),
      width: 300
    },
    {
      title: 'Details',
      key: 'details',
      render: (_, record) => (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            <StarOutlined style={{ color: '#faad14', fontSize: '12px' }} />
            <span style={{ fontSize: '12px' }}>{record.rating}</span>
            <UserOutlined style={{ color: '#1890ff', fontSize: '12px', marginLeft: '8px' }} />
            <span style={{ fontSize: '12px' }}>{record.students} students</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ClockCircleOutlined style={{ color: '#52c41a', fontSize: '12px' }} />
            <span style={{ fontSize: '12px' }}>Next: {record.nextStart}</span>
          </div>
        </div>
      )
    },
    {
      title: 'Pricing',
      key: 'pricing',
      render: (_, record) => (
        <div>
          <div style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937' }}>
            {record.price}
          </div>
          <div style={{ fontSize: '12px', color: '#9ca3af', textDecoration: 'line-through' }}>
            {record.originalPrice}
          </div>
          <Tag color="green" style={{ fontSize: '10px', marginTop: '2px' }}>
            {record.discount}
          </Tag>
        </div>
      )
    },
    {
      title: 'Curriculum',
      dataIndex: 'curriculum',
      key: 'curriculum',
      render: (curriculum) => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
          {curriculum?.slice(0, 3).map((subject, index) => (
            <Tag key={index} color="purple" style={{ fontSize: '10px', margin: '1px' }}>
              {subject}
            </Tag>
          ))}
          {curriculum?.length > 3 && (
            <Tag color="default" style={{ fontSize: '10px', margin: '1px' }}>
              +{curriculum.length - 3}
            </Tag>
          )}
        </div>
      )
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
            onClick={() => handleEditProgram(record)}
            style={{ color: '#1890ff' }}
          />
          <Popconfirm
            title="Are you sure you want to delete this program?"
            onConfirm={() => handleDeleteProgram(record.id)}
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

  const levelOptions = [
    { value: 'Beginner', label: 'Beginner' },
    { value: 'Intermediate', label: 'Intermediate' },
    { value: 'Advanced', label: 'Advanced' },
    { value: 'Beginner to Advanced', label: 'Beginner to Advanced' },
    { value: 'Beginner to Job-Ready', label: 'Beginner to Job-Ready' }
  ];

  const gradientOptions = [
    { value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', label: 'Blue Purple' },
    { value: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', label: 'Pink Red' },
    { value: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', label: 'Blue Cyan' },
    { value: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', label: 'Green Teal' },
    { value: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', label: 'Pink Yellow' },
    { value: 'linear-gradient(135deg, #a8eaaa 0%, #867165 90%)', label: 'Green Brown' },
    { value: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)', label: 'Dark Blue' }
  ];

  return (
    <AdminDashboard activeKey="programs">
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
              }}>Program Management</h1>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                margin: 0
              }}>
                Create, edit, and manage all your training programs and bootcamps.
              </p>
            </div>
            <Button 
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleAddProgram}
              style={{
                background: 'linear-gradient(135deg, #1890ff 0%, #096dd9 100%)',
                border: 'none',
                borderRadius: '8px',
                height: '40px',
                fontWeight: '600'
              }}
            >
              Add Program
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
              {programs.length}
            </div>
            <div style={{ color: '#6b7280' }}>Total Programs</div>
          </Card>
          <Card style={{ textAlign: 'center', borderRadius: '12px', border: '1px solid #f0f0f0' }}>
            <div style={{ fontSize: '32px', fontWeight: '700', color: '#52c41a', marginBottom: '8px' }}>
              {programs.filter(p => p.isActive).length}
            </div>
            <div style={{ color: '#6b7280' }}>Active Programs</div>
          </Card>
          <Card style={{ textAlign: 'center', borderRadius: '12px', border: '1px solid #f0f0f0' }}>
            <div style={{ fontSize: '32px', fontWeight: '700', color: '#faad14', marginBottom: '8px' }}>
              {programs.reduce((sum, program) => sum + (program.students || 0), 0)}
            </div>
            <div style={{ color: '#6b7280' }}>Total Students</div>
          </Card>
          <Card style={{ textAlign: 'center', borderRadius: '12px', border: '1px solid #f0f0f0' }}>
            <div style={{ fontSize: '32px', fontWeight: '700', color: '#f759ab', marginBottom: '8px' }}>
              {programs.length > 0 ? (programs.reduce((sum, program) => sum + (program.rating || 0), 0) / programs.length).toFixed(1) : '0.0'}
            </div>
            <div style={{ color: '#6b7280' }}>Avg Rating</div>
          </Card>
        </div>

        {/* Programs Table */}
        <Card 
          title={
            <span style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937' }}>
              <BookOutlined style={{ marginRight: '8px' }} />
              All Programs ({programs.length})
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
            dataSource={programs}
            loading={loading}
            rowKey="id"
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} programs`
            }}
            scroll={{ x: 1000 }}
          />
        </Card>

        {/* Add/Edit Program Modal */}
        <Modal
          title={editingProgram ? 'Edit Program' : 'Add New Program'}
          open={modalVisible}
          onCancel={() => {
            setModalVisible(false);
            form.resetFields();
            setEditingProgram(null);
          }}
          footer={null}
          width={800}
          style={{ top: 20 }}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSaveProgram}
            style={{ marginTop: '24px' }}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Program Title"
                  name="title"
                  rules={[{ required: true, message: 'Please enter program title' }]}
                >
                  <Input placeholder="e.g., Full Stack Development Bootcamp" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Program Icon (Emoji)"
                  name="icon"
                  rules={[{ required: true, message: 'Please enter an emoji' }]}
                >
                  <Input placeholder="🚀" maxLength={2} />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: 'Please enter program description' }]}
            >
              <TextArea rows={3} placeholder="Describe the program objectives and outcomes" />
            </Form.Item>

            <Row gutter={16}>
              <Col span={8}>
                <Form.Item
                  label="Duration"
                  name="duration"
                  rules={[{ required: true, message: 'Please enter duration' }]}
                >
                  <Input placeholder="e.g., 16 weeks" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Level"
                  name="level"
                  rules={[{ required: true, message: 'Please select level' }]}
                >
                  <Select placeholder="Select level">
                    {levelOptions.map(option => (
                      <Option key={option.value} value={option.value}>
                        {option.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Color Gradient"
                  name="gradient"
                  rules={[{ required: true, message: 'Please select gradient' }]}
                >
                  <Select placeholder="Select gradient">
                    {gradientOptions.map((option, index) => (
                      <Option key={index} value={option.value}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{
                            width: '16px',
                            height: '16px',
                            background: option.value,
                            borderRadius: '4px'
                          }} />
                          {option.label}
                        </div>
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Curriculum Topics"
              name="curriculum"
              rules={[{ required: true, message: 'Please add curriculum topics' }]}
            >
              <Select
                mode="tags"
                placeholder="Add curriculum topics (e.g., React.js, Node.js, MongoDB)"
                style={{ width: '100%' }}
              />
            </Form.Item>

            <Form.Item
              label="Program Features"
              name="features"
              rules={[{ required: true, message: 'Please add features' }]}
            >
              <Select
                mode="tags"
                placeholder="Add features (e.g., Job Guarantee, Industry Mentors)"
                style={{ width: '100%' }}
              />
            </Form.Item>

            <Row gutter={16}>
              <Col span={8}>
                <Form.Item
                  label="Price (₹)"
                  name="price"
                  rules={[{ required: true, message: 'Please enter price' }]}
                >
                  <InputNumber
                    min={0}
                    style={{ width: '100%' }}
                    placeholder="150000"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Original Price (₹)"
                  name="originalPrice"
                  rules={[{ required: true, message: 'Please enter original price' }]}
                >
                  <InputNumber
                    min={0}
                    style={{ width: '100%' }}
                    placeholder="250000"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Instructor"
                  name="instructor"
                  rules={[{ required: true, message: 'Please enter instructor name' }]}
                >
                  <Input placeholder="e.g., Team of Experts" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={8}>
                <Form.Item
                  label="Rating"
                  name="rating"
                >
                  <InputNumber
                    min={0}
                    max={5}
                    step={0.1}
                    style={{ width: '100%' }}
                    placeholder="4.8"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Students Enrolled"
                  name="students"
                >
                  <InputNumber
                    min={0}
                    style={{ width: '100%' }}
                    placeholder="450"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Next Start Date"
                  name="nextStart"
                  rules={[{ required: true, message: 'Please enter next start date' }]}
                >
                  <Input placeholder="e.g., April 1, 2024" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Program Active"
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
                  {editingProgram ? 'Update Program' : 'Create Program'}
                </Button>
                <Button 
                  onClick={() => {
                    setModalVisible(false);
                    form.resetFields();
                    setEditingProgram(null);
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

export default ProgramManagement;