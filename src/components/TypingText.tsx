import { useEffect, useState } from 'react';

type TypingTextProps = {
  phrases: string[];
};

export function TypingText({ phrases }: TypingTextProps) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[index % phrases.length];
    const timeout = window.setTimeout(() => {
      setText(currentPhrase.slice(0, subIndex));
      if (!isDeleting && subIndex === currentPhrase.length + 1) {
        setIsDeleting(true);
      } else if (isDeleting && subIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      } else {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      }
    }, isDeleting ? 60 : 90);

    return () => window.clearTimeout(timeout);
  }, [subIndex, index, isDeleting, phrases]);

  return (
    <p className="text-lg font-medium text-cyan-300">
      <span className="text-cyan-200">{text}</span>
      <span className="animate-pulse">|</span>
    </p>
  );
}
