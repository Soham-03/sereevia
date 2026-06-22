'use client';

import { useEffect, useState } from 'react';

type HeroBannerProps = {
  title: string;
  align?: 'left' | 'right';
  bgStyle?: 'blue' | 'lightblue' | 'grey';
  imageLabel?: string;
};

export default function HeroBanner({
  title,
  align = 'left',
  bgStyle = 'blue',
  imageLabel = 'HERO IMAGE',
}: HeroBannerProps) {
  const gradients: Record<string, string> = {
    blue: 'linear-gradient(110deg, #0b4d9c 0%, #1475cc 40%, #5aade0 100%)',
    lightblue: 'linear-gradient(110deg, #6aade0 0%, #9fd0f0 50%, #cde5f7 100%)',
    grey: 'linear-gradient(110deg, #6a7d92 0%, #9db5c8 50%, #ccd9e2 100%)',
  };

  const images = ['/images/hero1.png', '/images/hero2.png', '/images/hero3.png'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className={`hero hero-${bgStyle}`} style={{ background: gradients[bgStyle] }}>
      <img
        src={images[currentIndex]}
        alt={`Hero slide ${currentIndex + 1}`}
        className="hero-full-image"
        aria-label={imageLabel}
      />

      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="wrap">
          {title ? (
            <h1 className={`hero-title${align === 'right' ? ' align-right' : ''}`}>
              {title}
            </h1>
          ) : null}

          <div className="hero-slider-dots">
            {images.map((_, i) => (
              <span key={i} className={i === currentIndex ? 'on' : ''} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}