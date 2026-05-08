import { Heart, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <span className="footer-copy">
          © 2026 Bernard S. Gudyanga. All rights reserved.
        </span>
        <span className="footer-made">
          Built with <Heart size={14} className="inline mx-1" style={{ color: "var(--red)" }} fill="currentColor" /> in Zimbabwe <MapPin size={14} className="inline ml-1" />
        </span>
      </div>
    </footer>
  );
}
