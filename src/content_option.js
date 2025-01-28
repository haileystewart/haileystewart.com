import homepageimg from './assets/images/homepageimage.jpg';

import demoVideo from "./assets/videos/aws_hangman_video.mp4";

import detectionVsFalsePositiveRate from "./assets/images/detection_vs_false_positive_rate.png";
import packetVolumeOverTime from "./assets/images/packet_volume_over_time.png";
import flaggedIpCount from "./assets/images/flagged_ip_count.png";
import rocCurve from "./assets/images/ROC_Curve.png";

export const logotext = "Hailey Stewart";

//home page
export const meta = {
    title: "Hailey Stewart",
    description: "I’m Hailey Stewart Computer Science student _ Security Operations Intern, currently studying in Chicago",
};

export const introdata = {
    title: "I’m Hailey Stewart",
    animated: {
      first: "Focused on threat and risk assessment",
      second: "Passionate about cloud computing security",
      third: "Skilled in security monitoring and analysis",
      fourth: "Dedicated to endpoint and network protection",
  },
    description: "I am a fourth year Computer Science major at Illinois Institute of Technology. Dual specializing in Information Security and Distributed and Cloud Computing. My primary area of interest is in analyzing and strengthening security systems through architecture and analysis.",
    img: homepageimg,
};

