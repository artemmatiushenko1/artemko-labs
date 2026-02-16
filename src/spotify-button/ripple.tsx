import { motion } from 'motion/react';

function Ripple() {
  return (
    <motion.span
      className="ripple"
      transition={{ duration: 0.5, delay: 0.1 }}
      animate={{
        x: ['-50%', null, null, null],
        y: ['-50%', null, null, null],
        scale: ['100%', '120%', '140%', '160%'],
        opacity: [1, 1, 1, 1, 0],
        borderWidth: [2, 2, 1, 0.5, 0],
      }}
    >
      &nbsp;
    </motion.span>
  );
}

export default Ripple;
