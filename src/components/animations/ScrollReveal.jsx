import { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Word = ({ word, progress, range, baseOpacity, enableBlur, blurStrength }) => {
  const opacity = useTransform(progress, range, [baseOpacity, 1]);
  const blur = useTransform(progress, range, [blurStrength, 0]);
  const filter = useTransform(blur, (v) =>
    enableBlur ? `blur(${Math.max(0, v).toFixed(2)}px)` : 'none'
  );

  return (
    <motion.span style={{ opacity, filter, display: 'inline' }}>
      {word}{' '}
    </motion.span>
  );
};

const ScrollReveal = ({
  children,
  baseOpacity = 0.15,
  enableBlur = true,
  blurStrength = 6,
  className = '',
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.15'],
  });

  const words = useMemo(
    () => (typeof children === 'string' ? children.split(' ') : []),
    [children]
  );

  return (
    <p ref={containerRef} className={className} style={{ display: 'inline' }}>
      {words.map((word, i) => (
        <Word
          key={i}
          word={word}
          progress={scrollYProgress}
          range={[i / words.length, Math.min((i + 1.5) / words.length, 1)]}
          baseOpacity={baseOpacity}
          enableBlur={enableBlur}
          blurStrength={blurStrength}
        />
      ))}
    </p>
  );
};

export default ScrollReveal;
