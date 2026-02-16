import { MotionConfig, motion } from 'motion/react';

const CONFETTI_MOVEMENT_DURATION_SEC = 0.5;

function Confetti() {
  return (
    <motion.span
      className="confetti-wrapper"
      initial={{ x: '-50%', y: '-50%' }}
      animate={{ opacity: 0, x: '-50%', y: 'calc(-50% + 0.5px)' }}
      transition={{ delay: 0.35, ease: 'easeOut' }}
    >
      <MotionConfig
        transition={{
          duration: CONFETTI_MOVEMENT_DURATION_SEC,
          scale: { delay: CONFETTI_MOVEMENT_DURATION_SEC * 0.66 },
          ease: 'easeOut',
        }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 10"
          fill="none"
          style={{ width: 1.5 }}
          initial={{ scale: 1 }}
          animate={{
            x: -15,
            y: -2,
            rotate: -200,
            scale: 0.5,
          }}
        >
          <path
            d="M-2.78576e-07 0.598376L9.42676 1.04186e-05L11.7877 9.14593L2.36094 9.7443L-2.78576e-07 0.598376Z"
            fill="#00E787"
          />
        </motion.svg>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 10"
          fill="none"
          style={{ width: 3 }}
          initial={{ scale: 1 }}
          animate={{
            x: -12,
            y: -6,
            rotate: -200,
            scale: 0.5,
          }}
        >
          <path
            d="M-2.78576e-07 0.598376L9.42676 1.04186e-05L11.7877 9.14593L2.36094 9.7443L-2.78576e-07 0.598376Z"
            fill="#00E787"
          />
        </motion.svg>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 10"
          fill="none"
          style={{ width: 2 }}
          initial={{ scale: 1 }}
          animate={{
            x: -12,
            y: -12,
            rotate: -200,
            scale: 0.5,
          }}
        >
          <path
            d="M-2.78576e-07 0.598376L9.42676 1.04186e-05L11.7877 9.14593L2.36094 9.7443L-2.78576e-07 0.598376Z"
            fill="#EDFFF2"
          />
        </motion.svg>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 10"
          fill="none"
          style={{ width: 1.5 }}
          initial={{ scale: 1 }}
          animate={{
            x: -6,
            y: -12,
            rotate: -200,
            scale: 0.5,
          }}
        >
          <path
            d="M-2.78576e-07 0.598376L9.42676 1.04186e-05L11.7877 9.14593L2.36094 9.7443L-2.78576e-07 0.598376Z"
            fill="#00E787"
          />
        </motion.svg>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 10"
          fill="none"
          style={{ width: 1.5 }}
          initial={{ scale: 1 }}
          animate={{
            x: -2,
            y: -10,
            rotate: -170,
            scale: 0.5,
          }}
        >
          <path
            d="M-2.78576e-07 0.598376L9.42676 1.04186e-05L11.7877 9.14593L2.36094 9.7443L-2.78576e-07 0.598376Z"
            fill="#00E787"
          />
        </motion.svg>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 10"
          fill="none"
          style={{ width: 3 }}
          initial={{ scale: 1 }}
          animate={{
            x: 2,
            y: -14,
            rotate: 170,
            scale: 0.5,
          }}
        >
          <path
            d="M-2.78576e-07 0.598376L9.42676 1.04186e-05L11.7877 9.14593L2.36094 9.7443L-2.78576e-07 0.598376Z"
            fill="#EDFFF2"
          />
        </motion.svg>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 10"
          fill="none"
          style={{ width: 1.5 }}
          initial={{ scale: 1 }}
          animate={{
            x: 7,
            y: -9,
            rotate: 180,
            scale: 0.5,
          }}
        >
          <path
            d="M-2.78576e-07 0.598376L9.42676 1.04186e-05L11.7877 9.14593L2.36094 9.7443L-2.78576e-07 0.598376Z"
            fill="#00E787"
          />
        </motion.svg>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 10"
          fill="none"
          style={{ width: 1.5 }}
          initial={{ scale: 1 }}
          animate={{
            x: 8,
            y: -14,
            rotate: 200,
            scale: 0.5,
          }}
        >
          <path
            d="M-2.78576e-07 0.598376L9.42676 1.04186e-05L11.7877 9.14593L2.36094 9.7443L-2.78576e-07 0.598376Z"
            fill="#00E787"
          />
        </motion.svg>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 10"
          fill="none"
          style={{ width: 3 }}
          initial={{ scale: 1 }}
          animate={{
            x: 13,
            y: -6,
            rotate: 90,
            scale: 0.5,
          }}
        >
          <path
            d="M-2.78576e-07 0.598376L9.42676 1.04186e-05L11.7877 9.14593L2.36094 9.7443L-2.78576e-07 0.598376Z"
            fill="#EDFFF2"
          />
        </motion.svg>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 10"
          fill="none"
          style={{ width: 1.5 }}
          initial={{ scale: 1 }}
          animate={{
            x: 10,
            y: 0,
            rotate: 180,
            scale: 0.5,
          }}
        >
          <path
            d="M-2.78576e-07 0.598376L9.42676 1.04186e-05L11.7877 9.14593L2.36094 9.7443L-2.78576e-07 0.598376Z"
            fill="#00E787"
          />
        </motion.svg>
      </MotionConfig>
    </motion.span>
  );
}

export default Confetti;
