'use client';

import Footer from '@/components/footer-band';
import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

const tabs = [
  'ALL BRANDS',
  'CLEANSING',
  'SKIN LIGHTENING',
  'TRICHOLOGY',
  'ANTI-AGING',
  'PREMIUM PORTFOLIO',
];

const products = [
  { name: 'GloONE Tab', label: 'PROVIDE PRODUCT IMAGE — GloONE Tab packaging' },
  { name: 'GloONE-C Tab', label: 'PROVIDE PRODUCT IMAGE — GloONE-C Tab packaging' },
  { name: 'GloONE inj Tab', label: 'PROVIDE PRODUCT IMAGE — GloONE inj Tab packaging' },
  { name: 'GloONE Tab', label: 'PROVIDE PRODUCT IMAGE — GloONE Tab packaging' },
  { name: 'GloONE-C Tab', label: 'PROVIDE PRODUCT IMAGE — GloONE-C Tab packaging' },
  { name: 'GloONE inj Tab', label: 'PROVIDE PRODUCT IMAGE — GloONE inj Tab packaging' },
];

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

export default function ProductsPage() {
  return (
    <main>
      <section className="page-section">
        <div className="wrap">
          <Reveal delay={0.05}>
            <h2 className="sec-heading">PRODUCT PORTFOLIO</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="sec-subline">
              Using the best-in-class ingredients and state-of-art manufacturing facilities, we
              have developed our innovative product portfolio to address the needs of the
              healthcare professionals and the patient&apos;s skin care needs.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="filter-tabs">
              {tabs.map((t, i) => (
                <motion.button
                  key={t}
                  className={`filter-tab${i === 0 ? ' active' : ''}`}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                >
                  {t}
                </motion.button>
              ))}
            </div>
          </Reveal>

          <div className="products-grid">
            {products.map((p, i) => (
              <Reveal key={`${p.name}-${i}`} delay={0.08 + i * 0.05} hover className="prod-card">
                <div className="prod-thumb">{p.label}</div>
                <div className="prod-label">
                  <span>{p.name}</span>
                  <div className="stars">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}