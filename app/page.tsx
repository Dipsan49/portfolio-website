"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  Brain,
  Code2,
  Database,
  Cloud,
  Award,
  GraduationCap,
  Briefcase,
  Users,
  Heart,
  Sparkles,
  Zap,
  Rocket,
  ExternalLink,
} from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const experiences = [
  {
    title: "Research Assistant",
    company: "Deakin University",
    location: "Burwood, VIC",
    period: "Nov 2025 – Present",
    highlights: [
      "Conducting research on fine-tuning Large Language Models (LLMs) on edge devices for efficient on-device AI inference",
      "Investigating Federated Learning frameworks for privacy-preserving, decentralised model training",
      "Applying optimisation strategies to enhance model performance on resource-constrained hardware",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Deakin Applied AI Institute (A2I2)",
    location: "Burwood, VIC",
    period: "Nov 2025 – Feb 2026",
    highlights: [
      "Designed enterprise workflow automation pipelines using Microsoft Power Automate",
      "Developed user-facing interfaces in Microsoft PowerApps for non-technical staff",
      "Utilised AI-assisted development tools including Claude Code, OpenAI Codex, and Vercel v0",
      "Engineered and validated REST APIs for Power Automate integration with external services",
    ],
  },
  {
    title: "AI Developer",
    company: "F1Soft International",
    location: "Lalitpur, Nepal",
    period: "Jan 2025 – Jun 2025",
    highlights: [
      "Developed intent classification system for customer service chatbot using RAG",
      "Improved model recall through systematic evaluation using confusion matrices",
      "Implemented backend services with Python and Django REST Framework",
      "Managed CI/CD pipelines via Jenkins, Rancher, and ArgoCD",
    ],
  },
  {
    title: "AI Intern",
    company: "F1Soft International",
    location: "Lalitpur, Nepal",
    period: "Nov 2024 – Jan 2025",
    highlights: [
      "Developed multi-page bank statement parser using PaddleOCR for fraud detection",
      "Built computer vision models using YOLO for object detection tasks",
    ],
  },
];

const projects = [
  {
    title: "Email Tone Polisher",
    href: "https://apps.powerapps.com/play/e/default-d02378ec-1688-46d5-8540-1c28b5f470f6/a/80bfbc97-141d-4a8b-ab57-90bc50b271fd?tenantId=d02378ec-1688-46d5-8540-1c28b5f470f6&hint=63ee61f8-aeda-42bd-81f8-0a12972e44b1&sourcetime=1785074189389",
    description:
      "Microsoft PowerApps application that rewrites emails according to configurable tones with admin interface for tone and prompt management backed by SharePoint.",
    tech: ["PowerApps", "Power Automate", "SharePoint", "Vercel v0", "REST API"],
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

const skills = {
  Languages: ["Python", "Java", "JavaScript", "C/C++"],
  Frameworks: ["Django REST", "Flask", "Streamlit", "PyTorch", "LangChain", "LangFuse"],
  "AI Tools": ["Claude Code", "OpenAI Codex", "Vercel v0", "Bolt.dev"],
  "Cloud & DevOps": ["Microsoft Azure", "GCP", "Rancher", "Jenkins", "ArgoCD"],
  Databases: ["MySQL", "PostgreSQL", "Redis", "Qdrant"],
  Platforms: ["Power Automate", "PowerApps", "Git/GitLab", "Agile/Scrum"],
};

const certifications = [
  "Microsoft Certified: Azure AI Fundamentals",
  "Machine Learning Specialization – DeepLearning.AI / Stanford",
  "Java Development on Oracle Cloud – Oracle",
  "Google Cloud Fundamentals: Core Infrastructure",
  "High Performance Coding Training – Iamneo",
  "MFL Coding Bootcamp – MFL EduClub",
  "Ethical Hacking Training – Laba Institute",
];

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl transition-all duration-1000 ease-out"
          style={{
            background: "radial-gradient(circle, oklch(0.75 0.15 175) 0%, transparent 70%)",
            left: mousePosition.x - 300,
            top: mousePosition.y - 300,
          }}
        />
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(oklch(0.75 0.15 175) 1px, transparent 1px), linear-gradient(90deg, oklch(0.75 0.15 175) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.a
              href="#"
              className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              DB
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}

            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-card border-b border-border"
            >
              <div className="px-4 py-4 flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Profile Image */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-primary via-primary/50 to-primary/30 rounded-2xl blur-xl opacity-60" />
                <div className="relative w-44 h-52 sm:w-52 sm:h-60 lg:w-64 lg:h-72 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl">
                  <Image
                    src="/images/dipsan-profile-dark.jpg"
                    alt="Dipsan Bhattarai"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Main Info */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
                  Dipsan Bhattarai
                </h1>
                <h2 className="text-xl sm:text-2xl bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent font-semibold mb-6">
                  AI Engineer & Researcher
                </h2>
              </motion.div>

              <motion.p
                className="text-muted-foreground leading-relaxed mb-8 max-w-xl text-pretty text-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Computer Science graduate pursuing{" "}
                <span className="text-primary font-medium">
                  Master of Applied Artificial Intelligence
                </span>{" "}
                at Deakin University. Building AI systems that create meaningful, responsible impact.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a
                  href="#contact"
                  className="group relative flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get in Touch
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="#projects"
                  className="flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-xl font-medium hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
                >
                  <Rocket className="w-4 h-4" />
                  View Projects
                </a>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <a
                  href="https://github.com/Dipsan49"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-xl text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/dipsanbhattarai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-xl text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:dipsanbhattarai7@gmail.com"
                  className="p-3 bg-card border border-border rounded-xl text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </div>

          {/* Quick Stats - Below Hero Content */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {[
              { icon: Brain, title: "LLMs", desc: "Fine-tuning & Edge AI" },
              { icon: Code2, title: "Full Stack", desc: "Python, Django, React" },
              { icon: Database, title: "ML/DL", desc: "PyTorch, LangChain" },
              { icon: Cloud, title: "Cloud", desc: "Azure, GCP, DevOps" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group p-5 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
              <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
                <Zap className="w-6 h-6 text-primary" />
                About Me
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg text-pretty">
                  I am a Computer Science graduate currently pursuing my Master of Applied
                  Artificial Intelligence from Deakin University. With internship and traineeship
                  experience across software engineering and applied AI research, I bring strong
                  analytical thinking and a collaborative mindset.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg text-pretty">
                  My current research focuses on{" "}
                  <span className="text-primary font-medium">
                    fine-tuning Large Language Models on edge devices
                  </span>{" "}
                  and investigating{" "}
                  <span className="text-primary font-medium">Federated Learning frameworks</span>{" "}
                  for privacy-preserving, decentralised model training.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  {["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Edge AI"].map((tag, i) => (
                    <motion.span 
                      key={tag}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <motion.div 
                  className="p-5 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/30 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-semibold">Location</span>
                  </div>
                  <p className="text-muted-foreground pl-13">Melbourne, VIC, Australia</p>
                </motion.div>
                <motion.div 
                  className="p-5 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/30 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-semibold">Certifications</span>
                  </div>
                  <p className="text-muted-foreground pl-13">7+ Professional Certifications</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-16">
              <Briefcase className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Professional Experience</h2>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className={`relative md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:ml-auto"
                    }`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline dot */}
                    <div
                      className={`hidden md:flex absolute top-0 w-5 h-5 bg-background border-2 border-primary rounded-full items-center justify-center ${
                        index % 2 === 0 ? "right-0 translate-x-1/2 -mr-0.5" : "left-0 -translate-x-1/2 -ml-0.5"
                      }`}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>

                    <div className="p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                          {exp.period}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                      <p className="text-primary font-semibold text-sm mb-4">{exp.company}</p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex gap-3 text-sm text-muted-foreground">
                            <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-16">
              <Code2 className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Featured Projects</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="group p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                      <Brain className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/title inline-flex items-center gap-2 cursor-pointer transition-colors hover:text-primary hover:underline underline-offset-4"
                      >
                        {project.title}
                        <ExternalLink className="w-4 h-4 transition-transform group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5" />
                      </a>
                    ) : (
                      <span className="group-hover:text-primary transition-colors">
                        {project.title}
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {project.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2.5 py-1 bg-secondary/50 text-xs text-secondary-foreground rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-16">
              <Database className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Technical Skills</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  className="p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-bold text-primary mb-5">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, sIndex) => (
                      <motion.span
                        key={sIndex}
                        className="px-3 py-2 bg-secondary/50 text-secondary-foreground rounded-xl text-sm hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default border border-transparent hover:border-primary/20"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              className="mt-12 p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Certifications & Training</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-16">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Education</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                  Jul 2025 - Jul 2027 (Expected)
                </span>
                <h3 className="text-xl font-bold text-foreground mt-4 mb-2">
                  Master of Applied Artificial Intelligence
                </h3>
                <p className="text-primary font-semibold text-sm mb-4">
                  Deakin University | Geelong, VIC
                </p>
                <div className="space-y-3">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Relevant Coursework</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Deep Learning, Machine Learning, Engineering AI Solutions, NLP, Human-Aligned AI
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                  Aug 2020 - Aug 2024
                </span>
                <h3 className="text-xl font-bold text-foreground mt-4 mb-2">
                  Bachelor of Technology - Computer Science
                </h3>
                <p className="text-primary font-semibold text-sm mb-4">
                  Vellore Institute of Technology | Vellore, India
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-foreground font-medium">GPA:</span>
                  <span className="text-sm text-primary font-bold">8.45 / 10</span>
                </div>
                <div className="space-y-3">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Relevant Coursework</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Data Structures & Algorithms, AI, Software Engineering, OS, DBMS
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Memberships & Volunteering */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <motion.div
                className="p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Professional Memberships</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Deakin University Student Association (DUSA)",
                    "Deakin Data Science Club",
                    "Google Developer Group (GDG) Melbourne",
                    "Nepal Engineering Council (Registered Engineer)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Volunteering</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "DUSA Thursday Trolley Volunteer (2025 - Present)",
                    "COVID-19 Awareness Campaign - VIT University (2020)",
                    "SET Exhibition Volunteer - Bhaktapur, Nepal (2019)",
                    "Kathmandu World Debates Event Volunteer (2019)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center max-w-2xl mx-auto mb-16">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Sparkles className="w-4 h-4" />
                Get In Touch
              </motion.div>
              <h2 className="text-4xl font-bold text-foreground mb-4">{"Let's Connect"}</h2>
              <p className="text-muted-foreground text-lg text-pretty leading-relaxed">
                {
                  "I'm always open to discussing new opportunities, AI research collaborations, or just having a chat about technology."
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <motion.a
                href="mailto:dipsanbhattarai7@gmail.com"
                className="group flex flex-col items-center p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors relative">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <span className="text-foreground font-semibold text-lg mb-2 relative">Email</span>
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors text-center relative">
                  dipsanbhattarai7@gmail.com
                </span>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/dipsanbhattarai"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors relative">
                  <Linkedin className="w-8 h-8 text-primary" />
                </div>
                <span className="text-foreground font-semibold text-lg mb-2 relative">LinkedIn</span>
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors relative">
                  /in/dipsanbhattarai
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Dipsan Bhattarai. Built with passion.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Dipsan49"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card/50 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/dipsanbhattarai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-card/50 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:dipsanbhattarai7@gmail.com"
                className="p-2 bg-card/50 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
