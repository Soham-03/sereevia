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

export default function CollaborationsPage() {
  const reduceMotion = useReducedMotion();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const logoPop: Variants = {
    hidden: { opacity: 0, scale: 0.7, rotate: -6 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: 'spring', stiffness: 120, damping: 14 },
    },
  };

  const handshakePop: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 90, damping: 12, delay: 0.25 },
    },
  };

  const brandRowContainer: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.18, delayChildren: 0.1 },
    },
  };

  const cardsContainer: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const cardItem: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const textLine: Variants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <main>
      <section className="collab-page-section">
        <motion.div
          className="dots collab-dots-left-top"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={reduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="dots collab-dots-right-mid"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={reduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.div
          className="dots collab-dots-left-bottom"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={reduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        />

        <div className="collab-inner">
<<<<<<< HEAD
          <Reveal delay={0.05}>
            <h2 className="collab-main-title">GLOBAL SCIENTIFIC COLLABORATION</h2>
          </Reveal>

          <div className="collab-brand-row">
            <Reveal
              delay={0.1}
              hover
              className="collab-logo-box collab-logo-box-large collab-logo-box-equal"
=======
          <motion.h2
            className="collab-main-title"
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.4 }}
            variants={textLine}
          >
            GLOBAL SCIENTIFIC COLLABORATION
          </motion.h2>

          <motion.div
            className="collab-brand-row"
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.25 }}
            variants={brandRowContainer}
          >
            <motion.div
              className="collab-logo-box collab-logo-box-large"
              variants={logoPop}
              whileHover={
                reduceMotion ? undefined : { scale: 1.05, transition: { duration: 0.25 } }
              }
>>>>>>> ccf6c79 (-products firebase connected)
            >
              <div className="collab-logo-inner-bg">
                <img
                  src="/images/sereevia.png"
                  alt="Sereevia Biomed logo"
                  className="collab-logo-image"
                />
              </div>
<<<<<<< HEAD
            </Reveal>

            <Reveal delay={0.16} className="collab-handshake-wrap" y={20}>
              <img
=======
            </motion.div>

            <motion.div className="collab-handshake-wrap" variants={handshakePop}>
              <motion.img
>>>>>>> ccf6c79 (-products firebase connected)
                src="/images/image.png"
                alt="Scientific collaboration handshake"
                className="collab-handshake-image"
                whileHover={reduceMotion ? undefined : { scale: 1.06, rotate: 1 }}
                transition={{ duration: 0.3 }}
              />
<<<<<<< HEAD
            </Reveal>

            <Reveal
              delay={0.22}
              hover
              className="collab-logo-box collab-logo-box-large collab-logo-box-equal"
=======
            </motion.div>

            <motion.div
              className="collab-logo-box collab-logo-box-large"
              variants={logoPop}
              whileHover={
                reduceMotion ? undefined : { scale: 1.05, transition: { duration: 0.25 } }
              }
>>>>>>> ccf6c79 (-products firebase connected)
            >
              <div className="collab-logo-inner-bg">
                <img
                  src="/images/bcf.png"
                  alt="BCF Life Sciences logo"
                  className="collab-logo-image"
                />
              </div>
<<<<<<< HEAD
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <p className="collab-lead-text">
              Sereevia Biomed has established a strategic collaboration with BCF Lifesciences
              (France), a globally recognized leader in the development of high-purity amino acids
              and bioactive ingredients derived from advanced biotechnological processes.
            </p>
          </Reveal>

          <div className="collab-cards-grid-new">
            <Reveal delay={0.1} hover className="collab-card-reveal">
              <div className="collab-card-new">
                <h3 className="collab-card-title">
                  This collaboration strengthens Sereevia&apos;s capabilities in
                </h3>
=======
            </motion.div>
          </motion.div>

          <motion.p
            className="collab-lead-text"
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            Sereevia Biomed has established a strategic collaboration with BCF Lifesciences
            (France), a globally recognized leader in the development of high-purity amino acids
            and bioactive ingredients derived from advanced biotechnological processes.
          </motion.p>

          <motion.div
            className="collab-cards-grid-new"
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.2 }}
            variants={cardsContainer}
          >
            <motion.div
              className="collab-card-new"
              variants={cardItem}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -8, scale: 1.02, transition: { duration: 0.3 } }
              }
            >
              <h3 className="collab-card-title">
                This collaboration strengthens Sereevia&apos;s capabilities in
              </h3>
>>>>>>> ccf6c79 (-products firebase connected)

                <div className="collab-card-body">
                  <p className="collab-card-text">
                    Access to pharmaceutical-grade amino acids and bioactive actives
                  </p>

<<<<<<< HEAD
                  <p className="collab-card-text">
                    Integration of European research and quality standards into product development
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18} hover className="collab-card-reveal">
              <div className="collab-card-new">
                <h3 className="collab-card-title">Development</h3>
=======
              <p className="collab-card-text">
                Integration of European research and quality standards into product development
              </p>
            </motion.div>

            <motion.div
              className="collab-card-new"
              variants={cardItem}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -8, scale: 1.02, transition: { duration: 0.3 } }
              }
            >
              <h3 className="collab-card-title">Development</h3>
>>>>>>> ccf6c79 (-products firebase connected)

                <div className="collab-card-body">
                  <p className="collab-card-text">
                    Development of next-generation dermatology and nutraceutical formulations
                  </p>

<<<<<<< HEAD
                  <p className="collab-card-text">
                    Enhancing clinical credibility and global innovation alignment
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.14}>
            <p className="collab-support-text">
              Through this partnership, Sereevia is building a global innovation network,
              combining international scientific expertise with localized dermatological insights
              — enabling the creation of differentiated, high-performance solution for both Indian
              and global markets.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="collab-sub-title">OUR GLOBAL FOOT PRINT</h2>
          </Reveal>

          <Reveal delay={0.16} hover className="collab-map-wrap" y={36}>
=======
              <p className="collab-card-text">
                Enhancing clinical credibility and global innovation alignment
              </p>
            </motion.div>
          </motion.div>

          <motion.p
            className="collab-support-text"
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            Through this partnership, Sereevia is building a global innovation network, combining
            international scientific expertise with localized dermatological insights — enabling
            the creation of differentiated, high-performance solution for both Indian and global
            markets.
          </motion.p>

          {/* <motion.h2
            className="collab-sub-title"
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.4 }}
            variants={textLine}
          >
            OUR GLOBAL FOOT PRINT
          </motion.h2> */}

          <motion.div
            className="collab-map-wrap"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={reduceMotion ? undefined : { scale: 1.02 }}
          >
>>>>>>> ccf6c79 (-products firebase connected)
            <img
              src="/images/collab1.png"
              alt="Global footprint map"
              className="collab-map-image"
            />
<<<<<<< HEAD
          </Reveal>
=======
          </motion.div>
>>>>>>> ccf6c79 (-products firebase connected)
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