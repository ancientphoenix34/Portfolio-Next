import {
    Briefcase,
    Cloud,
    Code2,
    Coffee,
    Database,
    GitBranch,
    Globe,
    GraduationCap,
    Layers,
    Layout,
    Mail,
    MapPin,
    Palette,
    Phone,
    Server,
    Smartphone,
    Terminal,
    Braces,
    Workflow,
    Network,
    Zap,
    GitFork,
    Send,
    GitMerge,
    UploadCloud,
    ImageUp,
    FileCode,
    BrainCircuit,
    MessageSquareCode,
    BookOpen,
    LayoutGrid,
    GitGraph,
    Cable,
} from "lucide-react";

import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

export interface Certification {
    id: number;
    title: string;
    issuer: string;
    issuedDate: string;
    expiryDate?: string;
    credentialId?: string;
    credentialUrl: string;
    skills: string[];
}

export const stats = [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Completed", value: "Multiple" },
    { label: "Technologies Mastered", value: "10+" },
    { label: "AI & Automation Workflows", value: "5+" },
];

export const highlights = [
    { icon: MapPin, text: "Based in Kerala, INDIA" },
    { icon: Briefcase, text: "Open for freelance work" },
    { icon: GraduationCap, text: "Master’s Graduate from KTU" },
    { icon: Coffee, text: "Powered by coffee & curiosity" },
];

export const userReviewData = [
    {
        id: 1,
        name: "John Doe",
        profession: "Real Estate Agent",
        userImage: "/images/u1.jpg",
        review:
            "A wonderful experience! The platform made it easy to find exactly what I needed. lorem ipsum dolor sit ame",
    },
    {
        id: 2,
        name: "Mike Smith",
        profession: "Business Owner",
        userImage: "/images/u2.jpg",
        review:
            "Great selection of properties and seamless process. Highly recommended for anyone looking to invest.",
    },
    {
        id: 3,
        name: "Alex Johnson",
        profession: "Web developer",
        userImage: "/images/u3.jpg",
        review:
            "The website helped me find my dream home quickly and hassle-free. Exceptional service!",
    },
    {
        id: 4,
        name: "Emily Clark",
        profession: "Interior Designer",
        userImage: "/images/u4.jpg",
        review:
            "Fantastic range of properties with clear details. The best platform for home and design inspiration!",
    },
];

export const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "farseenkmohammed@gmail.com",
        href: "mailto:farseenkmohammed@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 8156996841",
        href: "tel:8156996841",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Malappuram, Kerala",
        href: "#",
    },
];

