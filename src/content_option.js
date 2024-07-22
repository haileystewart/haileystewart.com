import homepageimg from './assets/images/homepageimage.jpg';
import image1 from "./assets/images/image1.png";
import image2 from "./assets/images/image2.png";
import image3 from "./assets/images/image3.png";
import image4 from "./assets/images/image4.png";

const logotext = "Hailey Stewart";

//home page
const meta = {
    title: "Hailey Stewart",
    description: "I’m Hailey Stewart Computer Science student _ Security Operations Intern, currently studying in Chicago",
};

const introdata = {
    title: "I’m Hailey Stewart",
    animated: {
        first: "Focused on cybersecurity and risk assessment",
        second: "Passionate about cloud computing security",
        third: "Skilled in network security & data protection",
    },
    description: "I am a third year Computer Science major at Illinois Institute of Technology. Dual specializing in Information Security and Distributed and Cloud Computing. My primary focus is in Security Architecture and Security Analyst.",
    your_img_url: homepageimg,
};

//about page
const dataabout = {
    title: "Introduction",
    aboutme: "I am a dedicated computer science student with a deep passion for cybersecurity. My journey in this field is driven by a commitment to safeguard digital information and a fascination with the ever-evolving landscape of network security. I have honed my skills through my portfolio projects and internships, where I've tackled challenges in data protection and network security. I'm always eager to learn, grow, and collaborate on projects that make the digital world safer and more secure.",
};

const worktimeline = [
    {
        jobtitle: "Security Operations Intern",
        where: "SelectQuote",
        date: "2024",
    },
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


//portfolio page
const dataportfolio = [
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
];


//contact page
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


//social links
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
    contactConfig,
    socialprofils,
    logotext,
};