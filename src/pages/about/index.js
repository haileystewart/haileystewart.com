import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { about, meta } from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <div className="content-wrapper">
        {/* Hero Section - Combines Scrolling Title & Text Box */}
        <div className="hero-section">
          {/* Scrolling Title Animation */}
          <div className="scrolling-title">
            <div className="scrolling-text">
              <span>ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY STEWART </span>
              <span>ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY STEWART </span>
            </div>
          </div>

          {/* Text Box - Now Part of the Hero Section */}
          <div className="about-text-box">
            <p>
              Cybersecurity is often viewed as purely technical, but I see it as a field that blends logic, creativity, and problem-solving. Just as design focuses on aesthetics and functionality, security requires a balance between resilience and usability. I enjoy tackling security challenges with an analytical yet creative mindset, ensuring that solutions are both effective and adaptable. Whether it’s cloud security, threat intelligence, incident response, or security architecture, I find satisfaction in uncovering vulnerabilities and building strong, thoughtfully designed defenses.
            </p>
            <p>
              Beyond technical problem-solving, this website serves as a creative space where I can present my work in an aesthetic and engaging way. Cybersecurity is often seen as a highly technical field, but I believe there is an art to securing systems and designing defenses that are both effective and elegant. This portfolio is a reflection of my journey—one where I continue to learn, innovate, and explore the evolving landscape of cybersecurity while showcasing my work in a way that resonates with both technical and non-technical audiences.
            </p>
          </div>
        </div>

        {/* Section: Cybersecurity Strategy */}
        <div className="section-container">
          
          {/* Title Section */}
          <h2 className="about-section-title">
            Cybersecurity Strategy, <br />
            Threat Intelligence <span className="subtext">Adversary Emulation</span>, <br />
            Incident Response <span className="subtext">Digital Forensics</span>, <br />
            Risk Assessment, <br />
            Security Architecture and Validation, <br />
            Cloud Security & Governance.
          </h2>

          {/* Description Section */}
          <div className="about-section-text">
            <p>
              I approach security challenges by identifying and exploring issues from both a user-centered perspective and a business-driven approach. Effective solutions require the right opportunities, and with a well-aligned security strategy, organizations can proactively address risks while strengthening their ability to detect, respond to, and mitigate threats.
            </p>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="certifications-section">
          <p className="certifications-intro">
            While my goals are centered on continuous learning and growth, earning industry certifications reinforces my commitment to cybersecurity and validates my skills in protecting and securing digital environments.
          </p>

          {/* Certifications Table */}
          <table className="certifications-table">
            <tbody>
              <tr>
                <td>AWS Certified Cloud Practitioner</td>
                <td>Amazon Web Services</td>
                <td>01/02/2025</td>
              </tr>
              {/* 
              <tr>
                <td>Security+</td>
                <td>CompTIA</td>
                <td>06/03/2021</td>
              </tr>
              <tr>
                <td>Certified in Cybersecurity</td>
                <td>(ISC)²</td>
                <td>06/03/2023</td>
              </tr>
              <tr>
                <td>AWS Solutions Architect</td>
                <td>Amazon Web Services</td>
                <td>06/03/2023</td>
              </tr>
              */}            
              </tbody>
          </table>
        </div>

        {/* Work Experience Section */}
        <div className="work-experience-section">
          
          {/* Header Row */}
          <div className="work-experience-header">
            <h2 className="work-title">
              Each role I've taken on has strengthened my ability to analyze threats, respond to incidents, and enhance security measures in real-world environments.
            </h2>
            <div className="work-column">
              <p className="work-subtitle">
                A chronological look at my hands-on experience in cybersecurity, from university to professional roles.
              </p>

              {/* Move Timeline Inside the Same Column */}
              <div className="work-timeline">
                <div className="timeline-container">
                  <div className="timeline-line"></div>
                  <div className="timeline-content">
                    <div className="timeline-item">
                      <div className="timeline-left"><span className="timeline-number">01</span></div>
                      <div className="timeline-right">
                        <h4 className="timeline-title">Security Operations Intern, SelectQuote</h4>
                        <p className="timeline-description">
                          Executed secure offboarding procedures, including absolute cryptographic wipe processes, to ensure compliance with security policies. Strengthened identity and access management by cleaning and hardening Active Directory, deploying SentinelOne endpoint protection, and managing Governance, Risk, and Compliance (GRC) operations through Onspring.
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-left"><span className="timeline-number">02</span></div>
                      <div className="timeline-right">
                        <h4 className="timeline-title">IT Infrastructure Intern, Wi-Tronix</h4>
                        <p className="timeline-description">
                          Designed and demonstrated an incident response orchestration framework to enhance cybersecurity readiness. Improved network security by refining firewall and NAT rule configurations, implementing AWS security recommendations, and performing systematic code upgrades on Juniper switches to optimize security and performance.
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item last-item">
                      <div className="timeline-left"><span className="timeline-number">03</span></div>
                      <div className="timeline-right">
                        <h4 className="timeline-title">Bachelors in Computer Science, Illinois Institute of Technology</h4>
                        <p className="timeline-description">
                          Specializations in Information Security and Distributed and Cloud Computing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience Stats */}
          <div className="work-stats">
            <div className="stat-item">
              <h5 className="stat-title-left">Years of Experience</h5>
              <h2 className="stat-number">2</h2>
            </div>
            <div className="stat-item-middle">
              <h5 className="stat-title">Courses Completed</h5>
              <h2 className="stat-number">13</h2>
            </div>
            <div className="stat-item-right">
              <h5 className="stat-title">Certifications Earned</h5>
              <h2 className="stat-number">1</h2>
            </div>
          </div>

        </div>

        {/* Technical Skills Section */}
        <div className="technical-skills-section">
          
          {/* Left Column - Skills Table */}
          <div className="skills-table-container">
            <table className="skills-table">
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Security Tools</td>
                  <td>Proficient in SIEM, endpoint protection, and log management solutions to detect, analyze, and mitigate security threats effectively.</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Threat Intelligence</td>
                  <td>Experienced in malware analysis, digital forensics, and adversary emulation, leveraging data-driven insights to identify and counteract cyber threats.</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Network Security</td>
                  <td>Skilled in traffic analysis, VPN configurations, and firewall management, ensuring secure network operations and proactive risk mitigation.</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Cloud Security</td>
                  <td>Knowledgeable in AWS and Azure security best practices, implementing cloud security measures to safeguard data and infrastructure.</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Forensic Tools</td>
                  <td>Utilizes Wireshark and disk/memory forensics tools to conduct in-depth investigations and analyze security incidents.</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Programming Languages</td>
                  <td>Proficient in Python, Bash, SQL, and PowerShell, applying scripting and automation to enhance security processes.</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Operating Systems</td>
                  <td>Experienced in Linux/Unix, Windows, and macOS, managing and securing diverse environments across multiple platforms.</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Virtualization and Containerization</td>
                  <td>Familiar with VMware, VirtualBox, and container security, ensuring secure deployment and management of virtualized environments.</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Version Control</td>
                  <td>Utilizes Git and GitHub for secure code management, collaboration, and version tracking in cybersecurity projects.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Right Column - Title & Subtitle */}
          <div className="skills-text">
            <h2 className="skills-title">
              A diverse set of tools and technologies utilized to analyze threats, secure systems, and enhance cybersecurity resilience.
            </h2>
            <p className="skills-subtitle">
              From security tools to programming languages, each skill contributes to building, protecting, and optimizing secure environments.
            </p>
          </div>

        </div>
      </div>
      </Container>
    </HelmetProvider>
  );
};
