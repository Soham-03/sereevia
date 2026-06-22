import HeroBanner from '@/components/hero-banner';
import Footer from '@/components/footer';

export default function LeadershipPage() {
  return (
    <main>
        <section className="leadership-chess-section">
        <img
          src="/images/leadership-chess.png"
          alt="Leadership chess visual"
          className="leadership-chess-image"
        />
      </section>

      <section className="page-section leadership-team-section">
        <div className="dots leadership-dots-right" />
        <div className="leadership-inner">
          <h2 className="leadership-main-title">LEADERSHIP TEAM</h2>

          <p className="leadership-quote">
            “As we embark on this new journey, our leadership team is focused on growing with our consumers, maximizing value for every stakeholder, and unlocking powerful opportunities for our people.”
          </p>

          <div className="leadership-person-list">
            <div className="leadership-person-row">
              <div className="leadership-person-image-wrap">
                <img
                  src="/images/leader1.png"
                  alt="Sheetal Bhavik Shah"
                  className="leadership-person-image leadership-person-image-left"
                />
              </div>

              <div className="leadership-person-copy">
                <h3 className="leadership-person-name">Sheetal Bhavik Shah</h3>
                <div className="leadership-person-role">Founder &amp; Director</div>

                <p className="leadership-person-bio">
                  Sheetal Shah is the Founder and Director of Sereevia Biomed Pvt. Ltd., a company focused on Dermatology and Cosmetology solutions. With a strong passion for skincare innovation and wellness, she is dedicated to developing advanced healthcare and aesthetic products that support healthy and radiant skin. Under her leadership, the company aims to deliver high-quality, science-driven formulations that meet the evolving needs of the dermatology and cosmetology industry. Her vision is centered on innovation, quality, and customer trust, helping Sereevia Biomed build a strong presence in the healthcare and beauty sector.
                </p>
              </div>
            </div>

            <div className="leadership-person-row leadership-person-row-reverse">
              <div className="leadership-person-copy">
                <h3 className="leadership-person-name">Kapil Tejraj Jain</h3>
                <div className="leadership-person-role">Founder &amp; Director</div>

                <p className="leadership-person-bio">
                  Kapil Tejraj Jain&apos;s leadership at Sereevia Biomed involves overseeing business operations, compliance, and research collaborations across biotechnology and pharmaceutical sectors. His work supports the company&apos;s goal of advancing affordable and effective medical solutions through both in-house R&amp;D and external partnerships. With professional experience spanning scientific project management and corporate governance, Jain helps position Sereevia Biomed as an emerging player in India&apos;s biosciences industry.
                </p>
              </div>

              <div className="leadership-person-image-wrap leadership-person-image-wrap-right">
                <img
                  src="/images/leader2.png"
                  alt="Kapil Tejraj Jain"
                  className="leadership-person-image leadership-person-image-right"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}