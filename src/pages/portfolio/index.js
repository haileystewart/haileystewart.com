import React, { useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Portfolio = () => {
  useEffect(() => {
    document.body.classList.add("portfolio-page");
    return () => {
      document.body.classList.remove("portfolio-page");
    };
  }, []);

  return (
<HelmetProvider>
  {/* ✅ Wrapper to Center Content */}
  <div className="portfolio-wrapper">
    {/* ✅ Title Section */}
    <Row className="About-header">
      <Col lg="8">
        <h1 className="display-4 mb-4">Portfolio</h1>
        <hr className="t_border my-4 ml-0 text-left" />
      </Col>
    </Row>

    {/* ✅ Portfolio Grid */}
    <div className="portfolio-container">
      {dataportfolio.map((data, i) => (
        <div key={i} className="portfolio-block">
          <Link to={`/portfolio/${data.link}`} className="portfolio-link">
            <div 
              className="portfolio-card" 
              style={{ backgroundColor: data.color }}
            >
              <h2 className="portfolio-heading">{data.title}</h2>
              <p className="portfolio-text">{data.description}</p>
              <span className="portfolio-date">{data.date}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
</HelmetProvider>

  );
};
