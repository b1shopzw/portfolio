"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Lightbulb, FolderOpen, Code, Layers, Globe } from "lucide-react";

const skillBars = [
  { label: "Flutter / Dart", pct: 85 },
  { label: "Next.js / React", pct: 70 },
  { label: "Heuristic Driven Development", pct: 95 },
  { label: "Node.js / Backend", pct: 75 },
  { label: "ESP32 / Hardware", pct: 65 },
  { label: "Python", pct: 70 },
];

export default function About() {
  useEffect(() => {
    const container = document.getElementById("skillbars");
    if (!container) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll<HTMLElement>(".skill-bar-fill")
              .forEach((bar, i) => {
                setTimeout(() => bar.classList.add("animated"), i * 150);
              });
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(container);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-photo-top reveal">
            <div className="photo-frame">
              <Image
                src="/profile.jpg"
                alt="Bernard S. Gudyanga"
                width={180}
                height={180}
                style={{ objectFit: "cover", objectPosition: "top" }}
                priority
              />
            </div>
            <div className="photo-name">Bernard S. Gudyanga</div>
            <div className="photo-title">Computer Science Student · Developer</div>
          </div>
          <div className="about-content">
            <div className="about-text reveal">
              <div className="section-label">// 01. about</div>
              <h2>
                Driven by <span>Impact</span> <Lightbulb className="inline" />
              </h2>
              <p>I&apos;m <strong>Bernard S. Gudyanga</strong>, a Computer Science student pursuing a <strong>Bachelor of Honours degree</strong> at the National University of Science &amp; Technology (NUST), Zimbabwe.</p>
              <p>My passion is simple: <strong>helping people through software</strong>. I believe technology should solve real, everyday problems — not just exist for its own sake. Every project I build is motivated by the question: <em>how does this make someone&apos;s life better?</em></p>
              <p>Currently, I&apos;m building a <strong>smart queue management system (QLINE)</strong> — designed to cut down the frustrating time people waste waiting in queues. Real problem, real solution.</p>
              <p>Outside of building, I explore <strong>DIY hardware &amp; IoT</strong>, including WiFi-based sensing systems and wearable electronics — bridging the gap between code and the physical world.</p>
              <div className="skill-bars" id="skillbars">
                {skillBars.map(({ label, pct }) => (
                  <div className="skill-bar-row" key={label}>
                    <div className="skill-bar-label">
                      <span>{label}</span><span>{pct}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div className="skill-bar-fill" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal">
              <div className="stats-grid">
                <div className="stat-box">
                  <span className="stat-num">5+</span>
                  <span className="stat-label">
                    Projects <FolderOpen size={14} className="inline ml-1" />
                  </span>
                </div>
                <div className="stat-box">
                  <span className="stat-num">3+</span>
                  <span className="stat-label">
                    Years Coding <Code size={14} className="inline ml-1" />
                  </span>
                </div>
                <div className="stat-box">
                  <span className="stat-num">4</span>
                  <span className="stat-label">
                    Stacks <Layers size={14} className="inline ml-1" />
                  </span>
                </div>
                <div className="stat-box">
                  <span className="stat-num">ZW</span>
                  <span className="stat-label">
                    Based <Globe size={14} className="inline ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
