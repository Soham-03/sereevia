import HeroBanner from '@/components/hero-banner';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer-band';

export default function CollaborationsPage() {
  return (
    <main>
      <section className="collab-page-section">
        <div className="dots collab-dots-left-top" />
        <div className="dots collab-dots-right-mid" />
        <div className="dots collab-dots-left-bottom" />

        <div className="collab-inner">
          <h2 className="collab-main-title">GLOBAL SCIENTIFIC COLLABORATION</h2>

          <div className="collab-brand-row">
            <div className="collab-logo-box collab-logo-box-large">
  <div className="collab-logo-inner-bg">
    <img
      src="/images/sereevia.png"
      alt="Sereevia Biomed logo"
      className="collab-logo-image"
    />
  </div>
</div>

            <div className="collab-handshake-wrap">
              <img
                src="/images/image.png"
                alt="Scientific collaboration handshake"
                className="collab-handshake-image"
              />
            </div>

            <div className="collab-logo-box collab-logo-box-large">
  <div className="collab-logo-inner-bg">
    <img
      src="/images/bcf.png"
      alt="BCF Life Sciences logo"
      className="collab-logo-image"
    />
  </div>
</div>
          </div>

          <p className="collab-lead-text">
            Sereevia Biomed has established a strategic collaboration with BCF Lifesciences (France), a globally recognized leader in the development of high-purity amino acids and bioactive ingredients derived from advanced biotechnological processes.
          </p>

          <div className="collab-cards-grid-new">
            <div className="collab-card-new">
              <h3 className="collab-card-title">
                This collaboration strengthens Sereevia&apos;s capabilities in
              </h3>

              <p className="collab-card-text">
                Access to pharmaceutical-grade amino acids and bioactive actives
              </p>

              <p className="collab-card-text">
                Integration of European research and quality standards into product development
              </p>
            </div>

            <div className="collab-card-new">
              <h3 className="collab-card-title">Development</h3>

              <p className="collab-card-text">
                Development of next-generation dermatology and nutraceutical formulations
              </p>

              <p className="collab-card-text">
                Enhancing clinical credibility and global innovation alignment
              </p>
            </div>
          </div>

          <p className="collab-support-text">
            Through this partnership, Sereevia is building a global innovation network, combining international scientific expertise with localized dermatological insights — enabling the creation of differentiated, high-performance solution for both Indian and global markets.
          </p>

          <h2 className="collab-sub-title">OUR GLOBAL FOOT PRINT</h2>

          <div className="collab-map-wrap">
            <img
              src="/images/collab1.png"
              alt="Global footprint map"
              className="collab-map-image"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}