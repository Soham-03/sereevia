'use client';

import Footer from '@/components/footer-band';
import { motion, useReducedMotion, stagger, type Variants } from 'motion/react';

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

          <div className="home-welcome-grid home-welcome-grid-centered">
            <motion.div
              className="home-copy-col home-copy-col-centered"
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
              className="home-image-col home-image-col-centered"
              initial={reduceMotion ? false : 'hidden'}
              whileInView={reduceMotion ? undefined : 'visible'}
              viewport={{ once: true, amount: 0.3 }}
              variants={imageFromRight}
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
            >
              <img
                src="/images/home1.png"
                alt="Sereevia skin innovation"
                className="home-welcome-image-centered"
              />
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
              className="home-feature-card"
              variants={cardItem}
              whileHover={
                reduceMotion ? undefined : { y: -10, scale: 1.02, transition: { duration: 0.3 } }
              }
            >
              {/* <motion.div className="home-feature-icon" variants={iconSpin}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="home-feature-icon-svg"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="9.5" />
                  <circle cx="11" cy="11" r="6" />
                  <circle cx="11" cy="11" r="2.4" />
                  <path d="M11 11 L18.5 3.5" />
                  <path d="M18.5 3.5 L20.5 1.5 L21 5.5 L23 6 L21 8 L17 8.5" />
                </svg>
              </motion.div> */}
              <motion.div className="home-feature-icon home-feature-icon-mask home-feature-icon-vision" variants={iconSpin} />
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
              {/* <motion.div className="home-feature-icon" variants={iconSpin}>
                <svg viewBox="0 0 64 64" fill="none">
                  <path
                    d="M32 10L38 20L50 21L41 30L44 42L32 35L20 42L23 30L14 21L26 20L32 10Z"
                    strokeWidth="3.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div> */}
              <motion.div className="home-feature-icon home-feature-icon-mask home-feature-icon-mission" variants={iconSpin} />
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
              {/* <motion.div className="home-feature-icon" variants={iconSpin}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="home-feature-icon-svg"
                  aria-hidden="true"
                >
                  <path d="M22 7.99995H20M20 7.99995H19C17 6.00173 14 3.99974 12 5.99995M20 7.99995V15.9999M12 5.99995L8.99956 9.00158C8.9202 9.08097 8.88052 9.12066 8.84859 9.1558C8.15499 9.91889 8.15528 11.0842 8.84927 11.847C8.88121 11.8821 8.92098 11.9218 9.00031 12.0011C9.07967 12.0804 9.11936 12.1201 9.15449 12.152C9.91743 12.8453 11.0824 12.8452 11.8451 12.1516C11.8802 12.1197 11.9199 12.08 11.9992 12.0007L12.9996 11.0003M12 5.99995C10 3.99974 7 6.0018 5 8.00001H4M2 8.00001H4M4 8.00001V15.9999M20 15.9999V18.9999H22M20 15.9999H17.1716M15 12.9999L16.5 14.4999C16.5796 14.5796 16.6195 14.6194 16.6515 14.6547C17.3449 15.4175 17.3449 16.5824 16.6515 17.3452C16.6195 17.3805 16.5796 17.4203 16.5 17.4999C16.4204 17.5795 16.3805 17.6194 16.3453 17.6515C15.5824 18.3449 14.4176 18.3449 13.6547 17.6515C13.6195 17.6194 13.5796 17.5795 13.5 17.4999L13 16.9999C12.4548 17.5452 12.1821 17.8178 11.888 17.9636C11.3285 18.2408 10.6715 18.2408 10.112 17.9636C9.81788 17.8178 9.54525 17.5452 9 16.9999C8.31085 17.9188 6.89563 17.7912 6.38197 16.7639L6 15.9999H4M4 15.9999V18.9999H2" />
                </svg>
              </motion.div> */}
              <motion.div className="home-feature-icon home-feature-icon-mask home-feature-icon-promise" variants={iconSpin} />
              <h3 className="home-feature-title">OUR PROMISE</h3>
              <p className="home-feature-text">
                Sereevia Biomed is not just building products - it is building a new standard in
                dermatology - driven care, where Scie
                nce Delivers Results, Design Creates Desire,
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
        </div>
      </section>

      <section className="page-section home-focus-section">
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
              <img
                src="/images/home2.png"
                alt="Core focus areas"
                className="home-focus-image"
              />
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