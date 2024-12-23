import React, { useState, useEffect } from 'react';
import './style.css';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { Client, Message } from 'paho-mqtt';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [client, setClient] = useState(null);

  const mqttConfig = {
    host: "lightcoresystems.com", port: 9001,
    clientId: "clientId-" + Math.random().toString(16).substr(2, 8),
    username: "lightcore", password: "coco2121"
  };

  useEffect(() => {
    const mqttClient = new Client(mqttConfig.host, mqttConfig.port, mqttConfig.clientId);

    mqttClient.onConnectionLost = (responseObject) => {
      if (responseObject.errorCode !== 0) {
       setStatus("Email connection lost.");
      }
    };
    mqttClient.connect({
      onSuccess: () => {
        setStatus("Connected to Email broker.");
        setClient(mqttClient);
      },
      onFailure: (error) => {
        setStatus("Failed to connect to Email.");
      },
      userName: mqttConfig.username,
      password: mqttConfig.password,
      useSSL: false,
    });

    return () => {
      if (mqttClient.isConnected()) {
        mqttClient.disconnect();
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email') {
      validateEmail(value);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError) {
      setStatus('Please correct the errors before submitting.');
      return;
    }

    if (!client || !client.isConnected()) {
      setStatus('Email client is not connected.');
      return;
    }

    setIsSubmitting(true);
    setStatus('Sending email...');

    try {
      const topic = "hailey/contact";
      const payload = JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      const mqttMessage = new Message(payload);
      mqttMessage.destinationName = topic;
      client.send(mqttMessage);

      setStatus('Email sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Error occurred while sending email.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }

  return (
    <Container>
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Contact Me</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lg="12">
          <Alert variant={status.includes("success") ? "success" : "danger"} className={`rounded-0 co_alert ${status ? "d-block" : "d-none"}`} onClose={() => setStatus('')} dismissible>
            <p className="my-0">{status}</p>
          </Alert>
        </Col>
        <Col lg="7" className="d-flex align-items-center">
          <form onSubmit={handleSubmit} className="contact__form w-100">
            <Row>
              <Col lg="6" className="form-group">
                <label htmlFor="name">Name:</label>
                <input className="form-control" id="name" name="name" placeholder="Name" value={formData.name} type="text" required onChange={handleChange} disabled={isSubmitting} />
              </Col>
              <Col lg="6" className="form-group">
                <label htmlFor="email">Email:</label>
                <input className="form-control" id="email" name="email" placeholder="Email" type="email" value={formData.email} required onChange={handleChange} disabled={isSubmitting} />
                {emailError && <p className="error">{emailError}</p>}
              </Col>
            </Row>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea className="form-control" id="message" name="message" placeholder="Message" rows="5" value={formData.message} onChange={handleChange} required disabled={isSubmitting}></textarea>
            </div>
            <button className="btn ac_btn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact Me</title>
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href="mailto:haileyjordanstewart@gmail.com">haileyjordanstewart@gmail.com</a>
              <br />
              <p>
                <strong>Phone:</strong> (913) 777-6785
              </p>
            </address>
            <p>
              I'm always excited to hear about new opportunities or collaborate on creative projects. Whether you have a question, a proposal, or simply want to say hello, don't hesitate to reach out. My inbox is always open and I strive to reply promptly.
            </p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form onSubmit={handleSubmit} className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    type="text"
                    required
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    required
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  {emailError && <p className="error">{emailError}</p>}
                </Col>
              </Row>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button className="btn ac_btn" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
}

export default ContactUs;