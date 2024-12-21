import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Portfolio = () => {
  const sortedPortfolio = dataportfolio.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg={8}>
            <h1 className="display-4 mb-4">Portfolio</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="portfolio-grid">
          {sortedPortfolio.map((data, i) => (
            <div key={i} className="portfolio-item">
              <hr className="t_border my-4 ml-0 text-left" />
              <div className="portfolio-content">
                <div className="portfolio-header">
                  <h2 className="portfolio-title">
                    <Link to={`/portfolio/${data.link}`}>{data.title}</Link>
                  </h2>
                  <p className="portfolio-description">{data.description}</p>
                </div>
                  {data.date ? (
                    <span className="portfolio-date">{data.date}</span>
                  ) : (
                    <span className="portfolio-date">No Date Provided</span>
                  )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
