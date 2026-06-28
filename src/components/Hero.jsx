import "../styles/Hero.css";
import heroImage from "../assets/images/hero.jpg";


function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="hero-badge">🔥 Expert-Level Legal Course</span>

        <h1>
          Master <span>Contract Drafting</span> & Freelancing Like a Pro
        </h1>

        <p>
          Learn to draft professional contracts, build a successful
          freelancing career, and gain practical legal drafting skills
          through real-world assignments and expert guidance.
        </p>

        <div className="hero-buttons">
          <a href="#pricing" className="primary-btn">
            Enroll Now
          </a>

          <a href="#curriculum" className="secondary-btn">
            View Curriculum
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <h3>54+</h3>
            <p>Live Sessions</p>
          </div>

          <div>
            <h3>24+</h3>
            <p>Contracts Covered</p>
          </div>

          <div>
            <h3>Lifetime</h3>
            <p>Access</p>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Contract Drafting Course" />
      </div>
    </section>
  );
}

export default Hero;

