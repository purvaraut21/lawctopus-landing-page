import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h2>Lawctopus</h2>
          <p>
            Learn practical contract drafting from industry experts and
            build a successful freelancing career.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#benefits">Benefits</a>
          <a href="#curriculum">Curriculum</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#faq">FAQ</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>📧 support@lawctopus.com</p>
          <p>📞 +91 9876543210</p>
          <p>📍 Mumbai, India</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Lawctopus. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;