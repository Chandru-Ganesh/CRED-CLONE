import { motion } from 'framer-motion';

const ShinyText = ({
  text = '',
  speed = 2,
  color = '#b5b5b5',
  shineColor = '#ffffff',
  spread = 120,
  direction = 'left',
  disabled = false,
  pauseOnHover = false,
  className = '',
}) => {
  if (disabled) {
    return (
      <span className={className} style={{ color }}>
        {text}
      </span>
    );
  }

  const bgDirection = direction === 'left' ? '90deg' : '270deg';
  const animFrom = direction === 'left' ? '200% center' : '-200% center';
  const animTo = direction === 'left' ? '-200% center' : '200% center';

  return (
    <motion.span
      className={className}
      style={{
        display: 'inline-block',
        background: `linear-gradient(${bgDirection}, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
        backgroundSize: `${spread}% 100%`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
      animate={{ backgroundPosition: [animFrom, animTo] }}
      transition={{
        duration: speed * 3,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      }}
      whileHover={pauseOnHover ? { animationPlayState: 'paused' } : undefined}
    >
      {text}
    </motion.span>
  );
};

export default ShinyText;
