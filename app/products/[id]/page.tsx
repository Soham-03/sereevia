'use client';

import Footer from '@/components/footer-band';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { motion, useReducedMotion } from 'motion/react';
import { getProductById, Product } from '@/lib/products';

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState<string>('');
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!id) return;
    getProductById(id).then((data) => {
      setProduct(data);
      if (data?.image) setActiveImage(data.image);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <main>
        <section className="page-section">
          <div className="wrap">
            <p className="prod-loading">Loading product…</p>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  if (!product) {
    return (
      <main>
        <section className="page-section">
          <div className="wrap">
            <p className="prod-loading">Product not found.</p>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const thumbnails = [
    product.image,
    product.image2,
    product.image3,
    product.image4,
    product.image5,
  ].filter(Boolean) as string[];

  return (
    <main>
      <section className="page-section product-detail-section">
        <div className="wrap">
          <div className="product-detail-grid">
            <motion.div
              className="product-detail-media"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="product-detail-main-image">
                <img src={activeImage} alt={product.name} />
              </div>

              {thumbnails.length > 1 && (
                <div className="product-detail-thumbs">
                  {thumbnails.map((thumb, i) => (
                    <button
                      key={i}
                      className={`product-detail-thumb${thumb === activeImage ? ' active' : ''}`}
                      onClick={() => setActiveImage(thumb)}
                      aria-label={`View image ${i + 1}`}
                    >
                      <img src={thumb} alt={`${product.name} thumbnail ${i + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.div
              className="product-detail-copy"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="product-detail-title">{product.name}</h1>

              <p className="product-detail-desc">
                <strong>Description</strong> - {product.description}
              </p>

              {/* <p className="product-detail-meta">
                <strong>Ingredients</strong> - {product.ingredients}
              </p> */}

              <p className="product-detail-meta">
                <strong>Pack Size</strong> - {product.packSize}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        className="page-section product-usage-section"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="wrap">
          <div className="product-usage-image-wrap">
            <img
              src="/images/product-usage-glass.png"
              alt="How to use the product"
              className="product-usage-image"
            />
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}