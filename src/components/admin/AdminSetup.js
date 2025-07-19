import React, { useState } from 'react';
import { Card, Button, Alert, Typography, Divider, Space, Input, message } from 'antd';
import { UserAddOutlined, DatabaseOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { createDefaultAdmin, createAlternativeAdmin } from '../../utils/createAdminUser';
import { migrateInitialData } from '../../services/firebaseData';

const { Title, Paragraph, Text } = Typography;

const AdminSetup = () => {
  const [loading, setLoading] = useState(false);
  const [setupComplete, setSetupComplete] = useState(false);
  const [adminCredentials, setAdminCredentials] = useState(null);
  const [dataSetupComplete, setDataSetupComplete] = useState(false);

  const handleCreateAdmin = async () => {
    setLoading(true);
    try {
      // Try creating default admin first
      let result = await createDefaultAdmin();
      
      if (!result.success) {
        // If default fails, try alternative
        console.log('Trying alternative admin credentials...');
        result = await createAlternativeAdmin();
      }

      if (result.success) {
        setAdminCredentials({
          email: result.email,
          password: result.password
        });
        setSetupComplete(true);
        message.success('Admin user created successfully!');
      } else {
        message.error(`Failed to create admin user: ${result.error}`);
      }
    } catch (error) {
      message.error('Setup failed. Please check console for details.');
      console.error('Setup error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMigrateData = async () => {
    setLoading(true);
    try {
      const success = await migrateInitialData();
      if (success) {
        setDataSetupComplete(true);
        message.success('Initial data migrated successfully!');
      } else {
        message.error('Failed to migrate initial data');
      }
    } catch (error) {
      message.error('Data migration failed');
      console.error('Migration error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <Card 
        style={{
          width: '100%',
          maxWidth: '600px',
          borderRadius: '16px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
        }}
        bodyStyle={{ padding: '40px' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            fontSize: '48px',
            marginBottom: '16px'
          }}>🚀</div>
          <Title level={2} style={{ margin: 0, color: '#1f2937' }}>
            Datenwork Admin Setup
          </Title>
          <Paragraph style={{ fontSize: '16px', color: '#6b7280', margin: '8px 0 0 0' }}>
            One-time setup to create admin user and migrate initial data
          </Paragraph>
        </div>

        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          {/* Step 1: Create Admin User */}
          <Card 
            size="small"
            style={{ 
              background: setupComplete ? '#f0f9ff' : '#f9fafb',
              border: setupComplete ? '2px solid #3b82f6' : '1px solid #e5e7eb'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              {setupComplete ? (
                <CheckCircleOutlined style={{ fontSize: '24px', color: '#10b981' }} />
              ) : (
                <UserAddOutlined style={{ fontSize: '24px', color: '#6b7280' }} />
              )}
              <Title level={4} style={{ margin: 0 }}>
                Step 1: Create Admin User
              </Title>
            </div>
            
            {!setupComplete ? (
              <div>
                <Paragraph style={{ margin: '0 0 16px 0', color: '#6b7280' }}>
                  Create the default admin user for accessing the admin panel.
                </Paragraph>
                <Button 
                  type="primary" 
                  icon={<UserAddOutlined />}
                  loading={loading}
                  onClick={handleCreateAdmin}
                  style={{
                    background: 'linear-gradient(135deg, #1890ff 0%, #096dd9 100%)',
                    border: 'none',
                    borderRadius: '8px',
                    height: '40px',
                    fontWeight: '600'
                  }}
                >
                  Create Admin User
                </Button>
              </div>
            ) : (
              <div>
                <Alert 
                  message="Admin user created successfully!" 
                  type="success" 
                  style={{ marginBottom: '16px' }}
                />
                <div style={{
                  background: '#1f2937',
                  padding: '16px',
                  borderRadius: '8px',
                  color: 'white'
                }}>
                  <Text strong style={{ color: '#f3f4f6' }}>Admin Login Credentials:</Text>
                  <div style={{ marginTop: '8px', fontFamily: 'monospace' }}>
                    <div>Email: <Text copyable style={{ color: '#60a5fa' }}>{adminCredentials.email}</Text></div>
                    <div>Password: <Text copyable style={{ color: '#60a5fa' }}>{adminCredentials.password}</Text></div>
                  </div>
                </div>
              </div>
            )}
          </Card>

          {/* Step 2: Migrate Initial Data */}
          <Card 
            size="small"
            style={{ 
              background: dataSetupComplete ? '#f0fdf4' : '#f9fafb',
              border: dataSetupComplete ? '2px solid #10b981' : '1px solid #e5e7eb'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              {dataSetupComplete ? (
                <CheckCircleOutlined style={{ fontSize: '24px', color: '#10b981' }} />
              ) : (
                <DatabaseOutlined style={{ fontSize: '24px', color: '#6b7280' }} />
              )}
              <Title level={4} style={{ margin: 0 }}>
                Step 2: Setup Initial Data
              </Title>
            </div>
            
            {!dataSetupComplete ? (
              <div>
                <Paragraph style={{ margin: '0 0 16px 0', color: '#6b7280' }}>
                  Migrate existing course data, hero content, and job listings to Firebase.
                </Paragraph>
                <Button 
                  type="primary" 
                  icon={<DatabaseOutlined />}
                  loading={loading}
                  onClick={handleMigrateData}
                  disabled={!setupComplete}
                  style={{
                    background: setupComplete ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : '#d1d5db',
                    border: 'none',
                    borderRadius: '8px',
                    height: '40px',
                    fontWeight: '600'
                  }}
                >
                  Migrate Initial Data
                </Button>
                {!setupComplete && (
                  <div style={{ marginTop: '8px', fontSize: '12px', color: '#9ca3af' }}>
                    Complete Step 1 first
                  </div>
                )}
              </div>
            ) : (
              <Alert 
                message="Initial data migrated successfully!" 
                description="All courses, hero content, and job listings have been moved to Firebase."
                type="success"
              />
            )}
          </Card>

          {/* Setup Complete */}
          {setupComplete && dataSetupComplete && (
            <Card 
              size="small"
              style={{ 
                background: 'linear-gradient(135deg, #f0f9ff 0%, #f0fdf4 100%)',
                border: '2px solid #10b981',
                textAlign: 'center'
              }}
            >
              <CheckCircleOutlined style={{ fontSize: '48px', color: '#10b981', marginBottom: '16px' }} />
              <Title level={3} style={{ color: '#1f2937', margin: '0 0 8px 0' }}>
                Setup Complete! 🎉
              </Title>
              <Paragraph style={{ color: '#6b7280', marginBottom: '24px' }}>
                Your admin panel is ready to use. You can now login and manage your content.
              </Paragraph>
              <Button 
                type="primary" 
                size="large"
                onClick={() => window.location.href = '/admin/login'}
                style={{
                  background: 'linear-gradient(135deg, #1890ff 0%, #096dd9 100%)',
                  border: 'none',
                  borderRadius: '8px',
                  height: '48px',
                  fontWeight: '600',
                  fontSize: '16px'
                }}
              >
                Go to Admin Login
              </Button>
            </Card>
          )}
        </Space>

        <Divider />

        <div style={{ textAlign: 'center', color: '#9ca3af', fontSize: '12px' }}>
          <p>This setup page will only be needed once. You can delete this component after setup.</p>
        </div>
      </Card>
    </div>
  );
};

export default AdminSetup;