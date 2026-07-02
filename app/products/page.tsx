'use client';
<<<<<<< HEAD

import Footer from '@/components/footer-band';
import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

=======

import Footer from '@/components/footer-band';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
import { getAllProducts, Product } from '@/lib/products';

>>>>>>> ccf6c79 (-products firebase connected)
const tabs = [
  'ALL BRANDS',
  'CLEANSING',
  'SKIN LIGHTENING',
  'TRICHOLOGY',
  'ANTI-AGING',
  'PREMIUM PORTFOLIO',
<<<<<<< HEAD
];

const products = [
  { name: 'GloONE Tab', label: 'PROVIDE PRODUCT IMAGE — GloONE Tab packaging' },
  { name: 'GloONE-C Tab', label: 'PROVIDE PRODUCT IMAGE — GloONE-C Tab packaging' },
  { name: 'GloONE inj Tab', label: 'PROVIDE PRODUCT IMAGE — GloONE inj Tab packaging' },
  { name: 'GloONE Tab', label: 'PROVIDE PRODUCT IMAGE — GloONE Tab packaging' },
  { name: 'GloONE-C Tab', label: 'PROVIDE PRODUCT IMAGE — GloONE-C Tab packaging' },
  { name: 'GloONE inj Tab', label: 'PROVIDE PRODUCT IMAGE — GloONE inj Tab packaging' },
=======
>>>>>>> ccf6c79 (-products firebase connected)
];

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  hover?: boolean;
};

<<<<<<< HEAD
function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  hover = false,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

=======
function Reveal({ children, delay = 0, y = 28, className, hover = false }: RevealProps) {
  const reduceMotion = useReducedMotion();
>>>>>>> ccf6c79 (-products firebase connected)
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
<<<<<<< HEAD
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
=======
      whileHover={hover && !reduceMotion ? { y: -6, scale: 1.01 } : undefined}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
>>>>>>> ccf6c79 (-products firebase connected)
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
<<<<<<< HEAD
              {tabs.map((t, i) => (
                <motion.button
                  key={t}
                  className={`filter-tab${i === 0 ? ' active' : ''}`}
=======
              {tabs.map((t) => (
                <motion.button
                  key={t}
                  className={`filter-tab${t === activeTab ? ' active' : ''}`}
                  onClick={() => setActiveTab(t)}
>>>>>>> ccf6c79 (-products firebase connected)
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                >
                  {t}
                </motion.button>
              ))}
            </div>
          </Reveal>

<<<<<<< HEAD
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
=======
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
>>>>>>> ccf6c79 (-products firebase connected)
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}