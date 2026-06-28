import "../styles/Mentors.css";

const mentors = [
  {
    name: "Adv. Rohan Mehta",
    role: "Corporate Lawyer",
    experience: "12+ Years Experience",
    image: "https://i.pravatar.cc/250?img=11",
  },
  {
    name: "Adv. Neha Sharma",
    role: "Contract Drafting Expert",
    experience: "10+ Years Experience",
    image: "https://i.pravatar.cc/250?img=32",
  },
  {
    name: "Adv. Aman Verma",
    role: "Legal Consultant",
    experience: "15+ Years Experience",
    image: "https://i.pravatar.cc/250?img=15",
  },
];

function Mentors() {
  return (
    <section className="mentors" id="mentors">
      <h2>Meet Your Mentors</h2>
      <p className="mentor-subtitle">
        Learn from experienced legal professionals with years of industry
        expertise.
      </p>

      <div className="mentor-grid">
        {mentors.map((mentor, index) => (
          <div className="mentor-card" key={index}>
            <img src={mentor.image} alt={mentor.name} />
            <h3>{mentor.name}</h3>
            <h4>{mentor.role}</h4>
            <p>{mentor.experience}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Mentors;