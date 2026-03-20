import { FAQItem } from "./faqs";
import React from "react";
import {
  Globe,
  Cpu,
  ShieldAlert,
  Smartphone,
  Cloud,
  Database,
} from "lucide-react";

export type TrackId =
  | "webdev"
  | "ai_ml"
  | "cybersecurity"
  | "mobile"
  | "cloud_devops"
  | "data_engineering";

export interface RoadmapStep {
  id: string;
  title: string;
  description?: string;
  resourceUrl?: string;
  resourceName?: string;
  estimatedDays?: number;
}

export interface RoadmapPhase {
  id: string;
  number: 1 | 2 | 3;
  name: string;
  durationEstimate: string;
  description: string;
  steps: RoadmapStep[];
  buildProject: string;
  buildProjectDescription: string;
}

export interface Track {
  id: TrackId;
  name: string;
  icon: React.ReactNode;
  description: string;
  accentColor: string;
  phases: RoadmapPhase[];
  faqs: { question: string; answer: string }[];
  egyptianMarketNote: string;
}

export const tracks: Track[] = [
  {
    id: "webdev",
    name: "Frontend Development",
    icon: React.createElement(Globe),
    description:
      "Build modern web applications with HTML, CSS, JavaScript and React. Create responsive, accessible user interfaces.",
    accentColor: "#102EB1",
    egyptianMarketNote:
      "Frontend development is the most in-demand track in Egypt. React + TypeScript dominate. Companies like Paymob, Halan, Instabug, and virtually all Egyptian startups hire frontend developers. Remote opportunities are excellent.",
    faqs: [
      {
        question: "Should I learn React or Vue?",
        answer:
          "React is the industry standard globally and in Egypt. Most companies use React. Learn React first, then explore Vue if needed for specific projects.",
      },
      {
        question: "Is TypeScript necessary?",
        answer:
          "Increasingly yes. TypeScript is becoming the standard for production applications. Learn JavaScript fundamentals first, then TypeScript. Most modern companies expect TypeScript knowledge.",
      },
      {
        question: "How long to get a frontend job?",
        answer:
          "With focused daily practice: 6–12 months from zero to job-ready. With programming background: 3–6 months. Build real projects and contribute to open source to accelerate the process.",
      },
      {
        question: "Should I learn a framework first?",
        answer:
          "No. Master HTML, CSS, and vanilla JavaScript first. Understanding the fundamentals makes learning React much easier and makes you a better developer overall.",
      },
    ],
    phases: [
      {
        id: "webdev-phase-1",
        number: 1,
        name: "Internet & Web Fundamentals",
        durationEstimate: "2–3 weeks",
        description:
          "Understand how the internet and browsers work before writing code.",
        buildProject: "Technical Blog Post",
        buildProjectDescription:
          "Write a detailed explanation of what happens when you type a URL in your browser and press enter.",
        steps: [
          {
            id: "webdev-1-1",
            title: "How does the Internet work?",
            description: "IP addresses, packets, routing, DNS, TCP/IP",
            resourceUrl: "https://cs.fyi/guide/how-does-internet-work",
            resourceName: "cs.fyi Internet Guide",
            estimatedDays: 3,
          },
          {
            id: "webdev-1-2",
            title: "HTTP Protocol",
            description: "Request/response, methods, status codes, headers",
            resourceUrl: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
            resourceName: "MDN HTTP",
            estimatedDays: 3,
          },
          {
            id: "webdev-1-3",
            title: "Browsers and How They Work",
            description:
              "Rendering engine, JavaScript engine, DOM construction",
            resourceUrl: "https://web.dev/howbrowserswork/",
            resourceName: "web.dev Browser Guide",
            estimatedDays: 3,
          },
          {
            id: "webdev-1-4",
            title: "DNS and Domain Names",
            description: "Domain name system, how DNS resolution works",
            resourceUrl: "https://howdns.works/",
            resourceName: "How DNS Works",
            estimatedDays: 2,
          },
          {
            id: "webdev-1-5",
            title: "Hosting Basics",
            description: "Web servers, hosting types, deployment concepts",
            resourceUrl:
              "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server",
            resourceName: "MDN Web Server",
            estimatedDays: 2,
          },
        ],
      },
      {
        id: "webdev-phase-2",
        number: 2,
        name: "HTML, CSS & JavaScript Fundamentals",
        durationEstimate: "8–12 weeks",
        description:
          "Master the core technologies of web development: HTML for structure, CSS for styling, JavaScript for interactivity.",
        buildProject: "Responsive Portfolio Website",
        buildProjectDescription:
          "Build a complete portfolio website with responsive design, CSS animations, and interactive JavaScript features.",
        steps: [
          {
            id: "webdev-2-1",
            title: "Semantic HTML5",
            description: "Semantic tags, accessibility, forms, SEO basics",
            resourceUrl: "https://web.dev/learn/html/",
            resourceName: "web.dev HTML Course",
            estimatedDays: 7,
          },
          {
            id: "webdev-2-2",
            title: "CSS Fundamentals",
            description: "Selectors, box model, specificity, inheritance",
            resourceUrl: "https://web.dev/learn/css/",
            resourceName: "web.dev CSS Course",
            estimatedDays: 7,
          },
          {
            id: "webdev-2-3",
            title: "CSS Layouts: Flexbox",
            description:
              "Flex containers, alignment, ordering, responsive layouts",
            resourceUrl:
              "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
            resourceName: "CSS-Tricks Flexbox",
            estimatedDays: 5,
          },
          {
            id: "webdev-2-4",
            title: "CSS Layouts: Grid",
            description: "Grid containers, templates, areas, responsive grids",
            resourceUrl:
              "https://css-tricks.com/snippets/css/complete-guide-grid/",
            resourceName: "CSS-Tricks Grid",
            estimatedDays: 5,
          },
          {
            id: "webdev-2-5",
            title: "Responsive Design",
            description: "Media queries, mobile-first, viewport, fluid layouts",
            resourceUrl: "https://web.dev/learn/design/",
            resourceName: "web.dev Responsive",
            estimatedDays: 5,
          },
          {
            id: "webdev-2-6",
            title: "JavaScript Basics",
            description: "Variables, data types, operators, control flow",
            resourceUrl: "https://javascript.info/first-steps",
            resourceName: "javascript.info Basics",
            estimatedDays: 10,
          },
          {
            id: "webdev-2-7",
            title: "JavaScript Functions & Scope",
            description: "Functions, closures, scope, this keyword",
            resourceUrl: "https://javascript.info/advanced-functions",
            resourceName: "javascript.info Functions",
            estimatedDays: 7,
          },
          {
            id: "webdev-2-8",
            title: "DOM Manipulation",
            description: "Selecting elements, events, modifying DOM",
            resourceUrl: "https://javascript.info/document",
            resourceName: "javascript.info DOM",
            estimatedDays: 7,
          },
          {
            id: "webdev-2-9",
            title: "Asynchronous JavaScript",
            description: "Callbacks, Promises, async/await, Fetch API",
            resourceUrl: "https://javascript.info/async",
            resourceName: "javascript.info Async",
            estimatedDays: 7,
          },
          {
            id: "webdev-2-10",
            title: "Modern JavaScript (ES6+)",
            description: "Arrow functions, destructuring, spread/rest, modules",
            resourceUrl: "https://javascript.info/modern-javascript",
            resourceName: "javascript.info Modern JS",
            estimatedDays: 7,
          },
        ],
      },
      {
        id: "webdev-phase-3",
        number: 3,
        name: "React & Modern Development",
        durationEstimate: "10–14 weeks",
        description:
          "Learn React, TypeScript, and modern development tools to build production-ready applications.",
        buildProject: "Full-Stack Dashboard",
        buildProjectDescription:
          "Build a complete dashboard application with React, TypeScript, API integration, state management, and deployment.",
        steps: [
          {
            id: "webdev-3-1",
            title: "Version Control with Git",
            description:
              "Git basics, branching, merging, pull requests, collaboration",
            resourceUrl: "https://learngitbranching.js.org/",
            resourceName: "Learn Git Branching",
            estimatedDays: 5,
          },
          {
            id: "webdev-3-2",
            title: "Package Managers",
            description: "npm, package.json, dependencies, scripts",
            resourceUrl: "https://docs.npmjs.com/",
            resourceName: "npm Docs",
            estimatedDays: 3,
          },
          {
            id: "webdev-3-3",
            title: "React Fundamentals",
            description: "Components, JSX, props, state, lifecycle",
            resourceUrl: "https://react.dev/learn",
            resourceName: "React Docs",
            estimatedDays: 14,
          },
          {
            id: "webdev-3-4",
            title: "React Hooks",
            description:
              "useState, useEffect, useContext, useRef, custom hooks",
            resourceUrl: "https://react.dev/reference/react",
            resourceName: "React Hooks",
            estimatedDays: 10,
          },
          {
            id: "webdev-3-5",
            title: "TypeScript",
            description: "Types, interfaces, generics, type safety in React",
            resourceUrl: "https://www.typescriptlang.org/docs/",
            resourceName: "TypeScript Docs",
            estimatedDays: 10,
          },
          {
            id: "webdev-3-6",
            title: "CSS Framework: Tailwind",
            description:
              "Utility classes, responsive design, component styling",
            resourceUrl: "https://tailwindcss.com/docs",
            resourceName: "Tailwind Docs",
            estimatedDays: 5,
          },
          {
            id: "webdev-3-7",
            title: "State Management",
            description: "Context API, Zustand, or Redux Toolkit",
            resourceUrl: "https://zustand-demo.pmnd.rs/",
            resourceName: "Zustand",
            estimatedDays: 7,
          },
          {
            id: "webdev-3-8",
            title: "React Router",
            description: "Client-side routing, navigation, protected routes",
            resourceUrl: "https://reactrouter.com/",
            resourceName: "React Router",
            estimatedDays: 5,
          },
          {
            id: "webdev-3-9",
            title: "API Integration",
            description: "REST APIs, fetch, axios, error handling",
            resourceUrl: "https://react.dev/learn/synchronizing-with-effects",
            resourceName: "React Data Fetching",
            estimatedDays: 7,
          },
          {
            id: "webdev-3-10",
            title: "Testing Basics",
            description: "Jest, React Testing Library, unit tests",
            resourceUrl: "https://testing-library.com/react",
            resourceName: "Testing Library",
            estimatedDays: 7,
          },
          {
            id: "webdev-3-11",
            title: "Build Tools",
            description: "Vite, build optimization, environment variables",
            resourceUrl: "https://vitejs.dev/guide/",
            resourceName: "Vite Guide",
            estimatedDays: 3,
          },
          {
            id: "webdev-3-12",
            title: "Deployment",
            description: "Vercel, Netlify, GitHub Pages, CI/CD basics",
            resourceUrl: "https://vercel.com/docs",
            resourceName: "Vercel Docs",
            estimatedDays: 3,
          },
        ],
      },
    ],
  },
  {
    id: "ai_ml",
    name: "AI & Machine Learning",
    icon: React.createElement(Cpu),
    description:
      "Learn machine learning algorithms, deep learning, and build AI-powered applications.",
    accentColor: "#CDA3FF",
    egyptianMarketNote:
      "AI/ML is rapidly growing in Egypt. Companies like Halan, Breadfast, and MaxAB have ML teams. International remote opportunities are abundant due to high global demand for AI skills.",
    faqs: [
      {
        question: "How much math do I need?",
        answer:
          "You need solid foundations in linear algebra, calculus (derivatives), and statistics. 3Blue1Brown makes these concepts intuitive. You don't need a PhD - just enough to understand what models are doing.",
      },
      {
        question: "Python or R?",
        answer:
          "Python, overwhelmingly. Python is the industry standard. R is used in academia but Python dominates in industry. Learn Python.",
      },
      {
        question: "Classical ML or Deep Learning first?",
        answer:
          "Classical ML first. Understanding regression, decision trees, and SVMs gives you the foundation to appreciate why deep learning works. Start with Andrew Ng's course.",
      },
      {
        question: "Is Kaggle important?",
        answer:
          "Kaggle competitions are helpful for practice but not required for jobs. What matters more: understanding fundamentals, real projects, and ability to deploy models. Use Kaggle to learn, not as your only portfolio.",
      },
    ],
    phases: [
      {
        id: "ai-phase-1",
        number: 1,
        name: "Math & Programming Foundations",
        durationEstimate: "6–8 weeks",
        description:
          "Build the mathematical and programming foundation required for machine learning.",
        buildProject: "Statistical Analysis Project",
        buildProjectDescription:
          "Analyze a real dataset using Python, applying statistical methods and visualizing insights.",
        steps: [
          {
            id: "ai-1-1",
            title: "Python Programming",
            description: "Functions, OOP, data structures, file I/O",
            resourceUrl: "https://cs50.harvard.edu/python/",
            resourceName: "CS50 Python",
            estimatedDays: 14,
          },
          {
            id: "ai-1-2",
            title: "Linear Algebra",
            description: "Vectors, matrices, dot products, transformations",
            resourceUrl: "https://www.3blue1brown.com/topics/linear-algebra",
            resourceName: "3Blue1Brown LinAlg",
            estimatedDays: 7,
          },
          {
            id: "ai-1-3",
            title: "Calculus",
            description: "Derivatives, gradients, chain rule, optimization",
            resourceUrl: "https://www.3blue1brown.com/topics/calculus",
            resourceName: "3Blue1Brown Calculus",
            estimatedDays: 7,
          },
          {
            id: "ai-1-4",
            title: "Statistics & Probability",
            description: "Distributions, hypothesis testing, Bayes theorem",
            resourceUrl:
              "https://www.khanacademy.org/math/statistics-probability",
            resourceName: "Khan Academy Stats",
            estimatedDays: 10,
          },
          {
            id: "ai-1-5",
            title: "NumPy Fundamentals",
            description:
              "Arrays, broadcasting, vectorization, matrix operations",
            resourceUrl:
              "https://numpy.org/doc/stable/user/absolute_beginners.html",
            resourceName: "NumPy Guide",
            estimatedDays: 5,
          },
          {
            id: "ai-1-6",
            title: "Data Visualization",
            description: "Matplotlib, Seaborn, plotting techniques",
            resourceUrl: "https://seaborn.pydata.org/tutorial.html",
            resourceName: "Seaborn Tutorial",
            estimatedDays: 5,
          },
        ],
      },
      {
        id: "ai-phase-2",
        number: 2,
        name: "Machine Learning Fundamentals",
        durationEstimate: "10–12 weeks",
        description:
          "Learn classical ML algorithms, data preprocessing, and model evaluation.",
        buildProject: "Predictive Model",
        buildProjectDescription:
          "Build an end-to-end ML project: data collection, cleaning, EDA, feature engineering, model training, and deployment.",
        steps: [
          {
            id: "ai-2-1",
            title: "Pandas for Data Analysis",
            description: "DataFrames, data cleaning, merging, grouping",
            resourceUrl: "https://www.kaggle.com/learn/pandas",
            resourceName: "Kaggle Pandas",
            estimatedDays: 7,
          },
          {
            id: "ai-2-2",
            title: "Exploratory Data Analysis",
            description:
              "Statistical analysis, visualization, pattern discovery",
            resourceUrl: "https://www.kaggle.com/learn/data-visualization",
            resourceName: "Kaggle Data Viz",
            estimatedDays: 5,
          },
          {
            id: "ai-2-3",
            title: "ML Foundations",
            description:
              "Supervised vs unsupervised, overfitting, bias-variance",
            resourceUrl:
              "https://www.coursera.org/specializations/machine-learning-introduction",
            resourceName: "ML Specialization",
            estimatedDays: 14,
          },
          {
            id: "ai-2-4",
            title: "Supervised Learning",
            description:
              "Linear regression, logistic regression, decision trees",
            resourceUrl:
              "https://scikit-learn.org/stable/supervised_learning.html",
            resourceName: "Sklearn Supervised",
            estimatedDays: 10,
          },
          {
            id: "ai-2-5",
            title: "Unsupervised Learning",
            description: "K-means, hierarchical clustering, PCA",
            resourceUrl:
              "https://scikit-learn.org/stable/unsupervised_learning.html",
            resourceName: "Sklearn Unsupervised",
            estimatedDays: 7,
          },
          {
            id: "ai-2-6",
            title: "Ensemble Methods",
            description: "Random forests, gradient boosting, XGBoost",
            resourceUrl: "https://xgboost.readthedocs.io/",
            resourceName: "XGBoost Docs",
            estimatedDays: 7,
          },
          {
            id: "ai-2-7",
            title: "Model Evaluation",
            description:
              "Cross-validation, metrics, confusion matrix, ROC curves",
            resourceUrl:
              "https://scikit-learn.org/stable/modules/model_evaluation.html",
            resourceName: "Sklearn Evaluation",
            estimatedDays: 7,
          },
          {
            id: "ai-2-8",
            title: "Feature Engineering",
            description: "Feature selection, scaling, encoding, transformation",
            resourceUrl: "https://www.kaggle.com/learn/feature-engineering",
            resourceName: "Kaggle Features",
            estimatedDays: 7,
          },
        ],
      },
      {
        id: "ai-phase-3",
        number: 3,
        name: "Deep Learning & Modern AI",
        durationEstimate: "12–16 weeks",
        description:
          "Master neural networks, PyTorch, computer vision, NLP, and LLMs.",
        buildProject: "AI Application with LLMs",
        buildProjectDescription:
          "Build a production AI application using LLMs, vector databases, and RAG architecture. Deploy it to the cloud.",
        steps: [
          {
            id: "ai-3-1",
            title: "Neural Networks Fundamentals",
            description: "Perceptrons, backpropagation, activation functions",
            resourceUrl: "https://cs50.harvard.edu/ai/",
            resourceName: "CS50 AI",
            estimatedDays: 10,
          },
          {
            id: "ai-3-2",
            title: "PyTorch Basics",
            description: "Tensors, autograd, datasets, training loops",
            resourceUrl: "https://pytorch.org/tutorials/",
            resourceName: "PyTorch Tutorials",
            estimatedDays: 14,
          },
          {
            id: "ai-3-3",
            title: "Deep Learning Specialization",
            description: "CNNs, RNNs, optimization, regularization",
            resourceUrl:
              "https://www.deeplearning.ai/courses/deep-learning-specialization/",
            resourceName: "DeepLearning.AI",
            estimatedDays: 21,
          },
          {
            id: "ai-3-4",
            title: "Computer Vision OR NLP",
            description:
              "Choose one: CNNs/ResNet (CV) or Transformers/BERT (NLP)",
            resourceUrl: "https://huggingface.co/learn/nlp-course",
            resourceName: "HuggingFace NLP",
            estimatedDays: 14,
          },
          {
            id: "ai-3-5",
            title: "Transformer Architecture",
            description: "Self-attention, encoder-decoder, BERT, GPT",
            resourceUrl: "https://arxiv.org/abs/1706.03762",
            resourceName: "Attention Paper",
            estimatedDays: 7,
          },
          {
            id: "ai-3-6",
            title: "Working with LLMs",
            description: "OpenAI API, Anthropic API, prompt engineering",
            resourceUrl:
              "https://platform.openai.com/docs/guides/prompt-engineering",
            resourceName: "OpenAI Prompting",
            estimatedDays: 7,
          },
          {
            id: "ai-3-7",
            title: "LangChain & RAG",
            description: "Building AI agents, retrieval augmented generation",
            resourceUrl:
              "https://python.langchain.com/docs/get_started/introduction",
            resourceName: "LangChain Docs",
            estimatedDays: 10,
          },
          {
            id: "ai-3-8",
            title: "Vector Databases",
            description: "Pinecone, Weaviate, embeddings, similarity search",
            resourceUrl: "https://www.pinecone.io/learn/",
            resourceName: "Pinecone Learn",
            estimatedDays: 5,
          },
          {
            id: "ai-3-9",
            title: "Model Deployment",
            description: "FastAPI, Docker, cloud deployment, monitoring",
            resourceUrl: "https://fastapi.tiangolo.com/",
            resourceName: "FastAPI",
            estimatedDays: 10,
          },
        ],
      },
    ],
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    icon: React.createElement(ShieldAlert),
    description:
      "Learn offensive and defensive security, penetration testing, and ethical hacking.",
    accentColor: "#FFB300",
    egyptianMarketNote:
      "Cybersecurity is growing rapidly in Egypt driven by banking, telecom, and government requirements. Banks like NBE and CIB have security teams. Less competition than web development.",
    faqs: [
      {
        question: "Is cybersecurity in demand in Egypt?",
        answer:
          "Yes, rapidly growing. Banks, telecoms, and government agencies hire security engineers. Competitive salaries, especially with certifications.",
      },
      {
        question: "Do I need programming?",
        answer:
          "Python scripting is essential. You don't need to be a software developer, but reading code, writing scripts, and automation are non-negotiable.",
      },
      {
        question: "Are CTF competitions required?",
        answer:
          "Not required, but very helpful. CTFs demonstrate practical skills. Start with PicoCTF (beginner), then TryHackMe, then HackTheBox.",
      },
      {
        question: "Which certification first?",
        answer:
          "CompTIA Security+ is globally recognized for entry-level. CEH is popular in Middle East. TryHackMe and HackTheBox profiles often matter more for Egyptian internships.",
      },
    ],
    phases: [
      {
        id: "cyber-phase-1",
        number: 1,
        name: "IT & Networking Foundations",
        durationEstimate: "8–10 weeks",
        description:
          "Master operating systems, networking, and scripting before learning offensive security.",
        buildProject: "Home Lab Environment",
        buildProjectDescription:
          "Set up a virtual lab with pfSense, Active Directory, Windows Server, and Kali Linux using VirtualBox.",
        steps: [
          {
            id: "cyber-1-1",
            title: "Linux Fundamentals",
            description: "Command line, permissions, processes, bash scripting",
            resourceUrl: "https://overthewire.org/wargames/bandit/",
            resourceName: "OverTheWire Bandit",
            estimatedDays: 14,
          },
          {
            id: "cyber-1-2",
            title: "Windows Fundamentals",
            description: "PowerShell, Registry, Event Viewer, services",
            resourceUrl: "https://tryhackme.com/module/windows-fundamentals",
            resourceName: "THM Windows",
            estimatedDays: 10,
          },
          {
            id: "cyber-1-3",
            title: "Networking Fundamentals",
            description: "OSI model, TCP/IP, subnetting, routing",
            resourceUrl:
              "https://www.youtube.com/playlist?list=PLDQaRcbiSnqF5U8ffMgZzS7fq1g1s841O",
            resourceName: "Network Chuck",
            estimatedDays: 14,
          },
          {
            id: "cyber-1-4",
            title: "Network Protocols",
            description: "HTTP/HTTPS, DNS, DHCP, SSH, FTP, SMB",
            resourceUrl: "https://tryhackme.com/module/network-fundamentals",
            resourceName: "THM Networking",
            estimatedDays: 7,
          },
          {
            id: "cyber-1-5",
            title: "Python for Security",
            description: "Scripting, sockets, automation, parsing",
            resourceUrl: "https://automatetheboringstuff.com/",
            resourceName: "Automate Boring Stuff",
            estimatedDays: 14,
          },
        ],
      },
      {
        id: "cyber-phase-2",
        number: 2,
        name: "Offensive Security & Web Hacking",
        durationEstimate: "10–14 weeks",
        description:
          "Learn penetration testing methodologies and web application security.",
        buildProject: "Penetration Test Report",
        buildProjectDescription:
          "Perform a complete penetration test on a vulnerable VM (Metasploitable or DVWA) and write a professional report.",
        steps: [
          {
            id: "cyber-2-1",
            title: "Reconnaissance & OSINT",
            description: "Information gathering, Google dorking, OSINT tools",
            resourceUrl:
              "https://tryhackme.com/module/introduction-to-offensive-security",
            resourceName: "THM Offensive Sec",
            estimatedDays: 7,
          },
          {
            id: "cyber-2-2",
            title: "Scanning & Enumeration",
            description: "Nmap, directory enumeration, service fingerprinting",
            resourceUrl: "https://tryhackme.com/room/furthernmap",
            resourceName: "THM Nmap",
            estimatedDays: 7,
          },
          {
            id: "cyber-2-3",
            title: "Burp Suite",
            description: "Proxy, Repeater, Intruder, web app testing",
            resourceUrl: "https://portswigger.net/burp/documentation",
            resourceName: "Burp Suite Docs",
            estimatedDays: 10,
          },
          {
            id: "cyber-2-4",
            title: "OWASP Top 10",
            description: "SQLi, XSS, CSRF, SSRF, broken access control",
            resourceUrl: "https://portswigger.net/web-security",
            resourceName: "PortSwigger Academy",
            estimatedDays: 21,
          },
          {
            id: "cyber-2-5",
            title: "Exploitation Basics",
            description: "Metasploit, reverse shells, public exploits",
            resourceUrl: "https://www.metasploit.com/",
            resourceName: "Metasploit Unleashed",
            estimatedDays: 10,
          },
          {
            id: "cyber-2-6",
            title: "Privilege Escalation",
            description: "Linux and Windows privilege escalation techniques",
            resourceUrl:
              "https://tryhackme.com/module/privilege-escalation-and-shells",
            resourceName: "THM PrivEsc",
            estimatedDays: 14,
          },
        ],
      },
      {
        id: "cyber-phase-3",
        number: 3,
        name: "Advanced Techniques & Certifications",
        durationEstimate: "12–16 weeks",
        description:
          "Active Directory attacks, defensive security, and certification preparation.",
        buildProject: "HackTheBox Writeups",
        buildProjectDescription:
          "Complete 15+ HackTheBox machines across difficulty levels and publish detailed writeups on a blog.",
        steps: [
          {
            id: "cyber-3-1",
            title: "Active Directory Security",
            description: "BloodHound, Kerberoasting, pass-the-hash",
            resourceUrl:
              "https://tryhackme.com/module/hacking-active-directory",
            resourceName: "THM AD Module",
            estimatedDays: 14,
          },
          {
            id: "cyber-3-2",
            title: "Defensive Security (Blue Team)",
            description: "SIEM, log analysis, incident response",
            resourceUrl:
              "https://tryhackme.com/module/introduction-to-defensive-security",
            resourceName: "THM Blue Team",
            estimatedDays: 14,
          },
          {
            id: "cyber-3-3",
            title: "Network Security",
            description: "IDS/IPS, firewalls, network defense",
            resourceUrl:
              "https://tryhackme.com/module/network-security-and-traffic-analysis",
            resourceName: "THM Network Sec",
            estimatedDays: 10,
          },
          {
            id: "cyber-3-4",
            title: "Cryptography",
            description: "Encryption, hashing, PKI, SSL/TLS",
            resourceUrl:
              "https://www.khanacademy.org/computing/computer-science/cryptography",
            resourceName: "Khan Cryptography",
            estimatedDays: 7,
          },
          {
            id: "cyber-3-5",
            title: "Security+ Preparation",
            description: "CompTIA Security+ certification prep",
            resourceUrl:
              "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-training-course/",
            resourceName: "Professor Messer",
            estimatedDays: 21,
          },
          {
            id: "cyber-3-6",
            title: "Advanced CTF Practice",
            description: "HackTheBox, CTFtime, solving challenges",
            resourceUrl: "https://app.hackthebox.com/",
            resourceName: "HackTheBox",
            estimatedDays: 28,
          },
        ],
      },
    ],
  },
  {
    id: "mobile",
    name: "Mobile Development (Flutter)",
    icon: React.createElement(Smartphone),
    description:
      "Build cross-platform mobile apps for Android and iOS using Flutter and Dart.",
    accentColor: "#06D6A0",
    egyptianMarketNote:
      "Flutter dominates mobile development in Egypt. Halan, Vezeeta, Breadfast, and most Egyptian apps use Flutter. Better Arabic text support than alternatives. High demand locally.",
    faqs: [
      {
        question: "Flutter or React Native?",
        answer:
          "Flutter for Egypt. Companies like Halan, Vezeeta, and Breadfast use Flutter. Better performance, superior Arabic text support, and more local job opportunities.",
      },
      {
        question: "Should I learn Dart first?",
        answer:
          "Yes, spend 1–2 weeks on Dart basics. The language is easy if you know any C-family language. Understanding Dart makes Flutter much easier.",
      },
      {
        question: "Do I need a Mac?",
        answer:
          "Not for Android development. For iOS, you need a Mac for final builds. Most Egyptian jobs test Android knowledge in interviews, which works fine on Windows/Linux.",
      },
      {
        question: "Which state management?",
        answer:
          "Learn Provider first, then Riverpod. Riverpod is increasingly popular in production apps. Being able to explain state management choices shows seniority.",
      },
    ],
    phases: [
      {
        id: "mobile-phase-1",
        number: 1,
        name: "Dart Programming Language",
        durationEstimate: "3–4 weeks",
        description:
          "Master Dart completely before touching Flutter UI framework.",
        buildProject: "CLI Application",
        buildProjectDescription:
          "Build a command-line application in Dart (todo manager, API client, or data processor) without any Flutter.",
        steps: [
          {
            id: "mobile-1-1",
            title: "Dart Basics",
            description: "Variables, data types, operators, control flow",
            resourceUrl: "https://dart.dev/language",
            resourceName: "Dart Language Tour",
            estimatedDays: 5,
          },
          {
            id: "mobile-1-2",
            title: "Collections & Generics",
            description: "Lists, Maps, Sets, Iterables, generics",
            resourceUrl: "https://dart.dev/language/collections",
            resourceName: "Dart Collections",
            estimatedDays: 4,
          },
          {
            id: "mobile-1-3",
            title: "Functions in Dart",
            description:
              "Parameters, arrow syntax, anonymous functions, closures",
            resourceUrl: "https://dart.dev/language/functions",
            resourceName: "Dart Functions",
            estimatedDays: 3,
          },
          {
            id: "mobile-1-4",
            title: "Object-Oriented Dart",
            description:
              "Classes, constructors, inheritance, mixins, interfaces",
            resourceUrl: "https://dart.dev/language/classes",
            resourceName: "Dart OOP",
            estimatedDays: 7,
          },
          {
            id: "mobile-1-5",
            title: "Asynchronous Programming",
            description: "Futures, async/await, Streams, error handling",
            resourceUrl: "https://dart.dev/codelabs/async-await",
            resourceName: "Dart Async",
            estimatedDays: 5,
          },
          {
            id: "mobile-1-6",
            title: "Null Safety",
            description:
              "Nullable types, null-aware operators, sound null safety",
            resourceUrl: "https://dart.dev/null-safety",
            resourceName: "Null Safety Guide",
            estimatedDays: 3,
          },
        ],
      },
      {
        id: "mobile-phase-2",
        number: 2,
        name: "Flutter UI & Core Concepts",
        durationEstimate: "8–10 weeks",
        description:
          "Build beautiful, responsive user interfaces with Flutter widgets.",
        buildProject: "UI Clone",
        buildProjectDescription:
          "Clone a complex app UI (Instagram, WhatsApp, or Spotify) focusing on pixel-perfect layouts and animations.",
        steps: [
          {
            id: "mobile-2-1",
            title: "Flutter Fundamentals",
            description: "Widgets, widget tree, BuildContext, MaterialApp",
            resourceUrl: "https://docs.flutter.dev/get-started/codelab",
            resourceName: "Flutter Codelab",
            estimatedDays: 7,
          },
          {
            id: "mobile-2-2",
            title: "Stateless vs Stateful Widgets",
            description: "Widget lifecycle, setState, rebuilding",
            resourceUrl: "https://docs.flutter.dev/ui/interactivity",
            resourceName: "Flutter Interactivity",
            estimatedDays: 5,
          },
          {
            id: "mobile-2-3",
            title: "Layout Widgets",
            description: "Row, Column, Stack, Positioned, Container, Padding",
            resourceUrl: "https://docs.flutter.dev/ui/layout",
            resourceName: "Flutter Layouts",
            estimatedDays: 7,
          },
          {
            id: "mobile-2-4",
            title: "Scrolling Widgets",
            description: "ListView, GridView, CustomScrollView, Slivers",
            resourceUrl: "https://docs.flutter.dev/cookbook#lists",
            resourceName: "Flutter Lists",
            estimatedDays: 7,
          },
          {
            id: "mobile-2-5",
            title: "Navigation & Routing",
            description: "Navigator, routes, named routes, passing data",
            resourceUrl: "https://docs.flutter.dev/ui/navigation",
            resourceName: "Flutter Navigation",
            estimatedDays: 5,
          },
          {
            id: "mobile-2-6",
            title: "Forms & Input",
            description: "TextFields, Forms, validation, controllers",
            resourceUrl: "https://docs.flutter.dev/cookbook/forms",
            resourceName: "Flutter Forms",
            estimatedDays: 5,
          },
          {
            id: "mobile-2-7",
            title: "Theming & Styling",
            description: "ThemeData, custom themes, dark mode",
            resourceUrl: "https://docs.flutter.dev/cookbook/design/themes",
            resourceName: "Flutter Themes",
            estimatedDays: 4,
          },
          {
            id: "mobile-2-8",
            title: "Animations",
            description:
              "Implicit animations, AnimationController, Hero animations",
            resourceUrl: "https://docs.flutter.dev/ui/animations",
            resourceName: "Flutter Animations",
            estimatedDays: 7,
          },
          {
            id: "mobile-2-9",
            title: "Responsive Design",
            description: "MediaQuery, LayoutBuilder, responsive patterns",
            resourceUrl: "https://docs.flutter.dev/ui/adaptive-responsive",
            resourceName: "Responsive Flutter",
            estimatedDays: 5,
          },
        ],
      },
      {
        id: "mobile-phase-3",
        number: 3,
        name: "Advanced Flutter & Production",
        durationEstimate: "10–14 weeks",
        description:
          "State management, architecture, APIs, local storage, and app deployment.",
        buildProject: "Production App",
        buildProjectDescription:
          "Build and publish a complete app to Google Play Store with backend integration, state management, and clean architecture.",
        steps: [
          {
            id: "mobile-3-1",
            title: "State Management: Provider",
            description: "ChangeNotifier, Consumer, Provider patterns",
            resourceUrl:
              "https://docs.flutter.dev/data-and-backend/state-mgmt/simple",
            resourceName: "Provider Guide",
            estimatedDays: 7,
          },
          {
            id: "mobile-3-2",
            title: "State Management: Riverpod",
            description: "Modern state management, providers, code generation",
            resourceUrl: "https://riverpod.dev/",
            resourceName: "Riverpod Docs",
            estimatedDays: 14,
          },
          {
            id: "mobile-3-3",
            title: "REST API Integration",
            description:
              "HTTP package, Dio, JSON serialization, error handling",
            resourceUrl: "https://docs.flutter.dev/data-and-backend/networking",
            resourceName: "Flutter Networking",
            estimatedDays: 10,
          },
          {
            id: "mobile-3-4",
            title: "Local Storage",
            description: "SharedPreferences, Hive, SQLite, secure storage",
            resourceUrl: "https://docs.flutter.dev/cookbook/persistence",
            resourceName: "Flutter Persistence",
            estimatedDays: 7,
          },
          {
            id: "mobile-3-5",
            title: "Clean Architecture",
            description: "Layers, dependency injection, repository pattern",
            resourceUrl:
              "https://resocoder.com/flutter-clean-architecture-tdd/",
            resourceName: "ResoCoder Architecture",
            estimatedDays: 14,
          },
          {
            id: "mobile-3-6",
            title: "Firebase Integration",
            description: "Authentication, Firestore, Cloud Storage, FCM",
            resourceUrl: "https://firebase.google.com/docs/flutter/setup",
            resourceName: "Firebase Flutter",
            estimatedDays: 10,
          },
          {
            id: "mobile-3-7",
            title: "Testing",
            description: "Unit tests, widget tests, integration tests",
            resourceUrl: "https://docs.flutter.dev/testing",
            resourceName: "Flutter Testing",
            estimatedDays: 7,
          },
          {
            id: "mobile-3-8",
            title: "Publishing to Stores",
            description: "App signing, Play Console, App Store, CI/CD",
            resourceUrl: "https://docs.flutter.dev/deployment/android",
            resourceName: "Flutter Deployment",
            estimatedDays: 7,
          },
        ],
      },
    ],
  },
  {
    id: "cloud_devops",
    name: "Cloud & DevOps",
    icon: React.createElement(Cloud),
    description:
      "Master cloud platforms, containers, CI/CD, Kubernetes, and infrastructure automation.",
    accentColor: "#FFE500",
    egyptianMarketNote:
      "DevOps engineers are highly paid in Egypt and globally. Microsoft Egypt, IBM, and Vodafone hire cloud engineers. Excellent remote opportunities due to global skill shortage.",
    faqs: [
      {
        question: "AWS, Azure, or GCP?",
        answer:
          "AWS is most in-demand globally. Azure is strong in Egypt due to Microsoft's presence. GCP is less common. AWS certification + Azure knowledge is ideal for Egypt.",
      },
      {
        question: "Do I need Linux?",
        answer:
          "Absolutely essential. Linux is the foundation of DevOps. You must be comfortable with command line, bash scripting, and system administration.",
      },
      {
        question: "How long to get a cloud job?",
        answer:
          "With AWS Solutions Architect Associate cert + hands-on projects: 6–9 months. Certifications + practical experience (real AWS deployments) are what hiring managers want.",
      },
      {
        question: "DevOps or Cloud for remote work?",
        answer:
          "Both excellent for remote. Cloud/DevOps is one of the highest-paying remote tracks. Strong English communication skills are critical.",
      },
    ],
    phases: [
      {
        id: "cloud-phase-1",
        number: 1,
        name: "Linux & Networking",
        durationEstimate: "6–8 weeks",
        description:
          "Master Linux administration and networking before touching cloud platforms.",
        buildProject: "Automated Server",
        buildProjectDescription:
          "Configure a Linux server (VM) serving a web app with automated backups, monitoring, and security hardening via bash scripts.",
        steps: [
          {
            id: "cloud-1-1",
            title: "Linux System Administration",
            description:
              "Command line, file systems, permissions, processes, systemd",
            resourceUrl: "https://linuxjourney.com/",
            resourceName: "Linux Journey",
            estimatedDays: 14,
          },
          {
            id: "cloud-1-2",
            title: "Linux Networking",
            description: "TCP/IP, DNS, firewall (iptables/ufw), SSH",
            resourceUrl:
              "https://www.digitalocean.com/community/tutorial_series/getting-started-with-linux",
            resourceName: "DigitalOcean Linux",
            estimatedDays: 7,
          },
          {
            id: "cloud-1-3",
            title: "Bash Scripting",
            description: "Automation, loops, conditionals, parsing logs",
            resourceUrl: "https://www.shellscript.sh/",
            resourceName: "Shell Scripting",
            estimatedDays: 10,
          },
          {
            id: "cloud-1-4",
            title: "Networking Fundamentals",
            description: "OSI model, routing, subnetting, load balancing",
            resourceUrl:
              "https://www.youtube.com/playlist?list=PLDQaRcbiSnqF5U8ffMgZzS7fq1g1s841O",
            resourceName: "Network Chuck",
            estimatedDays: 10,
          },
          {
            id: "cloud-1-5",
            title: "Version Control with Git",
            description: "Git workflows, branching, merging, collaboration",
            resourceUrl: "https://learngitbranching.js.org/",
            resourceName: "Learn Git Branching",
            estimatedDays: 5,
          },
        ],
      },
      {
        id: "cloud-phase-2",
        number: 2,
        name: "Containers & CI/CD",
        durationEstimate: "8–10 weeks",
        description:
          "Learn containerization with Docker and build automated CI/CD pipelines.",
        buildProject: "Containerized Pipeline",
        buildProjectDescription:
          "Containerize a multi-service app with Docker Compose and build a complete CI/CD pipeline using GitHub Actions.",
        steps: [
          {
            id: "cloud-2-1",
            title: "Docker Fundamentals",
            description: "Containers, images, Dockerfile, volumes, networks",
            resourceUrl: "https://docs.docker.com/get-started/",
            resourceName: "Docker Docs",
            estimatedDays: 14,
          },
          {
            id: "cloud-2-2",
            title: "Docker Compose",
            description:
              "Multi-container apps, orchestration, environment variables",
            resourceUrl: "https://docs.docker.com/compose/",
            resourceName: "Docker Compose",
            estimatedDays: 7,
          },
          {
            id: "cloud-2-3",
            title: "CI/CD Concepts",
            description:
              "Continuous integration, continuous deployment, pipelines",
            resourceUrl:
              "https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment",
            resourceName: "Atlassian CI/CD",
            estimatedDays: 5,
          },
          {
            id: "cloud-2-4",
            title: "GitHub Actions",
            description: "Workflows, runners, secrets, building pipelines",
            resourceUrl: "https://docs.github.com/en/actions",
            resourceName: "GitHub Actions",
            estimatedDays: 10,
          },
          {
            id: "cloud-2-5",
            title: "Infrastructure as Code (Terraform)",
            description:
              "Declarative infrastructure, providers, state, modules",
            resourceUrl: "https://developer.hashicorp.com/terraform/tutorials",
            resourceName: "Terraform Tutorials",
            estimatedDays: 14,
          },
        ],
      },
      {
        id: "cloud-phase-3",
        number: 3,
        name: "Cloud & Kubernetes",
        durationEstimate: "12–16 weeks",
        description:
          "Deploy to cloud at scale with AWS, manage Kubernetes clusters, and implement observability.",
        buildProject: "Cloud Infrastructure",
        buildProjectDescription:
          "Use Terraform to provision AWS infrastructure (VPC, EKS, RDS). Deploy a microservices app on Kubernetes with monitoring.",
        steps: [
          {
            id: "cloud-3-1",
            title: "AWS Fundamentals",
            description: "IAM, VPC, EC2, S3, RDS, Lambda",
            resourceUrl: "https://aws.amazon.com/training/digital/",
            resourceName: "AWS Training",
            estimatedDays: 21,
          },
          {
            id: "cloud-3-2",
            title: "AWS Solutions Architect",
            description:
              "Designing scalable, secure, cost-effective architectures",
            resourceUrl:
              "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
            resourceName: "AWS SAA",
            estimatedDays: 14,
          },
          {
            id: "cloud-3-3",
            title: "Kubernetes Fundamentals",
            description: "Pods, Deployments, Services, ConfigMaps, Secrets",
            resourceUrl: "https://kubernetes.io/docs/tutorials/",
            resourceName: "Kubernetes Tutorials",
            estimatedDays: 21,
          },
          {
            id: "cloud-3-4",
            title: "Kubernetes Advanced",
            description: "StatefulSets, DaemonSets, Ingress, networking",
            resourceUrl: "https://kubernetes.io/docs/concepts/",
            resourceName: "K8s Concepts",
            estimatedDays: 14,
          },
          {
            id: "cloud-3-5",
            title: "Helm Package Manager",
            description: "Charts, releases, templating, managing K8s apps",
            resourceUrl: "https://helm.sh/docs/",
            resourceName: "Helm Docs",
            estimatedDays: 7,
          },
          {
            id: "cloud-3-6",
            title: "Monitoring (Prometheus & Grafana)",
            description: "Metrics collection, dashboards, alerting",
            resourceUrl: "https://prometheus.io/docs/introduction/overview/",
            resourceName: "Prometheus Docs",
            estimatedDays: 10,
          },
          {
            id: "cloud-3-7",
            title: "Logging (ELK Stack)",
            description: "Elasticsearch, Logstash, Kibana, centralized logging",
            resourceUrl: "https://www.elastic.co/guide/index.html",
            resourceName: "Elastic Docs",
            estimatedDays: 10,
          },
        ],
      },
    ],
  },
  {
    id: "data_engineering",
    name: "Data Engineering",
    icon: React.createElement(Database),
    description:
      "Build data pipelines, warehouses, and analytics infrastructure at scale.",
    accentColor: "#FF94C6",
    egyptianMarketNote:
      "Data engineering is growing in Egypt via fintech, e-commerce, and telecom. MaxAB, Breadfast, Halan have data teams. Strong remote opportunities globally. Less competitive than data science.",
    faqs: [
      {
        question: "Data Engineering vs Data Science?",
        answer:
          "Both good but data engineering is less competitive. Fewer people know Spark, Airflow, and pipelines. If you like infrastructure + Python, data engineering often pays better locally.",
      },
      {
        question: "Is SQL enough?",
        answer:
          "Strong SQL is the foundation but not sufficient. You also need Python + Pandas, basic cloud (AWS/GCP), and at least one orchestration tool (Airflow most common).",
      },
      {
        question: "Is dbt used in Egypt?",
        answer:
          "Increasingly yes. Companies with mature data teams use dbt. It's a differentiating skill showing you understand modern data practices.",
      },
      {
        question: "Do I need Spark?",
        answer:
          "For big data roles: yes. For smaller Egyptian companies: Python + Pandas + SQL often sufficient. Spark is a bonus that opens more senior opportunities.",
      },
    ],
    phases: [
      {
        id: "data-phase-1",
        number: 1,
        name: "SQL & Data Foundations",
        durationEstimate: "6–8 weeks",
        description: "Master SQL and fundamental data engineering concepts.",
        buildProject: "Database Project",
        buildProjectDescription:
          "Design a normalized database, load real data with Python, and perform complex analytical queries with window functions.",
        steps: [
          {
            id: "data-1-1",
            title: "SQL Fundamentals",
            description: "SELECT, JOINs, aggregations, subqueries",
            resourceUrl: "https://cs50.harvard.edu/sql/",
            resourceName: "CS50 SQL",
            estimatedDays: 10,
          },
          {
            id: "data-1-2",
            title: "Advanced SQL",
            description: "Window functions, CTEs, query optimization, indexes",
            resourceUrl: "https://mode.com/sql-tutorial/sql-window-functions/",
            resourceName: "Mode SQL",
            estimatedDays: 10,
          },
          {
            id: "data-1-3",
            title: "Data Modeling",
            description: "Normalization, ER diagrams, dimensional modeling",
            resourceUrl: "https://www.guru99.com/database-normalization.html",
            resourceName: "Guru99 Modeling",
            estimatedDays: 7,
          },
          {
            id: "data-1-4",
            title: "Python for Data Engineering",
            description: "Pandas, reading/writing files, API requests",
            resourceUrl: "https://www.kaggle.com/learn/pandas",
            resourceName: "Kaggle Pandas",
            estimatedDays: 10,
          },
          {
            id: "data-1-5",
            title: "Data Warehousing Concepts",
            description: "OLTP vs OLAP, star schema, fact/dimension tables",
            resourceUrl:
              "https://www.startdataengineering.com/post/data-engineering-project-for-beginners/",
            resourceName: "Start DE",
            estimatedDays: 7,
          },
        ],
      },
      {
        id: "data-phase-2",
        number: 2,
        name: "ETL Pipelines & Orchestration",
        durationEstimate: "10–12 weeks",
        description:
          "Build production data pipelines with orchestration and transformation tools.",
        buildProject: "Automated ETL Pipeline",
        buildProjectDescription:
          "Build an ETL pipeline that extracts from APIs, transforms data, loads to PostgreSQL, and runs daily via Airflow.",
        steps: [
          {
            id: "data-2-1",
            title: "Data Extraction",
            description:
              "APIs, web scraping, file formats (CSV, JSON, Parquet)",
            resourceUrl: "https://realpython.com/api-integration-in-python/",
            resourceName: "Real Python APIs",
            estimatedDays: 7,
          },
          {
            id: "data-2-2",
            title: "Data Transformation",
            description: "Cleaning, type conversion, handling missing data",
            resourceUrl: "https://pandas.pydata.org/docs/user_guide/",
            resourceName: "Pandas Guide",
            estimatedDays: 10,
          },
          {
            id: "data-2-3",
            title: "Apache Airflow",
            description: "DAGs, operators, scheduling, monitoring",
            resourceUrl: "https://airflow.apache.org/docs/",
            resourceName: "Airflow Docs",
            estimatedDays: 14,
          },
          {
            id: "data-2-4",
            title: "dbt (Data Build Tool)",
            description: "SQL transformations, testing, documentation, lineage",
            resourceUrl: "https://docs.getdbt.com/docs/introduction",
            resourceName: "dbt Docs",
            estimatedDays: 14,
          },
          {
            id: "data-2-5",
            title: "Cloud Data Warehouses",
            description: "BigQuery, Snowflake, or Redshift basics",
            resourceUrl: "https://cloud.google.com/bigquery/docs",
            resourceName: "BigQuery Docs",
            estimatedDays: 10,
          },
          {
            id: "data-2-6",
            title: "Data Quality",
            description: "Validation, Great Expectations, data testing",
            resourceUrl: "https://docs.greatexpectations.io/",
            resourceName: "Great Expectations",
            estimatedDays: 7,
          },
        ],
      },
      {
        id: "data-phase-3",
        number: 3,
        name: "Big Data & Streaming",
        durationEstimate: "10–14 weeks",
        description:
          "Process massive datasets with Spark and build real-time streaming pipelines.",
        buildProject: "Real-Time Analytics",
        buildProjectDescription:
          "Build a streaming pipeline: ingest data via Kafka, process with Spark Streaming, load to warehouse, visualize with dashboards.",
        steps: [
          {
            id: "data-3-1",
            title: "Apache Spark Fundamentals",
            description: "RDDs, DataFrames, transformations, actions",
            resourceUrl: "https://spark.apache.org/docs/latest/",
            resourceName: "Spark Docs",
            estimatedDays: 14,
          },
          {
            id: "data-3-2",
            title: "PySpark",
            description: "Python API for Spark, distributed processing",
            resourceUrl: "https://spark.apache.org/docs/latest/api/python/",
            resourceName: "PySpark Docs",
            estimatedDays: 10,
          },
          {
            id: "data-3-3",
            title: "Kafka & Streaming",
            description: "Message brokers, producers, consumers, topics",
            resourceUrl: "https://kafka.apache.org/quickstart",
            resourceName: "Kafka Quickstart",
            estimatedDays: 14,
          },
          {
            id: "data-3-4",
            title: "Spark Streaming",
            description: "Real-time data processing, structured streaming",
            resourceUrl:
              "https://spark.apache.org/docs/latest/structured-streaming-programming-guide.html",
            resourceName: "Spark Streaming",
            estimatedDays: 10,
          },
          {
            id: "data-3-5",
            title: "Data Lakes",
            description: "S3, Delta Lake, Parquet/ORC formats",
            resourceUrl: "https://delta.io/learn/",
            resourceName: "Delta Lake",
            estimatedDays: 7,
          },
          {
            id: "data-3-6",
            title: "Cloud Deployment",
            description: "AWS EMR, Databricks, cloud data platforms",
            resourceUrl: "https://docs.databricks.com/",
            resourceName: "Databricks Docs",
            estimatedDays: 10,
          },
          {
            id: "data-3-7",
            title: "BI & Visualization",
            description: "Connect Metabase, Superset, or Tableau",
            resourceUrl: "https://superset.apache.org/",
            resourceName: "Apache Superset",
            estimatedDays: 7,
          },
        ],
      },
    ],
  },
];
