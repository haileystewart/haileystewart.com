import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { project2 } from "../../../content_option";
import tcpdump_command_execution from "../../../assets/images/tcpdump_command_execution.png";
import wireshark_packet_analysis from "../../../assets/images/wireshark_packet_analysis.png";
import python_script_execution from "../../../assets/images/python_script_execution.png";

const images = {
  "tcpdump_command_execution": tcpdump_command_execution,
  "wireshark_packet_analysis": wireshark_packet_analysis,
  "python_script_execution": python_script_execution
};

const Project2 = () => {
  const [show, setShow] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  
  const handleClose = () => setShow(false);
  const handleShow = (src) => {
    setImageSrc(src);
    setShow(true);
  };

  return (
    <HelmetProvider>
      <Container className="About-header" style={{ fontSize: '16px' }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | Project 2</title>
          <meta name="description" content="Network traffic analysis project overview and details." />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Network Traffic Analysis</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        {project2.map((section, index) => (
          <Row className="sec_sp" key={index}>
            <Col lg="5">
              <h3 className="color_sec py-4">{section.section}</h3>
            </Col>
            <Col lg="7" className="text-section">
              {Array.isArray(section.content) ? (
                ['Objectives', 'Tools and Technologies', 'Skills Demonstrated'].includes(section.section) ? (
                  <table className="table caption-top">
                    <tbody>
                      {section.content.map((content, idx) => (
                        Array.isArray(content) ? (
                          <tr key={idx}>
                            <td className="bold-column">{content[0]}</td>
                            <td>{content[1]}</td>
                          </tr>
                        ) : (
                          <tr key={idx}>
                            <td colSpan="2">{content}</td>
                          </tr>
                        )
                      ))}
                    </tbody>
                  </table>
                ) : (
                  section.content.map((content, idx) => (
                    typeof content === 'string' ? <p key={idx}>{content}</p> : (
                      <div key={idx} className="mb-4">
                        <p><strong>{content.title}</strong></p>
                        {content.command && <p>Command: <span style={{ color: 'var(--text-color-3)' }}>{content.command}</span></p>}
                        {content.filter && <p>Filter: <span style={{ color: 'var(--text-color-3)' }}>{content.filter}</span></p>}
                        {content.scriptCommand && <p>Script Command: <span style={{ color: 'var(--text-color-3)' }}>{content.scriptCommand}</span></p>}
                        {content.cronJob && <p>Cron Job: <span style={{ color: 'var(--text-color-3)' }}>{content.cronJob}</span></p>}
                        {content.steps && (
                          <ul>
                            {content.steps.map((step, stepIdx) => (
                              <li key={stepIdx}>{step}</li>
                            ))}
                          </ul>
                        )}
                        {content.screenshot && (
                          <img 
                            src={images[content.screenshot]} 
                            alt={`${content.title} screenshot`} 
                            className="img-fluid clickable-image" 
                            onClick={() => handleShow(images[content.screenshot])}
                            style={{ cursor: 'pointer' }}
                          />
                        )}
                      </div>
                    )
                  ))
                )
              ) : (
                <p>{section.content}</p>
              )}
            </Col>
          </Row>
        ))}
        
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Body className="p-0 modal-body-custom">
            <img 
              src={imageSrc} 
              alt="Expanded view" 
              className="img-fluid expanded-image"
            />
          </Modal.Body>
        </Modal>
      </Container>
    </HelmetProvider>
  );
};

export { Project2 };