export const socialLinks = [
    { icon: FaGithub, href: "https://github.com", label: "GitHub" },
    { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
];

export const experiences = [
    {
        type: "education",
        title: "Bachelor of Computer Application(BCA)",
        company: "Calicut University",
        period: "2019 - 2022",
        description:
            "Pursuing BCA under University of Calicut with a focus on software development, databases, web technologies, and programming fundamentals.",
        technologies: ["Data Structures", "OOPs", "Web Development", "Computer Fundamentals"],
    },
    {
        type: "education",
        title: "Master of Computer Application(MCA)",
        company: "APJ Abdul Kalam Technological University(KTU)",
        period: "2022 - 2024",
        description:
            "Pursuing MCA with a focus on advanced software development, system design, AI technologies, and scalable application architecture.",
        technologies: ["Advanced Programming", "System Design", "Artificial Intelligence", "Database Management", "Research & Innovation"],
    },
    {
        type: "work",
        title: "MERN stack Intern",
        company: "I-ROID Technologies",
        period: "2024 May - 2024 Sept",
        description:
            "MERN Stack Intern focused on full-stack web development, RESTful APIs, database management, and scalable application development using modern JavaScript technologies.",
        technologies: ["React", "Node", "Express", "MongoDB"],
    },
    {
        type: "work",
        title: "Jr Software Engieneer",
        company: "Acqodis Technologies LLP",
        period: "2025 Mar - 2026 Mar",
        description:
            "Developed client websites and e-com. Gained experience in agile methodologies.",
        technologies: ["JavaScript", "PHP", "MySQL", "WordPress"],
    },
];

export const footerSocialLinks = [
    { icon: FaGithub, href: "https://github.com", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

export const projects = [
    {
        title: "Fit Club",
        description: "A React fitness club site with animated stats, membership plans, and email-integrated contact option.",
        image: "/images/FitClub.png",
        techStack: ["HTML", "React", "CSS"],
        demoUrl: "https://fit-club-frontend.onrender.com",
        githubUrl: "https://github.com/ancientphoenix34/Fit-Club-Frontend",
    },
    {
        title: "Blog Application",
        description:
            "Collaborative project management tool with real-time updates, Kanban boards, and team analytics.",
        image: "/images/Blog.png",
        techStack: ["React", "Node.js", "Express", "MongoDB"],
        demoUrl: "https://blog-front-arxn.onrender.com",
        githubUrl: "https://github.com/ancientphoenix34/Blog",
    },
    {
        title: "Job Application Tracker",
        description:
            "GPT-powered content creation platform for marketers with templates and workflow automation.",
        image: "/images/Job_Appln.png",
        techStack: ["Next", "Python", "OpenAI", "FastAPI"],
        demoUrl: "https://job-application-tracker-315t.onrender.com/",
        githubUrl: "https://github.com/ancientphoenix34/Job-Application-Tracker",
    },
    {
        title: "Recruiter mail notifier",
        description:
            "GPT-powered content creation platform for marketers with templates and workflow automation.",
        image: "/images/mail-auto.png",
        techStack: ["n8n", "Automation", "OpenAI"],
        githubUrl: "https://github.com/ancientphoenix34/n8n-Recruiter-Notifier",
    },
];

export const certifications: Certification[] = [
    {
        id: 1,
        title: "System Design Masterclass (2026) | From FAANG Insiders",
        issuer: "UDEMY",
        issuedDate: "May 2026",
        credentialId: "UC-cf56d32f-ba6a-48c9-acbd-b9167c1d0293",
        credentialUrl: "https://www.udemy.com/certificate/UC-cf56d32f-ba6a-48c9-acbd-b9167c1d0293/",
        skills: ["System Design", "Scalability", "API Design", "Microservices", "LLD", "HLD"],
    },
    {
        id: 2,
        title: "LLM Engineering, RAG, & AI Agents Masterclass [2026]",
        issuer: "Udemy",
        issuedDate: "May 2026",
        credentialId: "UC-cac866f0-1692-418e-91ae-ead73a082560",
        credentialUrl: "https://www.udemy.com/certificate/UC-cac866f0-1692-418e-91ae-ead73a082560/",
        skills: ["LLM", "RAG", "LangChain", "Vector Databases", "LangGraph", "Multimodal Systems", "n8n"],
    },
];

export const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "JavaScript", icon: Braces },
            { name: "React", icon: Code2 },
            { name: "Next.js", icon: Globe },
            { name: "TypeScript", icon: Terminal },
            { name: "Tailwind CSS", icon: Palette },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: Server },
            { name: "Express", icon: Layers },
            { name: "MongoDB", icon: Database },
            { name: "PostgreSQL", icon: Database },
            { name: "REST APIs", icon: Cloud },
            { name: "MVC", icon: Workflow },
            { name: "Micro Services", icon: Network },
            { name: "Fast API", icon: Zap },
        ],
    },
    {
        title: "AI & Automation",
        skills: [
            { name: "Python", icon: FileCode },
            { name: "LLM API Integration", icon: BrainCircuit },
            { name: "Prompt Engineering", icon: MessageSquareCode },
            { name: "(RAG)", icon: BookOpen },
            { name: "Vector Databases", icon: LayoutGrid },
            { name: "LangGraph", icon: GitGraph },
            { name: "n8n", icon: Cable },
        ],
    },
    {
        title: "Tools & Others",
        skills: [
            { name: "Git", icon: GitBranch },
            { name: "GitHub", icon: GitFork },
            { name: "Postman", icon: Send },
            { name: "CI/CD Pipelines", icon: GitMerge },
            { name: "Render Deployment", icon: UploadCloud },
            { name: "Cloudinary", icon: ImageUp },
        ],
    },
];