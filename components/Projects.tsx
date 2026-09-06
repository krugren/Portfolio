"use client";
import { useEffect, useRef } from "react";
import styles from "./Projects.module.css";

const PROJECTS = [
  {
    icon: "🏡",
    status: "Completed",
    statusClass: "done",
    client: "Client Project · Full-Stack Farmstay Platform",
    title: "Poudyal Farms",
    desc: ["Full-stack hospitality platform for a Sikkim farmstay — guest website, booking workflow, reviews, contact flows and a full admin dashboard with 20+ REST API endpoints, authentication and Google Maps integration.",
           "SEO foundations: structured data, sitemap, robots.txt, canonical URLs and Open Graph. Selective 3D/animation interactions for premium UX."],
    chips: [["Next.js 16","teal"],["Prisma","teal"],["REST API","teal"],["PostgreSQL","neutral"],["SEO","neutral"],["Auth","neutral"]],
  },
  {
    icon: "🍽️",
    status: "In Development",
    statusClass: "dev",
    client: "Client Project · Full-Stack Catering Platform",
    title: "Saravana Caters",
    desc: ["Full-stack catering management platform with admin interface for menus, images and contact info, plus enquiry/review workflows and an inventory-management foundation.",
           "Role-based access built; quotation generation in progress. Security and SEO reviewed with Claude Opus and Gemini Flash."],
    chips: [["Full-Stack","teal"],["Admin Interface","teal"],["Inventory","neutral"],["Security Review","neutral"],["SEO","neutral"]],
  },
  {
    icon: "🤖",
    status: "In Development",
    statusClass: "dev",
    client: "Personal Project · AI Research Assistant",
    title: "JARVIS",
    desc: ["Personal AI assistant concept for research, learning, and project workflow management. Architecture under active development — focused on deep research support, ideation, and productivity amplification."],
    chips: [["Claude Opus/Sonnet","gold"],["ChatGPT","gold"],["AI Architecture","neutral"],["Research Workflows","neutral"]],
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll<HTMLElement>(".fade-up");
    const io = new IntersectionObserver(
      (e) => e.forEach(en => { if (en.isIntersecting) { (en.target as HTMLElement).classList.add("visible"); io.unobserve(en.target); } }),
      { threshold: 0.1 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="projects" className={`${styles.section} pad`}>
      <div className="wrap">
        <span className="section-label">Projects</span>
        <h2 className="section-title">Selected Work</h2>
        <p className="section-desc">Real-world software products built through AI-assisted development — from architecture through full implementation and iteration.</p>
        <div ref={ref} className={styles.grid}>
          {PROJECTS.map(({ icon, status, statusClass, client, title, desc, chips }) => (
            <div key={title} className={`${styles.card} fade-up`}>
              <div className={styles.top}>
                <div className={styles.ico}>{icon}</div>
                <span className={`${styles.status} ${styles[statusClass]}`}>{status}</span>
              </div>
              <div className={styles.client}>{client}</div>
              <h3 className={styles.title}>{title}</h3>
              {desc.map((d, i) => <p key={i} className={styles.desc}>{d}</p>)}
              <div className={styles.chips}>
                {chips.map(([label, variant]) => (
                  <span key={label} className={`chip chip-${variant === "teal" ? "teal" : variant === "gold" ? "gold" : "neutral"}`}>{label}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}