export const transitions = {
  instant: { duration: 0 },
  micro: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
  component: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  section: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  cinematic: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.component
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.component
  }
};

export const maskReveal = {
  hidden: { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
  visible: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: transitions.section
  }
};

export const staggerContainer = (staggerDelay = 0.08) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay
    }
  }
});
