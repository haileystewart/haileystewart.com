const logotext = "Hailey Stewart";
const meta = {
    title: "Hailey Stewart",
    description: "I’m Hailey Stewart Computer Science student _ Information Security Intern, currently studying in Chicago",
};

const introdata = {
    title: "I’m Hailey Stewart",
    animated: {
        first: "Focused on cybersecurity and risk assessment",
        second: "Passionate about cloud computing security",
        third: "Skilled in network security & data protection",
    },
    description: "I am a third year Computer Science major at Illinois Institute of Technology. Dual specializing in Information Security and Distributed and Cloud Computing, with a minor in Cybersecurity Foundations. My primary focus is in Security Architecture and Security Analyst.",
    your_img_url: "https://i.pinimg.com/originals/4d/90/76/4d90762dbb9662651d8dcdcb61fedc99.jpg",
};

const dataabout = {
    title: "Introduction",
    aboutme: "I am a dedicated computer science student with a deep passion for cybersecurity. My journey in this field is driven by a commitment to safeguard digital information and a fascination with the ever-evolving landscape of network security. I have honed my skills through my portfolio projects and internships, where I've tackled challenges in data protection and network security. I'm always eager to learn, grow, and collaborate on projects that make the digital world safer and more secure.",
};

const worktimeline = [
    /*{
        jobtitle: "Security Operations Intern",
        where: "SelectQuote",
        date: "2024",
    },
    */
    {
        jobtitle: "IT Infrastructure Intern",
        where: "Wi-Tronix",
        date: "2023",
    },
    {
        jobtitle: "Computer Science Student",
        where: "Illinois Institute of Technology",
        date: "2021 - 2025",
    },
];

const programmingLanguages = [
    {
        name: "Python",
        value: 90,
    },
    {
        name: "Bash/Shell Scripting",
        value: 85,
    },
    {
        name: "SQL",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Powershell",
        value: 85,
    },
];

const operatingSystems = [
    {
        name: "Linux",
        value: 80,
    },
    {
        name: "Ubuntu",
        value: 85,
    },
    {
        name: "Node.js",
        value: 90,
    },
    {
        name: "UNIX",
        value: 65,
    },
];

const tools = [
    {
        name: "VMWare",
        value: 80,
    },
    {
        name: "AWS",
        value: 90,
    },
    {
        name: "Arduino",
        value: 70,
    },
    {
        name: "Wireshark",
        value: 75,
    },
    {
        name: "VirtualBox",
        value: 95,
    },
];

const dataportfolio = [
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Home Lab Configuration",
        link: "#",
    },
    /*
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "Network Traffic Analysis",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Home Lab Configuration",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "SQL Ticket Management App",
        link: "#",
    },
    */
];

