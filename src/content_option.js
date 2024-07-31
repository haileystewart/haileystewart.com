import homepageimg from './assets/images/homepageimage.jpg';
import image1 from "./assets/images/image1.png";
import image2 from "./assets/images/image2.png";
//import image3 from "./assets/images/image3.png";
//import image4 from "./assets/images/image4.png";

export const logotext = "Hailey Stewart";

//home page
export const meta = {
    title: "Hailey Stewart",
    description: "I’m Hailey Stewart Computer Science student _ Security Operations Intern, currently studying in Chicago",
};

export const introdata = {
    title: "I’m Hailey Stewart",
    animated: {
        first: "Focused on cybersecurity and risk assessment",
        second: "Passionate about cloud computing security",
        third: "Skilled in network security & data protection",
    },
    description: "I am a fourth year Computer Science major at Illinois Institute of Technology. Dual specializing in Information Security and Distributed and Cloud Computing. My primary focus is in Security Architecture and Security Analyst roles.",
    your_img_url: homepageimg,
};

//about page
export const about = {
    dataabout: {
      title: "Introduction",
      aboutme: "I am a dedicated computer science student with a deep passion for cybersecurity. My journey in this field is driven by a commitment to safeguard digital information and a fascination with the ever-evolving landscape of network security. I have honed my skills through my portfolio projects and internships, where I've tackled challenges in data protection and network security. I'm always eager to learn, grow, and collaborate on projects that make the digital world safer and more secure.",
    },
  
    worktimeline: [
      {
        jobtitle: "Security Operations Intern",
        where: "SelectQuote",
        date: "05/2024 – 08/2024",
        description: [
          "Implemented absolute cryptographic wipe and offboarding processes, ensuring secure data deletion and compliance with security policies.",
          "Conducted Active Directory (AD) cleaning and hardening, identifying low-confidence users and terminating inactive accounts to enhance security.",
          "Installed and configured SentinelOne endpoint protection for UAT and development database servers, improving threat detection and response capabilities.",
          "Managed Governance, Risk, and Compliance (GRC) using Onspring, streamlining security operations and maintaining regulatory compliance."
        ],
      },
      {
        jobtitle: "IT Infrastructure Intern",
        where: "Wi-Tronix",
        date: "05/2023 – 12/2023",
        description: [
          "Developed and demoed a comprehensive incident response orchestration, enhancing cybersecurity response capabilities.",
          "Conducted firewall and NAT rule cleanup, refining access controls and boosting network security.",
          "Implemented AWS security recommendations, enhancing cloud security and regulatory compliance.",
          "Executed switch configurations, optimizing network performance and ensuring adherence to best practices.",
          "Performed systematic code upgrades on Juniper Switches, ensuring optimal performance and security."
        ],
      },
    ],
  
    education: [
      {
        major: "Computer Science",
        degree: "Bachelor of Science",
        institution: "Illinois Institute of Technology",
        date: "08/2021 – 05/2025",
        specialization: "Specializations in Information Security and Distributed and Cloud Computing"
      },
    ],
  
    /*
    certifications: [
      {
        name: "Comptia Security+",
      },
      {
        name: "AWS Certified Cloud Practitioner",
      },
    ],
    */
  
    technicalSkills: [
      {
        category: "Security Tools",
        skills: [
          //"SIEM (Splunk, QRadar)",
          //"IDS/IPS (Snort, Suricata)",
          //"Vulnerability Scanners (Nessus, OpenVAS)",
          "Antivirus/Endpoint Protection"
        ],
      },
      /*
      {
        category: "Penetration Testing",
        skills: [
          "Metasploit",
          "Burp Suite",
          "OWASP ZAP"
        ],
      },
      */
     /*
      {
        category: "Compliance and Frameworks",
        skills: [
          "NIST",
          "ISO 27001",
          "GDPR",
          "HIPAA"
        ],
      },
      */
      {
        category: "Threat Intelligence",
        skills: [
          //"Threat Hunting",
          "Malware Analysis",
          "Incident Response"
        ],
      },
      {
        category: "Network Security",
        skills: [
          "TCP/IP",
          "VPN",
          "Firewalls",
          "Network Traffic Analysis"
        ],
      },
      {
        category: "Cloud Security",
        skills: [
          "AWS",
          //"Azure"
        ],
      },
      {
        category: "Forensic Tools",
        skills: [
          "Wireshark",
          //"EnCase",
          //"FTK"
        ],
      },
      {
        category: "Programming Languages",
        skills: [
          "Python",
          "Bash/Shell Scripting",
          "SQL",
          "PowerShell"
        ],
      },
      {
        category: "Operating Systems",
        skills: [
          "Linux",
          "Windows",
          "macOS"
        ],
      },
      {
        category: "Virtualization and Containerization",
        skills: [
          "VMware",
          "VirtualBox",
          //"Docker"
        ],
      },
      {
        category: "Version Control",
        skills: [
          "Git",
          "GitHub"
        ],
      },
    ],
  };
  

