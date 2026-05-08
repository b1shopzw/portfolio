import { GraduationCap, BarChart3, Cpu } from "lucide-react";

const timeline = [
  {
    date: "Current",
    role: "BHSc Computer Science (Honours)",
    org: "National University of Science & Technology (NUST), Zimbabwe",
    icon: <GraduationCap size={16} className="inline mr-2 text-accent" />,
    body: "Pursuing an Honours degree in Computer Science with coursework spanning mobile development, project management, software engineering, databases, and embedded systems.",
  },
  {
    date: "Academic Project",
    role: "Project Manager — Meal Link Platform",
    org: "NUST Faculty Project",
    icon: <BarChart3 size={16} className="inline mr-2 text-accent" />,
    body: "Led the project management lifecycle for an academic software platform — producing WBS documentation, PERT network analysis, Earned Value Management reports, and risk assessments.",
  },
  {
    date: "Ongoing",
    role: "Independent Developer",
    org: "Self-directed",
    icon: <Cpu size={16} className="inline mr-2 text-accent" />,
    body: "Building impactful mobile apps, web dashboards, and hardware prototypes. Exploring WiFi-based sensing, wearable electronics, and real-time systems focused on solving real community problems.",
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-label reveal">// 04. experience</div>
        <h2 className="reveal">
          Journey <span>&amp;</span> Education
        </h2>
        <div className="timeline reveal">
          {timeline.map((item) => (
            <div className="tl-item" key={item.role}>
              <div className="tl-date">{item.date}</div>
              <div className="tl-role">
                {item.icon}
                {item.role}
              </div>
              <div className="tl-org">{item.org}</div>
              <div className="tl-body">{item.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
