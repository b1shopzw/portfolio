export default function CircuitBg() {
  return (
    <div className="circuit-bg">
      <svg
        viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#f0a500"
        strokeWidth=".5"
      >
        <line x1="0" y1="200" x2="400" y2="200" />
        <circle cx="400" cy="200" r="4" fill="#f0a500" />
        <line x1="400" y1="200" x2="400" y2="450" />
        <line x1="400" y1="450" x2="800" y2="450" />
        <circle cx="800" cy="450" r="4" fill="#f0a500" />
        <line x1="800" y1="450" x2="800" y2="100" />
        <line x1="800" y1="100" x2="1200" y2="100" />
        <line x1="200" y1="700" x2="600" y2="700" />
        <circle cx="600" cy="700" r="4" fill="#f0a500" />
        <line x1="600" y1="700" x2="600" y2="550" />
        <line x1="600" y1="550" x2="1000" y2="550" />
        <line x1="1000" y1="550" x2="1000" y2="350" />
        <circle cx="1000" cy="350" r="4" fill="#f0a500" />
        <line x1="1000" y1="350" x2="1440" y2="350" />
        <line x1="100" y1="0" x2="100" y2="800" />
        <line x1="1340" y1="0" x2="1340" y2="900" />
        <rect x="380" y="182" width="36" height="36" rx="2" />
        <rect x="780" y="82" width="36" height="36" rx="2" />
        <rect x="980" y="332" width="36" height="36" rx="2" />
        <circle cx="100" cy="200" r="6" />
        <circle cx="100" cy="500" r="6" />
        <circle cx="1340" cy="150" r="6" />
        <circle cx="1340" cy="600" r="6" />
      </svg>
    </div>
  );
}
