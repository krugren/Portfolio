"use client";
import { useEffect, useRef } from "react";
import { IconFlask, IconChip, IconTools, IconUsers } from "./Icons";
import styles from "./Skills.module.css";

const CATEGORIES = [
  {
    icon: <IconFlask size={20} />, title: "Food Technology", sub: "Domain & Industry", variant: "teal",
    chips: ["QA / QC","Sensory Evaluation","New Product Development","Food Safety","HACCP","ISO 22000:2018","FSSC 22000 V6.0","NPD Trials","Sensory Panels","Production"],
  },
  {
    icon: <IconChip size={20} />, title: "AI & Technical", sub: "Software & AI Tools", variant: "gold",
    chips: ["AI-Assisted Development","Claude (Opus/Sonnet)","ChatGPT","Google Antigravity","Next.js","Prisma","REST APIs","PostgreSQL / SQLite","SEO & Security Review","Requirements & Architecture"],
  },
  {
    icon: <IconTools size={20} />, title: "Productivity & Office", sub: "Tools & Software", variant: "teal",
    chips: ["Microsoft Excel","Microsoft Word","PowerPoint","Canva","AI-generated Visuals","Vectorization / Image Design"],
  },
  {
    icon: <IconUsers size={20} />, title: "Leadership & Soft Skills", sub: "Professional Competencies", variant: "gold",
    chips: ["Communication","Team Management","Event Coordination","Problem Solving","Time Management","Planning & Budgeting","Documentation","Stakeholder Liaison"],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const els = el.querySelectorAll<HTMLElement>(".fade-up");
    const io = new IntersectionObserver(
      (e) => e.forEach(en => { if (en.isIntersecting) { (en.target as HTMLElement).classList.add("visible"); io.unobserve(en.target); } }),
      { threshold: 0.08 }
    );
    els.forEach(i => io.observe(i));
    return () => io.disconnect();
  }, []);

  return (
    <section id="skills" className={`${styles.section} pad`}>
      <div className="wrap">
        <span className="section-label">Skills</span>
        <h2 className="section-title">Expertise &amp; Tools</h2>
        <p className="section-desc">A dual skill-set spanning food science and modern technology — built through academic training, industry stints, and real project delivery.</p>
        <div ref={ref} className={styles.grid}>
          {CATEGORIES.map(({ icon, title, sub, variant, chips }) => (
            <div key={title} className={`${styles.box} fade-up`}>
              <div className={styles.head}>
                <div className={`${styles.ico} ${styles[`ico_${variant}`]}`}>{icon}</div>
                <div><h3 className={styles.title}>{title}</h3><div className={styles.sub}>{sub}</div></div>
              </div>
              <div className={styles.chips}>
                {chips.map(c => (
                  <span key={c} className={`chip ${variant === "teal" ? "chip-teal" : "chip-gold"}`}>{c}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}