import { motion } from 'framer-motion';

const BlurText = ({
  text = '',
  delay = 150,
  animateBy = 'words',
  direction = 'top',
  className = '',
  onAnimationComplete,
}) => {
  const items = animateBy === 'words' ? text.split(' ') : text.split('');

  const variants = {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: direction === 'top' ? -30 : 30,
    },
    visible: (i) => ({
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        delay: i * (delay / 1000),
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <motion.span
      className={className}
      onAnimationComplete={onAnimationComplete}
      style={{ display: 'inline' }}
    >
      {items.map((item, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={variants}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {item}{animateBy === 'words' && i < items.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default BlurText;
