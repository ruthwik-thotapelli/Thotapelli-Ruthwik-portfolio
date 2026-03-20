export const personalInfo = {
  name: "Thotapelli Ruthwik",
  title: "Full-Stack Developer | DevOps Enthusiast",
  subtitle: "Building Secure and Scalable Web Applications",
  about:
    "Full-Stack Developer passionate about building secure and scalable web applications using React.js, Node.js, Express.js, MySQL, and MongoDB. Strong interest in DevOps and cloud technologies with hands-on exposure to AWS, Docker, CI/CD, REST APIs, JWT authentication, and role-based access control.",
  email: "ruthwikthotapelli8@gmail.com",
  phone: "+91-9392410300",
  github: "https://github.com/ruthwik-thotapelli",
  linkedin: "https://www.linkedin.com/in/ruthwik-thotapelli",
  resume: "/Thotapelli_Ruthwik_Resume.pdf",
};

export const skills = [
  {
    category: "Languages",
    items: ["C", "C++", "Java", "Data Structures and Algorithms"],
  },
  {
    category: "Web Technologies",
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Bootstrap", "Tailwind CSS", "React.js", "Node.js"],
  },
  {
    category: "Databases & Tools",
    items: ["DBMS", "MySQL", "MongoDB", "Postman", "AWS", "Docker", "Git", "GitHub"],
  },
  {
    category: "Technical Skills",
    items: ["UI/UX Design", "DevOps Fundamentals", "Artificial Intelligence Fundamentals"],
  },
  {
    category: "Soft Skills",
    items: ["Problem-Solving", "Adaptability", "Time Management"],
  },
];

export const projects = [
  {
    title: "TalentBridge",
    description: "Secure Enterprise Full Stack Hiring Platform",
    date: "Jan 2026",
    longDescription:
      "Developed a secure, enterprise-grade hiring platform to manage job postings, applications, and candidate workflows end-to-end. Implemented role-based access control, secure authentication, scalable REST APIs, and an ATS-style resume screening and scoring system to improve recruitment efficiency.",
    problem: "Traditional hiring platforms lack integrated technical screening, forcing recruiters to juggle multiple tools. ATS systems often fail to accurately score modern tech resumes.",
    approach: "Built a consolidated platform with an integrated ATS scoring algorithm that normalizes diverse resumes, coupled with a secure RBAC system to manage the entire pipeline from one dashboard.",
    impact: "Reduces time-to-hire by 40% through automated initial screening and provides a single source of truth for all hiring stakeholders.",
    demoType: "talentbridge",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
      "REST APIs",
      "Postman",
      "GitHub",
    ],
    features: [
      { 
        title: "Role-Based Access", 
        desc: "Secure authentication for Admin, Recruiter, and Candidate roles using JWT.",
        icon: "Shield"
      },
      { 
        title: "ATS Scoring", 
        desc: "Automated resume screening and scoring system to prioritize top talent.",
        icon: "Cpu"
      },
      { 
        title: "Modular Backend", 
        desc: "Designed with scalable REST APIs and clean service separation.",
        icon: "Layers"
      },
      { 
        title: "Hiring Workflows", 
        desc: "End-to-end management of job postings and candidate pipelines.",
        icon: "Workflow"
      }
    ],
    architecture: {
      description: "A secure full-stack architecture built for scalability and performance.",
      steps: [
        { label: "Frontend", tech: "React + Tailwind", icon: "Layout" },
        { label: "API Layer", tech: "Node.js + Express", icon: "Server" },
        { label: "Security", tech: "JWT + RBAC", icon: "Lock" },
        { label: "Database", tech: "MySQL", icon: "Database" }
      ]
    },
    challenges: [
      {
        title: "Secure Auth Flow",
        solution: "Implemented persistent JWT sessions with refresh tokens and fine-grained RBAC hooks.",
        icon: "Shield"
      },
      {
        title: "Resume Parsing",
        solution: "Developed a custom scoring algorithm to normalize diverse file formats into comparable metrics.",
        icon: "FileSearch"
      }
    ],
    github: "https://github.com/ruthwik-thotapelli/TalentBridge-Secure-Enterprise-Full-Stack-Hiring-Platform",
    live: "https://talent-bridge-secure-enterprise-ful.vercel.app/",
    image: "/projects/talentbridge.png",
  },
  {
    title: "CloudForge",
    description: "AWS DevOps CI/CD Infrastructure for Secure Deployments",
    date: "Jan 2026",
    longDescription:
      "Built a production-grade AWS DevOps CI/CD project to automate build, test, and deployment workflows. Designed secure cloud infrastructure, implemented containerized deployments with rollback support, and set up monitoring and logging for faster issue detection and operational reliability.",
    problem: "Manual deployments are error-prone and slow. Startups often struggle to set up enterprise-grade infrastructure that balances security, cost, and scalability.",
    approach: "Designed a serverless AWS infrastructure using ECS Fargate, fully automated through GitHub Actions, with strict IAM roles and automated rollback capabilities.",
    impact: "Enables zero-downtime deployments multiple times a day. Reduced infrastructure management overhead by automating auto-scaling and health checks.",
    demoType: "cloudforge",
    techStack: [
      "AWS",
      "Docker",
      "GitHub Actions",
      "Terraform",
      "ECS",
      "ECR",
      "ALB",
      "CloudWatch",
      "SNS"
    ],
    features: [
      { 
        title: "Serverless ECS", 
        desc: "Container orchestration using Fargate for scalable, serverless compute.",
        icon: "Cloud"
      },
      { 
        title: "Automated CI/CD", 
        desc: "GitHub Actions pipeline for building, pushing, and deploying Docker images.",
        icon: "Terminal"
      },
      { 
        title: "Traffic Routing", 
        desc: "Application Load Balancer with health checks and intelligent routing.",
        icon: "Share2"
      },
      { 
        title: "Observability", 
        desc: "Centralized logging and real-time monitoring with CloudWatch and SNS.",
        icon: "Activity"
      }
    ],
    architecture: {
      description: "Cloud-native infrastructure optimized for high availability and fault tolerance.",
      steps: [
        { label: "Source", tech: "GitHub", icon: "Github" },
        { label: "Pipeline", tech: "GitHub Actions", icon: "Terminal" },
        { label: "Registry", tech: "Amazon ECR", icon: "Package" },
        { label: "Compute", tech: "AWS ECS Fargate", icon: "Cloud" }
      ]
    },
    challenges: [
      {
        title: "Auto-Scaling Logic",
        solution: "Configured dynamic scaling policies based on real-time CPU utilization metrics.",
        icon: "Cloud"
      },
      {
        title: "Zero-Downtime",
        solution: "Implemented blue-green deployment strategies using the Application Load Balancer.",
        icon: "Zap"
      }
    ],
    github: "https://github.com/ruthwik-thotapelli/CloudForge-AWS-DevOps-CI-CD-Infrastructure-for-Secure-Deployments",
    live: "https://github.com/ruthwik-thotapelli/CloudForge-AWS-DevOps-CI-CD-Infrastructure-for-Secure-Deployments",
    image: "/projects/cloudforge.png",
  },
];

