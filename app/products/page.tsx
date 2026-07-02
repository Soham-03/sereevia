'use client';

import Footer from '@/components/footer-band';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
import { getAllProducts, Product } from '@/lib/products';

const tabs = [
  'ALL BRANDS',
  'CLEANSING',
  'SKIN LIGHTENING',
  'TRICHOLOGY',
  'ANTI-AGING',
  'PREMIUM PORTFOLIO',
];

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  hover?: boolean;
};

function Reveal({ children, delay = 0, y = 28, className, hover = false }: RevealProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={hover && !reduceMotion ? { y: -6, scale: 1.01 } : undefined}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeTab, setActiveTab] = useState('ALL BRANDS');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  const filtered =
    activeTab === 'ALL BRANDS'
      ? products
      : products.filter(
          (p) => p.category?.toUpperCase() === activeTab
        );

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
              {tabs.map((t) => (
                <motion.button
                  key={t}
                  className={`filter-tab${t === activeTab ? ' active' : ''}`}
                  onClick={() => setActiveTab(t)}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                >
                  {t}
                </motion.button>
              ))}
            </div>
          </Reveal>

          {loading && <p className="prod-loading">Loading products…</p>}

          {!loading && filtered.length === 0 && (
            <p className="prod-loading">No products found in this category.</p>
          )}

          <div className="products-grid">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={0.08 + i * 0.05} hover>
                <Link href={`/products/${p.id}`} className="prod-card-link">
                  <div className="prod-card">
                    <div className="prod-thumb">
                      {p.image ? (
                        <img src={p.image} alt={p.name} className="prod-thumb-img" loading="lazy" />
                      ) : (
                        <span>NO IMAGE</span>
                      )}
                    </div>
                    <div className="prod-label">
                      <span>{p.name}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}