const particles = Array.from({ length: 10 }, (_, index) => ({
  size: 24 + Math.round(Math.random() * 42),
  top: Math.round(Math.random() * 100),
  left: Math.round(Math.random() * 100),
  delay: Math.random() * 6,
  duration: 14 + Math.random() * 10,
  opacity: 0.12 + Math.random() * 0.12,
}));

export function ParticlesBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {particles.map((particle, index) => (
        <span
          key={index}
          className="particle"
          style={{
            width: particle.size,
            height: particle.size,
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  );
}
