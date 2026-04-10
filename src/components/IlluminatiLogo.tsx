interface IlluminatiLogoProps {
  size?: number;
  className?: string;
}

export default function IlluminatiLogo({ size = 28, className = "" }: IlluminatiLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      style={{ width: size, height: size }}
    >
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4af37" />
          <stop offset="50%" stopColor="#f9e27d" />
          <stop offset="100%" stopColor="#d4af37" />
        </linearGradient>
      </defs>
      
      {/* Outer Glow/Aura */}
      <circle cx="50" cy="50" r="45" fill="url(#goldGradient)" fillOpacity="0.05" />
      
      {/* Pyramid Structure */}
      <path
        d="M50 15L85 85H15L50 15Z"
        stroke="url(#goldGradient)"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="none"
        filter="url(#glow)"
      />
      
      {/* Horizontal lines for pyramid texture */}
      <line x1="30" y1="55" x2="70" y2="55" stroke="#d4af37" strokeWidth="0.5" strokeOpacity="0.5" />
      <line x1="22" y1="70" x2="78" y2="70" stroke="#d4af37" strokeWidth="0.5" strokeOpacity="0.5" />
      
      {/* The Eye of Providence */}
      <g transform="translate(50, 58)">
        {/* Eye Outline */}
        <path
          d="M-18 0C-18 0 -9 -10 0 -10C9 -10 18 0 18 0C18 0 9 10 0 10C-9 10 -18 0 -18 0Z"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Iris */}
        <circle cx="0" cy="0" r="5" stroke="#d4af37" strokeWidth="1" fill="none" />
        {/* Pupil */}
        <circle cx="0" cy="0" r="2.5" fill="url(#goldGradient)" />
        
        {/* Rays of Enlightenment */}
        <g stroke="#d4af37" strokeWidth="0.8" strokeLinecap="round" opacity="0.6">
          <line x1="0" y1="-15" x2="0" y2="-22" />
          <line x1="12" y1="-12" x2="18" y2="-18" />
          <line x1="15" y1="0" x2="22" y2="0" />
          <line x1="12" y1="12" x2="18" y2="18" />
          <line x1="0" y1="15" x2="0" y2="22" />
          <line x1="-12" y1="12" x2="-18" y2="18" />
          <line x1="-15" y1="0" x2="-22" y2="0" />
          <line x1="-12" y1="-12" x2="-18" y2="-18" />
        </g>
      </g>
    </svg>
  );
}

