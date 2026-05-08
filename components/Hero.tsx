import Link from "next/link";
import { MapPin, Zap, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-left">
            <span className="hero-tag">
              <MapPin size={14} className="inline mr-1" /> Based in Zimbabwe
            </span>
            <h1>
              CS
              <br />
              <em>Developer</em>
              <br />
              &amp; Builder <Code2 className="inline" />
            </h1>
            <p className="hero-desc">
              Building software that genuinely helps people. Student at{" "}
              <strong>NUST Zimbabwe</strong>, driven by the impact technology
              can have on everyday lives.
            </p>
            <div className="hero-actions">
              <Link href="#projects" className="btn btn-primary">
                View Projects →
              </Link>
              <Link href="#contact" className="btn btn-ghost">
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="terminal-card">
              <div className="terminal-bar">
                <div className="dot r" />
                <div className="dot y" />
                <div className="dot g" />
                <span className="terminal-title">
                  bernard@nust ~ profile
                </span>
              </div>
              <div className="terminal-body">
                <div className="t-line">
                  <span className="t-prompt">$</span>
                  <span className="t-cmd">whoami --verbose</span>
                </div>
                <div className="t-out">
                  <span className="t-key">name</span>:{" "}
                  <span className="t-val">&quot;Bernard S. Gudyanga&quot;</span>
                </div>
                <div className="t-out">
                  <span className="t-key">role</span>:{" "}
                  <span className="t-val">&quot;Developer &amp; PM&quot;</span>
                </div>
                <div className="t-out">
                  <span className="t-key">uni</span>:{" "}
                  <span className="t-val">&quot;NUST Zimbabwe&quot;</span>
                </div>
                <br />
                <div className="t-line">
                  <span className="t-prompt">$</span>
                  <span className="t-cmd">ls ./stack</span>
                </div>
                <div className="t-out">
                  <span className="t-val">Flutter</span>{" "}
                  <span className="t-val">Next.js</span>{" "}
                  <span className="t-val">ESP32</span>
                </div>
                <div className="t-out">
                  <span className="t-val">Node.js</span>{" "}
                  <span className="t-val">Python</span>{" "}
                  <span className="t-val">SQL</span>
                </div>
                <br />
                <div className="t-line">
                  <span className="t-prompt">$</span>
                  <span className="t-cmd">cat status.txt</span>
                </div>
                <div className="t-out">
                  <span className="t-val">
                    Open to opportunities <Zap size={14} className="inline text-accent" />
                  </span>
                </div>
                <br />
                <div className="t-line">
                  <span className="t-prompt">$</span>
                  <span className="cursor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
