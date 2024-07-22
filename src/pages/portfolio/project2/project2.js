import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

const meta = {
  title: "Network Traffic Monitoring and Analysis",
  description: "Details about the Network Traffic Monitoring and Analysis project"
};

const homelab = {
    title: "Overview",
    title_description1: "",
    title_description2: "",
    objectives: "Objectives",
    toolsTech: "Tools and Technologies",
    config: "Setup and Configuration",
    challenges: "Challenges",
    challenges_description: "",
    learning: "Learning",
    learning_description: "",
    outcomes: "Outcomes and Reflection",
    outcomes_description: "",
    skills: "Skills Demonstrated"
};

const homelab_obj = [
    {
        title: "Practical Skill Application:",
        description: "",
    },
    {
        title: "Skill Expansion:",
        description: "",
    },
    {
        title: "Continuous Learning:",
        description: "",
    },
];

const homelab_tools = [
    {
        name: "Kali Linux",
        value: 85,
    },
    {
        name: "Oracle VM VirtualBox",
        value: 90,
    },
    {
        name: "Wireshark",
        value: 75,
    },
];

const homelab_skills = [
    {
        index: "Network Configuration and Security:",
        item: [
            "",
    ]},
    {
        index: "System Administration:",
        item: [
            "",
    ]},
    {
        index: "Knowledge of Cybersecurity Principles:",
        item: [
            "",
    ]},
    {
        index: "Technical Troubleshooting:",
        item: [
            "",
    ]},
    {
        index: "Security Best Practices",
        item: [
            "",
    ]},
];

export const Project2 = () => {
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
              <h1 className="display-4 mb-4">Network Traffic Monitoring and Analysis</h1>{" "}
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
          <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{homelab.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{homelab.title_description1}</p>
              <p>{homelab.title_description2}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{homelab.objectives}</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {homelab_obj.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.title}</th>
                      <td>{data.description}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{homelab.toolsTech}</h3>
          </Col>
          <Col lg="7">
            {homelab_tools.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        {/*
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{homelab.config}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <ul>
              {homelab_config.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Col>
        </Row>
        */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{homelab.challenges}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{homelab.challenges_description}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{homelab.learning}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{homelab.learning_description}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{homelab.outcomes}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{homelab.outcomes_description}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{homelab.skills}</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {homelab_skills.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.index}</th>
                      <td>{data.item}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};