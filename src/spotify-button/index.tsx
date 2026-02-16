import { AnimatePresence, motion, MotionConfig } from 'motion/react';
import './styles.css';
import React, { useState } from 'react';
import DefaultIcon from './default-icon';
import Confetti from './confetti';

type State = 'liked' | 'default';

function AddToFavoritesButton() {
  const [state, setState] = useState<State>('default');

  const handleClick = async () => {
    setState((prevState) => (prevState === 'default' ? 'liked' : 'default'));
  };

  return (
    <MotionConfig transition={{ duration: 0.15 }}>
      <button className="root" onClick={handleClick}>
        <AnimatePresence mode="wait" initial={false}>
          {state === 'default' && <DefaultIcon key="default" />}

          {state === 'liked' && (
            <React.Fragment key="liked">
              <motion.svg
                key="liked"
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                viewBox="0 0 24 24"
                style={{ zIndex: 2, position: 'relative' }}
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
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{
                    scale: 0.8,
                    opacity: 1,
                    transition: {
                      type: 'spring',
                      duration: 0.7,
                      bounce: 0.4,
                    },
                  }}
                  exit={{
                    scale: 0,
                    opacity: 0,
                    transition: {
                      type: 'tween',
                      ease: 'linear',
                      duration: 0.1,
                    },
                  }}
                />
              </motion.svg>
              {/* TODO: make ripple transition look better */}
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
              <Confetti />
            </React.Fragment>
          )}
        </AnimatePresence>
      </button>
    </MotionConfig>
  );
}

export default AddToFavoritesButton;
