import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setPlayMarquee(true);
  }, []);
  return (
    <div className="banner">
      <BannerRowTop title={"brand"} />
      <BannerRowCenter title={"experience"} playMarquee={playMarquee} />
      <BannerRowBottom title={"studio"} />
    </div>
  );
};

// Variants
const container = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemMain = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const itemSide = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
      // delay: 0.3,
    },
  },
};

const AnimatedLetters = ({ title }) => (
  <motion.span
    variants={container}
    initial="hidden"
    animate="show"
    exit="exit"
    className="row-title"
  >
    {[...title].map((letter) => (
      <motion.span variants={itemMain} className="row-letter">
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div className={"banner-row"}>
      <div className="row-col">
        <AnimatedLetters title={title} />
      </div>
      <div className="row-col">
        <motion.span
          initial={{ opacity: 0, x: 150 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 1.6,
            },
          }}
          className="row-message"
        >
          We are specialised in setting up the foundation of your brand and
          setting you up for success.
        </motion.span>
      </div>
    </div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div
      // initial={{ scale: 1, rotate: 150 }}
      // animate={{ scale: 1, rotate: 0 }}
      className={"banner-row center"}
    >
      <motion.div
        className="scroll"
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
          transition: {
            duration: 0.2,
            staggerChildren: 1,
          },
        }}
      >
        <motion.span
          variants={itemSide}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          scroll
        </motion.span>
        <motion.span
          variants={itemSide}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          down
        </motion.span>
      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  );
};

const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
      <div className="marquee__inner">
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
      </div>
    </div>
  );
};

export default Banner;
