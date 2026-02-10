import { AnimatePresence, motion, MotionConfig } from 'motion/react';
import './styles.css';
import React, { useState } from 'react';

type State = 'liked' | 'default';

function AddToFavoritesButton() {
  const [state, setState] = useState<State>('default');

  const handleClick = async () => {
    setState((prevState) => (prevState === 'default' ? 'liked' : 'default'));
  };

  return (
    <MotionConfig transition={{ duration: 0.1 }}>
      <motion.button className="root" onClick={handleClick}>
        <AnimatePresence mode="wait">
          {/* Add icon */}
          {state === 'default' && (
            <motion.svg
              key="default"
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              viewBox="0 0 24 24"
            >
              <defs>
                <mask id="circle-mask">
                  <motion.circle
                    cx="12"
                    cy="12"
                    r="11.5"
                    fill="white"
                    stroke="white"
                  />
                  <motion.circle
                    exit={{ r: 2 }}
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
                  fill: 'var(--default-color)',
                  stroke: 'var(--default-color)',
                }}
                exit={{ fill: '#21D25D', stroke: '#21D25D' }}
                mask="url(#circle-mask)"
              />
              <motion.g
                initial={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.2, opacity: 0.3 }}
                stroke-width="2"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </motion.g>
            </motion.svg>
          )}

          {/* Check icon */}
          {state === 'liked' && (
            <React.Fragment key="liked">
              <motion.svg
                key="liked"
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                viewBox="0 0 24 24"
                style={{ zIndex: 2 }}
              >
                <defs>
                  <mask id="circle-mask">
                    <motion.circle
                      cx="12"
                      cy="12"
                      r="11.5"
                      fill="white"
                      stroke="white"
                    />
                    <motion.circle
                      cx="12"
                      cy="12"
                      r="0"
                      fill="black"
                      stroke="black"
                    />
                  </mask>
                </defs>
                <motion.circle
                  cx="12"
                  cy="12"
                  r="11.5"
                  fill="#21D25D"
                  stroke="#21D25D"
                  mask="url(#circle-mask)"
                />
                <motion.path
                  d="M20 6 9 17l-5-5"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#000"
                  transition={{ type: 'spring' }}
                  initial={{ scale: 0.2 }}
                  animate={{ scale: 0.8 }}
                />
              </motion.svg>
              <motion.span
                className="ripple"
                transition={{ duration: 0.5 }}
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
            </React.Fragment>
          )}
        </AnimatePresence>
      </motion.button>
    </MotionConfig>
  );
}

export default AddToFavoritesButton;
