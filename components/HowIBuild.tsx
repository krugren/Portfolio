"use client";
import { useEffect, useRef } from "react";
import styles from "./HowIBuild.module.css";

const STEPS = [
  { num: "01", title: "Define",    desc: "Turn an idea into requirements, constraints and a clear plan. Write it out before touching any tool." },
  { num: "02", title: "Architect", desc: "Use ChatGPT to reason through structure, system logic and implementation choices. Establish the data model and API surface." },
  { num: "03", title: "Build",     desc: "Direct Claude models through Google Antigravity to implement the system — component by component, endpoint by endpoint." },
  { num: "04", title: "Review",    desc: "Check output against requirements, functionality, security and SEO. Catch edge cases. Push back when something is wrong." },
  { num: "05", title: "Iterate",   desc: "Give corrective feedback and refine. Repeat steps 03–04 until the implementation matches the requirement." },
];

export default function HowIBuild() {
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
    <section id="how-i-build" className={`${styles.section} pad`}>
      <div className="wrap" ref={ref}>
        <span className="section-label">Process</span>
        <h2 className="section-title">How I Build With AI</h2>
        <p className="section-desc">I don&apos;t just prompt AI tools — I direct them with a structured workflow, holding full responsibility for the result.</p>

        <div className={styles.steps}>
          {STEPS.map(({ num, title, desc }, i) => (
            <div key={num} className={`${styles.step} fade-up`} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className={styles.numWrap}>
                <span className={styles.num}>{num}</span>
                {i < STEPS.length - 1 && <div className={styles.connector} aria-hidden />}
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.desc}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.tagline}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color:"var(--teal)",flexShrink:0}}>
              <rect x="7" y="7" width="10" height="10" rx="1"/><path d="M7 10H2M7 14H2M17 10h5M17 14h5M10 7V2M14 7V2M10 22v-5M14 22v-5"/>
            </svg>
            <span>AI accelerates execution. <strong>I remain responsible for the decisions.</strong></span>
          </p>
      </div>
    </section>
  );
}