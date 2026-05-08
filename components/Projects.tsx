import { Briefcase, Timer, Users, Radio, ShieldCheck } from "lucide-react";

const projects = [
  {
    num: "01 — Featured",
    title: "QLINE — Smart Queue",
    desc: "A real-time smart queue management system built to eliminate the frustration of long waits. Features QR check-in, live position tracking, admin dashboards, and animated UI — helping people reclaim their time.",
    tags: [
      { label: "React Native", accent: true },
      { label: "Node.js", accent: true },
      { label: "QR Code", accent: false },
      { label: "Real-time", accent: false },
      { label: "Firebase", accent: false },
    ],
    visual: <Timer size={48} strokeWidth={1} />,
    featured: true,
  },
  {
    num: "02",
    title: "NUST Clubs & Societies",
    desc: "Comprehensive Flutter mobile app for managing student clubs at NUST — event management, membership tracking, role-based access, and announcements.",
    tags: [
      { label: "Flutter", accent: true },
      { label: "Firebase", accent: false },
      { label: "RBAC", accent: false },
    ],
    visual: <Users size={48} strokeWidth={1} />,
    featured: false,
  },
  {
    num: "03",
    title: "RuView — WiFi DensePose",
    desc: "ESP32-based prototype implementing CSI signal processing and Butterworth filtering for human pose estimation via WiFi signals, with a real-time dashboard.",
    tags: [
      { label: "ESP32", accent: true },
      { label: "CSI", accent: false },
      { label: "Python", accent: false },
    ],
    visual: <Radio size={48} strokeWidth={1} />,
    featured: false,
  },
  {
    num: "04",
    title: "RBAC Admin Dashboard",
    desc: "Role-based access control dashboard for Zimbabwean government and financial institutions with structured Branch ID disambiguation and scoped SQL enforcement.",
    tags: [
      { label: "Next.js", accent: true },
      { label: "PostgreSQL", accent: false },
      { label: "RBAC", accent: false },
    ],
    visual: <ShieldCheck size={48} strokeWidth={1} />,
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-label reveal">// 03. projects</div>
        <h2 className="reveal">
          Selected <span>Work</span> <Briefcase className="inline" />
        </h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <div
              key={p.num}
              className={`project-card reveal${p.featured ? " featured" : ""}`}
            >
              <div>
                <div className="project-num">{p.num}</div>
                <div className="project-title">{p.title}</div>
                <p className="project-desc">{p.desc}</p>
                <div className="skill-tags" style={{ marginTop: "1rem" }}>
                  {p.tags.map((t) => (
                    <span
                      key={t.label}
                      className={`tag${t.accent ? " accent" : ""}`}
                    >
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
              {p.visual && (
                <div className="project-visual" style={{ height: "200px" }}>
                  {p.visual}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
