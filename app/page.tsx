"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowDown,
  Plus,
  Minus,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ArrowRight,
  Check,
  Copy,
  Sparkles,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import {
  experiences,
  volunteerExperiences,
  projects,
  skills,
  certifications,
} from "@/lib/portfolio";

const links = [
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["About", "about"],
  ["Toolkit", "skills"],
  ["Volunteering", "volunteering"],
];

function SectionHeading({
  number,
  label,
  title,
  text,
}: {
  number: string;
  label: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <div className="eyebrow">
        <span>{number}</span> / {label}
      </div>
      <div>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
    </div>
  );
}

function ResponsibilityList({ items }: { items: string[] }) {
  return (
    <ul className="responsibility-list">
      {items.map((item) => (
        <li key={item}>
          <span className="responsibility-marker" aria-hidden="true">
            <ArrowUpRight size={13} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function NeuralGraphic() {
  const nodes = Array.from({ length: 54 }, (_, i) => {
    const angle = i * 2.399963;
    const radius = 22 + Math.sqrt(i / 54) * 147;
    return {
      x: Number((220 + Math.cos(angle) * radius).toFixed(3)),
      y: Number((220 + Math.sin(angle) * radius).toFixed(3)),
    };
  });
  return (
    <div className="neural-graphic" aria-hidden="true">
      <svg viewBox="0 0 440 440" fill="none">
        <defs>
          <radialGradient id="neural-glow">
            <stop stopColor="#d7f459" stopOpacity=".55" />
            <stop offset="1" stopColor="#d7f459" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="220" cy="220" r="215" fill="url(#neural-glow)" />
        <g className="neural-orbit">
          <ellipse
            cx="220"
            cy="220"
            rx="195"
            ry="71"
            stroke="#1e241b"
            strokeOpacity=".18"
            transform="rotate(-35 220 220)"
          />
          <ellipse
            cx="220"
            cy="220"
            rx="195"
            ry="71"
            stroke="#1e241b"
            strokeOpacity=".18"
            transform="rotate(35 220 220)"
          />
          {nodes.map((a, i) => (
            <g key={i}>
              {nodes
                .slice(i + 1)
                .map((b, j) =>
                  Math.hypot(a.x - b.x, a.y - b.y) < 88 ? (
                    <line
                      key={j}
                      x1={a.x}
                      y1={a.y}
                      x2={b.x}
                      y2={b.y}
                      stroke="#26301d"
                      strokeOpacity=".21"
                    />
                  ) : null,
                )}
              <circle
                cx={a.x}
                cy={a.y}
                r={i % 7 === 0 ? 5 : 2.5}
                fill={i % 7 === 0 ? "#b4d833" : "#26301d"}
              />
            </g>
          ))}
        </g>
        <circle cx="220" cy="220" r="31" fill="#1e241b" />
        <path
          d="M205 220h30m-15-15v30m-10-25 20 20m0-20-20 20"
          stroke="#d7f459"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

function ProjectVisual({ index }: { index: number }) {
  if (index === 0)
    return (
      <div className="project-visual tone-visual" aria-hidden="true">
        <div className="tone-sheet">
          <p>
            Good words.
            <br />
            <em>Better connections.</em>
          </p>
          <div className="tone-options">
            <span>Formal</span>
            <span className="selected">
              Professional <Check size={11} />
            </span>
            <span>Assertive</span>
          </div>
          <div className="tone-transform">
            <span>Draft</span>
            <ArrowRight size={17} />
            <span>
              Polished <Sparkles size={12} />
            </span>
          </div>
        </div>
      </div>
    );
  if (index === 1)
    return (
      <div className="project-visual cluster-visual" aria-hidden="true">
        <div className="scatter">
          {Array.from({ length: 42 }, (_, i) => (
            <i
              key={i}
              style={{
                left: `${15 + ((i * 31) % 70)}%`,
                bottom: `${12 + ((i * 17) % 73)}%`,
                background:
                  i % 3 === 0 ? "#d6ee98" : i % 3 === 1 ? "#ad9cde" : "#e6a47b",
              }}
            />
          ))}
          <span className="cluster-callout">
            Find the patterns.
            <ArrowUpRight size={15} />
          </span>
        </div>
      </div>
    );
  return (
    <div className="project-visual bank-visual" aria-hidden="true">
      <div className="bank-orbits">
        <div />
        <div />
        <ShieldCheck size={52} strokeWidth={1} />
      </div>
      <div className="bank-caption">
        Context-aware.
        <br />
        <em>Security-first.</em>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("dipsanbhattarai7@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = "mailto:dipsanbhattarai7@gmail.com";
    }
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a href="#" className="wordmark" aria-label="Dipsan Bhattarai home">
          dipsan<span>✳</span>
        </a>
        <nav
          className={menuOpen ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
        >
          {links.map(([name, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {name}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-contact"
            onClick={() => setMenuOpen(false)}
          >
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </nav>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
      <main id="main">
        <section className="hero wrap">
          <div className="hero-meta">
            <span>
              <i className="status-dot" /> OPEN TO GRADUATE OPPORTUNITIES
            </span>
            <span>
              MELBOURNE, AUSTRALIA <span className="tiny-star">✳</span>
            </span>
          </div>
          <div className="hero-main">
            <div className="hero-copy">
              <div className="eyebrow">AI Engineer & Researcher</div>
              <h1>
                Dipsan
                <br />
                <span className="applied">
                  Bhattarai.
                  <svg
                    viewBox="0 0 500 20"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path d="M3 13Q230-5 496 8" />
                  </svg>
                </span>
              </h1>
              <div className="hero-intro">
                <span className="intro-line" />
                <p>
                  I turn complex data and ambitious ideas into AI systems that
                  make everyday work a little smarter.
                </p>
              </div>
              <a href="#experience" className="button button-dark">
                Explore my experience <ArrowDown size={17} />
              </a>
            </div>
            <div className="hero-art">
              <NeuralGraphic />
            </div>
          </div>
        </section>
        <div className="current-strip">
          <div className="wrap">
            <span className="eyebrow">CURRENTLY BUILDING</span>
            <p>
              Making battery knowledge conversational <ArrowUpRight size={17} />
              <strong>PowerPlus Energy</strong>
            </p>
            <span className="strip-date">NOV 2026 — PRESENT</span>
          </div>
        </div>
        <section id="experience" className="experience-section">
          <div className="wrap section">
            <SectionHeading
              number="01"
              label="EXPERIENCE"
              title="Professional experience"
              text="Across energy, research, financial technology and business automation."
            />
            <div className="experience-list">
              {experiences.map((exp, i) => (
                <details
                  className="experience-row"
                  key={`${exp.company}-${exp.title}`}
                  open={i === 0}
                >
                  <summary>
                    <span className="experience-index">0{i + 1}</span>
                    <div className="experience-company">
                      <h3>{exp.company}</h3>
                      <span>{exp.title}</span>
                    </div>
                    <span className="experience-period">{exp.period}</span>
                    <span className="expand-icon">
                      <Plus className="plus" size={20} />
                      <Minus className="minus" size={20} />
                    </span>
                  </summary>
                  <div className="experience-body">
                    <span className="location">
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                    <ResponsibilityList items={exp.highlights} />
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section id="projects" className="section wrap">
          <SectionHeading
            number="02"
            label="PROJECTS"
            title="Selected projects"
            text="A few ways I connect AI, data and thoughtful engineering."
          />
          <div className="project-grid">
            {projects.map((project, i) => (
              <article key={project.title} className="project-card">
                <ProjectVisual index={i} />
                <div className="project-info">
                  <h3>
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.title}
                        <ArrowUpRight size={23} />
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <details className="project-details">
                    <summary>
                      Inside the project <Plus size={14} />
                    </summary>
                    <ResponsibilityList items={project.highlights} />
                    <p className="concept-note">
                      Illustrative project visual above; not a product
                      screenshot.
                    </p>
                  </details>
                </div>
              </article>
            ))}
          </div>
          <a
            className="text-link"
            href="https://github.com/Dipsan49"
            target="_blank"
            rel="noopener noreferrer"
          >
            More on GitHub <ArrowUpRight size={16} />
          </a>
        </section>
        <section id="about" className="section wrap about-section">
          <div className="portrait-column">
            <div className="portrait">
              <Image
                src="/images/dipsan-profile.jpg"
                alt="Dipsan Bhattarai"
                fill
                sizes="(max-width: 700px) 90vw, 38vw"
                className="portrait-image"
              />
            </div>
          </div>
          <div className="about-copy">
            <div className="eyebrow">
              <span>03</span> / ABOUT ME
            </div>
            <h2>
              Technical by training.
              <br />
              <em>Curious by nature.</em>
            </h2>
            <p>
              I’m a Computer Science graduate pursuing a Master of Applied
              Artificial Intelligence (Professional) at Deakin University. With
              nearly two years of hands-on experience across finance, research
              and business automation, I bring analytical thinking and a
              collaborative mindset to the things I build.
            </p>
            <p>
              My research has explored LLM fine-tuning on edge devices,
              privacy-preserving federated learning and multi-agent systems.
              Today, I’m developing a RAG-powered assistant at PowerPlus Energy
              to make battery installation knowledge easier to access.
            </p>
            <p>
              I’m looking for a graduate role in software engineering, AI or
              data where I can keep learning, improve processes and build
              something useful.
            </p>
            <div className="about-links">
              <a
                href="https://linkedin.com/in/dipsanbhattarai"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <ArrowUpRight size={15} />
              </a>
              <a
                href="https://github.com/Dipsan49"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="interest-tags">
              <span>Deep Learning</span>
              <span>NLP</span>
              <span>Computer Vision</span>
              <span>Edge AI</span>
            </div>
          </div>
        </section>
        <section id="skills" className="toolkit-section">
          <div className="wrap section">
            <SectionHeading
              number="04"
              label="SKILLS"
              title="Technical toolkit"
              text="Understand the problem. Choose the right tools. Make it work."
            />
            <div className="skills-grid">
              {Object.entries(skills).map(([name, items]) => (
                <div className="skill-group" key={name}>
                  <h3>{name}</h3>
                  <p>
                    {items.map((item, j) => (
                      <span key={item}>
                        {item}
                        {j < items.length - 1 && <b> / </b>}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
            <details className="training-details">
              <summary>
                <span>
                  {certifications.length} certifications & training courses
                </span>
                <span>
                  <Plus size={18} />
                </span>
              </summary>
              <ul>
                {certifications.map((cert) => (
                  <li key={cert}>
                    <Check size={15} />
                    {cert}
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </section>
        <section id="education" className="section wrap">
          <SectionHeading
            number="05"
            label="EDUCATION"
            title="Education & learning"
          />
          <div className="education-grid">
            <article>
              <span className="eyebrow">EXPECTED COMPLETION · MAY 2027</span>
              <h3>
                Master of Applied
                <br />
                Artificial Intelligence <span>(Professional)</span>
              </h3>
              <p className="school">
                Deakin University <ArrowUpRight size={17} />
              </p>
              <span className="location">Waurn Ponds, Geelong, VIC</span>
              <p className="coursework">
                Machine Learning · Deep Learning · Engineering AI Solutions ·
                Natural Language Processing · Human-Aligned AI
              </p>
            </article>
            <article>
              <span className="eyebrow">AUG 2020 — AUG 2024</span>
              <h3>
                Bachelor of Technology
                <br />
                Computer Science and Engineering
              </h3>
              <p className="school">
                Vellore Institute of Technology <ArrowUpRight size={17} />
              </p>
              <span className="location">Vellore, India · CGPA 8.45 / 10</span>
              <p className="coursework">
                Data Structures & Algorithms · Artificial Intelligence ·
                Software Engineering · Operating Systems · Database Management
                Systems · Cloud Computing
              </p>
            </article>
          </div>
          <details className="memberships">
            <summary>
              Professional memberships <Plus size={17} />
            </summary>
            <ul>
              <li>
                Nepal Engineering Council — General Registered Engineer · Oct
                2024 – Present
              </li>
              <li>Deakin University Student Association (DUSA)</li>
              <li>Deakin Data Science Club</li>
              <li>Google Developer Group (GDG) Melbourne</li>
            </ul>
          </details>
        </section>
        <section id="volunteering" className="volunteer-section">
          <div className="wrap section">
            <SectionHeading
              number="06"
              label="VOLUNTEERING"
              title="Volunteering & community"
              text="Good work also means showing up for people."
            />
            <div className="volunteer-grid">
              {volunteerExperiences.map((exp) => (
                <article key={exp.company}>
                  <span className="eyebrow">{exp.period}</span>
                  <h3>{exp.company}</h3>
                  <p className="volunteer-role">{exp.title}</p>
                  <span className="location">{exp.location}</span>
                  <ResponsibilityList items={exp.highlights} />
                </article>
              ))}
            </div>
            <details className="memberships">
              <summary>
                Earlier community involvement <Plus size={17} />
              </summary>
              <ul>
                <li>COVID-19 Awareness Campaign — VIT University (2020)</li>
                <li>SET Exhibition Volunteer — Bhaktapur, Nepal (2019)</li>
                <li>Kathmandu World Debates Event Volunteer (2019)</li>
              </ul>
            </details>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="wrap">
            <div className="contact-top">
              <span className="eyebrow">
                HAVE AN OPPORTUNITY OR AN INTERESTING PROBLEM?
              </span>
              <span>
                <i className="status-dot" /> LET’S CONNECT
              </span>
            </div>
            <h2>
              Great things start
              <br />
              with a{" "}
              <a href="mailto:dipsanbhattarai7@gmail.com">
                conversation.
                <ArrowUpRight />
              </a>
            </h2>
            <div className="contact-bottom">
              <div className="email-row">
                <a href="mailto:dipsanbhattarai7@gmail.com">
                  dipsanbhattarai7@gmail.com
                </a>
                <button
                  onClick={copyEmail}
                  aria-label={copied ? "Email copied" : "Copy email address"}
                >
                  {copied ? <Check size={17} /> : <Copy size={17} />}
                </button>
                <span role="status" className="copy-status">
                  {copied ? "Copied!" : ""}
                </span>
              </div>
              <a href="tel:+61422641487" className="phone-link">
                +61 422 641 487 <ArrowUpRight size={15} />
              </a>
              <div className="social-links">
                <a
                  href="https://github.com/Dipsan49"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/dipsanbhattarai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a href="mailto:dipsanbhattarai7@gmail.com" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer wrap">
        <a className="wordmark" href="#">
          dipsan<span>✳</span>
        </a>
        <span>© {new Date().getFullYear()} Dipsan Bhattarai</span>
        <a href="#">
          Back to top <ArrowUpRight size={15} />
        </a>
      </footer>
    </>
  );
}
