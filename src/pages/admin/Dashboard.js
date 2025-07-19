import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Card, Row, Col, Progress, Table, Tag, Button, message } from 'antd';
import { 
  UserOutlined, 
  BookOutlined, 
  TrophyOutlined, 
  DollarCircleOutlined,
  ArrowUpOutlined,
  EyeOutlined,
  PlusOutlined,
  DatabaseOutlined,
  ReloadOutlined
} from '@ant-design/icons';
import AdminDashboard from '../../components/admin/AdminDashboard';
import { analyticsService, coursesService, jobsService, migrateInitialData } from '../../services/firebaseData';

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [migrating, setMigrating] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);

  const loadDashboardData = useCallback(async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      }
      
      const [, coursesData, jobsData] = await Promise.all([
        analyticsService.getAnalytics(),
        coursesService.getAll(),
        jobsService.getAll()
      ]);
      
      setCourses(coursesData);
      setJobs(jobsData);
      setLastUpdated(new Date());
      
      if (isRefresh) {
        message.success('Dashboard data refreshed successfully');
      }
    } catch (error) {
      console.error('Error loading dashboard data:', error);
      message.error('Failed to load dashboard data');
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    loadDashboardData();
    
    // Auto-refresh every 5 minutes
    const interval = setInterval(() => {
      loadDashboardData(true);
    }, 300000);

    return () => clearInterval(interval);
  }, [loadDashboardData]);

  const handleMigration = async () => {
    try {
      setMigrating(true);
      message.loading('Starting database migration...', 0);
      
      const success = await migrateInitialData();
      
      message.destroy();
      if (success) {
        message.success('Database migration completed successfully! All initial data has been migrated to Firebase.');
        await loadDashboardData(); // Reload data to show migrated content
      } else {
        message.error('Database migration failed. Please check console for errors.');
      }
    } catch (error) {
      message.destroy();
      console.error('Migration error:', error);
      message.error('Migration error: ' + error.message);
    } finally {
      setMigrating(false);
    }
  };

  // Memoized stats data for performance
  const statsData = useMemo(() => [
    {
      title: 'Total Students',
      value: 2847,
      icon: <UserOutlined />,
      trend: '+12.5%',
      color: '#1890ff',
      bgColor: 'rgba(24, 144, 255, 0.1)'
    },
    {
      title: 'Active Courses',
      value: courses.length || 9,
      icon: <BookOutlined />,
      trend: '+3.2%',
      color: '#52c41a',
      bgColor: 'rgba(82, 196, 26, 0.1)'
    },
    {
      title: 'Job Openings',
      value: jobs.length || 12,
      icon: <TrophyOutlined />,
      trend: '+8.7%',
      color: '#faad14',
      bgColor: 'rgba(250, 173, 20, 0.1)'
    },
    {
      title: 'Monthly Revenue',
      value: '₹28.5L',
      icon: <DollarCircleOutlined />,
      trend: '+15.3%',
      color: '#f759ab',
      bgColor: 'rgba(247, 89, 171, 0.1)'
    }
  ], [courses.length, jobs.length]);

  // Recent activities
  const recentActivities = [
    {
      key: '1',
      action: 'New student enrollment',
      details: 'John Doe enrolled in Full Stack Development',
      time: '2 hours ago',
      type: 'enrollment'
    },
    {
      key: '2',
      action: 'Course completed',
      details: 'Sarah completed React.js Mastery Course',
      time: '4 hours ago',
      type: 'completion'
    },
    {
      key: '3',
      action: 'Job placement',
      details: 'Mike placed at TechCorp as Frontend Developer',
      time: '6 hours ago',
      type: 'placement'
    },
    {
      key: '4',
      action: 'New inquiry',
      details: 'Contact form submission for Data Science course',
      time: '8 hours ago',
      type: 'inquiry'
    }
  ];

  const activityColumns = [
    {
      title: 'Activity',
      dataIndex: 'action',
      key: 'action',
      render: (text, record) => (
        <div>
          <div style={{ fontWeight: 500, color: '#1f2937' }}>{text}</div>
          <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '2px' }}>{record.details}</div>
        </div>
      )
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (type) => {
        const colors = {
          enrollment: 'blue',
          completion: 'green',
          placement: 'gold',
          inquiry: 'purple'
        };
        return <Tag color={colors[type]} style={{ textTransform: 'capitalize' }}>{type}</Tag>;
      }
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      render: (time) => (
        <span style={{ color: '#6b7280', fontSize: '12px' }}>{time}</span>
      )
    }
  ];

  // Quick stats data
  const quickStats = [
    {
      title: 'Course Management',
      description: 'Add new courses or edit existing ones',
      progress: 75,
      status: '9 active courses',
      icon: <BookOutlined />,
      color: '#1890ff'
    },
    {
      title: 'Traffic Analytics',
      description: 'Track page views and user engagement',
      progress: 85,
      status: '12.5K monthly visitors',
      icon: <EyeOutlined />,
      color: '#52c41a'
    },
    {
      title: 'Placement Success',
      description: 'Monitor job placements and success rates',
      progress: 92,
      status: '92% placement rate',
      icon: <TrophyOutlined />,
      color: '#faad14'
    }
  ];

  return (
    <AdminDashboard activeKey="dashboard">
      <div>
        {/* Page Header */}
        <div style={{
          marginBottom: '32px',
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
              }}>Dashboard Overview</h1>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                margin: 0
              }}>
                Welcome back! Here's what's happening with your platform.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {lastUpdated && (
                <div style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  alignSelf: 'center',
                  marginRight: '16px'
                }}>
                  Last updated: {lastUpdated.toLocaleTimeString()}
                </div>
              )}
              <Button 
                type="default"
                icon={<ReloadOutlined />}
                onClick={() => loadDashboardData(true)}
                loading={refreshing}
                style={{
                  borderRadius: '8px',
                  height: '40px',
                  fontWeight: '600'
                }}
              >
                Refresh
              </Button>
              <Button 
                type="default"
                icon={<DatabaseOutlined />}
                onClick={handleMigration}
                loading={migrating}
                style={{
                  borderRadius: '8px',
                  height: '40px',
                  fontWeight: '600',
                  background: '#f6ffed',
                  borderColor: '#52c41a',
                  color: '#52c41a'
                }}
              >
                {migrating ? 'Migrating...' : 'Migrate to DB'}
              </Button>
              <Button 
                type="primary" 
                icon={<PlusOutlined />}
                style={{
                  background: 'linear-gradient(135deg, #1890ff 0%, #096dd9 100%)',
                  border: 'none',
                  borderRadius: '8px',
                  height: '40px',
                  fontWeight: '600'
                }}
              >
                Quick Action
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <Row gutter={[24, 24]} style={{ marginBottom: '32px' }}>
          {statsData.map((stat, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card 
                style={{
                  borderRadius: '12px',
                  border: '1px solid #f0f0f0',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.3s ease'
                }}
                bodyStyle={{ padding: '24px' }}
                hoverable
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: stat.bgColor,
                    color: stat.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px'
                  }}>
                    {stat.icon}
                  </div>
                  <div style={{
                    color: '#52c41a',
                    fontSize: '12px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <ArrowUpOutlined />
                    {stat.trend}
                  </div>
                </div>
                
                <div style={{ fontSize: '32px', fontWeight: '700', color: '#1f2937', marginBottom: '4px' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '14px', color: '#6b7280' }}>
                  {stat.title}
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Quick Actions */}
        <Row gutter={[24, 24]} style={{ marginBottom: '32px' }}>
          {quickStats.map((item, index) => (
            <Col xs={24} lg={8} key={index}>
              <Card 
                style={{
                  borderRadius: '12px',
                  border: '1px solid #f0f0f0',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                  textAlign: 'center',
                  height: '100%'
                }}
                bodyStyle={{ padding: '32px 24px' }}
                hoverable
              >
                <div style={{
                  fontSize: '48px',
                  color: item.color,
                  marginBottom: '16px'
                }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '8px'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: '#6b7280',
                  marginBottom: '20px',
                  lineHeight: '1.6'
                }}>
                  {item.description}
                </p>
                <Progress 
                  percent={item.progress} 
                  size="small" 
                  strokeColor={item.color}
                  style={{ marginBottom: '12px' }}
                />
                <p style={{
                  fontSize: '12px',
                  color: '#9ca3af',
                  margin: 0
                }}>
                  {item.status}
                </p>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Recent Activities */}
        <Row gutter={[24, 24]}>
          <Col xs={24}>
            <Card 
              title={
                <span style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#1f2937'
                }}>
                  Recent Activities
                </span>
              }
              style={{
                borderRadius: '12px',
                border: '1px solid #f0f0f0',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
              }}
              extra={
                <Button 
                  type="link" 
                  style={{ color: '#1890ff', fontWeight: '500' }}
                >
                  View All
                </Button>
              }
            >
              <Table
                dataSource={recentActivities}
                columns={activityColumns}
                pagination={false}
                size="middle"
                style={{
                  background: 'transparent'
                }}
              />
            </Card>
          </Col>
        </Row>

        {/* Website Analytics Overview */}
        <Row gutter={[24, 24]} style={{ marginTop: '32px' }}>
          <Col xs={24}>
            <Card 
              title={
                <span style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#1f2937'
                }}>
                  Website Analytics Overview
                </span>
              }
              style={{
                borderRadius: '12px',
                border: '1px solid #f0f0f0',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
              }}
            >
              <Row gutter={[32, 32]}>
                <Col xs={24} sm={8}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      fontSize: '32px',
                      fontWeight: '700',
                      color: '#1890ff',
                      marginBottom: '8px'
                    }}>
                      12,847
                    </div>
                    <div style={{ color: '#6b7280', fontSize: '14px' }}>
                      Monthly Visitors
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={8}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      fontSize: '32px',
                      fontWeight: '700',
                      color: '#52c41a',
                      marginBottom: '8px'
                    }}>
                      8,423
                    </div>
                    <div style={{ color: '#6b7280', fontSize: '14px' }}>
                      Page Views
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={8}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      fontSize: '32px',
                      fontWeight: '700',
                      color: '#faad14',
                      marginBottom: '8px'
                    }}>
                      3.2min
                    </div>
                    <div style={{ color: '#6b7280', fontSize: '14px' }}>
                      Avg. Session
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </AdminDashboard>
  );
};

export default Dashboard;