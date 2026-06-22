import HeroBanner from '@/components/hero-banner';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer-band';

export default function AboutPage() {
  return (
    <main>
      <section className="about-page-top-section">
        <div className="about-page-inner">
          <img
            src="/images/about1.png"
            alt="Why Sereevia Biomed"
            className="about-top-image"
          />
        </div>
      </section>

      <section className="about-page-strip-section">
        <img
          src="/images/about2.png"
          alt="Sereevia manufacturing visual"
          className="about-strip-image"
        />
      </section>

      <section className="about-editorial-section about-editorial-section-one">
        <div className="dots about-editorial-dots-right" />
        <div className="about-page-inner">
          <h2 className="about-editorial-title about-editorial-title-wide">
            MANUFACTURING &amp; QUALITY COMMITMENT
          </h2>

          <div className="about-editorial-grid about-editorial-grid-left">
            <div className="about-editorial-copy">
              <p className="about-editorial-intro">
                Sereevia is building capabilities toward high-quality, scalable manufacturing, aligned with:
              </p>

              <ul className="about-editorial-list about-editorial-list-blue">
                <li>Stringent quality systems and compliance standards</li>
                <li>Dermatology-grade formulation processes</li>
                <li>Consistency in efficacy, safety, and stability</li>
              </ul>

              <p className="about-editorial-body about-editorial-body-large">
                The company&apos;s approach ensures global-quality products with local agility, enabling rapid innovation and market responsiveness.
              </p>
            </div>

            <div className="about-editorial-image-wrap about-editorial-image-wrap-right">
              <img
                src="/images/about3.png"
                alt="Manufacturing and quality commitment"
                className="about-editorial-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-editorial-section about-editorial-section-two">
        <div className="dots about-editorial-dots-left-bottom" />
        <div className="about-page-inner">
          <div className="about-editorial-grid about-editorial-grid-right">
            <div className="about-editorial-image-wrap about-editorial-image-wrap-left">
              <img
                src="/images/about4.png"
                alt="Innovation philosophy"
                className="about-editorial-image"
              />
            </div>

            <div className="about-editorial-copy">
              <h2 className="about-editorial-title">INNOVATION PHILOSOPHY</h2>

              <p className="about-editorial-intro">
                Sereevia follows a &quot;Science to Experience&quot; innovation model, where every product is developed through:
              </p>

              <ul className="about-editorial-list about-editorial-list-dark">
                <li>Clinical relevance first - aligned with dermatologist needs</li>
                <li>Advanced ingredient systems - globally sourced, evidence-backed actives</li>
                <li>Formulation intelligence - optimized bioavailability and delivery</li>
                <li>Aesthetic excellence - premium textures, design, and sensorial appeal</li>
              </ul>

              <p className="about-editorial-body about-editorial-body-large">
                This ensures that each offering is not just effective-but elevated, differentiated, and memorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}