import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/sections/Footer';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interest: 'training'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      interest: 'training'
    });
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Our Location',
      details: ['Plot No. 47, KPHB Phase 1', 'Kukatpally Housing Board', 'Hyderabad, Telangana 500072']
    },
    {
      icon: '📞',
      title: 'Phone Numbers',
      details: ['+91 9876543210', '+91 8765432109', 'Available 9 AM - 7 PM IST']
    },
    {
      icon: '✉️',
      title: 'Email Addresses',
      details: ['info@datenwork.com', 'careers@datenwork.com', 'support@datenwork.com']
    },
    {
      icon: '🕒',
      title: 'Business Hours',
      details: ['Monday - Friday: 9 AM - 7 PM', 'Saturday: 10 AM - 5 PM', 'Sunday: Closed']
    }
  ];

  const faqs = [
    {
      question: 'How long are the training programs?',
      answer: 'Our training programs range from 10 to 16 weeks depending on the course complexity and depth. Full-stack programs are typically 16 weeks, while specialized courses range from 10-14 weeks.'
    },
    {
      question: 'Do you provide job placement assistance?',
      answer: 'Yes! We offer 100% job placement guarantee. Our dedicated placement team works with you throughout the program and continues support until you land your dream job in top companies across India and globally.'
    },
    {
      question: 'What are the payment options available?',
      answer: 'We offer flexible payment plans including upfront payment discounts, monthly installments (EMI), and income share agreements (ISA) where you pay after getting placed. We also accept UPI, card payments, and bank transfers.'
    },
    {
      question: 'Can I attend classes while working full-time?',
      answer: 'Absolutely! We offer both full-time and part-time schedules. Our evening (6 PM - 9 PM) and weekend batches are designed specifically for working professionals in Hyderabad and surrounding areas.'
    },
    {
      question: 'What kind of support do you provide during the course?',
      answer: 'You get dedicated mentorship, 24/7 doubt resolution via WhatsApp/Slack, peer learning groups, regular assessments, mock interviews, and career counseling throughout your journey with us.'
    },
    {
      question: 'Do you provide hostel or accommodation facilities?',
      answer: 'While we don\'t provide direct accommodation, we can help you connect with nearby PG accommodations and shared apartments in KPHB and Kukatpally areas. Our campus is well-connected by metro and bus services.'
    }
  ];

  return (
    <div className="contact-page">
      <Header />
      
      <section className="contact-hero" style={{ padding: '120px 0 80px', background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', color: '#1a202c' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '24px', color: '#1a202c' }}>Get In Touch</h1>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#4a5568' }}>
              Ready to transform your career? We're here to help you every step of the way. 
              Visit our Hyderabad campus or reach out to us for course information, career guidance, or any questions you might have.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 968 ? '1fr' : '1fr 1fr', gap: '60px', alignItems: 'flex-start' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#1a202c' }}>Send Us a Message</h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', gap: '20px' }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      padding: '15px 20px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease'
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      padding: '15px 20px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease'
                    }}
                  />
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', gap: '20px' }}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone (+91)"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      padding: '15px 20px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease'
                    }}
                  />
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    style={{
                      padding: '15px 20px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      background: 'white'
                    }}
                  >
                    <option value="training">Training Programs</option>
                    <option value="placement">Job Placement</option>
                    <option value="consultancy">IT Consultancy</option>
                    <option value="partnership">Partnership</option>
                    <option value="campus-visit">Campus Visit</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  style={{
                    padding: '15px 20px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                />

                <textarea
                  name="message"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  style={{
                    padding: '15px 20px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.3s ease'
                  }}
                />

                <Button type="submit" variant="primary" size="large" style={{ alignSelf: 'flex-start' }}>
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#1a202c' }}>Contact Information</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                {contactInfo.map((info, index) => (
                  <Card key={index} style={{ padding: '25px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                      <div style={{ fontSize: '2rem', minWidth: '50px' }}>{info.icon}</div>
                      <div>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: '#1a202c' }}>{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} style={{ margin: '4px 0', color: '#4a5568', fontSize: '1rem' }}>{detail}</p>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

             
              <div style={{ marginTop: '40px' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#1a202c' }}>Follow Us</h3>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <a href="https://facebook.com/datenwork" target="_blank" rel="noopener noreferrer" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: '50px', 
                    height: '50px', 
                    background: '#4267B2', 
                    color: 'white', 
                    borderRadius: '12px',
                    fontSize: '1.5rem',
                    textDecoration: 'none'
                  }}>📘</a>
                  <a href="https://twitter.com/datenwork" target="_blank" rel="noopener noreferrer" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: '50px', 
                    height: '50px', 
                    background: '#1DA1F2', 
                    color: 'white', 
                    borderRadius: '12px',
                    fontSize: '1.5rem',
                    textDecoration: 'none'
                  }}>🐦</a>
                  <a href="https://linkedin.com/company/datenwork" target="_blank" rel="noopener noreferrer" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: '50px', 
                    height: '50px', 
                    background: '#0077B5', 
                    color: 'white', 
                    borderRadius: '12px',
                    fontSize: '1.5rem',
                    textDecoration: 'none'
                  }}>💼</a>
                  <a href="https://instagram.com/datenwork" target="_blank" rel="noopener noreferrer" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: '50px', 
                    height: '50px', 
                    background: '#E4405F', 
                    color: 'white', 
                    borderRadius: '12px',
                    fontSize: '1.5rem',
                    textDecoration: 'none'
                  }}>📷</a>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    width: '50px', 
                    height: '50px', 
                    background: '#25D366', 
                    color: 'white', 
                    borderRadius: '12px',
                    fontSize: '1.5rem',
                    textDecoration: 'none'
                  }}>💬</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#f7fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: '#1a202c' }}>Frequently Asked Questions</h2>
            <p style={{ fontSize: '1.1rem', color: '#4a5568', maxWidth: '600px', margin: '0 auto' }}>
              Find answers to common questions about our programs and services
            </p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <Card key={index} style={{ marginBottom: '20px', padding: '30px' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#1a202c', fontWeight: '600' }}>
                  {faq.question}
                </h3>
                <p style={{ color: '#4a5568', lineHeight: '1.7', fontSize: '1rem' }}>
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', color: 'white' }}>Ready to Get Started?</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto 40px' }}>
              Don't wait! Your dream career in tech is just one conversation away. Visit our Hyderabad campus or schedule a free consultation call today.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="secondary" size="large">Schedule Campus Visit</Button>
              <Button variant="outline" size="large" style={{ borderColor: 'white', color: 'white' }}>View All Courses</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;