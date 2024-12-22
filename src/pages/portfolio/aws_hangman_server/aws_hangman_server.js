import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { aws_hangman_server, meta } from "../../../content_option";

const AWSHangmanServer = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">{aws_hangman_server.title}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Overview</h3>
          </Col>
          <Col lg="7" className="text-section d-flex align-items-center">
            <div>
              <p>{aws_hangman_server.overview}</p>
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
                {aws_hangman_server.keyFeatures.map((feature, index) => (
                  <tr key={index}>
                    <td>{feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Technical Details</h3>
          </Col>
          <Col lg="7" className="text-section">
            <table className="table caption-top">
              <tbody>
                {aws_hangman_server.technicalDetails.map((technicalDetails, index) => (
                  <tr key={index}>
                    <td className="bold-column">{technicalDetails[0]}</td>
                    <td>{technicalDetails[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills Demonstrated</h3>
          </Col>
          <Col lg="7" className="text-section">
            <table className="table caption-top">
              <tbody>
                {aws_hangman_server.skills.map((skill, index) => (
                  <tr key={index}>
                    <td className="bold-column">{skill[0]}</td>
                    <td>{skill[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Project Flow</h3>
          </Col>
          <Col lg="7" className="text-section d-flex align-items-center">
            <div>
              {aws_hangman_server.projectFlow.map((paragraph, index) => (
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
              {aws_hangman_server.implementation.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export { AWSHangmanServer };