const homelab = {
    title: "Overview",
    title_description1: "The Cybersecurity Home Lab Project was conceptualized as a practical initiative to create a robust and scalable virtual environment tailored for the exploration and enhancement of cybersecurity skills. This project encompasses the end-to-end process of designing, implementing, and managing a network of virtual machines, each serving a distinct role within a simulated information security framework.",
    title_description2: "At the core of the project lies a suite of strategically selected open-source and commercial software tools, integrated to mimic a variety of real-world IT infrastructures. The lab is engineered to facilitate a wide array of security exercises ranging from vulnerability assessments and network traffic analysis to intrusion detection and incident response drills.",
    objectives: "Objectives",
    toolsTech: "Tools and Technologies",
    config: "Setup and Configuration",
    challenges: "Challenges",
    challenges_description1: "The journey of establishing my Home Lab Configuration was filled with numerous challenges, each contributing significantly to my learning curve. The first major obstacle I faced was hardware limitations. Running multiple virtual machines (VMs) simultaneously was taxing on my initial setup, leading to considerable performance degradation. To overcome this, I upgraded my system's RAM and transitioned to an SSD, which dramatically improved the overall performance. This experience taught me the critical role that robust hardware plays in virtualization.",
    challenges_description2: "Another complex challenge was configuring a virtual network that could emulate real-world scenarios. Ensuring seamless communication between VMs while maintaining the security of my host system required multiple attempts, extensive research, and practical experimentation. This process helped me gain a deeper understanding of network configurations, particularly the nuances of NAT and internal networking, and the importance of firewalls in ensuring network security.",
    learning: "Learning",
    learning_description1: "These challenges, while initially daunting, became valuable learning opportunities. The process of security hardening and addressing software compatibility issues further developed my problem-solving skills. I learned to systematically approach complex tasks, such as setting up firewalls, updating systems, and managing user permissions, which contributed to a comprehensive security strategy for my lab. Dealing with software that was not functioning optimally on certain operating systems pushed me to delve into community forums, official documentation, and direct troubleshooting.",
    learning_description2: "This not only improved my technical acumen but also emphasized the importance of adaptability and continuous learning in a field as dynamic as cybersecurity. Overcoming these hurdles enhanced my proficiency in using VirtualBox for complex virtual environment setups and deepened my understanding of network security. These experiences have been instrumental in preparing me for real-world IT and cybersecurity situations, significantly improving my research, troubleshooting, and system administration skills.", 
    outcomes: "Outcomes and Reflection",
    outcomes_description1: "The completion of my Home Lab Configuration project marks a significant milestone in my cybersecurity journey, demonstrating the dedication and hard work invested in creating a multifunctional and dynamic environment. This lab has evolved into a crucial tool for hands-on learning, allowing me to immerse myself in the various facets of cybersecurity. Among its key achievements is the intricate setup of a multi-layered virtual network, closely simulating real-world IT infrastructures, coupled with the establishment of a secure and controlled setting for a broad spectrum of cybersecurity tasks. This includes the ability to safely test and refine security configurations, perform penetration testing, and enhance my skills in intrusion detection and network traffic analysis. The practical experience gained has been instrumental in reinforcing my theoretical knowledge and equipping me with skills directly transferable to real-world scenarios.",
    outcomes_description2: "Reflecting on this endeavor, the home lab has transcended being merely a technical project; it has become a journey into the heart of cybersecurity. It has underscored the importance of staying abreast of emerging technologies and threats, fostering a mindset geared towards continuous learning and adaptability. As the cybersecurity landscape continues to evolve, so will the lab, ensuring it remains a pivotal part of my ongoing professional development. The establishment and advancement of this lab resonate deeply with my career goals in cybersecurity. It has laid a solid foundation for tackling complex security challenges and poised me to contribute meaningfully in the field. The knowledge and skills I have honed are invaluable assets that I am eager to apply in my professional pursuits, as I navigate the dynamic and evolving world of cybersecurity.",
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

const homelab_config = [
    {
        index: "Virtual Machine Configurations:",
        item: [
            "Created multiple virtual machines (VMs) with Oracle VM VirtualBox for various roles within the lab, such as attack platforms, target machines, and monitoring systems.",
            "Allocated resources to each VM, ensuring adequate CPU, RAM, and storage based on the intended use—2GB RAM for lightweight systems like Kali Linux, and 4GB for more demanding systems like Windows Server.",
            "Configured persistent storage with VirtualBox Disk Images (VDI), setting them to dynamically allocate space to conserve physical disk space.",
    ]},
    {
        index: "Network Setups:",
        item: [
            "Established a NAT Network for all VMs to facilitate internet access and enable safe exploration of online resources without exposing my local network.",
            "Implemented Bridged Networking for specific VMs requiring direct interaction with the physical network, simulating real-world network integration.",
            "Created an Internal Network segment within VirtualBox for isolated communication between VMs, which allows for safe testing of network attacks and defenses without external exposure.",
    ]},
    {
        index: "Security Practices Implemented:",
        item: [
            "Secured the host system with a reliable antivirus solution and enabled a firewall to monitor traffic to and from the lab environment.",
            "Implemented strong password policies and SSH keys for authentication on all VMs to practice robust access control measures.",
            "Regularly updated all systems and applications to protect against known vulnerabilities and applied the principle of least privilege by disabling unnecessary services and daemon processes.",
            "Set up isolated environments for malware analysis and configured snapshots to easily revert VMs to a known good state after experiments.",
    ]},
];

const homelab_skills = [
    {
        index: "Network Configuration and Security:",
        item: [
            "The project required the setup and management of a multi-tiered network environment, honing my abilities in configuring various network types such as NAT, Bridged, and Internal networks. I've gained hands-on experience in implementing network security measures, configuring firewalls, and understanding the nuances of network traffic flow and control.",
    ]},
    {
        index: "System Administration:",
        item: [
            "Managing multiple virtual machines with different operating systems has significantly improved my system administration skills. This includes OS installation and configuration, resource allocation, performance monitoring, and ensuring that each system is optimized for its specific role within the lab.",
    ]},
    {
        index: "Knowledge of Cybersecurity Principles:",
        item: [
            "The project provided a practical platform to apply and deepen my understanding of core cybersecurity principles. This encompasses areas such as ethical hacking, penetration testing, security hardening of systems, intrusion detection, and conducting vulnerability assessments. The lab has been a crucial space for translating theoretical concepts into real-world practice.",
    ]},
    {
        index: "Technical Troubleshooting:",
        item: [
            "A significant part of managing the home lab involved diagnosing and resolving technical issues. This has sharpened my troubleshooting skills, making me adept at identifying, analyzing, and rectifying a range of software, hardware, and network-related problems.",
    ]},
    {
        index: "Security Best Practices",
        item: [
            "Setting up a controlled environment allowed me to explore and implement industry-standard security practices and protocols. From configuring secure SSH access to understanding the principles of least privilege and data protection, the project has been key in ingraining these best practices.",
    ]},
];

const contactConfig = {
    YOUR_EMAIL: "haileyjordanstewart@gmail.com",
    //YOUR_FONE: "(913)-777-6785",
    description: "I'm always excited to hear about new opportunities or collaborate on creative projects. Whether you have a question, a proposal, or simply want to say hello, don't hesitate to reach out. My inbox is always open and I strive to reply promptly.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/haileystewart",
    //facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/hailey-stewart-800170241/",
    //twitter: "https://twitter.com",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    programmingLanguages,
    operatingSystems,
    tools,
    introdata,
    homelab,
    contactConfig,
    socialprofils,
    logotext,
    homelab_obj,
    homelab_tools,
    homelab_config,
    homelab_skills,
};