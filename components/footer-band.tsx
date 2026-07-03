export default function FooterBand() {
  return (
    <footer className="footer-band">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="footer-logo">SEREEVIA</div>
            <p className="footer-tagline">
              Science-led dermatology and biomed innovation, redefining how skin health is
              understood, supported, and experienced.
            </p>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Explore</h4>
            <a href="/" className="footer-link">Home</a>
            <a href="/about" className="footer-link">About</a>
            <a href="/leadership" className="footer-link">Leadership</a>
            <a href="/collaborations" className="footer-link">Collaborations</a>
            <a href="/products" className="footer-link">Products</a>
            <a href="/news" className="footer-link">News</a>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-col-title">Get in touch</h4>
            <a href="mailto:info@sereeviabiomed.com" className="footer-link">
              info@sereeviabiomed.com
            </a>
            <a href="tel:+911234567890" className="footer-link">+91 12345 67890</a>
            <p className="footer-address">
              Sereevia Biomed Pvt. Ltd.<br />
              India
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Sereevia Biomed Pvt. Ltd. All rights reserved.
          </p>

          <div className="footer-legal-links">
            <a href="/privacy-policy" className="footer-legal-link">Privacy Policy</a>
            <a href="/terms" className="footer-legal-link">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}