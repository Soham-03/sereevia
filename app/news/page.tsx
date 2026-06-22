import HeroBanner from '@/components/hero-banner';
import Footer from '@/components/footer-band';

export default function NewsPage() {
  return (
    <main>
      <section className="page-section">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 className="sec-heading">NEWS</h2>
          <p className="sec-subline">News content coming soon. Add articles and updates here.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}