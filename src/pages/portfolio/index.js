import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Portfolio = () => {
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
          {dataportfolio.map((data, i) => (
            <div key={i} className="portfolio-item">
              <Link to={`/portfolio/${data.link}`}>
                <h2 className="portfolio-title">{data.title}</h2>
                <img src={data.img} alt={`Project ${i + 1}`} className="portfolio-image" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
