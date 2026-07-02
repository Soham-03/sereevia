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
import { motion, useReducedMotion, stagger, type Variants } from 'motion/react';
>>>>>>> ccf6c79 (-products firebase connected)

export default function HomePage() {
  const reduceMotion = useReducedMotion();

  const titleReveal: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const copyFromLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const imageFromRight: Variants = {
    hidden: { opacity: 0, x: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 70, damping: 15 },
    },
  };

  const imageFromLeft: Variants = {
    hidden: { opacity: 0, x: -60, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 70, damping: 15 },
    },
  };

  const copyFromRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const cardsContainer: Variants = {
    hidden: {},
    visible: {
      transition: { delayChildren: stagger(0.15) },
    },
  };

  const cardItem: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const iconSpin: Variants = {
    hidden: { opacity: 0, rotate: -30, scale: 0.6 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12, delay: 0.15 },
    },
  };

  const focusTextContainer: Variants = {
    hidden: {},
    visible: {
      transition: { delayChildren: stagger(0.12) },
    },
  };

  const focusTextItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <main>
      <section className="page-section home-welcome-section">
<<<<<<< HEAD
        <div className="dots home-dots-right" />

        <div className="home-inner">
          <Reveal delay={0.05}>
            <h2 className="home-main-title">WELCOME TO SEREEVIA BIOMED PVT. LTD.</h2>
          </Reveal>

          <div className="home-welcome-grid">
            <Reveal delay={0.12} className="home-copy-col">
              <div>
                <p className="home-body-text">
                  Sereevia Biomed Pvt. Ltd. is a science-led dermatology and biomed innovation
                  company committed to redefining how skin health is understood, supported, and
                  experienced. Built at the intersection of dermatological science, advanced
                  formulation technologies, and aesthetic excellence, Sereevia is focused on
                  delivering clinically meaningful solutions across skincare, trichology, and
                  nutraceutical dermatology.
                </p>

                <p className="home-body-text home-body-text-second">
                  At its core, Sereevia operates with a singular philosophy: to bridge the gap
                  between clinical efficacy and premium consumer experience.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.18} className="home-image-col" y={36}>
=======
        <motion.div
          className="dots home-dots-right"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={reduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        <div className="home-inner">
          <motion.h2
            className="home-main-title"
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.4 }}
            variants={titleReveal}
          >
            WELCOME TO SEREEVIA BIOMED PVT. LTD.
          </motion.h2>

          <div className="home-welcome-grid">
            <motion.div
              className="home-copy-col"
              initial={reduceMotion ? false : 'hidden'}
              whileInView={reduceMotion ? undefined : 'visible'}
              viewport={{ once: true, amount: 0.3 }}
              variants={copyFromLeft}
            >
              <p className="home-body-text">
                Sereevia Biomed Pvt. Ltd. is a science-led dermatology and biomed innovation
                company committed to redefining how skin health is understood, supported, and
                experienced. Built at the intersection of dermatological science, advanced
                formulation technologies, and aesthetic excellence, Sereevia is focused on
                delivering clinically meaningful solutions across skincare, trichology, and
                nutraceutical dermatology.
              </p>

              <p className="home-body-text home-body-text-second">
                At its core, Sereevia operates with a singular philosophy: to bridge the gap
                between clinical efficacy and premium consumer experience.
              </p>
            </motion.div>

            <motion.div
              className="home-image-col"
              initial={reduceMotion ? false : 'hidden'}
              whileInView={reduceMotion ? undefined : 'visible'}
              viewport={{ once: true, amount: 0.3 }}
              variants={imageFromRight}
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
            >
>>>>>>> ccf6c79 (-products firebase connected)
              <img
                src="/images/home1.png"
                alt="Sereevia skin innovation"
                className="home-welcome-image"
              />
