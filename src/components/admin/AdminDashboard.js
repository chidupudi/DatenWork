import React, { useState } from 'react';
import { Layout, Menu, Avatar, Dropdown, Button, message } from 'antd';
import { 
  DashboardOutlined, 
  EditOutlined, 
  BookOutlined, 
  BranchesOutlined,
  BankOutlined,
  SettingOutlined,
  BarChartOutlined,
  LogoutOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const AdminDashboard = ({ children, activeKey = 'dashboard' }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      message.success('Logged out successfully');
      navigate('/admin/login');
    } catch (error) {
      message.error('Failed to log out');
    }
  };

  const menuItems = [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
      onClick: () => navigate('/admin/dashboard')
    },
    {
      key: 'responses',
      icon: <UserOutlined />,
      label: 'Form Responses',
      onClick: () => navigate('/admin/responses')
    },
    {
      key: 'hero',
      icon: <EditOutlined />,
      label: 'Hero Section',
      onClick: () => navigate('/admin/hero')
    },
    {
      key: 'courses',
      icon: <BookOutlined />,
      label: 'Courses',
      onClick: () => navigate('/admin/courses')
    },
    {
      key: 'programs',
      icon: <BranchesOutlined />,
      label: 'Programs',
      onClick: () => navigate('/admin/programs')
    },
    {
      key: 'jobs',
      icon: <BankOutlined />,
      label: 'Industry Jobs',
      onClick: () => navigate('/admin/jobs')
    },
    {
      key: 'analytics',
      icon: <BarChartOutlined />,
      label: 'Analytics',
      onClick: () => navigate('/admin/analytics')
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Company Info',
      onClick: () => navigate('/admin/settings')
    }
  ];

  const userMenuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile'
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
      onClick: handleLogout
    }
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider 
        trigger={null} 
        collapsible 
        collapsed={collapsed}
        width={260}
        collapsedWidth={80}
        style={{
          background: 'linear-gradient(180deg, #1e40af 0%, #1d4ed8 100%)',
          boxShadow: '2px 0 8px rgba(0, 0, 0, 0.1)',
          position: 'fixed',
          height: '100vh',
          left: 0,
          top: 0,
          zIndex: 1000
        }}
      >
        <div style={{
          padding: '20px 16px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          background: 'rgba(255, 255, 255, 0.05)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {!collapsed ? (
              <>
                <div style={{
                  fontSize: '24px',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  backdropFilter: 'blur(10px)'
                }}>🚀</div>
                <div>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: 'white',
                    margin: 0,
                    lineHeight: '1.2'
                  }}>Datenwork</div>
                  <div style={{
                    fontSize: '12px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    margin: 0,
                    lineHeight: '1.2'
                  }}>Admin Panel</div>
                </div>
              </>
            ) : (
              <div style={{
                fontSize: '20px',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                backdropFilter: 'blur(10px)',
                margin: '0 auto'
              }}>🚀</div>
            )}
          </div>
        </div>
        
        <Menu
          mode="inline"
          selectedKeys={[activeKey]}
          items={menuItems}
          style={{
            background: 'transparent',
            border: 'none',
            flex: 1,
            padding: '10px 0'
          }}
          theme="dark"
        />
      </Sider>
      
      <Layout style={{
        marginLeft: collapsed ? 80 : 260,
        transition: 'all 0.2s ease'
      }}>
        <Header style={{
          background: 'white',
          padding: '0 24px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
          position: 'sticky',
          top: 0,
          zIndex: 999
        }}>
          <div>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: '40px',
                height: '40px',
                borderRadius: '8px'
              }}
            />
          </div>
          
          <div>
            <Dropdown
              menu={{ items: userMenuItems }}
              placement="bottomRight"
              trigger={['click']}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 12px',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <Avatar 
                  size="small" 
                  icon={<UserOutlined />}
                  style={{ background: 'linear-gradient(135deg, #1890ff 0%, #096dd9 100%)' }}
                />
                <span style={{
                  fontSize: '14px',
                  color: '#666',
                  fontWeight: '500'
                }}>
                  {currentUser?.email || 'admin@datenwork.com'}
                </span>
              </div>
            </Dropdown>
          </div>
        </Header>
        
        <Content style={{
          background: '#f5f5f5',
          minHeight: 'calc(100vh - 64px)',
          padding: '24px'
        }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;