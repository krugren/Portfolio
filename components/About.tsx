"use client";
import { useEffect, useRef } from "react";
import { IconEmail, IconPhone, IconLinkedIn, IconGitHub, IconGlobe } from "./Icons";
import styles from "./About.module.css";

const INFO = [
  { icon: <IconEmail    size={16} />, label: "Email",     val: "sskruththik@gmail.com" },
  { icon: <IconPhone    size={16} />, label: "Phone",     val: "+91 9363622977" },
  { icon: <IconLinkedIn size={16} />, label: "LinkedIn",  val: "linkedin.com/in/kruththikss" },
  { icon: <IconGitHub   size={16} />, label: "GitHub",    val: "github.com/krugren" },
  { icon: <IconGlobe    size={16} />, label: "Languages", val: "English · Tamil · Hindi" },
];

const TAGS = [
  "Quality Control & Assurance","Sensory Evaluation","New Product Development",
  "AI-Assisted Development","Full-Stack Platforms","Event Coordination","Food Safety",
];

const FOOD_TRAITS = [
  "QA/QC & Sensory Evaluation","HACCP & ISO 22000:2018","NPD Trials at SKM Egg",
  "FOSTAC Food Safety Supervisor","MOFPI Liaisoning Officer",
];

const TECH_TRAITS = [
  "ChatGPT — planning & architecture","Claude via Antigravity — implementation",
  "Poudyal Farms — 20+ API endpoints","Saravana Caters — catering ERP",
  "SEO, Auth, Security Review",
];

export default function About() {
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
    <section id="about" className={`${styles.about} pad`}>
      <div className="wrap" ref={ref}>
        <div className={styles.topGrid}>
          <div>
            <span className="section-label">About Me</span>
            <h2 className="section-title">Where Food Science<br />Meets Technology</h2>
            <div className={styles.text}>
              <p>I am a <strong>Food Technology undergraduate at NIFTEM-K</strong> with hands-on experience in QA/QC, sensory evaluation, and food safety — and I also <strong>build and ship real software</strong> using AI as my development engine.</p>
              <p>I use <strong>ChatGPT for requirements, planning and architecture</strong>, then direct <strong>Claude models through Google Antigravity</strong> for implementation, review and iteration. I validate the output against my requirements and redirect the agent when needed.</p>
              <p>As <strong>Secretary of Vyaktitva</strong> and a MOFPI-appointed Liaisoning Officer at World Food India 2025, I operate at the intersection of community, industry, and technology.</p>
            </div>
            <div className={styles.tags}>
              {TAGS.map(t => <span key={t} className={styles.tag}>{t}</span>)}
            </div>
          </div>
          <div className={styles.infoCards}>
            {INFO.map(({ icon, label, val }) => (
              <div key={label} className={`${styles.card} fade-up`}>
                <span className={styles.ico}>{icon}</span>
                <div>
                  <div className={styles.lbl}>{label}</div>
                  <div className={styles.val}>{val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.twoWorlds} fade-up`}>
          <div className={styles.worldHdr}>
            <span className="section-label" style={{ marginBottom: 0 }}>The Unusual Combination</span>
            <p className={styles.worldSub}>Two disciplines. One person. Both real.</p>
          </div>
          <div className={styles.worlds}>
            <div className={styles.worldTeal}>
              <div className={styles.worldIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6M9 3v7l-5 9a1 1 0 0 0 .9 1.5h14.2a1 1 0 0 0 .9-1.5L15 10V3"/><path d="M9 17h6"/></svg>
              </div>
              <h3 className={styles.worldTitle}>Food Technologist</h3>
              <ul className={styles.worldList}>
                {FOOD_TRAITS.map(t => <li key={t}>{t}</li>)}
              </ul>
            </div>
            <div className={styles.worldDivider}>
              <div className={styles.worldDivLine} />
              <span className={styles.worldAnd}>×</span>
              <div className={styles.worldDivLine} />
            </div>
            <div className={styles.worldGold}>
              <div className={styles.worldIcon} style={{ background: "var(--gdim)", border: "1px solid rgba(240,165,0,0.25)", color: "var(--gold)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="7" width="10" height="10" rx="1"/><path d="M7 10H2M7 14H2M17 10h5M17 14h5M10 7V2M14 7V2M10 22v-5M14 22v-5"/></svg>
              </div>
              <h3 className={styles.worldTitle} style={{ color: "var(--gold)" }}>Tech Builder</h3>
              <ul className={styles.worldList} style={{ borderLeftColor: "rgba(240,165,0,0.2)" }}>
                {TECH_TRAITS.map(t => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}