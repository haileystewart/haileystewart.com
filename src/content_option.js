import homepageimg from './assets/images/homepageimage.jpg';
import image1 from "./assets/images/image1.png";
import image2 from "./assets/images/image2.png";
import image3 from "./assets/images/image3.png";
import image4 from "./assets/images/image4.png";

import tcpdump_command_execution from "./assets/images/tcpdump_command_execution.png";
import wireshark_packet_analysis from "./assets/images/wireshark_packet_analysis.png";
import python_script_execution from "./assets/images/python_script_execution.png";

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
      ["Deployment", "The scope of this project includes the deployment of network monitoring tools, data capture, data analysis, and reporting."],
      ["Coverage", "It covers both internal and external network traffic."]
    ],
    toolsTech: [
      ["Kali Linux", "Linux distribution for penetration testing and security auditing"],
      ["Oracle VM VirtualBox", "Virtualization product for x86 computers"],
      ["Wireshark", "Network protocol analyzer"]
    ],
    skills: [
      ["Network Configuration and Security", "Set up and managed a multi-tiered network environment, implemented firewalls, and understood network traffic control."],
      ["System Administration", "Managed multiple VMs, optimized resource allocation, and monitored performance."],
      ["Cybersecurity Principles", "Applied ethical hacking, penetration testing, and security hardening."],
      ["Technical Troubleshooting", "Diagnosed and resolved technical issues across software, hardware, and networks."],
      ["Security Best Practices", "Explored and implemented industry-standard security practices and protocols."]
    ],
    methodology: "The methodology involved setting up necessary tools, capturing network traffic, analyzing data, and generating comprehensive reports on findings."
  };
  

//project2
export const project2 = [
  {
    section: "Overview",
    content: "Network traffic was monitored and analyzed to identify potential security threats, performance bottlenecks, and compliance issues. The project involved capturing live traffic, analyzing it using Wireshark and custom scripts, and generating daily reports."
  },
  {
    section: "Objectives",
    content: [
      ["Security", "Detect potential threats by monitoring DNS queries, TCP anomalies, and unusual traffic patterns."],
      ["Performance", "Analyze traffic for performance bottlenecks, such as high latency and retransmissions."],
      ["Compliance", "Ensure network activities adhere to organizational and regulatory policies."]
    ]
  },
  {
    section: "Tools and Technologies",
    content: [
      ["Wireshark", "For detailed packet analysis."],
      ["tcpdump", "For capturing live network traffic."],
      ["Python & Scapy", "For custom analysis and reporting."]
    ]
  },
  {
    section: "Skills Demonstrated",
    content: [
      ["Network Traffic Capture", "Captured live traffic using tcpdump for in-depth analysis."],
      ["Packet Analysis", "Analyzed packets with Wireshark to identify anomalies and threats."],
      ["Automation", "Automated the analysis and reporting process with Python scripts."],
      ["Compliance Monitoring", "Ensured network activities complied with policies."]
    ]
  },
  {
    section: "Process and Methodology",
    content: [
      {
        title: "Introduction",
        steps: [
          "The process and methodology for the network traffic analysis project involved several key steps, each contributing to the successful capture, analysis, and reporting of network traffic. This approach ensured a thorough understanding and proactive management of network traffic, providing valuable insights into the network's security and performance."
        ]
      },
      {
        title: "Traffic Capture",
        command: "sudo tcpdump -i wlan0 -w ~/pcap_files/live_traffic.pcap",
        steps: [
          "To begin capturing network traffic, I opened the terminal and ran the command sudo tcpdump -i wlan0 -w ~/pcap_files/live_traffic.pcap. This command initiated the capture of live traffic on the wireless network interface. During the capture, I actively browsed the web and used various network applications to generate traffic. Once enough packets were captured, I stopped the process by pressing Ctrl+C. This step ensured that I had a sample of real-time network traffic for analysis."
        ],
        screenshot: "tcpdump_command_execution"
      },
      {
        title: "Traffic Analysis",
        filter: "dns or tcp.analysis.flags",
        steps: [
          "The captured traffic was then analyzed using Wireshark. I opened Wireshark and loaded the live_traffic.pcap file. To identify potential issues, I applied the display filter dns or tcp.analysis.flags, which helped highlight suspicious DNS queries and TCP anomalies. This step allowed me to pinpoint potential security threats and performance issues in the network."
        ],
        screenshot: "wireshark_packet_analysis"
      },
      {
        title: "Report Generation",
        scriptCommand: "python3 ~/pcap_files/analyze_dns.py",
        cronJob: "0 2 * * * /home/haileystewart/pcap_files/generate_report.sh",
        steps: [
          "To automate the analysis and reporting, I created a custom Python script analyze_dns.py. This script processed the captured traffic and generated detailed reports. I tested the script manually by running python3 ~/pcap_files/analyze_dns.py in the terminal to ensure it worked correctly. To automate this process, I set up a cron job that ran the script daily at 2 AM using the command 0 2 * * * /home/haileystewart/pcap_files/generate_report.sh. This automation ensured that reports were generated and delivered consistently without manual intervention."
        ],
        screenshot: "python_script_execution"
      },
      {
        title: "Detailed Analysis",
        steps: [
          "With the cron job in place, I verified that it was running as scheduled. Each day, I checked my email for the daily report generated by the script. The report provided a comprehensive analysis of the network traffic, highlighting any anomalies or suspicious activities. This step ensured continuous monitoring and provided valuable insights into the network's security and performance."
        ],
        screenshot: "daily_report_email"
      },
      {
        title: "Conclusion",
        steps: [
          "This methodology, involving real-time traffic capture, detailed analysis, automated reporting, and regular review, provided a robust framework for monitoring and securing the network. Each checkpoint contributed to a thorough understanding and proactive management of network traffic, making the project a success in terms of enhancing network security and performance."
        ]
      }
    ]
  }
];
  

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