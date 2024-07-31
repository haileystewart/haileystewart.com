import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { about, meta } from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{about.dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{about.dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Experience</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {about.worktimeline.map((data, i) => (
                  <tr key={i}>
                    <th scope="row">{data.jobtitle}</th>
                    <td>{data.where}</td>
                    <td>{data.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="7">
            <div className="education-section">
              {about.education.map((edu, i) => (
                <div className="education-item" key={i}>
                  <p><strong>{edu.institution}</strong></p>
                  <p><strong>{edu.degree}</strong>, <strong>Computer Science</strong> | {edu.date}</p>
                  {edu.specialization && <p className="education-specialization">{edu.specialization}</p>}
                </div>
              ))}
            </div>
          </Col>
        </Row>
        {/* <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Certifications</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {about.certifications.map((cert, i) => (
                  <tr key={i}>
                    <td>{cert.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row> */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Technical Skills</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {about.technicalSkills.map((skill, i) => (
                  <tr key={i}>
                    <th scope="row">{skill.category}</th>
                    <td>{skill.skills.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