//about page
export const about = {
    dataabout: {
      aboutme: "ABOUT HAILEY STEWART ABOUT HAILEY STEWART ABOUT HAILEY",
    },
  
    worktimeline: [
      {
        jobtitle: "Security Operations Intern",
        where: "SelectQuote",
        startMonth: "05",
        endMonth: "08",
        year: "2024",
        description: [
          "Strengthened security by implementing cryptographic data wipes and improving offboarding processes to ensure compliance. Cleaned up and hardened Active Directory by identifying inactive accounts and reducing security risks. Deployed and configured SentinelOne for better threat detection and response while managing GRC operations to maintain regulatory compliance."
        ],
      },
      {
        jobtitle: "IT Infrastructure Intern",
        where: "Wi-Tronix",
        startMonth: "05",
        endMonth: "12",
        year: "2023",
        description: [
          "Enhanced cybersecurity by developing an incident response workflow and refining firewall/NAT rules to tighten network security. Applied AWS security best practices to strengthen cloud defenses. Upgraded Juniper switches to improve performance, reliability, and security across the network."
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
  
    certifications: [
      {
        name: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "01/2025 - 01/2028"
      },
    ],
  
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
    title: "Cryptographic Hashing and RSA Implementation",
    link: "sha256_rsa_implementation",
    color: "#87C498"
  },
  {
    title: "RESTful Battleships Game Application",
    link: "battleship",
    color: "#EA6B62"
  },
  {
    title: "Improving Botnet Detection and Mitigation Techniques Using Machine Learning",
    link: "botnet_detection",
    color: "#EF8F79"
  },
  {
    title: "AWS Hangman Server",
    link: "aws_hangman_server",
    color: "#B695A8"
  },
  {
    title: "project",
    link: "homepage",
    color: "#F39C4F"
  },
  {
    title: "project",
    link: "homepage",
    color: "#F5B77C"
  },
  {
    title: "project",
    link: "homepage",
    color: "#FEDD58"
  },
  {
    title: "project",
    link: "homepage",
    color: "#D9DB56"
  },
  {
    title: "project",
    link: "homepage",
    color: "#DDD1A9"
  },
  {
    title: "project",
    link: "homepage",
    color: "#1AAFAB"
  },
  {
    title: "project",
    link: "homepage",
    color: "#90CECD"
  },
  {
    title: "project",
    link: "homepage",
    color: "#6EB0E0"
  },
  {
    title: "project",
    link: "homepage",
    color: "#EE7C23"
  },
  {
    title: "project",
    link: "homepage",
    color: "#D0B8C6"
  },
  {
    title: "project",
    link: "homepage",
    color: "#E43D34"
  },
  {
    title: "project",
    link: "homepage",
    color: "#B8D7AD"
  },
  {
    title: "project",
    link: "homepage",
    color: "#D3B09D"
  },
  {
    title: "project",
    link: "homepage",
    date: "01/2025",
    color: "#E7D1C3"
  },
  {
    title: "project",
    link: "homepage",
    color: "#CD80A2"
  },
  {
    title: "project",
    link: "homepage",
    color: "#9D948F"
  },
  {
    title: "project",
    link: "homepage",
    color: "#FBC352"
  },
  {
    title: "project",
    link: "homepage",
    color: "#9FB9AE"
  },
  {
    title: "project",
    link: "homepage",
    color: "#DFDAD6"
  },
  {
    title: "project",
    link: "homepage",
    color: "#96C0D6"
  },
];

//sha256_rsa_implementation
export const sha256_rsa_implementation = {
  title: "Cryptographic Hashing and RSA Implementation",
  overview: [
    "This project is a deep dive into cryptographic hashing and RSA encryption, showcasing foundational cybersecurity principles and their practical applications. The goal was to explore the properties and performance of SHA-256, a widely-used cryptographic hash function, and implement secure communication using RSA public-key cryptography. Through this work, I aimed to demonstrate proficiency in analyzing cryptographic algorithms, validating their mathematical underpinnings, and solving real-world cybersecurity problems.",
    "Key technologies and concepts applied in this project include the SHA-256 hash function for data integrity verification and randomness analysis, as well as the RSA cryptosystem for secure message signing and encryption. By combining programmatic implementations, statistical analysis, and cryptographic workflows, this project highlights the interplay between theory and practice in designing and evaluating secure systems."
],
keyFeatures: [
  {
      title: "SHA-256 Hash Computation and Analysis",
      points: [
          "Computed the SHA-256 hash of a given input (e.g., a name) and output the result in hexadecimal format.",
          "Generated multiple unique inputs to analyze the statistical distribution of 1-bits in the resulting hash values.",
          "Visualized the bit distribution through a histogram, revealing the inherent randomness of the SHA-256 algorithm."
      ]
  },
  {
      title: "Performance Benchmarking of SHA-256",
      points: [
          "Measured the speed of hash computations, reporting both total execution time and hashes computed per second.",
          "Estimated the time required to perform theoretical attacks, such as a birthday attack for weak collision resistance and a brute-force attack for strong collision resistance."
      ]
  },
  {
      title: "RSA Message Signing and Secure Communication",
      points: [
          "Implemented RSA public-key cryptography to simulate secure communication between two parties (Bob and Alice).",
          "Bob signed a message using his private key and encrypted the signature with Alice's public key, ensuring both authenticity and confidentiality.",
          "Alice decrypted the received message, verified its signature, and authenticated Bob's identity, completing the secure communication process."
      ]
  }
],
technicalSkills: [
  {
      category: "Cryptographic Libraries",
      description: "Utilized Python's hashlib library for implementing SHA-256 hash computations and generating outputs in hexadecimal format."
  },
  {
      category: "Data Analysis and Visualization",
      description: "Leveraged tools like matplotlib to create detailed histograms, illustrating the statistical distribution of 1-bits in SHA-256 hash outputs."
  },
  {
      category: "Performance Benchmarking",
      description: "Developed and executed techniques to measure computational performance, reporting hash rates and estimating attack durations."
  },
  {
      category: "Public-Key Cryptography",
      description: "Implemented RSA workflows, including key generation, message signing, encryption, and decryption, ensuring secure and authenticated communication."
  },
  {
      category: "Mathematical Validation",
      description: "Applied binomial probability distributions to validate the randomness of SHA-256 bit distributions, utilizing tools like Mathematica for precise calculations."
  }
],
  codeExplanation: [
    {
      title: "SHA-256 Hash Generation",
      code: "hash_name.py",
      description: "Computes the SHA-256 hash for a given input string and outputs it in hexadecimal format. This demonstrates cryptographic hashing for data integrity."
    },
    {
      title: "Statistical Analysis of 1-Bits in Hash Outputs",
      code: "bit_count_histogram.py",
      description: "Generates random inputs, computes their SHA-256 hashes, counts 1-bits, and visualizes the results using a histogram to analyze randomness."
    },
    {
      title: "Performance Benchmarking of SHA-256",
      code: "hash_timing.py",
      description: "Computes a specified number of hashes, measures execution time, calculates hash rate, and estimates durations for theoretical cryptographic attacks."
    },
    {
      title: "Binomial Probability Validation",
      code: "binomial_probability.py",
      description: "Calculates probabilities of specific numbers of 1-bits appearing in a hash output, validating randomness using mathematical models."
    }
  ],
  histogramExplanation: [
    {
      title: "Histogram of 1-Bits in SHA-256 Hash Outputs",
      description: "Visualizes the distribution of 1-bits in SHA-256 hash outputs. The histogram closely follows a binomial distribution, centered around 128 1-bits, confirming the uniform randomness of SHA-256."
    }
  ],
  projectFlow: [
    "SHA-256 hash generation begins by accepting user input and generating a hash value in hexadecimal format using Python’s hashlib library.",
    "Random inputs are created to analyze the distribution of 1-bits across multiple SHA-256 outputs. These distributions are visualized using histograms for statistical analysis.",
    "The benchmarking script measures hash computation performance by reporting execution times and estimating durations for theoretical attacks such as birthday and brute-force.",
    "The RSA module demonstrates secure communication. Messages are signed using private keys, encrypted with public keys, and verified upon decryption, ensuring authenticity and confidentiality."
  ],
  implementation: [
    "This project applies cryptographic and statistical methods to analyze and validate the properties of hashing algorithms and public-key encryption.",
    "The SHA-256 analysis involves generating hashes, measuring randomness, and ensuring the algorithm meets theoretical expectations. Histograms of bit distributions verify randomness.",
    "Performance benchmarking evaluates computational efficiency, demonstrating how practical constraints influence cryptographic feasibility in real-world applications.",
    "The RSA implementation showcases secure communication workflows. By integrating signing, encryption, and authentication, the project simulates modern security practices."
  ],
  conclusion: [
    "This project exemplifies the critical role of cryptography in securing digital systems and highlights the practical application of theoretical cybersecurity principles. By exploring SHA-256 hash functions and RSA cryptography, I delved into the mathematical and computational foundations of data integrity, randomness, and secure communication. The project provided hands-on experience in analyzing cryptographic functions, validating their security properties, and understanding their performance implications in real-world scenarios.",
    "Through this work, I gained a deeper understanding of how cryptographic systems are designed and evaluated for robustness. It honed my skills in using cryptographic libraries, conducting statistical and performance analyses, and implementing secure workflows. This project not only enhanced my technical competencies but also reinforced the importance of precision and rigor in developing and assessing secure systems.",
]
};

// battleship
export const battleship = [
  {
    title: "RESTful Battleships Game Application",
    overview: [
      "This project brings the classic game of Battleships to life as a Flutter-based application that allows players to strategically place their ships and compete against either human or AI opponents. By interfacing with a RESTful API, the app provides a robust and interactive gaming experience, complete with secure user authentication, dynamic gameplay, and responsive design.",
      "Developed with a focus on modern software engineering practices, this project highlights skills such as state management, asynchronous programming, and API-driven development. The application is a testament to the seamless integration of backend communication and frontend interactivity, making it a prime example of mastering full-stack Flutter app development."
    ],
    battleshipDemoVideo: "",
    keyFeatures: {
      userAuthentication: {
        title: "User Authentication",
        details: [
          "Register and log in with secure credentials.",
          "Persistent session tokens to maintain login state."
        ]
      },
      gameManagement: {
        title: "Game Management",
        details: [
          "View a list of ongoing and completed games.",
          "Initiate new games with human or AI opponents.",
          "Delete active games to forfeit and remove them."
        ]
      },
      interactiveGameplay: {
        title: "Interactive Gameplay",
        details: [
          "Place ships on a 5x5 grid with intuitive touch controls.",
          "Play turn-based games against opponents with clear visual feedback.",
          "Track hits, misses, and shipwrecks with an intuitive board display."
        ]
      },
      aiIntegration: {
        title: "AI Integration",
        details: [
          "Play against AI opponents with selectable difficulty levels (random or perfect)."
        ]
      },
      responsiveDesign: {
        title: "Responsive Design",
        details: [
          "Optimized for various screen sizes.",
          "Optional side-by-side views for larger screens."
        ]
      }
    },
    rulesOfTheGame: {
      grid: {
        title: "Grid",
        details: "The board is a 5x5 grid labeled A1 to E5."
      },
      ships: {
        title: "Ships",
        details: "Each player places five ships, one per grid square."
      },
      turns: {
        title: "Turns",
        details: "Players take turns firing shots. Feedback on hits and misses is immediate."
      },
      winning: {
        title: "Winning",
        details: "The first player to sink all of the opponent’s ships wins."
      },
      forfeits: {
        title: "Forfeits",
        details: "Players can forfeit ongoing games by deleting them."
      }
    },
    implementationHighlights: {
      behavioralSpecifications: {
        title: "Behavioral Specifications",
        details: [
          "Session tokens ensure secure and efficient user authentication.",
          "Visual grid interface for placing ships and playing shots.",
          "Clear differentiation of hits, misses, and sunk ships on the board."
        ]
      },
      apiUtilization: {
        title: "API Utilization",
        details: [
          "Authentication via /register and /login endpoints.",
          "Game listing, creation, and updates through dedicated endpoints.",
          "Support for fetching and updating game states in real-time."
        ]
      },
      codeStructure: {
        title: "Code Structure",
        details: [
          "Views: Modularized into separate files under lib/views.",
          "Models: Encapsulation of data logic within lib/models.",
          "Utils: Helper functions and shared utilities stored in lib/utils."
        ]
      },
      responsiveness: {
        title: "Responsiveness",
        details: [
          "Scaling the grid dynamically for optimal viewing across devices.",
          "Smooth transitions between game list and gameplay views."
        ]
      }
    },
    howItWorks: {
      step1: {
        title: "Step 1",
        details: "Register or log in to access the app."
      },
      step2: {
        title: "Step 2",
        details: "View active and completed games or start a new game."
      },
      step3: {
        title: "Step 3",
        details: "Place ships on the grid and start playing."
      },
      step4: {
        title: "Step 4",
        details: "Take turns firing shots and aim to sink all opponent’s ships."
      },
      step5: {
        title: "Step 5",
        details: "Win, lose, or forfeit as desired!"
      }
    },
    learnMore: "For a detailed explanation of the RESTful API used in this project, check the API documentation provided in the project repository.",
    githubLink: "https://github.com/haileystewart/battleship"
  }
];
  
//botnet_detection
export const botnet_detection = {
  title: "Improving Botnet Detection and Mitigation Techniques Using Machine Learning",
  abstract: [
    "This project explored detecting botnet activity in network traffic using rule-based and machine learning approaches to address the growing cybersecurity threat posed by botnets, commonly used for DDoS attacks, data theft, and other malicious activities. Effective detection is critical for mitigating these threats and protecting network infrastructure.",
    "Our methodology comprised four phases. First, we analyzed botnet architectures, command-and-control (C&C) channels, and existing detection strategies. Next, we simulated network traffic to identify botnet patterns using tools like Wireshark, focusing on rule-based indicators such as high traffic volume and repetitive intervals. Subsequently, we developed and refined rule-based methods to detect anomalies and implemented a Naive Bayes classifier to address limitations, comparing its effectiveness to rule-based techniques.",
    "The results revealed distinct advantages of each approach. Rule-based methods were interpretable and resource-efficient, suitable for constrained environments, while machine learning achieved higher accuracy and adaptability, reducing false positives. Combining these strengths, we propose a hybrid system integrating both methods as a robust solution for effective botnet detection."
  ],
  keywords: [
    ["Botnet Detection", "Identifying and mitigating malicious networks of compromised devices controlled by attackers for activities like DDoS attacks and data theft."],
    ["Rule-Based Detection", "Identifying malicious network traffic using predefined rules based on traffic patterns or thresholds."],
    ["Naive Bayes Classifier", "A probabilistic machine learning algorithm based on Bayes' Theorem, commonly used for classification tasks."],
    ["Random Forest", "An ensemble learning method that combines decision trees for accurate predictions, particularly in classification problems."],
    ["Anomaly Detection", "Identifying unusual patterns in data that deviate from normal behavior, often used to detect unknown threats."],
    ["Hybrid Methods", "Detection techniques that combine rule-based and machine learning approaches to balance accuracy and adaptability."],
    ["Feature Engineering", "The process of creating and selecting relevant features from raw data to improve machine learning model performance."],
    ["Decentralized Botnets", "Botnets that use peer-to-peer communication instead of centralized C&C servers, making them harder to detect and disrupt."],
    ["Inter-Packet Time Intervals", "Timing between consecutive data packets, often revealing patterns in botnet communication."],
    ["Area Under the Curve (AUC)", "A metric summarizing a detection system’s performance based on its Receiver Operating Characteristic (ROC) curve."]
  ],
  introduction: [
    "Botnets, networks of compromised computers controlled by malicious actors, represent a growing cybersecurity threat, posing significant risks to organizations and individuals alike. These networks are commonly used to execute a range of cyberattacks, including distributed denial-of-service (DDoS) attacks, data theft, spam distribution, and even espionage. The decentralized and continuously evolving architectures of botnets make them particularly challenging to detect. Modern botnets employ sophisticated evasion techniques, such as encrypted communication channels, peer-to-peer (P2P) architectures, and stealth mechanisms, allowing them to hide their activities within normal network traffic. As a result, detecting and mitigating botnet activity is an essential focus in the field of cybersecurity.",
    "Traditional botnet detection methods, such as signature-based and anomaly-based approaches, have been widely used but face significant limitations. Signature-based detection relies on identifying known attack patterns and requires frequent updates to remain effective. However, it struggles against new or evolving botnet behaviors, often missing novel attack signatures. Conversely, anomaly-based detection focuses on deviations from typical network behavior and can identify emerging threats. Unfortunately, this approach is prone to high false positive rates, frequently flagging legitimate traffic as malicious. The growing use of advanced techniques, such as polymorphic payloads and frequently changing command-and-control (C&C) servers, further complicates the detection process, highlighting the need for more robust solutions. Research by McDermott et al. (2018) emphasizes the importance of packet-level detection and nuanced traffic features like inter-packet intervals, demonstrating the value of capturing contextual relationships to improve detection accuracy.",
    "To address these challenges, research has increasingly focused on hybrid and machine learning-based approaches, which aim to combine accuracy, adaptability, and scalability. Machine learning offers a promising avenue by leveraging large datasets to identify complex patterns indicative of botnet behavior. For example, Feily et al. (2009) highlighted that machine learning can significantly enhance detection accuracy but emphasized its dependency on high-quality and representative training data. Similarly, Haddadi and Zincir-Heywood (2016) proposed a framework combining anomaly-based detection with a Bidirectional Long Short-Term Memory (Bi-LSTM) classifier to reduce false positives and improve accuracy. Building on these studies, this project develops a dual-method detection system that leverages both rule-based and machine learning-based techniques. Rule-based detection offers interpretability and efficiency, while machine learning provides adaptability and improved accuracy. This study contributes valuable insights into balancing interpretability, accuracy, and adaptability for enhanced botnet detection, offering a pathway toward more robust solutions against an ever-evolving threat."
  ],
  methodology: {
    intro: "In our research, we adopted a structured, four-phase approach to address the complex challenge of detecting botnet activity. Each phase of the project contributed to building a robust detection system, combining insights from botnet architecture and network traffic analysis with the practical implementation of both rule-based and machine learning-based detection methods.",
    phases: [
      {
        title: "Phase 1: Botnet Architecture and Detection Methods",
        paragraphs: [
          "This phase examined botnet architectures and traditional detection strategies, focusing on centralized and decentralized configurations. Centralized botnets, relying on a single command-and-control (C&C) server, are more vulnerable to disruption, while decentralized botnets use peer-to-peer (P2P) models, making detection more complex. The CTU-13 dataset provided real-world examples, helping identify common botnet behaviors, such as frequent communication with specific IP addresses in centralized setups and dispersed patterns in P2P networks.",
          "To deepen understanding, we simulated botnet traffic patterns, replicating behaviors like Distributed Denial of Service (DDoS) attacks and data exfiltration. These simulations mirrored real-world botnet activity, providing critical data for subsequent analysis and enabling us to observe traffic behaviors typical of botnets, which laid the foundation for targeted detection strategies."
        ]
      },
      {
        title: "Phase 2: Network Traffic Analysis",
        paragraphs: [
          "This phase focused on analyzing network traffic to uncover key indicators of botnet activity. By pre-processing the CTU-13 dataset, we extracted features such as packet size, protocol distribution, communication frequency, and inter-packet time intervals. These metrics revealed differences between benign and malicious traffic, such as control messages in small packets versus data-heavy DDoS patterns in larger UDP packets.",
          "The CTU-13 dataset, while widely used, has certain limitations that affect model performance and generalizability. Its primary focus on specific botnet behaviors limits the diversity of attack vectors represented. For instance, modern botnets often employ multi-vector attack strategies, such as combining DDoS with data exfiltration, which are underrepresented in this dataset. Additionally, the dataset's reliance on controlled traffic scenarios may not fully capture the complexities of real-world network environments, such as dynamic network topologies or the influence of encrypted communications.",
          "These limitations can impact model training by reducing exposure to varied attack patterns, potentially leading to overfitting on the dataset's specific characteristics. Addressing these challenges requires incorporating more diverse datasets or simulating realistic network conditions to ensure robust model performance in practical applications.",
          "The importance of inter-packet intervals for nuanced detection was highlighted in McDermott et al. (2018), who utilized BLSTM-RNN to analyze sequential patterns within packet-level data. Their findings informed our feature selection process, as we prioritized attributes capable of capturing the temporal and structural intricacies of botnet traffic. Visualization tools like Matplotlib were used to identify distinctive traffic characteristics, including spikes in packet volume and consistent communication with specific IPs. These visualizations highlighted recurring patterns, such as rapid, repetitive communications or high data transfer volumes, which informed rule creation in the next phase.",
        ]
      },
      {
        title: "Phase 3: Rule-Based Detection",
        paragraphs: [
          "In this phase, a rule-based detection system was developed to identify botnet activity by applying specific patterns observed in Phase 2. Three key rules were implemented: detecting high traffic volumes, repetitive inter-packet intervals, and frequent C&C requests. These indicators targeted common botnet behaviors such as automated communication patterns and high-volume data transfers used in DDoS attacks or data exfiltration. The rules were designed based on thresholds derived from observed traffic characteristics, such as packet size distributions and communication frequencies.",
          "Testing with the CTU-13 dataset validated the effectiveness of the rules in flagging anomalies like large-scale DDoS traffic and persistent low-bandwidth C&C communication. However, the rule-based system faced challenges, including false positives where benign activities like streaming or large file transfers mimicked malicious patterns. Fine-tuning thresholds through iterative testing improved sensitivity and specificity but highlighted the rigidity of static rules in adapting to decentralized botnets, whose peer-to-peer communications often defy centralized detection patterns.",
          "Despite these limitations, the rule-based system provided a strong initial detection framework, especially for environments with limited resources or straightforward traffic patterns. Its interpretable nature and reliance on defined thresholds offered a foundation for further refinement, paving the way for more adaptive and sophisticated methods explored in Phase 4."
        ]
      },
      {
        title: "Phase 4: Machine Learning Models",
        paragraphs: [
          "This phase expanded on the detection capabilities by implementing supervised machine learning models—Naive Bayes and Random Forest—trained on labeled data from the rule-based phase. Preprocessing addressed key data challenges, such as filling null values and converting improperly formatted IP addresses, to ensure data quality.",
          "Naive Bayes, a probabilistic model based on Bayes' Theorem, was chosen for its simplicity and efficiency in classification tasks. Its straightforward implementation made it particularly suitable for initial experiments, providing a baseline for understanding how well machine learning methods could classify botnet-related traffic. However, Naive Bayes is limited in handling features with varying importance or dependencies, which often arise in complex network traffic patterns. As such, it struggled to achieve high robustness in scenarios involving decentralized botnets or evolving attack patterns.",
          "Random Forest, an ensemble model combining multiple decision trees, was selected as the primary machine learning approach due to its high adaptability and capacity to handle complex, non-linear feature relationships. Unlike simpler models, Random Forest aggregates predictions from multiple trees, improving its robustness and precision when detecting nuanced botnet behaviors.",
          "The choice of Random Forest was further motivated by its lower computational overhead compared to deep learning models, particularly BLSTM-RNNs, which McDermott et al. (2018) noted to have higher processing times per epoch. While BLSTM excels at capturing contextual relationships within sequential data, its intensive resource requirements make it less practical for real-time or resource-constrained environments. By contrast, Random Forest provides a balance of high accuracy and efficiency, making it an ideal choice for generalized botnet detection.",
          "For example, in our study, Random Forest achieved near-perfect accuracy, precision, recall, and F1 scores on the CTU-13 dataset, handling varied traffic patterns with minimal false positives. Its ability to process complex patterns without relying on predefined thresholds further highlighted its adaptability. Additionally, the model’s interpretability and scalability make it a strong candidate for integration into hybrid detection systems.",
          "Building on the strengths of both models, this phase demonstrated how Naive Bayes and Random Forest can complement each other. While Naive Bayes provides a lightweight, interpretable starting point for anomaly detection, Random Forest excels in scenarios requiring nuanced analysis of traffic patterns. These findings suggest that a hybrid approach combining the simplicity of Naive Bayes with the sophistication of Random Forest can provide a robust framework for botnet detection."
        ]
      }
    ]
  },
  results: {
    phases: [
      {
        title: "Phase 3: Rule-Based Detection",
        paragraphs: [
          "The rule-based detection phase demonstrated the efficacy of handcrafted detection rules in identifying botnet activity within network traffic. Key performance metrics included the detection rate, flag rate by unique IPs, and a proxy estimate of false positives. The detection rate was calculated at 6.79%, indicating that a small but meaningful proportion of the network traffic was flagged as suspicious. The flag rate by unique IPs, which highlights how many distinct IP addresses were flagged, was 28.55%, showing that certain detection rules disproportionately flagged specific IPs.",
          "To further assess the rule-based methods, we generated several visualizations. The Detection Rate vs. False Positive Rate graph demonstrated a trade-off between effective detection and the potential for misclassifications.",
          "Additionally, the Packet Volume Over Time graph revealed periodic spikes in flagged traffic, indicative of coordinated botnet activities such as Distributed Denial of Service (DDoS) attacks or command-and-control (C&C) communication bursts.",
          "The Flagged IP Count by Detection Rule visualization helped identify which detection rules contributed most to flagging unique IPs, offering insight into rule specificity and coverage.",
          "Despite its strengths, the rule-based approach had notable limitations. While effective in identifying common patterns such as high traffic volumes and repetitive time intervals, it struggled with adaptability. For example, decentralized botnets with peer-to-peer architectures often evaded detection due to their less predictable communication patterns. Furthermore, rule-based methods showed higher rates of false positives, flagging benign traffic under certain thresholds. This highlighted the need for a more adaptable detection mechanism, which led to the exploration of machine learning models in Phase 4."
        ],
        images: [
          { src: detectionVsFalsePositiveRate, alt: "Detection Rate vs False Positive Rate" },
          { src: packetVolumeOverTime, alt: "Packet Volume Over Time" },
          { src: flaggedIpCount, alt: "Flagged IP Count by Detection Rule" }
        ]      
      },
      {
        title: "Phase 4: Machine Learning Models",
        paragraphs: [
          "Machine learning models provided a significant improvement in detection accuracy and adaptability. We trained and tested a Naive Bayes classifier and a Random Forest model using labeled data from the CTU-13 dataset. The performance metrics for both models were exemplary, with Random Forest outperforming Naive Bayes in nearly every category.",
          "Naive Bayes, although a simpler model, achieved an accuracy of 99.69%, a precision of 99.69%, and a perfect recall of 100%, resulting in an F1 score of 99.85%. However, it struggled with false positives, misclassifying 83 benign instances as malicious. Despite these limitations, Naive Bayes demonstrated the effectiveness of even basic machine learning techniques in detecting botnet activity.",
          "Random Forest, on the other hand, emerged as the superior model, achieving near-perfect metrics: an accuracy of 99.99%, a precision of 99.99%, and a recall of 100%, leading to an F1 score of 99.99%. The model misclassified only one benign instance, showcasing its robustness and precision in handling varied and complex traffic patterns. The ROC (Receiver Operating Characteristic) curve for Random Forest confirmed its status as a near-perfect classifier, with an area under the curve (AUC) of 100%, while Naive Bayes achieved an AUC of 71%, demonstrating its improvement over random guessing but highlighting room for enhancement."
        ],
        images: [
          { src: rocCurve, alt: "ROC Curve Comparison" }
        ]
      }
    ]
  },
  comparison: {
    title: "Comparison and Interpretation",
    intro: "To evaluate the effectiveness of rule-based and machine learning-based methods, we compared their key performance metrics. Table 1 summarizes our study’s results alongside findings from related work, providing a comprehensive perspective on the strengths and limitations of each approach.",
    table: [
      ["Method/Study", "Accuracy (%)", "Precision (%)", "Recall (%)", "F1 Score (%)", "Notes"],
      ["Rule-Based Detection", "95.7", "89.96", "93.4	", "93.56", "Effective for specific patterns but lacks the adaptability and precision"],
      ["Naive Bayes", "99.69", "99.69", "100", "99.85", "Simpler ML method; struggles with false positives"],
      ["Random Forest", "99.99", "99.99", "100", "99.99", "Best-performing; highly accurate and adaptable"],
      ["BLSTM-RNN (McDermott et al.)", "99.998", "N/A", "N/A", "N/A", "Specialized for Mirai botnet detection with packet-level contextual analysis"],
      ["Haddadi & Zincir-Heywood (2016)", "Highest accuracy with C4.5 algorithm", "N/A", "N/A", "N/A", "Specialized for Mirai botnet detection"],
      ["Feily et al. (2009)", "N/A", "N/A", "N/A", "N/A", "Surveyed botnet detection approaches without specific performance metrics"]
    ],
    paragraphs: [
      "The results underscore the trade-offs between different detection approaches. Rule-based detection, while interpretable and effective for specific patterns, is rigid and prone to false positives, particularly in complex traffic scenarios. For example, while the rule-based system detected 95.7% of malicious activity, it flagged a significant amount of benign traffic due to predefined static thresholds.",
      "In contrast, machine learning methods, such as Random Forest, demonstrate superior adaptability and precision, excelling at detecting nuanced traffic patterns. Our Random Forest model achieved an impressive 99.99% accuracy on the CTU-13 dataset, matching the high detection standards seen in McDermott et al.’s study, where their BLSTM-RNN model achieved 99.998% accuracy for Mirai botnet detection. While BLSTM’s packet-level approach allowed for highly specific detection, it faced higher computational overhead compared to Random Forest, which is better suited for generalized, real-time scenarios.",
      "Haddadi and Zincir-Heywood's 2016 study achieved its highest accuracy with the C4.5 algorithm by evaluating multiple detection methods using flow-based features such as inter-arrival time. While their focus on detecting Mirai botnet activity provides high specificity for that botnet, our Random Forest model offers greater adaptability to varied traffic patterns, making it a more generalized solution. Furthermore, our approach emphasizes packet-layer analysis rather than relying heavily on flow-based features, enabling broader applicability across different botnet types.",
      "Similarly, Feily et al. (2009) conducted a comprehensive survey of botnet detection techniques but did not present specific experimental results or performance metrics. Their categorization of detection methods informed our hybrid approach by highlighting the strengths and limitations of rule-based and anomaly-based detection techniques. Building on this foundational work, our study integrates machine learning to enhance adaptability and accuracy, addressing some of the limitations identified in Feily et al.'s survey.",
      "Visual comparisons further highlight these trade-offs. For instance, the 'Detection Accuracy Comparison' graph shows Random Forest as the best-performing model, followed closely by BLSTM-RNN for Mirai-specific detection. Naive Bayes, while effective in simpler scenarios, struggled with false positives, flagging 83 benign instances as malicious. This highlights the superiority of data-driven machine learning models in handling complex traffic scenarios.",
      "In summary, our machine learning-based approach, particularly Random Forest, demonstrated unmatched accuracy and robustness, making it a strong candidate for future botnet detection systems. At the same time, the complementary strengths of rule-based detection—interpretability and simplicity—suggest that hybrid systems may provide the most comprehensive solution to this evolving cybersecurity challenge."
    ]
  },
  discussion: {
    title: "Discussion",
    sections: [
      {
        heading: "Lessons Learned",
        paragraphs: [
          "This project underscored the strengths and challenges of both rule-based and machine learning (ML) approaches for botnet detection. Rule-based methods excelled in interpretability, with carefully crafted rules effectively identifying traffic anomalies like high volumes and repetitive patterns. However, their rigidity often resulted in false positives and limited their adaptability to sophisticated botnet behaviors. Adjusting detection thresholds improved performance but highlighted the limitations of static methods in handling decentralized botnets with dynamic communication patterns.",
          "Machine learning approaches, introduced in Phase 4, significantly enhanced adaptability and detection accuracy. The Naive Bayes and Random Forest models demonstrated the capability to identify complex patterns in network traffic, with Random Forest achieving near-perfect results. However, ML methods presented challenges, including the need for extensive preprocessing, labeled datasets, and careful parameter tuning. This revealed the importance of robust workflows and scalable feature engineering to maximize effectiveness.",
          "An important insight was the role of refined feature extraction in improving detection capabilities for both approaches. Adding features like time intervals between packets and communication frequency, alongside data visualization tools, deepened understanding of botnet traffic patterns. These findings align with McDermott et al. (2018), who emphasized the significance of temporal and structural attributes in enhancing detection accuracy. Their use of BLSTM-RNN models highlighted how sequential relationships in packet-level data can uncover sophisticated attack behaviors, offering valuable insights for feature engineering in hybrid systems."
        ]
      },
      {
        heading: "Future Work",
        paragraphs: [
          "Future work could focus on enhancing rule-based detection through more sophisticated, adaptive rules that integrate statistical anomaly detection and contextual information, such as user behavior. These adaptive rules could use dynamic thresholds based on evolving traffic conditions, reducing false positives while maintaining interpretability.",
          "For ML, exploring advanced algorithms such as gradient boosting, deep learning, and semi-supervised methods could address challenges like limited labeled data and improve adaptability to new botnet behaviors. As demonstrated by McDermott et al. (2018), models like BLSTM-RNN are particularly effective in leveraging sequential traffic patterns to improve detection accuracy. However, their computational overhead necessitates optimized implementations for real-time applications. Unsupervised learning methods could enable detection without heavy reliance on pre-labeled datasets, broadening the applicability of ML models in diverse environments."
        ]
      },
      {
        heading: "The Case for Hybrid Approaches",
        paragraphs: [
          "A hybrid detection system that combines rule-based methods for quick anomaly identification with machine learning models for nuanced analysis presents a promising direction. Rule-based systems can act as a lightweight pre-filter, flagging straightforward patterns and reducing the computational burden on downstream ML models. Integrating these pre-filters with advanced deep learning models, as suggested by McDermott et al., could further optimize the trade-off between interpretability and adaptability. For instance, BLSTM models could analyze flagged traffic for nuanced patterns, offering high accuracy while minimizing resource consumption.",
          "Deploying hybrid systems in real-world traffic environments would provide valuable insights into their performance and resilience under diverse conditions. This approach could also address the growing complexity of botnets that employ multi-vector attack strategies."
        ]
      },
      {
        heading: "Dataset Challenges",
        paragraphs: [
          "The CTU-13 dataset was instrumental in this study, offering labeled traffic data for training and evaluation. However, its limited attack vectors and lack of real-world diversity present challenges for generalizability. As highlighted by McDermott et al. (2018), datasets that reflect multi-vector attack scenarios and realistic network conditions are critical for advancing botnet detection research. Future studies should focus on creating diversified datasets through simulated attacks or curated real-world data, capturing the dynamic behaviors of modern botnets.",
          "Addressing the scarcity of labeled datasets through automated labeling techniques could also accelerate progress in this field. Techniques such as active learning and weak supervision could enable the creation of high-quality training data while reducing the manual effort required."
        ]
      }
    ]
  },
  conclusion: {
    title: "Conclusion",
    paragraphs: [
      "This project addressed the complex challenge of botnet detection by evaluating rule-based and machine learning (ML) methods through a structured four-phase approach. From analyzing botnet architectures and traffic patterns to developing detection systems, the study provided critical insights into improving detection strategies. The dual-method approach combined traditional rule-based techniques with advanced ML models, enabling comprehensive detection frameworks.",
      "The findings highlighted the complementary strengths of these approaches. Rule-based detection, with its simplicity and interpretability, proved effective in identifying specific traffic anomalies but struggled with adaptability and false positives. Machine learning models, particularly Random Forest, excelled in accuracy and adaptability, detecting nuanced and evolving botnet behaviors. Together, these methods created a robust framework, with rule-based techniques establishing a foundation and ML models enhancing adaptability and precision.",
      "Effective botnet detection is crucial to mitigating cybersecurity threats like DDoS attacks and data breaches. This project demonstrated the potential of hybrid systems, leveraging the strengths of rule-based methods and ML models to overcome their individual limitations. By building on these findings and addressing challenges such as data scarcity and real-world deployment, future systems can strengthen network resilience against sophisticated and evolving botnet threats, contributing to a more secure cyberspace."
    ]
  },
  appendices: {
    sections: [
      {
        title: "Appendix A: Additional References",
        description: "This appendix provides references to foundational studies and resources that informed the development of the project's methodology and approaches. These sources highlight key advancements in traditional and machine learning-based botnet detection, offering critical insights into techniques, datasets, and hybrid frameworks used in this research.",
        references: [
          {
            text: "Haddadi, F., & Zincir-Heywood, A. N. (2016). Botnet detection using deep learning and bidirectional LSTM. Proceedings of the IEEE Symposium on Security and Privacy.",
            link: "https://ieeexplore.ieee.org/document/8489489"
          },
          {
            text: "Feily, M., Shahrestani, A., & Ramadass, S. (2009). A survey of botnet and botnet detection. IEEE Communications Surveys & Tutorials, 12(4), 347-366.",
            link: "https://ieeexplore.ieee.org/abstract/document/5210988"
          },
          {
            text: "Garcia, S., Grill, M., Stiborek, J., & Zunino, A. (2014). CTU-13 Dataset: A labeled dataset with botnet, normal, and background traffic.",
            link: "https://www.stratosphereips.org/datasets-ctu13"
          }
        ]
      },
      {
        title: "Appendix B: Methodology Code and Implementation",
        description: "This appendix includes the code repository and implementation details for the methodology used in this project. The repository contains source code for preprocessing, rule-based detection, and machine learning model training and evaluation. It also documents the libraries, frameworks, and datasets used, along with specific preprocessing techniques like handling null values and formatting IP addresses.",
        references: [
          {
            text: "Donald, A., Stephens, A., & Stewart, H. (2024, September 24). Improving botnet detection and mitigation techniques using machine learning. GitHub.",
            link: "https://github.com/haileystewart/botnet-detection-ml-techniques"
          }
        ]
      }
    ]
  }
};

//aws_hangman_server
export const aws_hangman_server = {
  title: "AWS Hangman Server",
  overview: "The AWS Hangman Server project is a modernized, networked adaptation of the classic Hangman game, designed to demonstrate key concepts in distributed computing and software engineering. Developed in C and deployed on AWS, this project implements a robust client-server architecture that enables seamless multiplayer gameplay. The server program serves as the central hub, coordinating game sessions for multiple clients simultaneously through the use of multithreading. Players connect to the server over a TCP network, ensuring reliable, ordered communication for an uninterrupted gaming experience. By leveraging cloud-based deployment on AWS, the project simulates real-world usage scenarios, highlighting the practical applications of scalable, distributed systems. The game logic, fault tolerance, and network reliability make this implementation a comprehensive exercise in advanced programming and deployment strategies.",
  keyFeatures: [
    "Client-Server Architecture with multithreading for concurrent client support.",
    "Reliable real-time communication via TCP.",
    "Randomized word selection from a dataset of over 69,000 words.",
    "Robust error handling and cross-platform compatibility."
  ],
  technicalDetails: [
    ["Languages Used", "C"],
    ["Frameworks & Tools", "TCP Sockets, POSIX Threads, AWS EC2 instances"],
    ["Deployment Environment", "Deployed on two AWS EC2 instances for server and client testing"],
    ["Concurrency", "Server threads allow simultaneous connections and isolated game logic for each client"],
    ["Networking Protocol", "TCP was chosen for its reliability and ordered data delivery"]
  ],
  skills: [
    ["Network Programming", "Implemented TCP-based client-server communication and message protocols for game state exchange."],
    ["Multithreading", "Used POSIX threads to handle multiple client connections independently."],
    ["Cloud Deployment", "Configured and tested the server and client on AWS EC2 instances."],
    ["System Debugging", "Handled edge cases and validated error-free communication and state management."]
  ],
  projectFlow: [
    "The AWS Hangman server operates as a networked application built on the client-server model. The server program initializes by loading a comprehensive word list containing over 69,000 entries, preparing it for an unlimited number of game sessions. This word list serves as the foundation for the game, with each client receiving a unique word randomly selected during their session.",
    "Once the server starts, it establishes a TCP socket to listen for incoming client connections. Each new connection is handled by a dedicated thread, ensuring that multiple clients can play independently and simultaneously without interference. The design leverages multithreading to separate game logic across different threads, maintaining smooth and isolated interactions.",
    "On the client side, the user connects to the server using its IP address and designated port. The server greets the client with the game's initial state, displaying placeholders for the mystery word and the number of remaining lives. Clients are prompted to submit their guesses one letter at a time. Each guess is transmitted to the server, where it is validated and processed. Correct guesses reveal letters in the word, while incorrect ones reduce the player's remaining lives.",
    "As the game progresses, the server communicates updates, including the partially revealed word, the player’s guessed letters, and the number of lives left. The game concludes when the player either guesses the word correctly or exhausts their lives. Upon completion, the server offers the option to play another round, resetting the state for a new game. The seamless interaction highlights the reliability of TCP and the robustness of the system.",
    "The deployment aspect of the project further underscores its practicality. Both the server and client programs were tested on AWS EC2 instances. By running the programs on separate virtual machines, the system simulates real-world networked environments, confirming the application’s functionality across distributed systems. This deployment also showcases the portability and cross-platform compatibility of the code."
  ],
  implementation: [
    "This project is a direct application of the client-server model, an essential architecture in distributed computing. The server acts as the central hub, managing resources and coordinating communication with multiple clients. By leveraging TCP, the system ensures reliable, ordered, and error-checked data exchange, which is critical for maintaining consistent game states.",
    "Multithreading on the server enables simultaneous gameplay for multiple users. Each connection spawns a new thread that operates independently, ensuring the server can manage individual game logic without conflict. This approach not only maximizes the server’s efficiency but also ensures a responsive and engaging user experience.",
    "The choice of TCP over UDP was intentional, as TCP’s reliability is crucial for text-based communication where missing or out-of-order messages could disrupt gameplay. If UDP were used, additional logic would be required to handle packet loss and reordering, adding complexity without significant benefit in this scenario.",
    "Deploying the system on AWS demonstrates the scalability of the project. Cloud-based deployment simulates real-world usage where clients connect over the internet, reflecting how distributed systems operate in practical environments. The ability to manage the server remotely and handle dynamic client interactions illustrates the robustness and adaptability of the implementation."
  ],
  demoVideo,
};

//social links
export const socialprofils = {
    github: "https://github.com/haileystewart",
    //facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/hailey-stewart-800170241/",
    //twitter: "https://twitter.com",
};