'use client';

import Footer from '@/components/footer-band';
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

export default function AboutPage() {
  const reduceMotion = useReducedMotion();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const slideLeft: Variants = {
    hidden: { opacity: 0, x: -70 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 70, damping: 16 },
    },
  };

  const slideRight: Variants = {
    hidden: { opacity: 0, x: 70 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 70, damping: 16 },
    },
  };

  const listContainer: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const listItem: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const titleReveal: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <main>
      <motion.section
        className="about-page-top-section"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="about-page-inner">
<<<<<<< HEAD
          <Reveal delay={0.05} y={24} hover>
            <img
              src="/images/about1.png"
              alt="Why Sereevia Biomed"
              className="about-top-image"
            />
          </Reveal>
=======
          <motion.img
            src="/images/about1.png"
            alt="Why Sereevia Biomed"
            className="about-top-image"
            initial={reduceMotion ? false : { opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={reduceMotion ? undefined : { scale: 1.02 }}
          />
>>>>>>> ccf6c79 (-products firebase connected)
        </div>
      </motion.section>

      <section className="about-page-strip-section">
<<<<<<< HEAD
        <Reveal delay={0.08} y={20}>
          <img
            src="/images/about2.png"
            alt="Sereevia manufacturing visual"
            className="about-strip-image"
          />
        </Reveal>
=======
        <motion.img
          src="/images/about2.png"
          alt="Sereevia manufacturing visual"
          className="about-strip-image"
          initial={reduceMotion ? false : { opacity: 0, y: 40 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
>>>>>>> ccf6c79 (-products firebase connected)
      </section>

      <section className="about-editorial-section about-editorial-section-one">
        <div className="dots about-editorial-dots-right" />

        <div className="about-page-inner">
<<<<<<< HEAD
          <Reveal delay={0.06}>
            <h2 className="about-editorial-title about-editorial-title-wide">
              MANUFACTURING &amp; QUALITY COMMITMENT
            </h2>
          </Reveal>

          <div className="about-editorial-grid about-editorial-grid-left">
            <Reveal delay={0.12} className="about-editorial-copy">
              <div>
                <p className="about-editorial-intro">
                  Sereevia is building capabilities toward high-quality, scalable
                  manufacturing, aligned with:
                </p>

                <ul className="about-editorial-list about-editorial-list-blue">
                  <li>Stringent quality systems and compliance standards</li>
                  <li>Dermatology-grade formulation processes</li>
                  <li>Consistency in efficacy, safety, and stability</li>
                </ul>

                <p className="about-editorial-body about-editorial-body-large">
                  The company&apos;s approach ensures global-quality products with local agility,
                  enabling rapid innovation and market responsiveness.
                </p>
              </div>
            </Reveal>

            <Reveal
              delay={0.18}
              className="about-editorial-image-wrap about-editorial-image-wrap-right"
              y={36}
              hover
=======
          <motion.h2
            className="about-editorial-title about-editorial-title-wide"
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.4 }}
            variants={titleReveal}
          >
            MANUFACTURING &amp; QUALITY COMMITMENT
          </motion.h2>

          <div className="about-editorial-grid about-editorial-grid-left">
            <motion.div
              className="about-editorial-copy"
              initial={reduceMotion ? false : 'hidden'}
              whileInView={reduceMotion ? undefined : 'visible'}
              viewport={{ once: true, amount: 0.25 }}
              variants={slideLeft}
            >
              <motion.p
                className="about-editorial-intro"
                initial={reduceMotion ? false : { opacity: 0 }}
                whileInView={reduceMotion ? undefined : { opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                Sereevia is building capabilities toward high-quality, scalable manufacturing,
                aligned with:
              </motion.p>

              <motion.ul
                className="about-editorial-list about-editorial-list-blue"
                initial={reduceMotion ? false : 'hidden'}
                whileInView={reduceMotion ? undefined : 'visible'}
                viewport={{ once: true, amount: 0.3 }}
                variants={listContainer}
              >
                <motion.li variants={listItem}>
                  Stringent quality systems and compliance standards
                </motion.li>
                <motion.li variants={listItem}>
                  Dermatology-grade formulation processes
                </motion.li>
                <motion.li variants={listItem}>
                  Consistency in efficacy, safety, and stability
                </motion.li>
              </motion.ul>

              <motion.p
                className="about-editorial-body about-editorial-body-large"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                The company&apos;s approach ensures global-quality products with local agility,
                enabling rapid innovation and market responsiveness.
              </motion.p>
            </motion.div>

            <motion.div
              className="about-editorial-image-wrap about-editorial-image-wrap-right"
              initial={reduceMotion ? false : 'hidden'}
              whileInView={reduceMotion ? undefined : 'visible'}
              viewport={{ once: true, amount: 0.25 }}
              variants={scaleIn}
              whileHover={
                reduceMotion
                  ? undefined
                  : { scale: 1.03, rotate: 0.4, transition: { duration: 0.3 } }
              }
>>>>>>> ccf6c79 (-products firebase connected)
            >
              <img
                src="/images/about3.png"
                alt="Manufacturing and quality commitment"
                className="about-editorial-image"
              />
<<<<<<< HEAD
            </Reveal>
=======
            </motion.div>
>>>>>>> ccf6c79 (-products firebase connected)
          </div>
        </div>
      </section>

      <section className="about-editorial-section about-editorial-section-two">
        <div className="dots about-editorial-dots-left-bottom" />

        <div className="about-page-inner">
          <div className="about-editorial-grid about-editorial-grid-right">
<<<<<<< HEAD
            <Reveal
              delay={0.08}
              className="about-editorial-image-wrap about-editorial-image-wrap-left"
              y={36}
              hover
=======
            <motion.div
              className="about-editorial-image-wrap about-editorial-image-wrap-left"
              initial={reduceMotion ? false : 'hidden'}
              whileInView={reduceMotion ? undefined : 'visible'}
              viewport={{ once: true, amount: 0.25 }}
              variants={scaleIn}
              whileHover={
                reduceMotion
                  ? undefined
                  : { scale: 1.03, rotate: -0.4, transition: { duration: 0.3 } }
              }
>>>>>>> ccf6c79 (-products firebase connected)
            >
              <img
                src="/images/about4.png"
                alt="Innovation philosophy"
                className="about-editorial-image"
              />
<<<<<<< HEAD
            </Reveal>

            <Reveal delay={0.14} className="about-editorial-copy">
              <div>
                <h2 className="about-editorial-title">INNOVATION PHILOSOPHY</h2>

                <p className="about-editorial-intro">
                  Sereevia follows a &quot;Science to Experience&quot; innovation model, where every
                  product is developed through:
                </p>

                <ul className="about-editorial-list about-editorial-list-dark">
                  <li>Clinical relevance first - aligned with dermatologist needs</li>
                  <li>Advanced ingredient systems - globally sourced, evidence-backed actives</li>
                  <li>Formulation intelligence - optimized bioavailability and delivery</li>
                  <li>Aesthetic excellence - premium textures, design, and sensorial appeal</li>
                </ul>

                <p className="about-editorial-body about-editorial-body-large">
                  This ensures that each offering is not just effective-but elevated,
                  differentiated, and memorable.
                </p>
              </div>
            </Reveal>
=======
            </motion.div>

            <motion.div
              className="about-editorial-copy"
              initial={reduceMotion ? false : 'hidden'}
              whileInView={reduceMotion ? undefined : 'visible'}
              viewport={{ once: true, amount: 0.25 }}
              variants={slideRight}
            >
              <motion.h2
                className="about-editorial-title"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                INNOVATION PHILOSOPHY
              </motion.h2>

              <motion.p
                className="about-editorial-intro"
                initial={reduceMotion ? false : { opacity: 0 }}
                whileInView={reduceMotion ? undefined : { opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                Sereevia follows a &quot;Science to Experience&quot; innovation model, where every
                product is developed through:
              </motion.p>

              <motion.ul
                className="about-editorial-list about-editorial-list-dark"
                initial={reduceMotion ? false : 'hidden'}
                whileInView={reduceMotion ? undefined : 'visible'}
                viewport={{ once: true, amount: 0.3 }}
                variants={listContainer}
              >
                <motion.li variants={listItem}>
                  Clinical relevance first - aligned with dermatologist needs
                </motion.li>
                <motion.li variants={listItem}>
                  Advanced ingredient systems - globally sourced, evidence-backed actives
                </motion.li>
                <motion.li variants={listItem}>
                  Formulation intelligence - optimized bioavailability and delivery
                </motion.li>
                <motion.li variants={listItem}>
                  Aesthetic excellence - premium textures, design, and sensorial appeal
                </motion.li>
              </motion.ul>

              <motion.p
                className="about-editorial-body about-editorial-body-large"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                This ensures that each offering is not just effective-but elevated,
                differentiated, and memorable.
              </motion.p>
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