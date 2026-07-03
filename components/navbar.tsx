'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/leadership', label: 'LEADERSHIP' },
  { href: '/collaborations', label: 'COLLABORATIONS' },
  { href: '/products', label: 'PRODUCTS' },
  { href: '/news', label: 'NEWS' },
];

export default function Navbar() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  return (
    <nav className="site-nav">
      <div className="wrap nav-inner">
        <Link href="/" className="nav-logo" aria-label="Sereevia home">
  <img
    src="/images/sereevia-logo.png"
    alt="Sereevia"
    className="nav-logo-image"
  />
</Link>

        <button
          type="button"
          className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={path === l.href ? 'active' : ''}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}