<<<<<<< HEAD
            </Reveal>
          </div>

          <div className="home-cards-grid">
            <Reveal delay={0.08} hover>
              <div className="home-feature-card home-feature-card-accent">
                <div className="home-feature-icon">
                  <svg viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="22" strokeWidth="2.2" />
                    <circle cx="32" cy="32" r="12" strokeWidth="2.2" />
                    <circle cx="32" cy="32" r="4.5" fill="#0b3d78" stroke="none" />
                    <path d="M35 29L50 14" strokeWidth="2.4" strokeLinecap="round" />
                    <path
                      d="M45 14H51V20"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <h3 className="home-feature-title">OUR VISION</h3>

                <p className="home-feature-text">
                  To emerge as a globally respected dermatology-driven innovation company, setting
                  new benchmarks in skin health, longevity, and regenerative care.
                </p>

                <span className="home-feature-link">VIEW MORE</span>
              </div>
            </Reveal>

            <Reveal delay={0.14} hover>
              <div className="home-feature-card">
                <div className="home-feature-icon">
                  <svg viewBox="0 0 64 64" fill="none">
                    <path
                      d="M32 10L38 20L50 21L41 30L44 42L32 35L20 42L23 30L14 21L26 20L32 10Z"
                      strokeWidth="2.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <h3 className="home-feature-title">OUR MISSION</h3>

                <p className="home-feature-text">
                  To develop and deliver science-backed, clinically relevant, and aesthetically
                  superior solutions that empower dermatologists and enhance patient outcomes.
                </p>

                <span className="home-feature-link">VIEW MORE</span>
              </div>
            </Reveal>

            <Reveal delay={0.2} hover>
              <div className="home-feature-card">
                <div className="home-feature-icon">
                  <svg viewBox="0 0 64 64" fill="none">
                    <path
                      d="M18 33L26 41L33 34L39 40L48 31"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 29C20 24 25 22 30 24C33 25 35 27 38 29C42 31 46 31 50 28"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                    <path d="M17 45H47" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                </div>

                <h3 className="home-feature-title">OUR PROMISE</h3>

                <p className="home-feature-text">
                  Sereevia Biomed is not just building products — it is building a new standard in
                  dermatology-driven care, where science delivers results, design creates desire,
                  and innovation drives distinction.
                </p>

                <span className="home-feature-link">VIEW MORE</span>
              </div>
            </Reveal>
          </div>
=======
            </motion.div>
          </div>

          <motion.div
            className="home-cards-grid"
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.2 }}
            variants={cardsContainer}
          >
            <motion.div
              className="home-feature-card home-feature-card-accent"
              variants={cardItem}
              whileHover={
                reduceMotion ? undefined : { y: -10, scale: 1.02, transition: { duration: 0.3 } }
              }
            >
              <motion.div className="home-feature-icon" variants={iconSpin}>
                <svg viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="22" strokeWidth="2.2" />
                  <circle cx="32" cy="32" r="12" strokeWidth="2.2" />
                  <circle cx="32" cy="32" r="4.5" fill="#0b3d78" stroke="none" />
                  <path d="M35 29L50 14" strokeWidth="2.4" strokeLinecap="round" />
                  <path
                    d="M45 14H51V20"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
              <h3 className="home-feature-title">OUR VISION</h3>
              <p className="home-feature-text">
                To emerge as a globally Respected dermatology-Driven innovation company, Setting
                new benchmarks in skin health, longevity, and regenerative care.
              </p>
              <motion.span
                className="home-feature-link"
                whileHover={reduceMotion ? undefined : { x: 4 }}
              >
                VIEW MORE
              </motion.span>
            </motion.div>

            <motion.div
              className="home-feature-card"
              variants={cardItem}
              whileHover={
                reduceMotion ? undefined : { y: -10, scale: 1.02, transition: { duration: 0.3 } }
              }
            >
              <motion.div className="home-feature-icon" variants={iconSpin}>
                <svg viewBox="0 0 64 64" fill="none">
                  <path
                    d="M32 10L38 20L50 21L41 30L44 42L32 35L20 42L23 30L14 21L26 20L32 10Z"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
              <h3 className="home-feature-title">OUR MISSION</h3>
              <p className="home-feature-text">
                To develop and deliver science-backed, clinically relevant, and aesthetically
                superior solutions that empower dermatologists, enhance patient outcomes,
              </p>
              <motion.span
                className="home-feature-link"
                whileHover={reduceMotion ? undefined : { x: 4 }}
              >
                VIEW MORE
              </motion.span>
            </motion.div>

            <motion.div
              className="home-feature-card"
              variants={cardItem}
              whileHover={
                reduceMotion ? undefined : { y: -10, scale: 1.02, transition: { duration: 0.3 } }
              }
            >
              <motion.div className="home-feature-icon" variants={iconSpin}>
                <svg viewBox="0 0 64 64" fill="none">
                  <path
                    d="M18 33L26 41L33 34L39 40L48 31"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 29C20 24 25 22 30 24C33 25 35 27 38 29C42 31 46 31 50 28"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <path d="M17 45H47" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </motion.div>
              <h3 className="home-feature-title">OUR PROMISE</h3>
              <p className="home-feature-text">
                Sereevia Biomed is not just building products - it is building a new standard in
                dermatology - driven care, where Science Delivers Results, Design Creates Desire,
                Innovation Drives.
              </p>
              <motion.span
                className="home-feature-link"
                whileHover={reduceMotion ? undefined : { x: 4 }}
              >
                VIEW MORE
              </motion.span>
            </motion.div>
          </motion.div>
