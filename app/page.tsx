import HeroBanner from '@/components/hero-banner';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import IntroVideo from '@/components/intro-video';

export default function HomePage() {
  return (
    <main>
      <section className="page-section home-welcome-section">
        <div className="dots home-dots-right" />
        <div className="home-inner">
          <h2 className="home-main-title">WELCOME TO SEREEVIA BIOMED PVT. LTD.</h2>

          <div className="home-welcome-grid">
            <div className="home-copy-col">
              <p className="home-body-text">
                Sereevia Biomed Pvt. Ltd. is a science-led dermatology and biomed innovation company committed to redefining how skin health is understood, supported, and experienced. Built at the intersection of dermatological science, advanced formulation technologies, and aesthetic excellence, Sereevia is focused on delivering clinically meaningful solutions across skincare, trichology, and nutraceutical dermatology.
              </p>

              <p className="home-body-text home-body-text-second">
                At its core, Sereevia operates with a singular philosophy: to bridge the gap between clinical efficacy and premium consumer experience.
              </p>
            </div>

            <div className="home-image-col">
              <img
                src="/images/home1.png"
                alt="Sereevia skin innovation"
                className="home-welcome-image"
              />
            </div>
          </div>

          <div className="home-cards-grid">
            <div className="home-feature-card home-feature-card-accent">
              <div className="home-feature-icon">
                <svg viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="22" strokeWidth="2.2" />
                  <circle cx="32" cy="32" r="12" strokeWidth="2.2" />
                  <circle cx="32" cy="32" r="4.5" fill="#0b3d78" stroke="none" />
                  <path d="M35 29L50 14" strokeWidth="2.4" strokeLinecap="round" />
                  <path d="M45 14H51V20" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="home-feature-title">OUR VISION</h3>
              <p className="home-feature-text">
                To emerge as a globally Respected dermatology-Driven innovation company, Setting new benchmarks in skin health, longevity, and regenerative care.
              </p>
              <span className="home-feature-link">VIEW MORE</span>
            </div>

            <div className="home-feature-card">
              <div className="home-feature-icon">
                <svg viewBox="0 0 64 64" fill="none">
                  <path d="M32 10L38 20L50 21L41 30L44 42L32 35L20 42L23 30L14 21L26 20L32 10Z" strokeWidth="2.2" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="home-feature-title">OUR MISSION</h3>
              <p className="home-feature-text">
                To develop and deliver science-backed, clinically relevant, and aesthetically superior solutions that empower dermatologists, enhance patient outcomes,
              </p>
              <span className="home-feature-link">VIEW MORE</span>
            </div>

            <div className="home-feature-card">
              <div className="home-feature-icon">
                <svg viewBox="0 0 64 64" fill="none">
                  <path d="M18 33L26 41L33 34L39 40L48 31" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 29C20 24 25 22 30 24C33 25 35 27 38 29C42 31 46 31 50 28" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M17 45H47" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="home-feature-title">OUR PROMISE</h3>
              <p className="home-feature-text">
                Sereevia Biomed is not just building products - it is building a new standard in dermatology - driven care, where Science Delivers Results, Design Creates Desire, Innovation Drives.
              </p>
              <span className="home-feature-link">VIEW MORE</span>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section home-focus-section">
        <div className="dots home-dots-left" />
        <div className="home-inner">
          <div className="home-focus-grid">
            <div className="home-focus-image-col">
              <img
                src="/images/home2.png"
                alt="Core focus areas"
                className="home-focus-image"
              />
            </div>

            <div className="home-focus-copy-col">
              <h3 className="home-focus-title">OUR CORE FOCUS AREAS</h3>
              <p className="home-focus-intro">
                Sereevia Biomed is structured around integrated scientific platforms that drive innovation:
              </p>

              <p className="home-focus-text">
                <strong>Skin Barrier &amp; Amino Acid Cleansing Technology</strong> : Pioneering gentle, physiology-respecting cleansing systems inspired by Japanese skin science-designed to cleanse without disrupting the skin barrier.
              </p>

              <p className="home-focus-text">
                <strong>Nutraceutical Dermatology</strong> : Targeted ingestible solutions supporting skin, hair, and collagen health from within, enhancing clinical outcomes.
              </p>

              <p className="home-focus-text">
                <strong>Pigmentation &amp; Antioxidant Science</strong> : Advanced actives and delivery systems designed to address uneven skin tone, oxidative stress, and environmental damage.
              </p>

              <p className="home-focus-text">
                <strong>Trichology &amp; Hair Regeneration Science</strong> : Multi-target solutions addressing hair fall, scalp health, and regeneration pathways.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}