import "../styles/Pricing.css";

function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <h2>Course Pricing</h2>

      <p className="pricing-subtitle">
        Invest in your legal career with lifetime access, live sessions, and
        expert mentorship.
      </p>

      <div className="pricing-card">
        <span className="price-tag">Most Popular</span>

        <h3>Expert-Level Contract Drafting Course</h3>

        <div className="price">
          ₹7,999 <span>₹11,999</span>
        </div>

        <ul>
          <li>✔ 54+ Live Sessions</li>
          <li>✔ Lifetime Access</li>
          <li>✔ Downloadable Templates</li>
          <li>✔ Freelancing Guidance</li>
          <li>✔ Certificate of Completion</li>
          <li>✔ Community Support</li>
        </ul>

        <button>Enroll Now</button>
      </div>
    </section>
  );
}

export default Pricing;