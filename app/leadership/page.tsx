'use client';

import Footer from '@/components/footer';
<<<<<<< HEAD
import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  hover?: boolean;
};

function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  hover = false,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={
        hover && !reduceMotion
          ? {
              y: -6,
              scale: 1.01,
              transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
            }
          : undefined
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
=======
import { motion, useReducedMotion, type Variants } from 'motion/react';
>>>>>>> ccf6c79 (-products firebase connected)

export default function LeadershipPage() {
  const reduceMotion = useReducedMotion();

  const heroReveal: Variants = {
    hidden: { opacity: 0, scale: 1.06 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const titleBlur: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const quoteReveal: Variants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const rowContainer: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const imageFromLeft: Variants = {
    hidden: { opacity: 0, x: -80, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 65, damping: 15 },
    },
  };

  const imageFromRight: Variants = {
    hidden: { opacity: 0, x: 80, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 65, damping: 15 },
    },
  };

  const copyFromRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const copyFromLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const nameLine: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const bioLine: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <main>
<<<<<<< HEAD
      <section className="leadership-chess-section">
        <Reveal delay={0.04} y={20}>
          <img
            src="/images/leadership-chess.png"
            alt="Leadership chess visual"
            className="leadership-chess-image"
          />
        </Reveal>
      </section>

      <section className="page-section leadership-team-section">
        <div className="dots leadership-dots-right" />

        <div className="leadership-inner">
          <Reveal delay={0.06}>
            <h2 className="leadership-main-title">LEADERSHIP TEAM</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="leadership-quote">
              “As we embark on this new journey, our leadership team is focused on growing with our
              consumers, maximizing value for every stakeholder, and unlocking powerful
              opportunities for our people.”
            </p>
          </Reveal>

          <div className="leadership-person-list">
            <div className="leadership-person-row">
              <Reveal delay={0.12} className="leadership-person-image-wrap" hover y={30}>
=======
      <motion.section
        className="leadership-chess-section"
        initial={reduceMotion ? false : 'hidden'}
        animate={reduceMotion ? undefined : 'visible'}
        variants={heroReveal}
      >
        <img
          src="/images/leadership-chess.png"
          alt="Leadership chess visual"
          className="leadership-chess-image"
        />
      </motion.section>

      <section className="page-section leadership-team-section">
        <motion.div
          className="dots leadership-dots-right"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={reduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        <div className="leadership-inner">
          <motion.h2
            className="leadership-main-title"
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.4 }}
            variants={titleBlur}
          >
            LEADERSHIP TEAM
          </motion.h2>

          <motion.p
            className="leadership-quote"
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.4 }}
            variants={quoteReveal}
          >
            “As we embark on this new journey, our leadership team is focused on growing with our
            consumers, maximizing value for every stakeholder, and unlocking powerful
            opportunities for our people.”
          </motion.p>

          <div className="leadership-person-list">
            <motion.div
              className="leadership-person-row"
              initial={reduceMotion ? false : 'hidden'}
              whileInView={reduceMotion ? undefined : 'visible'}
              viewport={{ once: true, amount: 0.2 }}
              variants={rowContainer}
            >
              <motion.div
                className="leadership-person-image-wrap"
                variants={imageFromLeft}
                whileHover={
                  reduceMotion
                    ? undefined
                    : { scale: 1.03, transition: { duration: 0.3 } }
                }
              >
>>>>>>> ccf6c79 (-products firebase connected)
                <img
                  src="/images/leader1.png"
                  alt="Sheetal Bhavik Shah"
                  className="leadership-person-image leadership-person-image-left"
                />
