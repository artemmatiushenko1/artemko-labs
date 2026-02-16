import { motion } from 'motion/react';

function DefaultIcon() {
  return (
    <motion.svg
      key="default"
      xmlns="http://www.w3.org/2000/svg"
      width="16px"
      viewBox="0 0 24 24"
    >
      <defs>
        <mask id="circle-mask">
          <motion.circle cx="12" cy="12" r="11.5" fill="white" stroke="white" />
          <motion.circle
            initial={{ r: 0 }}
            animate={{ r: 9.5 }}
            exit={{ r: 0.2 }}
            cx="12"
            cy="12"
            r="9.5"
            fill="black"
            stroke="black"
          />
        </mask>
      </defs>
      <motion.circle
        cx="12"
        cy="12"
        r="11.5"
        initial={{
          fill: '#21D25D',
          stroke: '#21D25D',
        }}
        animate={{
          fill: 'var(--default-color)',
          stroke: 'var(--default-color)',
        }}
        exit={{ fill: '#21D25D', stroke: '#21D25D' }}
        mask="url(#circle-mask)"
      />
      <motion.g
        initial={{ scale: 0, opacity: 0.3 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0.3 }}
        stroke-width="2"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M8 12h8" />
        <path d="M12 8v8" />
      </motion.g>
    </motion.svg>
  );
}

export default DefaultIcon;
