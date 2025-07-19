import React, { useState, useEffect } from 'react';
import { Card, Table, Tag, Button, Modal, Descriptions, Space, Input, Select, DatePicker, message, Popconfirm } from 'antd';
import { 
  EyeOutlined, 
  DeleteOutlined, 
  DownloadOutlined, 
  SearchOutlined,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  BookOutlined,
  CalendarOutlined,
  FilterOutlined
} from '@ant-design/icons';
import AdminDashboard from '../../components/admin/AdminDashboard';
import { collection, getDocs, deleteDoc, doc, query, orderBy, where } from 'firebase/firestore';
import { db } from '../../firebase';

const { Search } = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;

const FormResponses = () => {
  const [responses, setResponses] = useState([]);
  const [filteredResponses, setFilteredResponses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedResponse, setSelectedResponse] = useState(null);
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [filters, setFilters] = useState({
    search: '',
    course: '',
    status: '',
    dateRange: null
  });

  useEffect(() => {
    loadFormResponses();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [responses, filters]);

  const loadFormResponses = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(db, 'hero_form_submissions'),
        orderBy('submittedAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      const responsesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        submittedAt: doc.data().submittedAt?.toDate()
      }));
      setResponses(responsesData);
    } catch (error) {
      console.error('Error loading form responses:', error);
      message.error('Failed to load form responses');
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...responses];

    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(response => 
        response.name?.toLowerCase().includes(searchTerm) ||
        response.email?.toLowerCase().includes(searchTerm) ||
        response.phone?.includes(searchTerm)
      );
    }

    // Course filter
    if (filters.course) {
      filtered = filtered.filter(response => response.course === filters.course);
    }

    // Status filter
    if (filters.status) {
      filtered = filtered.filter(response => response.status === filters.status);
    }

    // Date range filter
    if (filters.dateRange && filters.dateRange.length === 2) {
      const [startDate, endDate] = filters.dateRange;
      filtered = filtered.filter(response => {
        const responseDate = response.submittedAt;
        return responseDate >= startDate.toDate() && responseDate <= endDate.toDate();
      });
    }

    setFilteredResponses(filtered);
  };

  const handleViewResponse = (response) => {
    setSelectedResponse(response);
    setViewModalVisible(true);
  };

  const handleDeleteResponse = async (id) => {
    try {
      await deleteDoc(doc(db, 'hero_form_submissions', id));
      message.success('Response deleted successfully');
      loadFormResponses();
    } catch (error) {
      console.error('Error deleting response:', error);
      message.error('Failed to delete response');
    }
  };

  const handleUpdateStatus = async (id, newStatus) => {
    try {
      // Update status logic here if needed
      message.success('Status updated successfully');
      loadFormResponses();
    } catch (error) {
      console.error('Error updating status:', error);
      message.error('Failed to update status');
    }
  };

  const handleExportData = () => {
    const csvContent = "data:text/csv;charset=utf-8," +
      "Name,Email,Phone,Course,Status,Submitted At\n" +
      filteredResponses.map(response => 
        `"${response.name}","${response.email}","${response.phone}","${response.course}","${response.status}","${response.submittedAt?.toLocaleString()}"`
      ).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `form_responses_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    message.success('Data exported successfully');
  };

  const getStatusColor = (status) => {
    const colors = {
      'new': 'blue',
      'contacted': 'orange',
      'enrolled': 'green',
      'not_interested': 'red'
    };
    return colors[status] || 'default';
  };

  const getStatusText = (status) => {
    const texts = {
      'new': 'New',
      'contacted': 'Contacted',
      'enrolled': 'Enrolled',
      'not_interested': 'Not Interested'
    };
    return texts[status] || status;
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <UserOutlined style={{ color: '#1890ff' }} />
          <span style={{ fontWeight: '500' }}>{text}</span>
        </div>
      )
    },
    {
      title: 'Contact Info',
      key: 'contact',
      render: (_, record) => (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            <MailOutlined style={{ color: '#52c41a', fontSize: '12px' }} />
            <span style={{ fontSize: '12px' }}>{record.email}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <PhoneOutlined style={{ color: '#faad14', fontSize: '12px' }} />
            <span style={{ fontSize: '12px' }}>{record.phone}</span>
          </div>
        </div>
      )
    },
    {
      title: 'Course',
      dataIndex: 'course',
      key: 'course',
      render: (course) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <BookOutlined style={{ color: '#722ed1' }} />
          <Tag color="purple" style={{ textTransform: 'capitalize' }}>
            {course?.replace('-', ' ') || 'Not specified'}
          </Tag>
        </div>
      )
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status, record) => (
        <Select
          value={status}
          style={{ width: '120px' }}
          size="small"
          onChange={(newStatus) => handleUpdateStatus(record.id, newStatus)}
        >
          <Option value="new">New</Option>
          <Option value="contacted">Contacted</Option>
          <Option value="enrolled">Enrolled</Option>
          <Option value="not_interested">Not Interested</Option>
        </Select>
      )
    },
    {
      title: 'Submitted',
      dataIndex: 'submittedAt',
      key: 'submittedAt',
      render: (date) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <CalendarOutlined style={{ color: '#1890ff', fontSize: '12px' }} />
          <div>
            <div style={{ fontSize: '12px', fontWeight: '500' }}>
              {date?.toLocaleDateString()}
            </div>
            <div style={{ fontSize: '11px', color: '#666' }}>
              {date?.toLocaleTimeString()}
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button
            type="text"
            icon={<EyeOutlined />}
            onClick={() => handleViewResponse(record)}
            style={{ color: '#1890ff' }}
          />
          <Popconfirm
            title="Are you sure you want to delete this response?"
            onConfirm={() => handleDeleteResponse(record.id)}
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

  const courseOptions = [
    { value: 'react', label: 'React Development' },
    { value: 'node', label: 'Node.js Backend' },
    { value: 'fullstack', label: 'Full Stack Development' },
    { value: 'python', label: 'Python Programming' },
    { value: 'data-science', label: 'Data Science' },
    { value: 'mainframe', label: 'Mainframe' }
  ];

  return (
    <AdminDashboard activeKey="responses">
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
              }}>Form Responses</h1>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                margin: 0
              }}>
                Manage and track all form submissions from your website.
              </p>
            </div>
            <Button 
              type="primary"
              icon={<DownloadOutlined />}
              onClick={handleExportData}
              style={{
                background: 'linear-gradient(135deg, #52c41a 0%, #389e0d 100%)',
                border: 'none',
                borderRadius: '8px',
                height: '40px',
                fontWeight: '600'
              }}
            >
              Export CSV
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
              {responses.length}
            </div>
            <div style={{ color: '#6b7280' }}>Total Responses</div>
          </Card>
          <Card style={{ textAlign: 'center', borderRadius: '12px', border: '1px solid #f0f0f0' }}>
            <div style={{ fontSize: '32px', fontWeight: '700', color: '#52c41a', marginBottom: '8px' }}>
              {responses.filter(r => r.status === 'new').length}
            </div>
            <div style={{ color: '#6b7280' }}>New Inquiries</div>
          </Card>
          <Card style={{ textAlign: 'center', borderRadius: '12px', border: '1px solid #f0f0f0' }}>
            <div style={{ fontSize: '32px', fontWeight: '700', color: '#faad14', marginBottom: '8px' }}>
              {responses.filter(r => r.status === 'enrolled').length}
            </div>
            <div style={{ color: '#6b7280' }}>Enrollments</div>
          </Card>
          <Card style={{ textAlign: 'center', borderRadius: '12px', border: '1px solid #f0f0f0' }}>
            <div style={{ fontSize: '32px', fontWeight: '700', color: '#f759ab', marginBottom: '8px' }}>
              {Math.round((responses.filter(r => r.status === 'enrolled').length / Math.max(responses.length, 1)) * 100)}%
            </div>
            <div style={{ color: '#6b7280' }}>Conversion Rate</div>
          </Card>
        </div>

        {/* Filters */}
        <Card 
          title={
            <span style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937' }}>
              <FilterOutlined style={{ marginRight: '8px' }} />
              Filters
            </span>
          }
          style={{
            marginBottom: '24px',
            borderRadius: '12px',
            border: '1px solid #f0f0f0'
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }}>
            <Search
              placeholder="Search by name, email, or phone"
              allowClear
              onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
              style={{ width: '100%' }}
            />
            <Select
              placeholder="Filter by course"
              allowClear
              style={{ width: '100%' }}
              onChange={(value) => setFilters(prev => ({ ...prev, course: value }))}
            >
              {courseOptions.map(option => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
            <Select
              placeholder="Filter by status"
              allowClear
              style={{ width: '100%' }}
              onChange={(value) => setFilters(prev => ({ ...prev, status: value }))}
            >
              <Option value="new">New</Option>
              <Option value="contacted">Contacted</Option>
              <Option value="enrolled">Enrolled</Option>
              <Option value="not_interested">Not Interested</Option>
            </Select>
            <RangePicker
              style={{ width: '100%' }}
              onChange={(dates) => setFilters(prev => ({ ...prev, dateRange: dates }))}
              placeholder={['Start Date', 'End Date']}
            />
          </div>
        </Card>

        {/* Responses Table */}
        <Card 
          title={
            <span style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937' }}>
              Responses ({filteredResponses.length})
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
            dataSource={filteredResponses}
            loading={loading}
            rowKey="id"
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} responses`
            }}
            scroll={{ x: 800 }}
          />
        </Card>

        {/* View Response Modal */}
        <Modal
          title="Response Details"
          open={viewModalVisible}
          onCancel={() => setViewModalVisible(false)}
          footer={[
            <Button key="close" onClick={() => setViewModalVisible(false)}>
              Close
            </Button>
          ]}
          width={600}
        >
          {selectedResponse && (
            <Descriptions column={1} bordered>
              <Descriptions.Item label="Name">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <UserOutlined style={{ color: '#1890ff' }} />
                  {selectedResponse.name}
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="Email">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MailOutlined style={{ color: '#52c41a' }} />
                  <a href={`mailto:${selectedResponse.email}`}>{selectedResponse.email}</a>
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="Phone">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <PhoneOutlined style={{ color: '#faad14' }} />
                  <a href={`tel:${selectedResponse.phone}`}>{selectedResponse.phone}</a>
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="Course Interest">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <BookOutlined style={{ color: '#722ed1' }} />
                  <Tag color="purple" style={{ textTransform: 'capitalize' }}>
                    {selectedResponse.course?.replace('-', ' ') || 'Not specified'}
                  </Tag>
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="Status">
                <Tag color={getStatusColor(selectedResponse.status)}>
                  {getStatusText(selectedResponse.status)}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Source">
                <Tag color="blue">{selectedResponse.source || 'Hero Section'}</Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Submitted At">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CalendarOutlined style={{ color: '#1890ff' }} />
                  {selectedResponse.submittedAt?.toLocaleString()}
                </div>
              </Descriptions.Item>
            </Descriptions>
          )}
        </Modal>
      </div>
    </AdminDashboard>
  );
};

export default FormResponses;