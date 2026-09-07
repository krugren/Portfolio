"use client";
import { useEffect, useRef } from "react";
import styles from "./Projects.module.css";

const PROJECTS = [
  {
    id: "poudyal-farms",
    title: "Poudyal Farms",
    status: "Functional Prototype",
    statusClass: "proto",
    type: "Client Project · Full-Stack Farmstay Platform",
    note: "Client chose not to proceed to production.",
    desc: "Full-stack farmstay booking platform built for a real client — guest website, booking workflow, reviews, contact flows, admin dashboard, 20+ REST endpoints, authentication and Google Maps integration.",
    ai: "ChatGPT — planning & architecture · Claude via Antigravity — implementation & iteration",
    tech: ["Next.js 16","Prisma","REST API","PostgreSQL","SEO","Auth","Google Maps"],
    link: "https://github.com/krugren/Poudyal-Farms",
  },
  {
    id: "saravana-caters",
    title: "Saravana Caters",
    status: "Live",
    statusClass: "live",
    type: "Client Project · Catering Management Platform",
    note: null,
    desc: "End-to-end catering ERP for a real catering business — multi-step event booking, live menu management, admin order tracking, and secure client portal. Delivered for an active client.",
    ai: "ChatGPT — planning & logic · Claude via Antigravity — implementation · Claude Opus / Gemini Flash — security & SEO review",
    tech: ["Next.js","Prisma","SQLite","REST API","Auth","Admin Dashboard"],
    link: "https://github.com/krugren/Saravana-Caters",
  },
  {
    id: "jarvis",
    title: "JARVIS",
    status: "In Development",
    statusClass: "dev",
    type: "Personal Project · AI Assistant",
    note: null,
    desc: "Personal AI assistant for research and project workflows. Currently under development.",
    ai: "Claude — core reasoning · ChatGPT — planning layer",
    tech: ["Next.js","Claude API","ChatGPT API","Research Tools"],
    link: "#",
  },
];

const STATUS_LABEL: Record<string, string> = {
  live: "Live",
  proto: "Functional Prototype",
  dev: "In Development",
};

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const items = el.querySelectorAll<HTMLElement>(".fade-up");
    const io = new IntersectionObserver(
      (e) => e.forEach(en => { if (en.isIntersecting) { (en.target as HTMLElement).classList.add("visible"); io.unobserve(en.target); } }),
      { threshold: 0.06 }
    );
    items.forEach(i => io.observe(i));
    return () => io.disconnect();
  }, []);

  return (
    <section id="projects" className={`${styles.section} pad`}>
      <div className="wrap" ref={ref}>
        <span className="section-label">Projects</span>
        <h2 className="section-title">Things I&apos;ve Built</h2>
        <p className="section-desc">Real software, real clients, real AI workflows — from architecture through implementation and iteration.</p>

        <div className={styles.list}>
          {PROJECTS.map(({ id, title, status, statusClass, type, note, desc, ai, tech, link }) => (
            <div key={id} className={`${styles.card} fade-up`} id={id}>
              <div className={styles.header}>
                <div>
                  <span className={`${styles.badge} ${styles[`badge_${statusClass}`]}`}>
                    <span className={styles.dot} />
                    {STATUS_LABEL[statusClass]}
                  </span>
                  <h3 className={styles.title}>{title}</h3>
                  <p className={styles.type}>{type}</p>
                </div>
                {link !== "#" && (<a href={link} target="_blank" rel="noopener noreferrer" className={styles.link} aria-label={`${title} on GitHub`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  GitHub
                </a>)}
              </div>

              <p className={styles.desc}>{desc}</p>

              {note && (
                <div className={styles.note}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  {note}
                </div>
              )}

              <div className={styles.aiRow}>
                <span className={styles.aiLabel}>AI workflow</span>
                <span className={styles.aiVal}>{ai}</span>
              </div>

              <div className={styles.tech}>
                {tech.map(t => <span key={t} className="chip chip-neutral">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}