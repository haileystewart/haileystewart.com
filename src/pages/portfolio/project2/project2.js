import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { project2, meta } from "../../../content_option";

const Project2 = () => {
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
            <h1 className="display-4 mb-4">{project2.title}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Overview</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{project2.overview}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Purpose</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {project2.purpose.map((purpose, index) => (
                  <tr key={index}>
                    <td>{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Key Goals</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {project2.keyGoals.map((goal, index) => (
                  <tr key={index}>
                    <td>{goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Scope</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {project2.scope.map((scope, index) => (
                  <tr key={index}>
                    <th scope="row">{scope.name}</th>
                    <td>{scope.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Tools and Technologies</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {project2.toolsTech.map((tool, index) => (
                  <tr key={index}>
                    <th scope="row">{tool.name}</th>
                    <td>{tool.description}</td>
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
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {project2.skills.map((skill, index) => (
                  <tr key={index}>
                    <th scope="row">{skill.name}</th>
                    <td>{skill.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Process and Methodology</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{project2.methodology}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export { Project2 };
