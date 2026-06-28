import "../styles/Testimonials.css";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Law Student",
    review:
      "This course helped me master contract drafting through practical assignments and live sessions. Highly recommended!",
  },
  {
    name: "Rahul Verma",
    role: "Legal Associate",
    review:
      "The freelancing module was extremely valuable. I started getting freelance drafting work within weeks.",
  },
  {
    name: "Sneha Patel",
    role: "Corporate Professional",
    review:
      "Excellent mentors, practical templates, and lifetime access made this course worth every rupee.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Learners Say</h2>

      <p className="testimonial-subtitle">
        Thousands of learners have improved their legal drafting skills with this
        expert-led course.
      </p>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">★★★★★</div>

            <p className="review">
              "{item.review}"
            </p>

            <h3>{item.name}</h3>

            <span>{item.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;