//portfolio page
export const dataportfolio = [
    {
      title: "Home Lab Configuration",
      description: "A detailed configuration of a home lab environment using various technologies.",
      img: image1,
      link: "project1"
    },
    {
      title: "Network Traffic Monitoring and Analysis",
      description: "Monitoring and analyzing network traffic to detect and prevent security threats.",
      img: image2,
      link: "project2"
    },
    /*
    {
      title: "Project 3",
      description: "Description for project 3.",
      img: image3,
      link: "project3"
    },
    {
      title: "Project 4",
      description: "Description for project 4.",
      img: image4,
      link: "project4"
    }
    */
  ];
  

  //project1
  export const project1 = {
    title: "Home Lab Configuration",
    overview: "The Home Lab Configuration project was designed to set up a virtual environment for advancing cybersecurity skills. This involved creating and managing virtual machines (VMs) to simulate a realistic IT infrastructure, enabling the completion of various security projects.",
    purpose: [
      "The primary purpose of this project was to establish a virtual machine setup for conducting security exercises.",
      "Key challenges included overcoming hardware limitations by upgrading RAM and SSD, and configuring a virtual network to simulate real-world conditions.",
      "This setup provided a practical learning experience in network configurations and security."
    ],
    keyGoals: [
      "Set up network monitoring tools.",
      "Capture and store network traffic data.",
      "Analyze network traffic to identify anomalies.",
      "Generate reports on network activity and potential threats."
    ],
    scope: [
      { name: "Deployment", description: "The scope of this project includes the deployment of network monitoring tools, data capture, data analysis, and reporting." },
      { name: "Coverage", description: "It covers both internal and external network traffic." }
    ],
    toolsTech: [
      { name: "Kali Linux", description: "Linux distribution for penetration testing and security auditing" },
      { name: "Oracle VM VirtualBox", description: "Virtualization product for x86 computers" },
      { name: "Wireshark", description: "Network protocol analyzer" }
    ],
    skills: [
      { name: "Network Configuration and Security", description: "Set up and managed a multi-tiered network environment, implemented firewalls, and understood network traffic control." },
      { name: "System Administration", description: "Managed multiple VMs, optimized resource allocation, and monitored performance." },
      { name: "Cybersecurity Principles", description: "Applied ethical hacking, penetration testing, and security hardening." },
      { name: "Technical Troubleshooting", description: "Diagnosed and resolved technical issues across software, hardware, and networks." },
      { name: "Security Best Practices", description: "Explored and implemented industry-standard security practices and protocols." }
    ],
    methodology: "The methodology involved setting up necessary tools, capturing network traffic, analyzing data, and generating comprehensive reports on findings."
};
  

//project2
export const project2 = {
    title: "Network Traffic Monitoring and Analysis",
    overview: "Conducted comprehensive network traffic monitoring and analysis using Wireshark and tcpdump, identifying and mitigating security threats through detailed traffic pattern analysis and anomaly detection.",
    purpose: [
      "Detect and mitigate potential security threats.",
      "Identify and resolve network performance issues.",
      "Ensure compliance with organizational and regulatory policies."
    ],
    keyGoals: [
      "Monitor all network traffic for security threats.",
      "Analyze traffic patterns for performance bottlenecks.",
      "Ensure network activities comply with policies."
    ],
    scope: [
      { name: "Network Segments", description: "Monitor the entire network, on a basic level for learning." },
      { name: "Timeframe", description: "Continuous monitoring, with detailed analysis during peak hours." },
      { name: "Data Sources", description: "Collect data from routers, switches, firewalls, and critical servers." }
    ],
    toolsTech: [
      { name: "Wireshark", description: "Used for detailed network traffic analysis and visualization." },
      { name: "tcpdump", description: "Command-line packet analyzer used for network traffic capture." },
      { name: "Python & Scapy", description: "Used for custom traffic analysis and automated reporting." }
    ],
    skills: [
      { name: "Network Traffic Capture", description: "Efficiently capturing live network traffic using tcpdump." },
      { name: "Packet Analysis", description: "In-depth analysis of captured packets using Wireshark and Python." },
      { name: "Anomaly Detection", description: "Identifying suspicious activities and potential security threats." },
      { name: "Scripting and Automation", description: "Developing scripts to automate traffic analysis and reporting." },
      { name: "Compliance Monitoring", description: "Ensuring network activities align with policies and regulations." },
      { name: "Performance Optimization", description: "Identifying and resolving network performance issues." }
    ],
    methodology: "The process and methodology for this project involve setting up the necessary tools, capturing network traffic, analyzing the data using various techniques, and generating comprehensive reports on the findings.",
    images: [
      { path: 'screenshot1.png', description: 'Detailed view of captured packets in Wireshark, highlighting suspicious DNS queries and TCP anomalies.' },
      { path: 'screenshot2.png', description: 'Terminal output showing live traffic capture using tcpdump.' },
      { path: 'screenshot3.png', description: 'Running the custom analysis script to process captured traffic and generate reports.' },
      { path: 'screenshot4.png', description: 'Example of a daily email report sent with the analysis results.' }
    ]
  };
  

//contact page
export const contactConfig = {
    YOUR_EMAIL: "haileyjordanstewart@gmail.com",
    //YOUR_FONE: "(913)-777-6785",
    description: "I'm always excited to hear about new opportunities or collaborate on creative projects. Whether you have a question, a proposal, or simply want to say hello, don't hesitate to reach out. My inbox is always open and I strive to reply promptly.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};


//social links
export const socialprofils = {
    github: "https://github.com/haileystewart",
    //facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/hailey-stewart-800170241/",
    //twitter: "https://twitter.com",
};