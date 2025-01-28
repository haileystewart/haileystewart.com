import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { sha256_rsa_implementation, meta } from "../../../content_option";

const CryptographicHashingRDA = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">{sha256_rsa_implementation.title}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Overview</h3>
          </Col>
          <Col lg="7" className="text-section d-flex align-items-center">
            <div>
              {sha256_rsa_implementation.overview.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Key Features</h3>
          </Col>
          <Col lg="7" className="text-section">
            <table className="table caption-top">
              <tbody>
                {sha256_rsa_implementation.keyFeatures.map((feature, index) => (
                  <tr key={index}>
                    <td>
                      <strong>{feature.title}</strong>
                      <ul>
                        {feature.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Technical Skills</h3>
          </Col>
          <Col lg="7" className="text-section">
            <table className="table caption-top">
              <tbody>
                {sha256_rsa_implementation.technicalSkills.map((skill, index) => (
                  <tr key={index}>
                    <td className="bold-column">{skill.category}</td>
                    <td>{skill.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Code Explanation</h3>
          </Col>
          <Col lg="7" className="text-section">
            <table className="table caption-top">
              <tbody>
                {sha256_rsa_implementation.codeExplanation.map((code, index) => (
                  <tr key={index}>
                    <td>
                      <strong>{code.title}</strong>
                      <p>
                        <strong>Code File:</strong> {code.code}
                      </p>
                      <p>{code.description}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Histogram Explanation</h3>
          </Col>
          <Col lg="7" className="text-section">
            <div>
              {sha256_rsa_implementation.histogramExplanation.map((histogram, index) => (
                <p key={index}>
                  <strong>{histogram.title}</strong>
                  <br />
                  {histogram.description}
                </p>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Project Flow</h3>
          </Col>
          <Col lg="7" className="text-section d-flex align-items-center">
            <div>
              {sha256_rsa_implementation.projectFlow.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Implementation</h3>
          </Col>
          <Col lg="7" className="text-section d-flex align-items-center">
            <div>
              {sha256_rsa_implementation.implementation.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Conclusion</h3>
          </Col>
          <Col lg="7" className="text-section d-flex align-items-center">
            <div>
              {sha256_rsa_implementation.conclusion.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export { CryptographicHashingRDA };
