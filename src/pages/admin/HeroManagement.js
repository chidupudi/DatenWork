import React, { useState, useEffect } from 'react';
import { Card, Form, Input, Button, message, Space, Divider, Row, Col, Tag, Modal } from 'antd';
import { PlusOutlined, DeleteOutlined, EditOutlined, SaveOutlined } from '@ant-design/icons';
import AdminDashboard from '../../components/admin/AdminDashboard';
import { heroService } from '../../services/firebaseData';

const { TextArea } = Input;

const HeroManagement = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [heroData, setHeroData] = useState(null);
  const [statisticsForm] = Form.useForm();
  const [buttonsForm] = Form.useForm();
  const [coursesForm] = Form.useForm();

  useEffect(() => {
    loadHeroData();
  }, []);

  const loadHeroData = async () => {
    try {
      setLoading(true);
      const data = await heroService.get();
      if (data && data.length > 0) {
        const heroContent = data[0];
        setHeroData(heroContent);
        
        // Set form values
        form.setFieldsValue({
          title: heroContent.title,
          subtitle: heroContent.subtitle,
          formTitle: heroContent.formTitle,
          formSubtitle: heroContent.formSubtitle
        });
        
        // Set statistics form
        statisticsForm.setFieldsValue({
          statistics: heroContent.statistics
        });
        
        // Set buttons form
        buttonsForm.setFieldsValue({
          buttons: heroContent.buttons
        });
        
        // Set courses form
        coursesForm.setFieldsValue({
          courseOptions: heroContent.courseOptions
        });
      }
    } catch (error) {
      message.error('Failed to load hero data');
      console.error('Error loading hero data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveBasicInfo = async (values) => {
    try {
      setLoading(true);
      await heroService.update({
        title: values.title,
        subtitle: values.subtitle,
        formTitle: values.formTitle,
        formSubtitle: values.formSubtitle
      });
      message.success('Basic information updated successfully');
      loadHeroData();
    } catch (error) {
      message.error('Failed to update basic information');
      console.error('Error updating hero data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveStatistics = async (values) => {
    try {
      setLoading(true);
      await heroService.update({
        statistics: values.statistics
      });
      message.success('Statistics updated successfully');
      loadHeroData();
    } catch (error) {
      message.error('Failed to update statistics');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveButtons = async (values) => {
    try {
      setLoading(true);
      await heroService.update({
        buttons: values.buttons
      });
      message.success('Buttons updated successfully');
      loadHeroData();
    } catch (error) {
      message.error('Failed to update buttons');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveCourses = async (values) => {
    try {
      setLoading(true);
      await heroService.update({
        courseOptions: values.courseOptions
      });
      message.success('Course options updated successfully');
      loadHeroData();
    } catch (error) {
      message.error('Failed to update course options');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminDashboard activeKey="hero">
      <div>
        {/* Page Header */}
        <div style={{
          marginBottom: '32px',
          background: 'white',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
        }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#1f2937',
            margin: '0 0 8px 0'
          }}>Hero Section Management</h1>
          <p style={{
            fontSize: '16px',
            color: '#6b7280',
            margin: 0
          }}>
            Manage the main hero section content that visitors see first on your homepage.
          </p>
        </div>

        <Row gutter={[24, 24]}>
          {/* Basic Information */}
          <Col xs={24} lg={12}>
            <Card 
              title={
                <span style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937' }}>
                  Basic Information
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
                onFinish={handleSaveBasicInfo}
              >
                <Form.Item
                  label={<span style={{ fontWeight: '500', color: '#374151' }}>Main Title</span>}
                  name="title"
                  rules={[{ required: true, message: 'Please enter the main title' }]}
                >
                  <Input 
                    placeholder="Enter hero main title"
                    style={{ borderRadius: '8px', height: '40px' }}
                  />
                </Form.Item>
                
                <Form.Item
                  label={<span style={{ fontWeight: '500', color: '#374151' }}>Subtitle</span>}
                  name="subtitle"
                  rules={[{ required: true, message: 'Please enter the subtitle' }]}
                >
                  <TextArea 
                    rows={3}
                    placeholder="Enter hero subtitle"
                    style={{ borderRadius: '8px' }}
                  />
                </Form.Item>
                
                <Form.Item
                  label={<span style={{ fontWeight: '500', color: '#374151' }}>Form Title</span>}
                  name="formTitle"
                  rules={[{ required: true, message: 'Please enter the form title' }]}
                >
                  <Input 
                    placeholder="Enter form title"
                    style={{ borderRadius: '8px', height: '40px' }}
                  />
                </Form.Item>
                
                <Form.Item
                  label={<span style={{ fontWeight: '500', color: '#374151' }}>Form Subtitle</span>}
                  name="formSubtitle"
                  rules={[{ required: true, message: 'Please enter the form subtitle' }]}
                >
                  <Input 
                    placeholder="Enter form subtitle"
                    style={{ borderRadius: '8px', height: '40px' }}
                  />
                </Form.Item>
                
                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    loading={loading}
                    icon={<SaveOutlined />}
                    style={{
                      background: 'linear-gradient(135deg, #1890ff 0%, #096dd9 100%)',
                      border: 'none',
                      borderRadius: '8px',
                      height: '40px',
                      fontWeight: '600'
                    }}
                  >
                    Save Basic Info
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>

          {/* Statistics */}
          <Col xs={24} lg={12}>
            <Card 
              title={
                <span style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937' }}>
                  Statistics
                </span>
              }
              style={{
                borderRadius: '12px',
                border: '1px solid #f0f0f0',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
              }}
            >
              <Form 
                form={statisticsForm} 
                layout="vertical" 
                onFinish={handleSaveStatistics}
              >
                <Form.List name="statistics">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, ...restField }) => (
                        <div key={key} style={{
                          background: '#f9fafb',
                          padding: '16px',
                          borderRadius: '8px',
                          marginBottom: '16px',
                          border: '1px solid #e5e7eb'
                        }}>
                          <Row gutter={16}>
                            <Col span={10}>
                              <Form.Item
                                {...restField}
                                name={[name, 'number']}
                                label="Number"
                                rules={[{ required: true, message: 'Required' }]}
                              >
                                <Input placeholder="600+" style={{ borderRadius: '6px' }} />
                              </Form.Item>
                            </Col>
                            <Col span={10}>
                              <Form.Item
                                {...restField}
                                name={[name, 'label']}
                                label="Label"
                                rules={[{ required: true, message: 'Required' }]}
                              >
                                <Input placeholder="Successful Placements" style={{ borderRadius: '6px' }} />
                              </Form.Item>
                            </Col>
                            <Col span={4}>
                              <Form.Item label=" ">
                                <Button 
                                  type="text" 
                                  danger
                                  icon={<DeleteOutlined />}
                                  onClick={() => remove(name)}
                                  style={{ marginTop: '4px' }}
                                />
                              </Form.Item>
                            </Col>
                          </Row>
                        </div>
                      ))}
                      <Form.Item>
                        <Button 
                          type="dashed" 
                          onClick={() => add()} 
                          block 
                          icon={<PlusOutlined />}
                          style={{ borderRadius: '8px', height: '40px' }}
                        >
                          Add Statistic
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>
                
                <Form.Item>
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
                    Save Statistics
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>

          {/* Call-to-Action Buttons */}
          <Col xs={24} lg={12}>
            <Card 
              title={
                <span style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937' }}>
                  Call-to-Action Buttons
                </span>
              }
              style={{
                borderRadius: '12px',
                border: '1px solid #f0f0f0',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
              }}
            >
              <Form 
                form={buttonsForm} 
                layout="vertical" 
                onFinish={handleSaveButtons}
              >
                <Form.List name="buttons">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, ...restField }) => (
                        <div key={key} style={{
                          background: '#f0f9ff',
                          padding: '16px',
                          borderRadius: '8px',
                          marginBottom: '16px',
                          border: '1px solid #bae6fd'
                        }}>
                          <Row gutter={16}>
                            <Col span={24}>
                              <Form.Item
                                {...restField}
                                name={[name, 'text']}
                                label="Button Text"
                                rules={[{ required: true, message: 'Required' }]}
                              >
                                <Input placeholder="Explore Training Programs" style={{ borderRadius: '6px' }} />
                              </Form.Item>
                            </Col>
                            <Col span={20}>
                              <Form.Item
                                {...restField}
                                name={[name, 'link']}
                                label="Link"
                                rules={[{ required: true, message: 'Required' }]}
                              >
                                <Input placeholder="/programs or https://..." style={{ borderRadius: '6px' }} />
                              </Form.Item>
                            </Col>
                            <Col span={4}>
                              <Form.Item label=" ">
                                <Button 
                                  type="text" 
                                  danger
                                  icon={<DeleteOutlined />}
                                  onClick={() => remove(name)}
                                  style={{ marginTop: '4px' }}
                                />
                              </Form.Item>
                            </Col>
                          </Row>
                        </div>
                      ))}
                      <Form.Item>
                        <Button 
                          type="dashed" 
                          onClick={() => add()} 
                          block 
                          icon={<PlusOutlined />}
                          style={{ borderRadius: '8px', height: '40px' }}
                        >
                          Add Button
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>
                
                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    loading={loading}
                    icon={<SaveOutlined />}
                    style={{
                      background: 'linear-gradient(135deg, #faad14 0%, #d48806 100%)',
                      border: 'none',
                      borderRadius: '8px',
                      height: '40px',
                      fontWeight: '600'
                    }}
                  >
                    Save Buttons
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>

          {/* Course Options */}
          <Col xs={24} lg={12}>
            <Card 
              title={
                <span style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937' }}>
                  Course Options (Form Dropdown)
                </span>
              }
              style={{
                borderRadius: '12px',
                border: '1px solid #f0f0f0',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
              }}
            >
              <Form 
                form={coursesForm} 
                layout="vertical" 
                onFinish={handleSaveCourses}
              >
                <Form.List name="courseOptions">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, ...restField }) => (
                        <div key={key} style={{
                          background: '#f0fdf4',
                          padding: '16px',
                          borderRadius: '8px',
                          marginBottom: '16px',
                          border: '1px solid #bbf7d0'
                        }}>
                          <Row gutter={16}>
                            <Col span={10}>
                              <Form.Item
                                {...restField}
                                name={[name, 'value']}
                                label="Value"
                                rules={[{ required: true, message: 'Required' }]}
                              >
                                <Input placeholder="react" style={{ borderRadius: '6px' }} />
                              </Form.Item>
                            </Col>
                            <Col span={10}>
                              <Form.Item
                                {...restField}
                                name={[name, 'label']}
                                label="Display Label"
                                rules={[{ required: true, message: 'Required' }]}
                              >
                                <Input placeholder="React Development" style={{ borderRadius: '6px' }} />
                              </Form.Item>
                            </Col>
                            <Col span={4}>
                              <Form.Item label=" ">
                                <Button 
                                  type="text" 
                                  danger
                                  icon={<DeleteOutlined />}
                                  onClick={() => remove(name)}
                                  style={{ marginTop: '4px' }}
                                />
                              </Form.Item>
                            </Col>
                          </Row>
                        </div>
                      ))}
                      <Form.Item>
                        <Button 
                          type="dashed" 
                          onClick={() => add()} 
                          block 
                          icon={<PlusOutlined />}
                          style={{ borderRadius: '8px', height: '40px' }}
                        >
                          Add Course Option
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>
                
                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    loading={loading}
                    icon={<SaveOutlined />}
                    style={{
                      background: 'linear-gradient(135deg, #f759ab 0%, #eb2f96 100%)',
                      border: 'none',
                      borderRadius: '8px',
                      height: '40px',
                      fontWeight: '600'
                    }}
                  >
                    Save Course Options
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>

        {/* Preview Section */}
        <Card 
          title={
            <span style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937' }}>
              Live Preview
            </span>
          }
          style={{
            marginTop: '32px',
            borderRadius: '12px',
            border: '1px solid #f0f0f0',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
          }}
        >
          <div style={{
            background: '#f8fafc',
            padding: '32px',
            borderRadius: '8px',
            border: '2px dashed #cbd5e1'
          }}>
            <div style={{ textAlign: 'center', color: '#64748b' }}>
              <EditOutlined style={{ fontSize: '48px', marginBottom: '16px' }} />
              <h3>Preview Area</h3>
              <p>Changes will be reflected on the actual hero section once saved.</p>
              <p style={{ fontSize: '12px', color: '#94a3b8' }}>
                Visit the homepage to see your changes in action.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </AdminDashboard>
  );
};

export default HeroManagement;