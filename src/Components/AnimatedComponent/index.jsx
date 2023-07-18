import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const fadeOut = {
  hidden: { opacity: 1 },
  show: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const AnimationProvider = ({ children }) => {
  return (
    <motion.div variants={fadeIn} initial='hidden' animate='show' exit='hidden'>
      {children}
    </motion.div>
  );
};

AnimationProvider.propTypes = {
  children: PropTypes.element,
};

export default AnimationProvider;
