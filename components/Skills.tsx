import { Smartphone, Globe, Wrench, Database, ClipboardCheck, Terminal } from "lucide-react";

const skills = [
  {
    icon: <Smartphone size={24} />,
    title: "Mobile Development",
    desc: "Cross-platform apps with clean UI and robust state management.",
    tags: [
      { label: "Flutter", accent: true },
      { label: "Dart", accent: true },
      { label: "React Native", accent: false },
      { label: "Firebase", accent: false },
    ],
  },
  {
    icon: <Globe size={24} />,
    title: "Web Development",
    desc: "Interactive frontends and scalable backend services.",
    tags: [
      { label: "Next.js", accent: true },
      { label: "React", accent: true },
      { label: "Node.js", accent: false },
      { label: "Express", accent: false },
    ],
  },
  {
    icon: <Wrench size={24} />,
    title: "Hardware & IoT",
    desc: "Embedded systems, WiFi sensing, and wearable prototyping.",
    tags: [
      { label: "ESP32", accent: true },
      { label: "Arduino", accent: true },
      { label: "CSI", accent: false },
      { label: "C/C++", accent: false },
    ],
  },
  {
    icon: <Database size={24} />,
    title: "Backend & Data",
    desc: "Relational databases, REST APIs, and auth systems.",
    tags: [
      { label: "PostgreSQL", accent: true },
      { label: "MySQL", accent: false },
      { label: "REST API", accent: false },
      { label: "RBAC", accent: false },
    ],
  },
  {
    icon: <ClipboardCheck size={24} />,
    title: "Project Management",
    desc: "Structured delivery using PM frameworks and tools.",
    tags: [
      { label: "Agile", accent: true },
      { label: "PERT/EVM", accent: false },
      { label: "WBS", accent: false },
      { label: "Waterfall", accent: false },
    ],
  },
  {
    icon: <Terminal size={24} />,
    title: "Data & Scripting",
    desc: "Signal processing, automation, and data pipelines.",
    tags: [
      { label: "Python", accent: true },
      { label: "NumPy", accent: false },
      { label: "Scipy", accent: false },
      { label: "Git", accent: false },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-label reveal">// 02. skills</div>
        <h2 className="reveal">Technical <span>Arsenal</span></h2>
        <div className="skills-outer">
          {skills.map((s) => (
            <div className="skill-card reveal" key={s.title}>
              <div className="skill-icon">{s.icon}</div>
              <div className="skill-title">{s.title}</div>
              <p style={{ color: "var(--muted)", fontSize: ".8rem" }}>{s.desc}</p>
              <div className="skill-tags">
                {s.tags.map((t) => (
                  <span key={t.label} className={`tag${t.accent ? " accent" : ""}`}>
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
