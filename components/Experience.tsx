"use client";
import { useEffect, useRef } from "react";
import styles from "./Experience.module.css";

const ITEMS = [
  { org: "Vyaktitva · NIFTEM-K", role: "Secretary", date: "Oct 2025 – Present", active: true,
    desc: "Lead society operations, events, and partnerships while managing planning, budgeting, and documentation for NIFTEM-K's student society.",
    chip: "Campus Leadership", chipClass: "teal" },
  { org: "World Food India 2025 · MOFPI", role: "Liaisoning Officer", date: "Sep 2025", active: false,
    desc: "Served as MOFPI-appointed Liaisoning Officer to Mr. Priyank Chauhan, supporting coordination and stakeholder interaction at India's premier food industry event.",
    chip: "Government Appointment", chipClass: "gold" },
  { org: "Vyaktitva · NIFTEM-K", role: "Joint Secretary", date: "Jan 2025 – Oct 2025", active: false,
    desc: "Supported planning, coordination, onboarding, and documentation for society operations — laying the groundwork before stepping up to Secretary.",
    chip: "Campus Leadership", chipClass: "teal" },
  { org: "TagTaste Foods Pvt. Ltd.", role: "Volunteer — Sensory Panels", date: "Aug 2024 – Present", active: false,
    desc: "Contributed to sensory panels and feedback documentation, helping enhance product quality and consumer acceptance at India's leading food networking platform.",
    chip: "Sensory Evaluation", chipClass: "neutral" },
  { org: "SKM Egg Products", role: "QA/QC · NPD · Marketing", date: "Jul 2024", active: false,
    desc: "Handled QA/QC testing, supported NPD trials and sensory studies, and scouted viable customers for the marketing team during an industry internship.",
    chip: "Industry Internship", chipClass: "neutral" },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll<HTMLElement>(`.${styles.item}`);
    const io = new IntersectionObserver(
      (e) => e.forEach(en => { if (en.isIntersecting) { (en.target as HTMLElement).classList.add(styles.visible); io.unobserve(en.target); } }),
      { threshold: 0.1 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="experience" className={`${styles.section} pad`}>
      <div className="wrap">
        <span className="section-label">Experience</span>
        <h2 className="section-title">Professional Journey</h2>
        <p className="section-desc">From food industry internships to government appointments and campus leadership — a track record of stepping up.</p>
        <div ref={ref} className={styles.timeline}>
          {ITEMS.map(({ org, role, date, active, desc, chip, chipClass }) => (
            <div key={`${org}-${role}`} className={styles.item}>
              <div className={`${styles.dot} ${active ? styles.dotActive : ""}`} />
              <div className={styles.card}>
                <div className={styles.meta}>
                  <div>
                    <div className={styles.org}>{org}</div>
                    <div className={styles.role}>{role}</div>
                  </div>
                  <div className={styles.date}>{date}</div>
                </div>
                <p className={styles.desc}>{desc}</p>
                <div className={styles.foot}>
                  <span className={`chip chip-${chipClass}`}>{chip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}