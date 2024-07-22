import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

const meta = {
  title: "Home Lab Configuration",
  description: "Details about the Home Lab Configuration project"
};

const homelab = {
  title: "Overview",
  title_description1: "The Cybersecurity Home Lab Project was conceptualized as a practical initiative to create a robust and scalable virtual environment tailored for the exploration and enhancement of cybersecurity skills. This project encompasses the end-to-end process of designing, implementing, and managing a network of virtual machines, each serving a distinct role within a simulated information security framework.",
  title_description2: "At the core of the project lies a suite of strategically selected open-source and commercial software tools, integrated to mimic a variety of real-world IT infrastructures. The lab is engineered to facilitate a wide array of security exercises ranging from vulnerability assessments and network traffic analysis to intrusion detection and incident response drills.",
  objectives: "Objectives",
  toolsTech: "Tools and Technologies",
  config: "Setup and Configuration",
  challenges: "Challenges",
  challenges_description: "Creating my Home Lab Configuration was a journey marked by significant challenges, each playing a crucial role in my learning. Overcoming hardware limitations was my first major hurdle; running several virtual machines (VMs) simultaneously strained my initial setup, leading to performance issues. Upgrading to higher RAM and an SSD resolved these problems, highlighting the importance of robust hardware for effective virtualization. Another key challenge was setting up a virtual network to mirror real-world conditions, which demanded extensive research and experimentation to achieve seamless VM communication while securing my host system. This process deepened my understanding of network configurations, especially NAT and internal networking, and underscored the critical role of firewalls in network security.",
  learning: "Learning",
  learning_description: "Initially daunting challenges in my Home Lab Configuration project transformed into essential learning experiences, significantly enhancing my skills. Hardening the security of my lab and resolving software compatibility issues developed my problem-solving abilities and systematic approach to complex tasks, like firewall configuration and system updates. These tasks not only fine-tuned my technical knowledge but also highlighted the need for adaptability and ongoing learning in the dynamic field of cybersecurity. My proficiency with VirtualBox and understanding of network security deepened as I navigated these challenges, preparing me effectively for real-world IT and cybersecurity scenarios. Ultimately, this journey significantly improved my research, troubleshooting, and system administration capabilities, equipping me with practical and versatile skills.",
  outcomes: "Outcomes and Reflection",
  outcomes_description: "The completion of my Home Lab Configuration project represents a significant achievement in my cybersecurity path, reflecting the commitment and effort invested in creating a versatile learning environment. This lab has become a vital tool for hands-on exploration of cybersecurity, featuring a complex, multi-layered virtual network that mirrors real-world IT setups and a secure platform for a variety of cybersecurity practices, including penetration testing and network analysis. These experiences have not only solidified my theoretical knowledge but also provided practical skills applicable to real-world situations. Beyond being a technical endeavor, the lab symbolizes my journey into the depths of cybersecurity, emphasizing the need to keep pace with emerging technologies and nurturing a mindset of continuous learning. As the lab evolves with the cybersecurity landscape, it aligns perfectly with my career goals, laying a strong foundation for addressing sophisticated security challenges and contributing significantly in this dynamic field.",
  skills: "Skills Demonstrated"
};

const homelab_obj = [
  {
    title: "Practical Skill Application:",
    description: "I aimed to create an immersive lab environment to apply and solidify cybersecurity concepts beyond textbook theories, enabling real-world practice and experimentation.",
  },
  {
    title: "Skill Expansion:",
    description: "The project was dedicated to broadening my cybersecurity expertise, encompassing system security, network defense, ethical hacking, and forensics through hands-on technical experience.",
  },
  {
    title: "Continuous Learning:",
    description: "Designed for adaptability, this lab serves as a foundation for ongoing education in the face of evolving cyber threats, fostering a mindset geared towards perpetual skill enhancement.",
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

/*
const homelab_config = [
  {
    index: "Virtual Machine Configurations:",
    item: [
      "Created multiple virtual machines (VMs) with Oracle VM VirtualBox for various roles within the lab, such as attack platforms, target machines, and monitoring systems.",
      "Allocated resources to each VM, ensuring adequate CPU, RAM, and storage based on the intended use—2GB RAM for lightweight systems like Kali Linux, and 4GB for more demanding systems like Windows Server.",
      "Configured persistent storage with VirtualBox Disk Images (VDI), setting them to dynamically allocate space to conserve physical disk space.",
    ]
  },
  {
    index: "Network Setups:",
    item: [
      "Established a NAT Network for all VMs to facilitate internet access and enable safe exploration of online resources without exposing my local network.",
      "Implemented Bridged Networking for specific VMs requiring direct interaction with the physical network, simulating real-world network integration.",
      "Created an Internal Network segment within VirtualBox for isolated communication between VMs, which allows for safe testing of network attacks and defenses without external exposure.",
    ]
  },
  {
    index: "Security Practices Implemented:",
    item: [
      "Secured the host system with a reliable antivirus solution and enabled a firewall to monitor traffic to and from the lab environment.",
      "Implemented strong password policies and SSH keys for authentication on all VMs to practice robust access control measures.",
      "Regularly updated all systems and applications to protect against known vulnerabilities and applied the principle of least privilege by disabling unnecessary services and daemon processes.",
      "Set up isolated environments for malware analysis and configured snapshots to easily revert VMs to a known good state after experiments.",
    ]
  },
];
*/

const homelab_skills = [
  {
    index: "Network Configuration and Security:",
    item: [
      "The project required the setup and management of a multi-tiered network environment, honing my abilities in configuring various network types such as NAT, Bridged, and Internal networks. I've gained hands-on experience in implementing network security measures, configuring firewalls, and understanding the nuances of network traffic flow and control.",
    ]
  },
  {
    index: "System Administration:",
    item: [
      "Managing multiple virtual machines with different operating systems has significantly improved my system administration skills. This includes OS installation and configuration, resource allocation, performance monitoring, and ensuring that each system is optimized for its specific role within the lab.",
    ]
  },
  {
    index: "Knowledge of Cybersecurity Principles:",
    item: [
      "The project provided a practical platform to apply and deepen my understanding of core cybersecurity principles. This encompasses areas such as ethical hacking, penetration testing, security hardening of systems, intrusion detection, and conducting vulnerability assessments. The lab has been a crucial space for translating theoretical concepts into real-world practice.",
    ]
  },
  {
    index: "Technical Troubleshooting:",
    item: [
      "A significant part of managing the home lab involved diagnosing and resolving technical issues. This has sharpened my troubleshooting skills, making me adept at identifying, analyzing, and rectifying a range of software, hardware, and network-related problems.",
    ]
  },
  {
    index: "Security Best Practices",
    item: [
      "Setting up a controlled environment allowed me to explore and implement industry-standard security practices and protocols. From configuring secure SSH access to understanding the principles of least privilege and data protection, the project has been key in ingraining these best practices.",
    ]
  },
];

export const Project1 = () => {
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
            <h1 className="display-4 mb-4">Home Lab Configuration</h1>{" "}
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
