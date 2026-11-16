export const experiences = [
  {
    title: "AI Development Intern",
    company: "PowerPlus Energy",
    location: "Scoresby, Melbourne",
    period: "Nov 2026 – Present",
    highlights: [
      "Developing PowerPlus Energy AI Assist, a chatbot that helps the public and electricians find answers in a 1,000-page battery setup and installation manual using plain language",
      "Building a Retrieval-Augmented Generation (RAG) pipeline with Qdrant to retrieve relevant manual passages, usually using a locally hosted language model served via Ollama",
      "Developing a FastAPI backend served with Uvicorn for the chat service and a back-office interface for non-technical staff, improving response quality through prompt engineering and context-window management",
    ],
  },
  {
    title: "Casual Research Assistant",
    company: "Deakin University",
    location: "Burwood, VIC",
    period: "Nov 2025 – Oct 2026",
    highlights: [
      "Conducting research on fine-tuning Large Language Models (LLMs) on edge devices for efficient on-device AI inference",
      "Investigating Federated Learning frameworks for privacy-preserving, decentralised model training",
      "Applying optimisation strategies to enhance model performance on resource-constrained hardware",
      "Developed and tested Federated Learning systems in Python and PyTorch using Llama and T5, training models across devices without sharing raw data",
      "Fine-tuned LLMs using Low-Rank Adaptation (LoRA) with spectral control to stabilise model updates, achieving improvements over baseline methods",
      "Designed a multi-agent data visualisation framework with agents for analysis, chart creation and review, using primal-dual optimisation to select agents while penalising costly choices",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Deakin Applied Artificial Intelligence Initiative (A2I2)",
    location: "Burwood, VIC",
    period: "Nov 2025 – Feb 2026",
    highlights: [
      "Built an Email Tone Polisher with Microsoft PowerApps and Power Automate, designing automated workflows with low-code pipeline blocks",
      "Developed user-facing interfaces in Microsoft PowerApps for non-technical staff",
      "Utilised AI-assisted development tools including Claude Code, OpenAI Codex, and Vercel v0",
      "Connected SharePoint storage and external services through REST APIs, validating integrations with Postman",
      "Prototyped responsive interfaces with Claude Code/Cowork, OpenAI Codex and Vercel v0",
    ],
  },
  {
    title: "AI Developer",
    company: "F1Soft International",
    location: "Lalitpur, Nepal",
    period: "Jan 2025 – Jun 2025",
    highlights: [
      "Developed a RAG chatbot for a multinational digital banking platform using Qwen, Qdrant and prompt engineering to answer from trusted FAQs and product documents",
      "Built an intent classifier covering about 20 customer request types, achieving over 90% recall on every intent through confusion-matrix evaluation",
      "Implemented Python and Django REST Framework APIs for mobile applications and the back-office system",
      "Managed CI/CD pipelines via Jenkins, Rancher, and ArgoCD",
    ],
  },
  {
    title: "AI Intern",
    company: "F1Soft International",
    location: "Lalitpur, Nepal",
    period: "Nov 2024 – Jan 2025",
    highlights: [
      "Developed a Python pipeline using PaddleOCR to extract multi-page Nepali bank statements with over 94% text extraction accuracy",
      "Structured extracted text for fraud-detection analysis of payment descriptions and regular or irregular transaction amounts",
      "Evaluated YOLO models for document detection and built Flask REST APIs and Streamlit interfaces for team testing and demonstrations",
    ],
  },
];

export const volunteerExperiences = [
  {
    title: "Full Stack and AI Engineering Intern",
    company: "PropApp Trading Pvt. Ltd",
    location: "Caulfield, VIC",
    period: "Sept 2026 – Present",
    highlights: [
      "Organising and transforming unstructured real estate customer data collected through websites and digital platforms into structured, usable datasets for analysis and business workflows",
      "Analysing buyer and customer data using Python to identify patterns across customer preferences, locations, finance requirements, and property interests",
      "Performing customer segmentation and clustering analysis to group buyers with similar behaviours and requirements, supporting targeted property recommendations and customer nurturing strategies",
      "Developing AI agents integrated with Slack channels to support automated data collection, information extraction, data management, and internal workflow automation",
    ],
  },
  {
    title: "Thursday Trolley Volunteer",
    company: "Deakin University Student Association (DUSA)",
    location: "Geelong, VIC",
    period: "Oct 2025 – Dec 2025",
    highlights: [
      "Handed out free snacks and drinks to students every Thursday evening in the Waterfront and Waurn Ponds campus libraries",
      "Worked with fellow volunteers to set up, serve and pack down the trolley, return equipment and tidy leftover supplies",
    ],
  },
];

export const projects = [
  {
    title: "Email Tone Polisher",
    href: "https://apps.powerapps.com/play/e/default-d02378ec-1688-46d5-8540-1c28b5f470f6/a/80bfbc97-141d-4a8b-ab57-90bc50b271fd?tenantId=d02378ec-1688-46d5-8540-1c28b5f470f6&hint=63ee61f8-aeda-42bd-81f8-0a12972e44b1&sourcetime=1785074189389",
    description:
      "Microsoft PowerApps application that rewrites emails according to configurable tones with admin interface for tone and prompt management backed by SharePoint.",
    tech: [
      "PowerApps",
      "Power Automate",
      "SharePoint",
      "Vercel v0",
      "REST API",
    ],
    highlights: [
      "Configurable tones (formal, professional, assertive)",
      "Admin interface for prompt management",
      "Automated backend workflow pipelines",
    ],
  },
  {
    title: "Customer Prioritisation System",
    href: "https://github.com/Dipsan49/CustomerPrioritization",
    description:
      "Generative AI solution for e-commerce with novel Priority Value formula incorporating order frequency and customer spend with configurable weights.",
    tech: ["Python", "K-Means Clustering", "Streamlit", "Generative AI"],
    highlights: [
      "Dynamic customer ranking by business value",
      "K-Means clustering for customer segmentation",
      "Interactive web application for real-time exploration",
    ],
  },
  {
    title: "SecureBank AI Chatbot",
    description:
      "Cloud-native banking chatbot on Google Cloud Platform with contextual accuracy and integrated security measures against adversarial inputs.",
    tech: ["GCP", "Model Armour", "Python", "Cloud Functions"],
    highlights: [
      "Secure, contextual query handling",
      "Protection against prompt injection",
      "Full-stack cloud deployment",
    ],
  },
];

export const skills = {
  Languages: ["Python", "SQL", "Java", "JavaScript", "C/C++"],
  Frameworks: [
    "React",
    "Django REST",
    "FastAPI",
    "Uvicorn",
    "Flask",
    "Streamlit",
    "PyTorch",
    "pandas",
    "NumPy",
    "LangChain",
    "LangFuse",
  ],
  "AI Tools": [
    "Claude Code/Cowork",
    "OpenAI Codex",
    "Vercel v0",
    "Bolt.dev",
    "Ollama",
  ],
  "Cloud & DevOps": ["Microsoft Azure", "GCP", "Rancher", "Jenkins", "ArgoCD"],
  "AI & Machine Learning": [
    "Machine Learning",
    "Generative AI",
    "RAG",
    "LLM Fine-tuning",
    "LoRA",
    "Federated Learning",
    "PaddleOCR",
    "YOLO",
  ],
  Databases: ["MySQL", "PostgreSQL", "Redis", "Qdrant"],
  Platforms: [
    "Power Automate",
    "PowerApps",
    "Git/GitHub/GitLab",
    "Postman",
    "Figma",
    "Agile/Scrum",
  ],
};

export const certifications = [
  "Figma Essential Training – LinkedIn Learning · Aug 2026",
  "Microsoft Certified: Azure AI Fundamentals (Exam AI-901) · May 2026",
  "Machine Learning Specialization – DeepLearning.AI / Stanford · Jan 2024",
  "Java Development on Oracle Cloud – Oracle · Sept 2023",
  "Google Cloud Fundamentals: Core Infrastructure · July 2022",
  "High Performance Coding Training – Iamneo",
  "MFL Coding Bootcamp – MFL EduClub",
  "Ethical Hacking Training – Laba Institute",
];
