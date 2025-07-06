// src/components/about/AboutUs.js - Professional About Us Page for Mitti Arts
import React from 'react';
import { 
  Typography, 
  Row, 
  Col, 
  Card, 
  Timeline, 
  Statistic, 
  Tag, 
  Space,
  Divider,
  Button,
  Avatar,
  Progress,
  Grid,
  Image
} from 'antd';
import {
  TrophyOutlined,
  TeamOutlined,
  RocketOutlined,
  HeartOutlined,
  SafetyOutlined,
  GlobalOutlined,
  BookOutlined,
  SafetyCertificateOutlined, // Changed from CertificateOutlined
  CodeOutlined,
  CloudOutlined,
  MobileOutlined,
  DatabaseOutlined,
  BarChartOutlined,
  RobotOutlined,
  SecurityScanOutlined,
  ApiOutlined,
  DesktopOutlined,
  TabletOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const AboutUs = () => {
  const screens = useBreakpoint();

  // Tech Training Courses Data for India
  const techCourses = [
    {
      category: "Full Stack Development",
      icon: <CodeOutlined />,
      color: "#1890ff",
      courses: [
        { name: "MERN Stack Development", provider: "Masai School", duration: "30 weeks", price: "₹3.5L" },
        { name: "Full Stack Web Development", provider: "Coding Ninjas", duration: "6 months", price: "₹75K" },
        { name: "Advanced React & Node.js", provider: "Scaler Academy", duration: "8 months", price: "₹2.5L" }
      ]
    },
    {
      category: "Data Science & AI",
      icon: <RobotOutlined />,
      color: "#52c41a",
      courses: [
        { name: "Data Science Bootcamp", provider: "UpGrad", duration: "11 months", price: "₹4.95L" },
        { name: "Machine Learning Specialization", provider: "Great Learning", duration: "12 months", price: "₹2.8L" },
        { name: "AI & Deep Learning", provider: "Simplilearn", duration: "8 months", price: "₹1.8L" }
      ]
    },
    {
      category: "Cloud Computing",
      icon: <CloudOutlined />,
      color: "#fa8c16",
      courses: [
        { name: "AWS Solutions Architect", provider: "Whizlabs", duration: "4 months", price: "₹45K" },
        { name: "Azure Cloud Fundamentals", provider: "Microsoft Learn", duration: "3 months", price: "₹35K" },
        { name: "Google Cloud Platform", provider: "Qwiklabs", duration: "5 months", price: "₹55K" }
      ]
    },
    {
      category: "Mobile App Development",
      icon: <MobileOutlined />,
      color: "#722ed1",
      courses: [
        { name: "React Native Development", provider: "The App Brewery", duration: "6 months", price: "₹65K" },
        { name: "Flutter App Development", provider: "Angela Yu Course", duration: "4 months", price: "₹45K" },
        { name: "iOS Development Swift", provider: "Udacity", duration: "8 months", price: "₹85K" }
      ]
    },
    {
      category: "Cybersecurity",
      icon: <SecurityScanOutlined />,
      color: "#eb2f96",
      courses: [
        { name: "Ethical Hacking & Penetration Testing", provider: "EC-Council", duration: "6 months", price: "₹1.2L" },
        { name: "Cybersecurity Analyst", provider: "IBM SkillsBuild", duration: "9 months", price: "₹95K" },
        { name: "Information Security Management", provider: "ISACA", duration: "12 months", price: "₹1.8L" }
      ]
    },
    {
      category: "DevOps & Infrastructure",
      icon: <ApiOutlined />,
      color: "#13c2c2",
      courses: [
        { name: "DevOps Engineer Bootcamp", provider: "Edureka", duration: "6 months", price: "₹75K" },
        { name: "Kubernetes & Docker", provider: "Linux Academy", duration: "4 months", price: "₹55K" },
        { name: "CI/CD Pipeline Management", provider: "Jenkins Academy", duration: "3 months", price: "₹35K" }
      ]
    }
  ];

  // Company milestones
  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      description: "Mitti Arts was founded with a vision to digitize traditional pottery business"
    },
    {
      year: "2021",
      title: "First Digital Platform",
      description: "Launched our first digital invoicing system for pottery artisans"
    },
    {
      year: "2022",
      title: "Expansion",
      description: "Extended services to 500+ pottery businesses across India"
    },
    {
      year: "2023",
      title: "Innovation",
      description: "Introduced AI-powered inventory management for pottery businesses"
    },
    {
      year: "2024",
      title: "Market Leader",
      description: "Became the leading digital platform for pottery business management in India"
    }
  ];

  // Team members
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      experience: "15+ years in traditional pottery",
      avatar: "🧑‍💼"
    },
    {
      name: "Priya Sharma",
      role: "CTO",
      experience: "12+ years in software development",
      avatar: "👩‍💻"
    },
    {
      name: "Arjun Reddy",
      role: "Head of Operations",
      experience: "10+ years in business operations",
      avatar: "👨‍💼"
    },
    {
      name: "Meera Patel",
      role: "Lead Designer",
      experience: "8+ years in UX/UI design",
      avatar: "👩‍🎨"
    }
  ];

  // Company values
  const values = [
    {
      icon: <HeartOutlined />,
      title: "Passion for Pottery",
      description: "We deeply respect and celebrate the ancient art of pottery making",
      color: "#ff4d4f"
    },
    {
      icon: <RocketOutlined />,
      title: "Innovation",
      description: "Bringing cutting-edge technology to traditional pottery businesses",
      color: "#1890ff"
    },
    {
      icon: <SafetyOutlined />,
      title: "Trust & Reliability",
      description: "Building lasting relationships with our pottery artisan partners",
      color: "#52c41a"
    },
    {
      icon: <GlobalOutlined />,
      title: "Global Vision",
      description: "Taking Indian pottery craftsmanship to the world through technology",
      color: "#fa8c16"
    }
  ];

  return (
    <div style={{ padding: screens.xs ? 12 : 24, backgroundColor: '#fafafa', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ 
        background: 'linear-gradient(135deg, #8b4513 0%, #a0522d 100%)', 
        color: 'white', 
        padding: screens.xs ? '40px 20px' : '80px 40px', 
        borderRadius: '16px',
        marginBottom: 40,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: 'white',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#8b4513',
            fontWeight: 'bold',
            fontSize: '32px',
            margin: '0 auto 20px'
          }}>
            🏺
          </div>
          <Title level={1} style={{ margin: 0, color: 'white', fontSize: screens.xs ? '2.5rem' : '3.5rem' }}>
            About Mitti Arts
          </Title>
          <Paragraph style={{ 
            color: 'rgba(255,255,255,0.9)', 
            fontSize: screens.xs ? '16px' : '20px', 
            margin: '20px 0 0',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Bridging the gap between traditional pottery craftsmanship and modern business technology. 
            We empower pottery artisans with digital tools to grow their businesses while preserving 
            the ancient art of pottery making.
          </Paragraph>
        </div>
      </div>

      {/* Company Statistics */}
      <Row gutter={[16, 16]} style={{ marginBottom: 40 }}>
        <Col xs={24} sm={12} md={6}>
          <Card style={{ textAlign: 'center', border: '2px solid #8b4513' }}>
            <Statistic
              title="Pottery Businesses Served"
              value={500}
              suffix="+"
              prefix={<TrophyOutlined />}
              valueStyle={{ color: '#8b4513', fontSize: '2rem' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card style={{ textAlign: 'center', border: '2px solid #52c41a' }}>
            <Statistic
              title="Invoices Generated"
              value={25000}
              suffix="+"
              prefix={<BarChartOutlined />}
              valueStyle={{ color: '#52c41a', fontSize: '2rem' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card style={{ textAlign: 'center', border: '2px solid #1890ff' }}>
            <Statistic
              title="Cities Covered"
              value={50}
              suffix="+"
              prefix={<GlobalOutlined />}
              valueStyle={{ color: '#1890ff', fontSize: '2rem' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card style={{ textAlign: 'center', border: '2px solid #fa8c16' }}>
            <Statistic
              title="Happy Artisans"
              value={1200}
              suffix="+"
              prefix={<HeartOutlined />}
              valueStyle={{ color: '#fa8c16', fontSize: '2rem' }}
            />
          </Card>
        </Col>
      </Row>

      {/* Our Story */}
      <Row gutter={[32, 32]} style={{ marginBottom: 40 }}>
        <Col xs={24} lg={12}>
          <Card style={{ height: '100%' }}>
            <Title level={2} style={{ color: '#8b4513' }}>
              <BookOutlined /> Our Story
            </Title>
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
              Founded in 2020, Mitti Arts emerged from a deep appreciation for India's rich pottery tradition 
              and a vision to empower pottery artisans with modern business tools. Our founders, coming from 
              both traditional pottery backgrounds and cutting-edge technology, recognized the need to bridge 
              this gap.
            </Paragraph>
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
              What started as a simple digital invoicing system has evolved into a comprehensive business 
              management platform that serves hundreds of pottery businesses across India. We've helped 
              traditional artisans increase their revenue by up to 300% while maintaining the authenticity 
              of their craft.
            </Paragraph>
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
              Today, Mitti Arts stands as a testament to how technology can preserve and enhance traditional 
              arts and crafts, creating sustainable livelihoods for artisan communities while bringing 
              beautiful pottery to customers worldwide.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card style={{ height: '100%' }}>
            <Title level={2} style={{ color: '#8b4513' }}>
              <RocketOutlined /> Our Mission
            </Title>
            <div style={{ marginBottom: 24 }}>
              <Tag color="#8b4513" style={{ fontSize: '14px', padding: '8px 16px' }}>
                🎯 Empower Artisans
              </Tag>
              <Tag color="#52c41a" style={{ fontSize: '14px', padding: '8px 16px', marginTop: 8 }}>
                🚀 Drive Innovation
              </Tag>
              <Tag color="#1890ff" style={{ fontSize: '14px', padding: '8px 16px', marginTop: 8 }}>
                🌍 Global Reach
              </Tag>
            </div>
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
              <strong>To democratize business technology for pottery artisans</strong> by providing 
              accessible, affordable, and culturally-sensitive digital tools that help them grow their 
              businesses without losing their traditional identity.
            </Paragraph>
            <Divider />
            <Title level={4} style={{ color: '#8b4513' }}>Our Vision</Title>
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
              To become the global platform that connects pottery artisans with customers worldwide, 
              creating a sustainable ecosystem where traditional craftsmanship thrives in the digital age.
            </Paragraph>
          </Card>
        </Col>
      </Row>

      {/* Company Values */}
      <Card style={{ marginBottom: 40 }}>
        <Title level={2} style={{ textAlign: 'center', color: '#8b4513', marginBottom: 32 }}>
          Our Core Values
        </Title>
        <Row gutter={[24, 24]}>
          {values.map((value, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <div style={{ textAlign: 'center', padding: '24px' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: value.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontSize: '24px',
                  color: 'white'
                }}>
                  {value.icon}
                </div>
                <Title level={4} style={{ color: value.color, marginBottom: 8 }}>
                  {value.title}
                </Title>
                <Text style={{ fontSize: '14px', color: '#666' }}>
                  {value.description}
                </Text>
              </div>
            </Col>
          ))}
        </Row>
      </Card>

      {/* Company Timeline */}
      <Row gutter={[32, 32]} style={{ marginBottom: 40 }}>
        <Col xs={24} lg={14}>
          <Card>
            <Title level={2} style={{ color: '#8b4513' }}>
              <TrophyOutlined /> Our Journey
            </Title>
            <Timeline
              mode={screens.xs ? 'left' : 'alternate'}
              items={milestones.map((milestone, index) => ({
                color: index === milestones.length - 1 ? '#52c41a' : '#8b4513',
                children: (
                  <div>
                    <Title level={4} style={{ color: '#8b4513', margin: 0 }}>
                      {milestone.year}
                    </Title>
                    <Title level={5} style={{ margin: '8px 0 4px' }}>
                      {milestone.title}
                    </Title>
                    <Text style={{ color: '#666' }}>
                      {milestone.description}
                    </Text>
                  </div>
                )
              }))}
            />
          </Card>
        </Col>
        <Col xs={24} lg={10}>
          <Card>
            <Title level={2} style={{ color: '#8b4513' }}>
              <TeamOutlined /> Our Team
            </Title>
            <Space direction="vertical" style={{ width: '100%' }} size="large">
              {teamMembers.map((member, index) => (
                <div key={index} style={{ 
                  padding: '16px', 
                  border: '1px solid #f0f0f0', 
                  borderRadius: '8px',
                  background: '#fafafa'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ 
                      fontSize: '32px',
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: '#8b4513',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {member.avatar}
                    </div>
                    <div style={{ flex: 1 }}>
                      <Title level={5} style={{ margin: 0 }}>{member.name}</Title>
                      <Text style={{ color: '#8b4513', fontWeight: 'bold' }}>
                        {member.role}
                      </Text>
                      <br />
                      <Text style={{ fontSize: '12px', color: '#666' }}>
                        {member.experience}
                      </Text>
                    </div>
                  </div>
                </div>
              ))}
            </Space>
          </Card>
        </Col>
      </Row>

      {/* Tech Training & Courses Section */}
      <Card style={{ marginBottom: 40 }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <Title level={2} style={{ color: '#8b4513' }}>
            <SafetyCertificateOutlined /> Tech Training & Professional Courses in India
          </Title>
          <Paragraph style={{ fontSize: '16px', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
            As a technology-driven company, we believe in continuous learning. Here are some of the best 
            tech training programs and professional courses available in India for aspiring developers, 
            data scientists, and tech professionals.
          </Paragraph>
        </div>

        <Row gutter={[24, 24]}>
          {techCourses.map((category, index) => (
            <Col xs={24} lg={12} key={index}>
              <Card 
                size="small" 
                style={{ 
                  border: `2px solid ${category.color}`,
                  borderRadius: '12px'
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 12, 
                  marginBottom: 16 
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: category.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '18px'
                  }}>
                    {category.icon}
                  </div>
                  <Title level={4} style={{ margin: 0, color: category.color }}>
                    {category.category}
                  </Title>
                </div>
                
                <Space direction="vertical" style={{ width: '100%' }} size="small">
                  {category.courses.map((course, courseIndex) => (
                    <div 
                      key={courseIndex}
                      style={{ 
                        padding: '12px',
                        background: '#fafafa',
                        borderRadius: '6px',
                        border: '1px solid #f0f0f0'
                      }}
                    >
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'flex-start',
                        marginBottom: 4
                      }}>
                        <Text strong style={{ color: '#333' }}>{course.name}</Text>
                        <Tag color={category.color} style={{ fontSize: '10px' }}>
                          {course.price}
                        </Tag>
                      </div>
                      <div style={{ fontSize: '12px', color: '#666' }}>
                        <Text>Provider: <strong>{course.provider}</strong></Text>
                        <br />
                        <Text>Duration: <strong>{course.duration}</strong></Text>
                      </div>
                    </div>
                  ))}
                </Space>
              </Card>
            </Col>
          ))}
        </Row>

        <div style={{ 
          textAlign: 'center', 
          marginTop: 32, 
          padding: '24px',
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
          borderRadius: '12px',
          border: '1px solid #1890ff'
        }}>
          <Title level={4} style={{ color: '#1890ff', marginBottom: 16 }}>
            💡 Why We Support Tech Education
          </Title>
          <Paragraph style={{ fontSize: '16px', color: '#666', marginBottom: 16 }}>
            At Mitti Arts, we believe that technology should be accessible to everyone. Just as we're 
            digitizing traditional pottery businesses, we encourage continuous learning and skill 
            development in the tech industry.
          </Paragraph>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <Tag color="#1890ff" style={{ padding: '8px 16px' }}>🚀 Innovation</Tag>
            <Tag color="#52c41a" style={{ padding: '8px 16px' }}>📚 Learning</Tag>
            <Tag color="#fa8c16" style={{ padding: '8px 16px' }}>💼 Career Growth</Tag>
            <Tag color="#722ed1" style={{ padding: '8px 16px' }}>🌟 Excellence</Tag>
          </div>
        </div>
      </Card>

      {/* Call to Action */}
      <Card style={{ 
        textAlign: 'center',
        background: 'linear-gradient(135deg, #8b4513 0%, #a0522d 100%)',
        border: 'none',
        color: 'white'
      }}>
        <Title level={2} style={{ color: 'white', marginBottom: 16 }}>
          Ready to Transform Your Pottery Business?
        </Title>
        <Paragraph style={{ 
          color: 'rgba(255,255,255,0.9)', 
          fontSize: '18px',
          marginBottom: 24,
          maxWidth: '600px',
          margin: '0 auto 24px'
        }}>
          Join hundreds of pottery artisans who have already digitized their businesses with Mitti Arts. 
          Start your journey today and experience the perfect blend of tradition and technology.
        </Paragraph>
        <Space size="large" wrap>
          <Button 
            type="primary" 
            size="large"
            style={{ 
              background: 'white',
              borderColor: 'white',
              color: '#8b4513',
              fontWeight: 'bold',
              height: '48px',
              padding: '0 32px'
            }}
          >
            Get Started Today
          </Button>
          <Button 
            type="default" 
            size="large"
            style={{ 
              background: 'transparent',
              borderColor: 'white',
              color: 'white',
              fontWeight: 'bold',
              height: '48px',
              padding: '0 32px'
            }}
          >
            Contact Us
          </Button>
        </Space>
      </Card>
    </div>
  );
};

export default AboutUs;