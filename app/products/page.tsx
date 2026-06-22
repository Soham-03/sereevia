import HeroBanner from '@/components/hero-banner';
import Footer from '@/components/footer-band';

const tabs = ['ALL BRANDS', 'CLEANSING', 'SKIN LIGHTENING', 'TRICHOLOGY', 'ANTI-AGING', 'PREMIUM PORTFOLIO'];

const products = [
  { name: 'GloONE Tab', label: 'PROVIDE PRODUCT IMAGE — GloONE Tab packaging' },
  { name: 'GloONE-C Tab', label: 'PROVIDE PRODUCT IMAGE — GloONE-C Tab packaging' },
  { name: 'GloONE inj Tab', label: 'PROVIDE PRODUCT IMAGE — GloONE inj Tab packaging' },
  { name: 'GloONE Tab', label: 'PROVIDE PRODUCT IMAGE — GloONE Tab packaging' },
  { name: 'GloONE-C Tab', label: 'PROVIDE PRODUCT IMAGE — GloONE-C Tab packaging' },
  { name: 'GloONE inj Tab', label: 'PROVIDE PRODUCT IMAGE — GloONE inj Tab packaging' },
];

export default function ProductsPage() {
  return (
    <main>
      <section className="page-section">
        <div className="wrap">
          <h2 className="sec-heading">PRODUCT PORTFOLIO</h2>
          <p className="sec-subline">
            Using the best-in-class ingredients and state-of-art manufacturing facilities, we have developed our innovative product portfolio to address the needs of the healthcare professionals and the patient&apos;s skin care needs.
          </p>

          <div className="filter-tabs">
            {tabs.map((t, i) => (
              <button key={t} className={`filter-tab${i === 0 ? ' active' : ''}`}>
                {t}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {products.map((p, i) => (
              <div key={i} className="prod-card">
                <div className="prod-thumb">{p.label}</div>
                <div className="prod-label">
                  <span>{p.name}</span>
                  <div className="stars"><span /><span /><span /><span /></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}