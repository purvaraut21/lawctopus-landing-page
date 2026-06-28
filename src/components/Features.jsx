import "../styles/Features.css";

const features = [
  {
    icon: "📄",
    title: "Practical Contract Drafting",
    description:
      "Draft real-world agreements with hands-on exercises and assignments.",
  },
  {
    icon: "🎯",
    title: "54+ Live Sessions",
    description:
      "Attend interactive live classes led by experienced legal professionals.",
  },
  {
    icon: "💼",
    title: "Freelancing Guidance",
    description:
      "Learn how to find clients, price your services, and build a legal freelancing career.",
  },
  {
    icon: "🏆",
    title: "Certificate",
    description:
      "Receive a course completion certificate to strengthen your professional profile.",
  },
  {
    icon: "♾️",
    title: "Lifetime Access",
    description:
      "Access all recordings, templates, and future updates anytime.",
  },
  {
    icon: "👨‍🏫",
    title: "Expert Mentorship",
    description:
      "Get guidance from experienced legal professionals throughout your learning journey.",
  },
];

function Features() {
  return (
    <section className="features" id="benefits">
      <h2>Why Choose This Course?</h2>
      <p className="features-subtitle">
        Everything you need to become confident in contract drafting and legal freelancing.
      </p>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;