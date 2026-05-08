import { Send, Mail, Github, Linkedin } from "lucide-react";

const links = [
  {
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=simbarashe.b.gudyanga@gmail.com",
    icon: <Mail size={18} />,
    label: "simbarashe.b.gudyanga@gmail.com",
    external: true,
  },
  {
    href: "https://github.com/b1shopzw",
    icon: <Github size={18} />,
    label: "github.com/b1shopzw",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/bernard-gudyanga-bb8b76407/",
    icon: <Linkedin size={18} />,
    label: "linkedin.com/in/bernard-gudyanga",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-text reveal">
            <div className="section-label">// 05. contact</div>
            <h2>
              Let&apos;s <span>Connect</span> <Send className="inline ml-2" />
            </h2>
            <p>
              Whether you have a project in mind, an opportunity to share, or
              just want to talk tech — I&apos;m always open to a conversation.
            </p>
            <p>
              Currently based in <strong>Harare, Zimbabwe</strong>.
            </p>
          </div>
          <div className="contact-links reveal">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="contact-link"
                target={l.external ? "_blank" : "_blank"}
                rel="noopener noreferrer"
              >
                <span className="contact-icon">{l.icon}</span>
                <span>{l.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
