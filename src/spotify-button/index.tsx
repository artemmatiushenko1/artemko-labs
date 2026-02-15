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
    <MotionConfig transition={{ duration: 0.15 }}>
      <button className="root" onClick={handleClick}>
        <AnimatePresence mode="wait" initial={false}>
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
          )}

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
              <MotionConfig transition={{ duration: 0.5, ease: 'easeOut' }}>
                <motion.span
                  className="confetti-wrapper"
                  initial={{ x: '-50%', y: '-50%' }}
                  animate={{ opacity: 0, x: '-50%', y: 'calc(-50% + 0.5px)' }}
                  transition={{ delay: 0.35 }}
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 10"
                    fill="none"
                    style={{ width: 1.5 }}
                    animate={{
                      x: -15,
                      y: -2,
                      rotate: -200,
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
                    animate={{
                      x: -12,
                      y: -6,
                      rotate: -200,
                      scale: [null, null, null, 0.5],
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
                    animate={{
                      x: -12,
                      y: -12,
                      rotate: -200,
                      scale: [null, null, null, 0.5],
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
                    animate={{
                      x: -6,
                      y: -12,
                      rotate: -90,
                      scale: [null, null, null, 0.5],
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
                    animate={{
                      x: -2,
                      y: -10,
                      rotate: -170,
                      scale: [null, null, null, 0.5],
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
                    animate={{
                      x: 2,
                      y: -14,
                      rotate: 170,
                      scale: [null, null, null, 0.5],
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
                    animate={{
                      x: 7,
                      y: -9,
                      rotate: 180,
                      scale: [null, null, null, 0.5],
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
                    animate={{
                      x: 8,
                      y: -14,
                      rotate: 200,
                      scale: [null, null, null, 0.5],
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
                    animate={{
                      x: 13,
                      y: -6,
                      rotate: 90,
                      scale: [null, null, null, 0.5],
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
                    animate={{
                      x: 10,
                      y: 0,
                      rotate: 180,
                      scale: [null, null, null, 0.5],
                    }}
                  >
                    <path
                      d="M-2.78576e-07 0.598376L9.42676 1.04186e-05L11.7877 9.14593L2.36094 9.7443L-2.78576e-07 0.598376Z"
                      fill="#00E787"
                    />
                  </motion.svg>
                </motion.span>
              </MotionConfig>
            </React.Fragment>
          )}
        </AnimatePresence>
      </button>
    </MotionConfig>
  );
}

export default AddToFavoritesButton;
