import React, { useState, useEffect, useCallback } from 'react';
import { Card, Form, Input, Button, message, Row, Col, Space, Tag } from 'antd';
import { 
  SaveOutlined,
  EditOutlined,
  BankOutlined,
  GlobalOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined
} from '@ant-design/icons';
import AdminDashboard from '../../components/admin/AdminDashboard';
import { companyService } from '../../services/firebaseData';

const { TextArea } = Input;

const CompanyManagement = () => {
  const [loading, setLoading] = useState(false);
  const [companyInfo, setCompanyInfo] = useState(null);
  const [form] = Form.useForm();

  const loadCompanyInfo = useCallback(async () => {
    setLoading(true);
    try {
      const companyData = await companyService.get();
      if (companyData && companyData.length > 0) {
        setCompanyInfo(companyData[0]);
        form.setFieldsValue({
          ...companyData[0],
          linkedinUrl: companyData[0].socialLinks?.linkedin || '',
          twitterUrl: companyData[0].socialLinks?.twitter || '',
          githubUrl: companyData[0].socialLinks?.github || '',
        });
      }
    } catch (error) {
      console.error('Error loading company info:', error);
      message.error('Failed to load company information');
    } finally {
      setLoading(false);
    }
  }, [form]);

  useEffect(() => {
    loadCompanyInfo();
  }, [loadCompanyInfo]);

  const handleSave = async (values) => {
    try {
      setLoading(true);
      
      const formattedData = {
        name: values.name,
        tagline: values.tagline,
        email: values.email,
        phone: values.phone,
        address: values.address,
        socialLinks: {
          linkedin: values.linkedinUrl || '',
          twitter: values.twitterUrl || '',
          github: values.githubUrl || ''
        },
        services: values.services ? values.services.split('\n').filter(s => s.trim()).map(service => {
          const [name, description] = service.split(':').map(s => s.trim());
          return { name: name || service, description: description || '' };
        }) : []
      };

      await companyService.update(formattedData);
      message.success('Company information updated successfully');
      loadCompanyInfo();
    } catch (error) {
      console.error('Error saving company info:', error);
      message.error('Failed to save company information');
    } finally {
      setLoading(false);
    }
  };

  const defaultServices = [
    'Training: Comprehensive skill development programs',
    'Placement: Guaranteed job placement assistance', 
    'Consultancy: Expert technology consulting services'
  ].join('\n');

  return (
    <AdminDashboard activeKey="settings">
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
              }}>Company Information</h1>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                margin: 0
              }}>
                Manage your company details, contact information, and social media links.
              </p>
            </div>
          </div>
        </div>

        {/* Company Info Form */}
        <Card 
          title={
            <span style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937' }}>
              <BankOutlined style={{ marginRight: '8px' }} />
              Company Details
            </span>
          }
          style={{
            borderRadius: '12px',
            border: '1px solid #f0f0f0',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
          }}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSave}
            initialValues={{
              name: 'Datenwork',
              tagline: 'Empowering Talent, Driving Global Tech Success',
              email: 'info@datenwork.com',
              phone: '+1 (555) 123-4567',
              address: 'Your Company Address',
              linkedinUrl: 'https://linkedin.com/company/datenwork',
              twitterUrl: 'https://twitter.com/datenwork',
              githubUrl: 'https://github.com/datenwork',
              services: defaultServices
            }}
          >
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item
                  label={
                    <span style={{ fontWeight: '600', color: '#1f2937' }}>
                      <BankOutlined style={{ marginRight: '6px' }} />
                      Company Name
                    </span>
                  }
                  name="name"
                  rules={[{ required: true, message: 'Please enter company name' }]}
                >
                  <Input placeholder="e.g., Datenwork" style={{ borderRadius: '8px', height: '40px' }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label={
                    <span style={{ fontWeight: '600', color: '#1f2937' }}>
                      <EditOutlined style={{ marginRight: '6px' }} />
                      Tagline
                    </span>
                  }
                  name="tagline"
                  rules={[{ required: true, message: 'Please enter company tagline' }]}
                >
                  <Input placeholder="e.g., Empowering Talent, Driving Global Tech Success" style={{ borderRadius: '8px', height: '40px' }} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={12}>
                <Form.Item
                  label={
                    <span style={{ fontWeight: '600', color: '#1f2937' }}>
                      <MailOutlined style={{ marginRight: '6px' }} />
                      Email Address
                    </span>
                  }
                  name="email"
                  rules={[
                    { required: true, message: 'Please enter email address' },
                    { type: 'email', message: 'Please enter a valid email' }
                  ]}
                >
                  <Input placeholder="info@company.com" style={{ borderRadius: '8px', height: '40px' }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label={
                    <span style={{ fontWeight: '600', color: '#1f2937' }}>
                      <PhoneOutlined style={{ marginRight: '6px' }} />
                      Phone Number
                    </span>
                  }
                  name="phone"
                  rules={[{ required: true, message: 'Please enter phone number' }]}
                >
                  <Input placeholder="+1 (555) 123-4567" style={{ borderRadius: '8px', height: '40px' }} />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label={
                <span style={{ fontWeight: '600', color: '#1f2937' }}>
                  <EnvironmentOutlined style={{ marginRight: '6px' }} />
                  Address
                </span>
              }
              name="address"
              rules={[{ required: true, message: 'Please enter company address' }]}
            >
              <TextArea 
                rows={2} 
                placeholder="Enter your company address" 
                style={{ borderRadius: '8px' }}
              />
            </Form.Item>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937', marginBottom: '16px' }}>
                <GlobalOutlined style={{ marginRight: '8px' }} />
                Social Media Links
              </h3>
              
              <Row gutter={24}>
                <Col span={8}>
                  <Form.Item
                    label="LinkedIn URL"
                    name="linkedinUrl"
                  >
                    <Input 
                      prefix="🔗" 
                      placeholder="https://linkedin.com/company/yourcompany" 
                      style={{ borderRadius: '8px', height: '40px' }}
                    />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="Twitter URL"
                    name="twitterUrl"
                  >
                    <Input 
                      prefix="🐦" 
                      placeholder="https://twitter.com/yourcompany" 
                      style={{ borderRadius: '8px', height: '40px' }}
                    />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="GitHub URL"
                    name="githubUrl"
                  >
                    <Input 
                      prefix="💻" 
                      placeholder="https://github.com/yourcompany" 
                      style={{ borderRadius: '8px', height: '40px' }}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </div>

            <Form.Item
              label={
                <span style={{ fontWeight: '600', color: '#1f2937' }}>
                  Services Offered
                  <Tag color="blue" style={{ marginLeft: '8px', fontSize: '10px' }}>
                    Format: Service Name: Description
                  </Tag>
                </span>
              }
              name="services"
              extra="Enter each service on a new line in format: 'Service Name: Description'"
            >
              <TextArea 
                rows={4} 
                placeholder={defaultServices}
                style={{ borderRadius: '8px' }}
              />
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
                    fontWeight: '600',
                    minWidth: '120px'
                  }}
                >
                  Save Changes
                </Button>
                <Button 
                  onClick={() => {
                    form.resetFields();
                    loadCompanyInfo();
                  }}
                  style={{ borderRadius: '8px', height: '40px' }}
                >
                  Reset
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Card>

        {/* Current Company Info Display */}
        {companyInfo && (
          <Card 
            title="Current Company Information"
            style={{
              marginTop: '24px',
              borderRadius: '12px',
              border: '1px solid #f0f0f0',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
            }}
          >
            <Row gutter={24}>
              <Col span={12}>
                <div style={{ marginBottom: '16px' }}>
                  <strong style={{ color: '#1f2937' }}>Company Name:</strong>
                  <div style={{ color: '#6b7280', marginTop: '4px' }}>{companyInfo.name}</div>
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <strong style={{ color: '#1f2937' }}>Tagline:</strong>
                  <div style={{ color: '#6b7280', marginTop: '4px' }}>{companyInfo.tagline}</div>
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <strong style={{ color: '#1f2937' }}>Email:</strong>
                  <div style={{ color: '#6b7280', marginTop: '4px' }}>{companyInfo.email}</div>
                </div>
              </Col>
              <Col span={12}>
                <div style={{ marginBottom: '16px' }}>
                  <strong style={{ color: '#1f2937' }}>Phone:</strong>
                  <div style={{ color: '#6b7280', marginTop: '4px' }}>{companyInfo.phone}</div>
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <strong style={{ color: '#1f2937' }}>Address:</strong>
                  <div style={{ color: '#6b7280', marginTop: '4px' }}>{companyInfo.address}</div>
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <strong style={{ color: '#1f2937' }}>Social Links:</strong>
                  <div style={{ marginTop: '8px' }}>
                    {companyInfo.socialLinks?.linkedin && (
                      <Tag color="blue" style={{ margin: '2px' }}>LinkedIn</Tag>
                    )}
                    {companyInfo.socialLinks?.twitter && (
                      <Tag color="cyan" style={{ margin: '2px' }}>Twitter</Tag>
                    )}
                    {companyInfo.socialLinks?.github && (
                      <Tag color="gray" style={{ margin: '2px' }}>GitHub</Tag>
                    )}
                  </div>
                </div>
              </Col>
            </Row>
            
            {companyInfo.services && companyInfo.services.length > 0 && (
              <div style={{ marginTop: '16px' }}>
                <strong style={{ color: '#1f2937' }}>Services:</strong>
                <div style={{ marginTop: '8px' }}>
                  {companyInfo.services.map((service, index) => (
                    <div key={index} style={{ 
                      background: '#f8fafc', 
                      padding: '12px', 
                      borderRadius: '8px', 
                      marginBottom: '8px',
                      borderLeft: '4px solid #1890ff'
                    }}>
                      <strong style={{ color: '#1f2937' }}>{service.name}</strong>
                      {service.description && (
                        <div style={{ color: '#6b7280', fontSize: '14px', marginTop: '4px' }}>
                          {service.description}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Card>
        )}
      </div>
    </AdminDashboard>
  );
};

export default CompanyManagement;