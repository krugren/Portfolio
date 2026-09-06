"use client";
import { IconEmail, IconLinkedIn, IconGitHub, IconPhone } from "./Icons";
import styles from "./Contact.module.css";

const LINKS = [
  { icon: <IconEmail    size={18} />, type: "Email",    val: "sskruththik@gmail.com",       href: "mailto:sskruththik@gmail.com",        id: "contact-email" },
  { icon: <IconLinkedIn size={18} />, type: "LinkedIn", val: "linkedin.com/in/kruththikss",  href: "https://linkedin.com/in/kruththikss", id: "contact-linkedin" },
  { icon: <IconGitHub   size={18} />, type: "GitHub",   val: "github.com/krugren",           href: "https://github.com/krugren",         id: "contact-github" },
  { icon: <IconPhone    size={18} />, type: "Phone",    val: "+91 9363622977",               href: "tel:+919363622977",                   id: "contact-phone" },
];

export default function Contact() {
  return (
    <section id="contact" className={`${styles.section} pad`}>
      <div className="wrap">
        <div className={styles.grid}>
          <div>
            <span className="section-label">Contact</span>
            <h2 className="section-title">Let&apos;s Connect</h2>
            <p className="section-desc" style={{ marginBottom: "2rem" }}>
              Whether it&apos;s a food tech opportunity, a project collaboration, or a conversation about AI-assisted building — I&apos;m always open to it.
            </p>
            <div className={styles.links}>
              {LINKS.map(({ icon, type, val, href, id }) => (
                <a key={type} href={href} className={styles.link} id={id}
                   target={href.startsWith("http") ? "_blank" : undefined}
                   rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
                  <div className={styles.ico}>{icon}</div>
                  <div><div className={styles.type}>{type}</div><div className={styles.val}>{val}</div></div>
                </a>
              ))}
            </div>
          </div>
          <div className={styles.cta}>
            <h3 className={styles.ctaTitle}>Building communities.<br /><em>Helping others build.</em></h3>
            <p className={styles.ctaDesc}>
              Interested in building practical AI communities, helping students become more AI-fluent, and turning ideas into useful projects. If that sounds like something you&apos;re working on too — let&apos;s talk.
            </p>
            <a href="mailto:sskruththik@gmail.com" className="btn-primary" id="cta-email-btn">
              <IconEmail size={15} /> Email Me Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}