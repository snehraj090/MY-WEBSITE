import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          const sorted = visible.sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1));
          setActiveId(sorted[0].target.id);
        }
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0.2,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
