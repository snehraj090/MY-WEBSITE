import { useEffect, useRef } from 'react';

export function AnimatedCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return <div ref={cursorRef} className="cursor-glow" />;
}
