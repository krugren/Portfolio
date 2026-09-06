"use client";
import { useEffect, useRef } from "react";
import { IconGradCap, IconBook, IconSchool, IconRobot, IconShield, IconCheckCircle, IconAward } from "./Icons";
import styles from "./Education.module.css";

const EDU = [
  { icon: <IconGradCap size={22} />, title: "B.Tech — Food Technology & Management (FTM)", inst: "National Institute of Food Technology Entrepreneurship and Management (NIFTEM-K), Kundli", score: "6.77 CGPA", yr: "2023–Present" },
  { icon: <IconBook    size={22} />, title: "Higher Secondary Certificate (HSC)",            inst: "Bharathi Vidhya Bhavan",                                                                     score: "72.7%",    yr: "· 2023" },
  { icon: <IconSchool  size={22} />, title: "Class X — CBSE",                                inst: "The Bharathi Vidhya Bhavan",                                                                 score: "83%",      yr: "· 2021" },
];

const CERTS = [
  { icon: <IconRobot       size={20} />, title: "AI Tools & ChatGPT Workshop",                    org: "be10x · Jun 2026" },
  { icon: <IconShield      size={20} />, title: "Food Safety Supervisor — Advanced Manufacturing", org: "FOSTAC · May 2026" },
  { icon: <IconAward       size={20} />, title: "Foundation of Sensory Appreciation",              org: "TagTaste Foods Pvt. Ltd. · May 2025" },
  { icon: <IconCheckCircle size={20} />, title: "HACCP · ISO 22000:2018 · FSSC 22000 V6.0",       org: "Foodkida · Jul 2025" },
];

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const items = el.querySelectorAll<HTMLElement>(".fade-up");
    const io = new IntersectionObserver(
      (e) => e.forEach(en => { if (en.isIntersecting) { (en.target as HTMLElement).classList.add("visible"); io.unobserve(en.target); } }),
      { threshold: 0.08 }
    );
    items.forEach(i => io.observe(i));
    return () => io.disconnect();
  }, []);

  return (
    <section id="education" className={`${styles.section} pad`}>
      <div className="wrap" ref={ref}>
        <span className="section-label">Education</span>
        <h2 className="section-title">Academic Background</h2>
        <p className="section-desc">Building a strong foundation in food technology, entrepreneurship, and management at one of India&#39;s premier food science institutions.</p>

        <div className={styles.list}>
          {EDU.map(({ icon, title, inst, score, yr }) => (
            <div key={title} className={`${styles.ecard} fade-up`}>
              <div className={styles.eico}>{icon}</div>
              <div className={styles.einfo}><h3>{title}</h3><span className={styles.inst}>{inst}</span></div>
              <div className={styles.escore}><span className={styles.sc}>{score}</span><span className={styles.yr}>{yr}</span></div>
            </div>
          ))}
        </div>

        <div className={styles.certHead}>
          <span className="section-label">Certifications</span>
          <h3 className={styles.certTitle}>Trainings &amp; Certifications</h3>
          <p className={styles.certDesc}>Formal credentials spanning food safety and AI &amp; technology.</p>
        </div>
        <div className={styles.certGrid}>
          {CERTS.map(({ icon, title, org }) => (
            <div key={title} className={`${styles.cert} fade-up`}>
              <span className={styles.cico}>{icon}</span>
              <div><h4 className={styles.ctitle}>{title}</h4><p className={styles.corg}>{org}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}