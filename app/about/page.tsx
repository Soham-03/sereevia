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

export default function AboutPage() {
  return (
    <main>
      <section className="about-page-top-section">
        <div className="about-page-inner">
          <Reveal delay={0.05} y={24} hover>
            <img
              src="/images/about1.png"
              alt="Why Sereevia Biomed"
              className="about-top-image"
            />
          </Reveal>
        </div>
      </section>

      <section className="about-page-strip-section">
        <Reveal delay={0.08} y={20}>
          <img
            src="/images/about2.png"
            alt="Sereevia manufacturing visual"
            className="about-strip-image"
          />
        </Reveal>
      </section>

      <section className="about-editorial-section about-editorial-section-one">
        <div className="dots about-editorial-dots-right" />

        <div className="about-page-inner">
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
            >
              <img
                src="/images/about3.png"
                alt="Manufacturing and quality commitment"
                className="about-editorial-image"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="about-editorial-section about-editorial-section-two">
        <div className="dots about-editorial-dots-left-bottom" />

        <div className="about-page-inner">
          <div className="about-editorial-grid about-editorial-grid-right">
            <Reveal
              delay={0.08}
              className="about-editorial-image-wrap about-editorial-image-wrap-left"
              y={36}
              hover
            >
              <img
                src="/images/about4.png"
                alt="Innovation philosophy"
                className="about-editorial-image"
              />
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
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}