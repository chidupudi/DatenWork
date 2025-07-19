import React, { useState, useEffect } from 'react';
import { Card, Table, Button, Modal, Form, Input, Select, InputNumber, Tag, Space, Popconfirm, message, Row, Col } from 'antd';
import { 
  PlusOutlined, 
  EditOutlined, 
  DeleteOutlined, 
  EyeOutlined,
  SaveOutlined,
  BookOutlined,
  StarOutlined,
  UserOutlined,
  ClockCircleOutlined
} from '@ant-design/icons';
import AdminDashboard from '../../components/admin/AdminDashboard';
import { coursesService } from '../../services/firebaseData';

const { TextArea } = Input;
const { Option } = Select;

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    setLoading(true);
    try {
      const coursesData = await coursesService.getAll();
      setCourses(coursesData);
    } catch (error) {
      console.error('Error loading courses:', error);
      message.error('Failed to load courses');
    } finally {
      setLoading(false);
    }
  };

  const handleAddCourse = () => {
    setEditingCourse(null);
    form.resetFields();
    form.setFieldsValue({
      technologies: [],
      features: [],
      isActive: true,
      rating: 4.5,
      students: 0
    });
    setModalVisible(true);
  };

  const handleEditCourse = (course) => {
    setEditingCourse(course);
    form.setFieldsValue({
      ...course,
      price: parseFloat(course.price.replace('₹', '').replace(',', '')),
      originalPrice: parseFloat(course.originalPrice.replace('₹', '').replace(',', ''))
    });
    setModalVisible(true);
  };

  const handleDeleteCourse = async (courseId) => {
    try {
      await coursesService.delete(courseId);
      message.success('Course deleted successfully');
      loadCourses();
    } catch (error) {
      console.error('Error deleting course:', error);
      message.error('Failed to delete course');
    }
  };

  const handleSaveCourse = async (values) => {
    try {
      setLoading(true);
      
      // Format price values
      const formattedValues = {
        ...values,
        price: `₹${values.price.toLocaleString()}`,
        originalPrice: `₹${values.originalPrice.toLocaleString()}`,
        discount: `${Math.round(((values.originalPrice - values.price) / values.originalPrice) * 100)}% OFF`,
        isActive: values.isActive !== false
      };

      if (editingCourse) {
        await coursesService.update(editingCourse.id, formattedValues);
        message.success('Course updated successfully');
      } else {
        await coursesService.add(formattedValues);
        message.success('Course created successfully');
      }
      
      setModalVisible(false);
      form.resetFields();
      setEditingCourse(null);
      loadCourses();
    } catch (error) {
      console.error('Error saving course:', error);
      message.error('Failed to save course');
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: 'Course',
      key: 'course',
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
              {record.category} • {record.duration}
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
      title: 'Technologies',
      dataIndex: 'technologies',
      key: 'technologies',
      render: (technologies) => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
          {technologies?.slice(0, 3).map((tech, index) => (
            <Tag key={index} color="blue" style={{ fontSize: '10px', margin: '1px' }}>
              {tech}
            </Tag>
          ))}
          {technologies?.length > 3 && (
            <Tag color="default" style={{ fontSize: '10px', margin: '1px' }}>
              +{technologies.length - 3}
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
            onClick={() => handleEditCourse(record)}
            style={{ color: '#1890ff' }}
          />
          <Popconfirm
            title="Are you sure you want to delete this course?"
            onConfirm={() => handleDeleteCourse(record.id)}
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

  const categoryOptions = [
    { value: 'frontend', label: 'Frontend Development' },
    { value: 'backend', label: 'Backend Development' },
    { value: 'fullstack', label: 'Full Stack Development' },
    { value: 'data', label: 'Data Science' },
    { value: 'mobile', label: 'Mobile Development' },
    { value: 'devops', label: 'DevOps' },
    { value: 'ai', label: 'AI/ML' }
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
    <AdminDashboard activeKey="courses">
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
              }}>Course Management</h1>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                margin: 0
              }}>
                Create, edit, and manage all your training courses and programs.
              </p>
            </div>
            <Button 
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleAddCourse}
              style={{
                background: 'linear-gradient(135deg, #1890ff 0%, #096dd9 100%)',
                border: 'none',
                borderRadius: '8px',
                height: '40px',
                fontWeight: '600'
              }}
            >
              Add Course
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
              {courses.length}
            </div>
            <div style={{ color: '#6b7280' }}>Total Courses</div>
          </Card>
          <Card style={{ textAlign: 'center', borderRadius: '12px', border: '1px solid #f0f0f0' }}>
            <div style={{ fontSize: '32px', fontWeight: '700', color: '#52c41a', marginBottom: '8px' }}>
              {courses.filter(c => c.isActive).length}
            </div>
            <div style={{ color: '#6b7280' }}>Active Courses</div>
          </Card>
          <Card style={{ textAlign: 'center', borderRadius: '12px', border: '1px solid #f0f0f0' }}>
            <div style={{ fontSize: '32px', fontWeight: '700', color: '#faad14', marginBottom: '8px' }}>
              {courses.reduce((sum, course) => sum + (course.students || 0), 0)}
            </div>
            <div style={{ color: '#6b7280' }}>Total Students</div>
          </Card>
          <Card style={{ textAlign: 'center', borderRadius: '12px', border: '1px solid #f0f0f0' }}>
            <div style={{ fontSize: '32px', fontWeight: '700', color: '#f759ab', marginBottom: '8px' }}>
              {courses.length > 0 ? (courses.reduce((sum, course) => sum + (course.rating || 0), 0) / courses.length).toFixed(1) : '0.0'}
            </div>
            <div style={{ color: '#6b7280' }}>Avg Rating</div>
          </Card>
        </div>

        {/* Courses Table */}
        <Card 
          title={
            <span style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937' }}>
              <BookOutlined style={{ marginRight: '8px' }} />
              All Courses ({courses.length})
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
            dataSource={courses}
            loading={loading}
            rowKey="id"
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} courses`
            }}
            scroll={{ x: 1000 }}
          />
        </Card>

        {/* Add/Edit Course Modal */}
        <Modal
          title={editingCourse ? 'Edit Course' : 'Add New Course'}
          open={modalVisible}
          onCancel={() => {
            setModalVisible(false);
            form.resetFields();
            setEditingCourse(null);
          }}
          footer={null}
          width={800}
          style={{ top: 20 }}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSaveCourse}
            style={{ marginTop: '24px' }}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Course Title"
                  name="title"
                  rules={[{ required: true, message: 'Please enter course title' }]}
                >
                  <Input placeholder="e.g., Full Stack Web Development Bootcamp" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Course Icon (Emoji)"
                  name="icon"
                  rules={[{ required: true, message: 'Please enter an emoji' }]}
                >
                  <Input placeholder="🚀" maxLength={2} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={8}>
                <Form.Item
                  label="Category"
                  name="category"
                  rules={[{ required: true, message: 'Please select category' }]}
                >
                  <Select placeholder="Select category">
                    {categoryOptions.map(option => (
                      <Option key={option.value} value={option.value}>
                        {option.label}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Duration"
                  name="duration"
                  rules={[{ required: true, message: 'Please enter duration' }]}
                >
                  <Input placeholder="e.g., 40 hours" />
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
            </Row>

            <Form.Item
              label="Technologies"
              name="technologies"
              rules={[{ required: true, message: 'Please add technologies' }]}
            >
              <Select
                mode="tags"
                placeholder="Add technologies (e.g., React, Node.js, MongoDB)"
                style={{ width: '100%' }}
              />
            </Form.Item>

            <Form.Item
              label="Features"
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
                    placeholder="30000"
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
                    placeholder="60000"
                  />
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

            <Row gutter={16}>
              <Col span={8}>
                <Form.Item
                  label="Instructor"
                  name="instructor"
                  rules={[{ required: true, message: 'Please enter instructor name' }]}
                >
                  <Input placeholder="e.g., Sarah Johnson" />
                </Form.Item>
              </Col>
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
                    placeholder="187"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Next Start Date"
              name="nextStart"
              rules={[{ required: true, message: 'Please enter next start date' }]}
            >
              <Input placeholder="e.g., March 25, 2024" />
            </Form.Item>

            <Form.Item
              label="Course Active"
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
                  {editingCourse ? 'Update Course' : 'Create Course'}
                </Button>
                <Button 
                  onClick={() => {
                    setModalVisible(false);
                    form.resetFields();
                    setEditingCourse(null);
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

export default CourseManagement;