>>>>>>> ccf6c79 (-products firebase connected)
        </div>
      </section>

      <section className="page-section home-focus-section">
<<<<<<< HEAD
        <div className="dots home-dots-left" />

        <div className="home-inner">
          <div className="home-focus-grid">
            <Reveal delay={0.08} className="home-focus-image-col" y={36}>
=======
        <motion.div
          className="dots home-dots-left"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={reduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        <div className="home-inner">
          <div className="home-focus-grid">
            <motion.div
              className="home-focus-image-col"
              initial={reduceMotion ? false : 'hidden'}
              whileInView={reduceMotion ? undefined : 'visible'}
              viewport={{ once: true, amount: 0.3 }}
              variants={imageFromLeft}
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
            >
>>>>>>> ccf6c79 (-products firebase connected)
              <img
                src="/images/home2.png"
                alt="Core focus areas"
                className="home-focus-image"
              />
<<<<<<< HEAD
            </Reveal>

            <Reveal delay={0.14} className="home-focus-copy-col">
              <div>
                <h3 className="home-focus-title">OUR CORE FOCUS AREAS</h3>

                <p className="home-focus-intro">
                  Sereevia Biomed is structured around integrated scientific platforms that drive
                  innovation:
                </p>

                <p className="home-focus-text">
                  <strong>Skin Barrier &amp; Amino Acid Cleansing Technology</strong>: Pioneering
                  gentle, physiology-respecting cleansing systems inspired by Japanese skin science,
                  designed to cleanse without disrupting the skin barrier.
                </p>

                <p className="home-focus-text">
                  <strong>Nutraceutical Dermatology</strong>: Targeted ingestible solutions
                  supporting skin, hair, and collagen health from within, enhancing clinical
                  outcomes.
                </p>

                <p className="home-focus-text">
                  <strong>Pigmentation &amp; Antioxidant Science</strong>: Advanced actives and
                  delivery systems designed to address uneven skin tone, oxidative stress, and
                  environmental damage.
                </p>

                <p className="home-focus-text">
                  <strong>Trichology &amp; Hair Regeneration Science</strong>: Multi-target
                  solutions addressing hair fall, scalp health, and regeneration pathways.
                </p>
              </div>
            </Reveal>
=======
            </motion.div>

            <motion.div
              className="home-focus-copy-col"
              initial={reduceMotion ? false : 'hidden'}
              whileInView={reduceMotion ? undefined : 'visible'}
              viewport={{ once: true, amount: 0.2 }}
              variants={focusTextContainer}
            >
              <motion.h3 className="home-focus-title" variants={focusTextItem}>
                OUR CORE FOCUS AREAS
              </motion.h3>

              <motion.p className="home-focus-intro" variants={focusTextItem}>
                Sereevia Biomed is structured around integrated scientific platforms that drive
                innovation:
              </motion.p>

              <motion.p className="home-focus-text" variants={focusTextItem}>
                <strong>Skin Barrier &amp; Amino Acid Cleansing Technology</strong> : Pioneering
                gentle, physiology-respecting cleansing systems inspired by Japanese skin
                science-designed to cleanse without disrupting the skin barrier.
              </motion.p>

              <motion.p className="home-focus-text" variants={focusTextItem}>
                <strong>Nutraceutical Dermatology</strong> : Targeted ingestible solutions
                supporting skin, hair, and collagen health from within, enhancing clinical
                outcomes.
              </motion.p>

              <motion.p className="home-focus-text" variants={focusTextItem}>
                <strong>Pigmentation &amp; Antioxidant Science</strong> : Advanced actives and
                delivery systems designed to address uneven skin tone, oxidative stress, and
                environmental damage.
              </motion.p>

              <motion.p className="home-focus-text" variants={focusTextItem}>
                <strong>Trichology &amp; Hair Regeneration Science</strong> : Multi-target
                solutions addressing hair fall, scalp health, and regeneration pathways.
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