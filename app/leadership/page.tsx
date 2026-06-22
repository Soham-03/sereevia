'use client';

import Footer from '@/components/footer';
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

export default function LeadershipPage() {
  return (
    <main>
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
                <img
                  src="/images/leader1.png"
                  alt="Sheetal Bhavik Shah"
                  className="leadership-person-image leadership-person-image-left"
                />
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
              >
                <img
                  src="/images/leader2.png"
                  alt="Kapil Tejraj Jain"
                  className="leadership-person-image leadership-person-image-right"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}