export const internships = [
  {
    title: "Software Engineering Job Simulation – Commonwealth Bank",
    type: "Virtual Experience Internship",
    date: "Dec 2025",
    description:
      "Completed a full-stack software engineering simulation with hands-on exposure to enterprise-grade development workflows, backend APIs, React/Redux frontend improvements, and team-based agile practices.",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React",
      "Redux",
      "TypeScript",
      "REST APIs",
      "Postman",
      "Git",
      "GitHub",
    ],
    bullets: [
      "Completed a full-stack software engineering simulation, gaining hands-on experience with enterprise-grade development workflows.",
      "Extended backend features and APIs, working with databases, API testing tools, and unit testing to improve reliability and code quality.",
      "Enhanced a React/Redux frontend using TypeScript, improving UI behavior, performance, and feature integration.",
      "Followed industry-standard development practices using Git and GitHub, including code reviews and collaborative version control.",
      "Delivered features in a team-based, agile-style environment, simulating real-world software engineering processes.",
    ],
    live: "#",
  },
];

export const achievements = [
  {
    title: "Public Speaking Achievement",
    date: "Feb 2026",
    description:
      "Won 3rd Place in Public Speaking at the Spectra Event, LPU, demonstrating effective communication skills.",
  },
  {
    title: "Problem-Solving Badge",
    date: "Dec 2025",
    description:
      "Earned a Problem-Solving Badge for completing 150+ consecutive days of DSA practice in 2025.",
  },
];

export const certifications = [
  {
    name: "Object-Oriented Programming using C++",
    issuer: "Summer Training",
    date: "Jun 2025",
    link: "https://drive.google.com/file/d/1anx-d6def9o0d7FJVG17safq2W3wQZhe/view?usp=drive_link",
  },
  {
    name: "Cloud Computing",
    issuer: "NPTEL",
    date: "Apr 2025",
    link: "https://drive.google.com/file/d/1jytFXLBnFxGD-T-nIM0gp3gMD9fVJgyh/view?usp=drive_link",
  },
  {
    name: "BinaryBlitz Web Hackathon",
    issuer: "Coding Ninjas",
    date: "Mar 2024",
    link: "https://drive.google.com/file/d/1NLpFuiT0KATMRo7dmq9ACsT_jjxeW00y/view?usp=drive_link",
  },
  {
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Oct 2023",
    link: "https://drive.google.com/file/d/184wWQL5GTKFuhEbNC_9gDwh4ZBmRqJY9/view?usp=drive_link",
  },
];

export const education = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech in Information Technology",
    score: "CGPA: 7.62",
    location: "Phagwara, Punjab",
    duration: "Since August 2023",
  },
  {
    institution: "Narayana Junior College",
    degree: "Intermediate (PCM)",
    score: "Percentage: 95.1%",
    location: "Bachupally, Hyderabad",
    duration: "Aug 2021 - May 2023",
  },
  {
    institution: "NSR International School",
    degree: "Matriculation",
    score: "Percentage: 95.5%",
    location: "Areapally, Warangal Urban",
    duration: "Apr 2015 - Mar 2021",
  },
];