<<<<<<< HEAD
              </Reveal>

              <Reveal delay={0.18} className="leadership-person-copy">
                <div>
                  <h3 className="leadership-person-name">Sheetal Bhavik Shah</h3>
                  <div className="leadership-person-role">Founder &amp; Director</div>

                  <p className="leadership-person-bio">
                    Sheetal Shah is the Founder and Director of Sereevia Biomed Pvt. Ltd., a
                    company focused on Dermatology and Cosmetology solutions. With a strong passion
                    for skincare innovation and wellness, she is dedicated to developing advanced
                    healthcare and aesthetic products that support healthy and radiant skin. Under
                    her leadership, the company aims to deliver high-quality, science-driven
                    formulations that meet the evolving needs of the dermatology and cosmetology
                    industry. Her vision is centered on innovation, quality, and customer trust,
                    helping Sereevia Biomed build a strong presence in the healthcare and beauty
                    sector.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="leadership-person-row leadership-person-row-reverse">
              <Reveal delay={0.14} className="leadership-person-copy">
                <div>
                  <h3 className="leadership-person-name">Kapil Tejraj Jain</h3>
                  <div className="leadership-person-role">Founder &amp; Director</div>

                  <p className="leadership-person-bio">
                    Kapil Tejraj Jain&apos;s leadership at Sereevia Biomed involves overseeing
                    business operations, compliance, and research collaborations across
                    biotechnology and pharmaceutical sectors. His work supports the company&apos;s
                    goal of advancing affordable and effective medical solutions through both
                    in-house R&amp;D and external partnerships. With professional experience
                    spanning scientific project management and corporate governance, Jain helps
                    position Sereevia Biomed as an emerging player in India&apos;s biosciences
                    industry.
                  </p>
                </div>
              </Reveal>

              <Reveal
                delay={0.2}
                className="leadership-person-image-wrap leadership-person-image-wrap-right"
                hover
                y={30}
=======
              </motion.div>

              <motion.div className="leadership-person-copy" variants={copyFromRight}>
                <motion.h3 className="leadership-person-name" variants={nameLine}>
                  Sheetal Bhavik Shah
                </motion.h3>

                <motion.div className="leadership-person-role" variants={nameLine}>
                  Founder &amp; Director
                </motion.div>

                <motion.p className="leadership-person-bio" variants={bioLine}>
                  Sheetal Shah is the Founder and Director of Sereevia Biomed Pvt. Ltd., a company
                  focused on Dermatology and Cosmetology solutions. With a strong passion for
                  skincare innovation and wellness, she is dedicated to developing advanced
                  healthcare and aesthetic products that support healthy and radiant skin. Under
                  her leadership, the company aims to deliver high-quality, science-driven
                  formulations that meet the evolving needs of the dermatology and cosmetology
                  industry. Her vision is centered on innovation, quality, and customer trust,
                  helping Sereevia Biomed build a strong presence in the healthcare and beauty
                  sector.
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div
              className="leadership-person-row leadership-person-row-reverse"
              initial={reduceMotion ? false : 'hidden'}
              whileInView={reduceMotion ? undefined : 'visible'}
              viewport={{ once: true, amount: 0.2 }}
              variants={rowContainer}
            >
              <motion.div className="leadership-person-copy" variants={copyFromLeft}>
                <motion.h3 className="leadership-person-name" variants={nameLine}>
                  Kapil Tejraj Jain
                </motion.h3>

                <motion.div className="leadership-person-role" variants={nameLine}>
                  Founder &amp; Director
                </motion.div>

                <motion.p className="leadership-person-bio" variants={bioLine}>
                  Kapil Tejraj Jain&apos;s leadership at Sereevia Biomed involves overseeing
                  business operations, compliance, and research collaborations across
                  biotechnology and pharmaceutical sectors. His work supports the company&apos;s
                  goal of advancing affordable and effective medical solutions through both
                  in-house R&amp;D and external partnerships. With professional experience
                  spanning scientific project management and corporate governance, Jain helps
                  position Sereevia Biomed as an emerging player in India&apos;s biosciences
                  industry.
                </motion.p>
              </motion.div>

              <motion.div
                className="leadership-person-image-wrap leadership-person-image-wrap-right"
                variants={imageFromRight}
                whileHover={
                  reduceMotion
                    ? undefined
                    : { scale: 1.03, transition: { duration: 0.3 } }
                }
>>>>>>> ccf6c79 (-products firebase connected)
              >
                <img
                  src="/images/leader2.png"
                  alt="Kapil Tejraj Jain"
                  className="leadership-person-image leadership-person-image-right"
                />
<<<<<<< HEAD
              </Reveal>
            </div>
=======
              </motion.div>
            </motion.div>
>>>>>>> ccf6c79 (-products firebase connected)
          </div>
        </div>
      </section>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={reduceMotion ? undefined : { opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <Footer />
      </motion.div>
    </main>
  );
}