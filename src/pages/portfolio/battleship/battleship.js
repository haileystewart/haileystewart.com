import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { battleship, meta } from "../../../content_option";

const Battleship = () => {
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
            <h1 className="display-4 mb-4">{battleship[0].title}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Overview</h3>
          </Col>
          <Col lg="7" className="text-section d-flex align-items-center">
            <div>
              {battleship[0].overview.map((paragraph, index) => (
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
            <div>
              {Object.keys(battleship[0].keyFeatures).map((featureKey, index) => (
                <div key={index} className="section-phase">
                  <h4 className="section-title">{battleship[0].keyFeatures[featureKey].title}</h4>
                  <ul>
                    {battleship[0].keyFeatures[featureKey].details.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Rules of the Game</h3>
          </Col>
          <Col lg="7" className="text-section">
            <table className="table caption-top">
              <tbody>
                {Object.keys(battleship[0].rulesOfTheGame).map((ruleKey, index) => (
                  <tr key={index}>
                    <td className="bold-column">{battleship[0].rulesOfTheGame[ruleKey].title}</td>
                    <td>{battleship[0].rulesOfTheGame[ruleKey].details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
        <video
          src={battleship[0].battleshipDemoVideo}
          autoPlay
          loop
          muted
          controls
          className="video-section"
          style={{ width: "100%", borderRadius: "8px" }}
        />
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Implementation Highlights</h3>
          </Col>
          <Col lg="7" className="text-section">
            <div>
              {Object.keys(battleship[0].implementationHighlights).map((highlightKey, index) => (
                <div key={index} className="section-phase">
                  <h4 className="section-title">{battleship[0].implementationHighlights[highlightKey].title}</h4>
                  <ul>
                    {battleship[0].implementationHighlights[highlightKey].details.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">How It Works</h3>
          </Col>
          <Col lg="7" className="text-section">
            <table className="table caption-top">
              <tbody>
                {Object.keys(battleship[0].howItWorks).map((stepKey, index) => (
                  <tr key={index}>
                    <td className="bold-column">{battleship[0].howItWorks[stepKey].title}</td>
                    <td>{battleship[0].howItWorks[stepKey].details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Learn More</h3>
          </Col>
          <Col lg="7" className="text-section">
            <div>
              <p>{battleship[0].learnMore}</p>
              <a
                href={battleship[0].githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="section-link"
              >
                https://github.com/haileystewart/battleship
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export { Battleship };
