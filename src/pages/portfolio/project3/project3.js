import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { project3, meta } from "../../../content_option";

const Project3 = () => {
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
              <h1 className="display-4 mb-4">{project3.title}</h1>
              <p className="intro-text">
                This was a paper for my graduate class: Advanced Computer Security that I worked on as a group leader. It was written in collaboration with Alec Donald and Amir Stephens.
              </p>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
        <Row className="sec_sp">
        <Col lg="5">
            <h3 className="color_sec py-4">Abstract</h3>
        </Col>
        <Col lg="7" className="text-section d-flex align-items-center">
            <div>
            {project3.abstract.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
            </div>
        </Col>
        </Row>
        <Row className="sec_sp">
                <Col lg="5">
                    <h3 className="color_sec py-4">Keywords</h3>
                </Col>
                <Col lg="7" className="text-section">
                    <table className="table caption-top">
                    <tbody>
                        {project3.keywords.map((keywords, index) => (
                        <tr key={index}>
                            <td className="bold-column">{keywords[0]}</td>
                            <td>{keywords[1]}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </Col>
                </Row>
                <Row className="sec_sp">
        <Col lg="5">
            <h3 className="color_sec py-4">Introduction</h3>
        </Col>
        <Col lg="7" className="text-section d-flex align-items-center">
            <div>
            {project3.introduction.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
            </div>
        </Col>
        </Row>
        <Row className="sec_sp">
        <Col lg="5">
            <h3 className="color_sec py-4">Methodology</h3>
        </Col>
        <Col lg="7" className="text-section">
            <div>
            <p>{project3.methodology.intro}</p>
            {project3.methodology.phases.map((phase, index) => (
                <div key={index} className="section-phase">
                <h4 className="section-title">{phase.title}</h4>
                {phase.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="section-paragraph">{paragraph}</p>
                ))}
                </div>
            ))}
            </div>
        </Col>
        </Row>
        <Row className="sec_sp">
  <Col lg="5">
    <h3 className="color_sec py-4">Results</h3>
  </Col>
  <Col lg="7" className="text-section">
    <div>
      {project3.results.phases.map((phase, index) => (
        <div key={index} className="section-phase">
          <h4 className="section-title">{phase.title}</h4>
          {phase.paragraphs.map((paragraph, pIndex) => (
            <React.Fragment key={pIndex}>
              <p className="section-paragraph">{paragraph}</p>
              {pIndex === 1 && phase.images?.[0] && (
                <img
                  src={phase.images[0].src}
                  alt={phase.images[0].alt}
                  className="result-image"
                />
              )}
              {pIndex === 2 && phase.images?.[1] && (
                <img
                  src={phase.images[1].src}
                  alt={phase.images[1].alt}
                  className="result-image"
                />
              )}
              {pIndex === 3 && phase.images?.[2] && (
                <img
                  src={phase.images[2].src}
                  alt={phase.images[2].alt}
                  className="result-image"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  </Col>
</Row>


        <Row className="sec_sp">
        <Col lg="5">
            <h3 className="color_sec py-4">{project3.comparison.title}</h3>
        </Col>
        <Col lg="7" className="text-section">
            <div>
            <p>{project3.comparison.intro}</p>
            <table className="table caption-top">
                <thead>
                <tr>
                    {project3.comparison.table[0].map((header, index) => (
                    <th key={index}>{header}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {project3.comparison.table.slice(1).map((row, rowIndex) => (
                    <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>
            {project3.comparison.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
            </div>
        </Col>
        </Row>
        <Row className="sec_sp">
        <Col lg="5">
            <h3 className="color_sec py-4">{project3.discussion.title}</h3>
        </Col>
        <Col lg="7" className="text-section">
            <div>
            {project3.discussion.sections.map((section, index) => (
                <div key={index} className="section-phase">
                <h4 className="section-title">{section.heading}</h4>
                {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="section-paragraph">{paragraph}</p>
                ))}
                </div>
            ))}
            </div>
        </Col>
        </Row>
        <Row className="sec_sp">
        <Col lg="5">
            <h3 className="color_sec py-4">{project3.conclusion.title}</h3>
        </Col>
        <Col lg="7" className="text-section">
            <div>
            {project3.conclusion.paragraphs.map((paragraph, index) => (
                <p key={index} className="section-paragraph">{paragraph}</p>
            ))}
            </div>
        </Col>
        </Row>
        <Row className="sec_sp">
        <Col lg="5">
            <h3 className="color_sec py-4">Appendices</h3>
        </Col>
        <Col lg="7" className="text-section">
            <div>
            {project3.appendices.sections.map((section, index) => (
                <div key={index} className="section-phase">
                <h4 className="section-title">{section.title}</h4>
                <p className="section-paragraph">{section.description}</p>
                <ul>
                    {section.references.map((reference, refIndex) => (
                    <li key={refIndex}>
                        <a href={reference.link} target="_blank" rel="noopener noreferrer" className="section-link">
                        {reference.text}
                        </a>
                    </li>
                    ))}
                </ul>
                </div>
            ))}
            </div>
        </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export { Project3 };
