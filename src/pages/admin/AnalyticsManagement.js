import React, { useState, useEffect } from 'react';
import { Card, Table, Button, DatePicker, Select, Row, Col, Statistic, message } from 'antd';
import { 
  BarChartOutlined,
  EyeOutlined,
  UserOutlined,
  ClockCircleOutlined,
  ReloadOutlined,
  DownloadOutlined
} from '@ant-design/icons';
import AdminDashboard from '../../components/admin/AdminDashboard';
import { analyticsService } from '../../services/firebaseData';

const { RangePicker } = DatePicker;
const { Option } = Select;

const AnalyticsManagement = () => {
  const [analytics, setAnalytics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dateRange, setDateRange] = useState([]);
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    setLoading(true);
    try {
      const analyticsData = await analyticsService.getAnalytics();
      setAnalytics(analyticsData);
    } catch (error) {
      console.error('Error loading analytics:', error);
      message.error('Failed to load analytics');
    } finally {
      setLoading(false);
    }
  };

  const getPageViews = () => {
    return analytics.filter(item => item.type === 'page_view');
  };

  const getTopPages = () => {
    const pageViews = getPageViews();
    const pageCounts = {};
    
    pageViews.forEach(view => {
      pageCounts[view.page] = (pageCounts[view.page] || 0) + 1;
    });
    
    return Object.entries(pageCounts)
      .map(([page, count]) => ({ page, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
  };

  const getUniqueVisitors = () => {
    const pageViews = getPageViews();
    const uniqueAgents = new Set(pageViews.map(view => view.userAgent));
    return uniqueAgents.size;
  };

  const getTodayViews = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return getPageViews().filter(view => {
      if (!view.timestamp?.toDate) return false;
      const viewDate = view.timestamp.toDate();
      return viewDate >= today;
    }).length;
  };

  const columns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (type) => (
        <span style={{ 
          background: type === 'page_view' ? '#e6f7ff' : '#f6ffed',
          color: type === 'page_view' ? '#1890ff' : '#52c41a',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: '500'
        }}>
          {type.replace('_', ' ').toUpperCase()}
        </span>
      )
    },
    {
      title: 'Page',
      dataIndex: 'page',
      key: 'page',
      render: (page) => (
        <span style={{ fontWeight: '500', color: '#1f2937' }}>
          {page || 'Unknown'}
        </span>
      )
    },
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      key: 'timestamp',
      render: (timestamp) => {
        if (!timestamp?.toDate) return 'N/A';
        return new Date(timestamp.toDate()).toLocaleString();
      },
      sorter: (a, b) => {
        if (!a.timestamp?.toDate || !b.timestamp?.toDate) return 0;
        return a.timestamp.toDate() - b.timestamp.toDate();
      },
      defaultSortOrder: 'descend'
    },
    {
      title: 'User Agent',
      dataIndex: 'userAgent',
      key: 'userAgent',
      render: (userAgent) => {
        if (!userAgent) return 'N/A';
        const isMobile = /Mobile|Android|iPhone|iPad/.test(userAgent);
        const browser = userAgent.includes('Chrome') ? 'Chrome' : 
                       userAgent.includes('Firefox') ? 'Firefox' :
                       userAgent.includes('Safari') ? 'Safari' : 'Other';
        return (
          <div>
            <div style={{ fontSize: '12px', fontWeight: '500' }}>
              {browser} {isMobile ? '📱' : '💻'}
            </div>
            <div style={{ fontSize: '10px', color: '#6b7280', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {userAgent}
            </div>
          </div>
        );
      }
    },
    {
      title: 'Referrer',
      dataIndex: 'referrer',
      key: 'referrer',
      render: (referrer) => (
        <span style={{ fontSize: '12px', color: '#6b7280' }}>
          {referrer || 'Direct'}
        </span>
      )
    }
  ];

  const topPages = getTopPages();
  const uniqueVisitors = getUniqueVisitors();
  const todayViews = getTodayViews();
  const totalViews = getPageViews().length;

  return (
    <AdminDashboard activeKey="analytics">
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
              }}>Analytics Dashboard</h1>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                margin: 0
              }}>
                Track website usage, page views, and user behavior analytics.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <Button 
                type="default"
                icon={<DownloadOutlined />}
                onClick={() => {
                  const csvContent = "data:text/csv;charset=utf-8," + 
                    "Type,Page,Timestamp,User Agent,Referrer\n" +
                    analytics.map(row => 
                      `${row.type},${row.page || ''},${row.timestamp?.toDate?.() || ''},${row.userAgent || ''},${row.referrer || ''}`
                    ).join('\n');
                  const link = document.createElement('a');
                  link.href = encodeURI(csvContent);
                  link.download = `analytics-${new Date().toISOString().split('T')[0]}.csv`;
                  link.click();
                }}
                style={{ borderRadius: '8px', height: '40px' }}
              >
                Export CSV
              </Button>
              <Button 
                type="primary"
                icon={<ReloadOutlined />}
                onClick={loadAnalytics}
                loading={loading}
                style={{
                  background: 'linear-gradient(135deg, #1890ff 0%, #096dd9 100%)',
                  border: 'none',
                  borderRadius: '8px',
                  height: '40px',
                  fontWeight: '600'
                }}
              >
                Refresh
              </Button>
            </div>
          </div>
        </div>

        {/* Analytics Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
          marginBottom: '32px'
        }}>
          <Card style={{ textAlign: 'center', borderRadius: '12px', border: '1px solid #f0f0f0' }}>
            <Statistic
              title="Total Page Views"
              value={totalViews}
              prefix={<EyeOutlined style={{ color: '#1890ff' }} />}
              valueStyle={{ color: '#1890ff', fontSize: '28px', fontWeight: '700' }}
            />
          </Card>
          <Card style={{ textAlign: 'center', borderRadius: '12px', border: '1px solid #f0f0f0' }}>
            <Statistic
              title="Today's Views"
              value={todayViews}
              prefix={<ClockCircleOutlined style={{ color: '#52c41a' }} />}
              valueStyle={{ color: '#52c41a', fontSize: '28px', fontWeight: '700' }}
            />
          </Card>
          <Card style={{ textAlign: 'center', borderRadius: '12px', border: '1px solid #f0f0f0' }}>
            <Statistic
              title="Unique Visitors"
              value={uniqueVisitors}
              prefix={<UserOutlined style={{ color: '#faad14' }} />}
              valueStyle={{ color: '#faad14', fontSize: '28px', fontWeight: '700' }}
            />
          </Card>
          <Card style={{ textAlign: 'center', borderRadius: '12px', border: '1px solid #f0f0f0' }}>
            <Statistic
              title="Total Events"
              value={analytics.length}
              prefix={<BarChartOutlined style={{ color: '#f759ab' }} />}
              valueStyle={{ color: '#f759ab', fontSize: '28px', fontWeight: '700' }}
            />
          </Card>
        </div>

        {/* Top Pages */}
        <Row gutter={24} style={{ marginBottom: '32px' }}>
          <Col span={12}>
            <Card 
              title="Top Pages"
              style={{
                borderRadius: '12px',
                border: '1px solid #f0f0f0',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
              }}
            >
              {topPages.map((item, index) => (
                <div key={item.page} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 0',
                  borderBottom: index < topPages.length - 1 ? '1px solid #f0f0f0' : 'none'
                }}>
                  <span style={{ fontWeight: '500' }}>{item.page}</span>
                  <span style={{ 
                    background: '#e6f7ff', 
                    color: '#1890ff', 
                    padding: '4px 8px', 
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    {item.count} views
                  </span>
                </div>
              ))}
              {topPages.length === 0 && (
                <div style={{ textAlign: 'center', color: '#6b7280', padding: '40px 0' }}>
                  No page views data available
                </div>
              )}
            </Card>
          </Col>
          <Col span={12}>
            <Card 
              title="Filters"
              style={{
                borderRadius: '12px',
                border: '1px solid #f0f0f0',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
              }}
            >
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Event Type</label>
                <Select
                  value={filterType}
                  onChange={setFilterType}
                  style={{ width: '100%' }}
                >
                  <Option value="all">All Events</Option>
                  <Option value="page_view">Page Views</Option>
                </Select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Date Range</label>
                <RangePicker
                  value={dateRange}
                  onChange={setDateRange}
                  style={{ width: '100%' }}
                />
              </div>
            </Card>
          </Col>
        </Row>

        {/* Analytics Table */}
        <Card 
          title={
            <span style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937' }}>
              <BarChartOutlined style={{ marginRight: '8px' }} />
              Analytics Events ({analytics.length})
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
            dataSource={analytics}
            loading={loading}
            rowKey="id"
            pagination={{
              pageSize: 20,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} events`
            }}
            scroll={{ x: 1200 }}
          />
        </Card>
      </div>
    </AdminDashboard>
  );
};

export default AnalyticsManagement;