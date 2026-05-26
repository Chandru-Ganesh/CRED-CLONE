import { useRef, useEffect, useState } from 'react';

const ScrambledText = ({
  children,
  scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
  duration = 1.2,
  speed = 0.5,
  className = '',
  triggerOnHover = false,
}) => {
  const originalText = typeof children === 'string' ? children : '';
  const [displayText, setDisplayText] = useState(originalText);
  const rafRef = useRef(null);

  const runScramble = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const chars = scrambleChars;
    const totalFrames = Math.floor(duration * 60);
    let frame = 0;
    const animate = () => {
      frame++;
      const progress = frame / totalFrames;
      const scrambled = originalText.split('').map((char, i) => {
        if (char === ' ' || char === '\n') return char;
        const threshold = (i / originalText.replace(/\s/g, '').length) * (1 - speed * 0.3);
        if (progress > threshold) return char;
        return chars[Math.floor(Math.random() * chars.length)];
      }).join('');
      setDisplayText(scrambled);
      if (frame < totalFrames) { rafRef.current = requestAnimationFrame(animate); }
      else { setDisplayText(originalText); }
    };
    rafRef.current = requestAnimationFrame(animate);
  };

  // auto-run on mount if not hover-only
  useEffect(() => {
    if (!triggerOnHover) {
      const t = setTimeout(runScramble, 300);
      return () => { clearTimeout(t); if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    }
  }, []);

  return (
    <span
      className={className}
      aria-label={originalText}
      onMouseEnter={triggerOnHover ? runScramble : undefined}
      style={triggerOnHover ? { cursor: 'default' } : undefined}
    >
      {displayText}
    </span>
  );
};

export default ScrambledText;
