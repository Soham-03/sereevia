'use client';

import Footer from '@/components/footer-band';
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

export default function CollaborationsPage() {
  return (
    <main>
      <section className="collab-page-section">
        <div className="dots collab-dots-left-top" />
        <div className="dots collab-dots-right-mid" />
        <div className="dots collab-dots-left-bottom" />

        <div className="collab-inner">
          <Reveal delay={0.05}>
            <h2 className="collab-main-title">GLOBAL SCIENTIFIC COLLABORATION</h2>
          </Reveal>

          <div className="collab-brand-row">
            <Reveal
              delay={0.1}
              hover
              className="collab-logo-box collab-logo-box-large collab-logo-box-equal"
            >
              <div className="collab-logo-inner-bg">
                <img
                  src="/images/sereevia.png"
                  alt="Sereevia Biomed logo"
                  className="collab-logo-image"
                />
              </div>
            </Reveal>

            <Reveal delay={0.16} className="collab-handshake-wrap" y={20}>
              <img
                src="/images/image.png"
                alt="Scientific collaboration handshake"
                className="collab-handshake-image"
              />
            </Reveal>

            <Reveal
              delay={0.22}
              hover
              className="collab-logo-box collab-logo-box-large collab-logo-box-equal"
            >
              <div className="collab-logo-inner-bg">
                <img
                  src="/images/bcf.png"
                  alt="BCF Life Sciences logo"
                  className="collab-logo-image"
                />
              </div>
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

                <div className="collab-card-body">
                  <p className="collab-card-text">
                    Access to pharmaceutical-grade amino acids and bioactive actives
                  </p>

                  <p className="collab-card-text">
                    Integration of European research and quality standards into product development
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18} hover className="collab-card-reveal">
              <div className="collab-card-new">
                <h3 className="collab-card-title">Development</h3>

                <div className="collab-card-body">
                  <p className="collab-card-text">
                    Development of next-generation dermatology and nutraceutical formulations
                  </p>

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
            <img
              src="/images/collab1.png"
              alt="Global footprint map"
              className="collab-map-image"
            />
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}