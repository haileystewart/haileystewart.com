import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <div className="home_sec"> {/* Fixed className here */}
          {/* Large Heading Text */}
          <div className="home_text">
            <p>
              a <span>cybersecurity analyst</span> with a passion for{" "}
              <span>threat analyst</span>, <span>incident response</span>, and{" "}
              <span>cloud security</span>.
            </p>
          </div>

          {/* Right-aligned Paragraph */}
          <div className="home_description">
            <p>
              I'm Hailey, and I strive to uncover simple yet powerful solutions
              in my work—solutions that enhance security resilience and mitigate
              emerging threats. My expertise spans from security architecture
              and digital forensics to proactive threat intelligence and cloud
              security strategies. I am particularly interested in identifying
              vulnerabilities and implementing defenses that fortify
              organizations against cyber risks.
            </p>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="nav_grid">
          <Link to="/portfolio" className="nav_item">PORTFOLIO</Link>
          <Link to="/about" className="nav_item">ABOUT</Link>
          <Link to="/photography" className="nav_item">PHOTOGRAPHY</Link>
          <Link to="/feed" className="nav_item">FEED</Link>
          <Link to="/contact" className="nav_item">CONTACT</Link>
        </div>

      </section>
    </HelmetProvider>
  );
};
