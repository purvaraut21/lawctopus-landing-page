import "../styles/Curriculum.css";

const modules = [
  {
    number: "01",
    title: "Contract Drafting Basics",
    description:
      "Understand the fundamentals of legal drafting and essential contract clauses.",
  },
  {
    number: "02",
    title: "Employment Agreements",
    description:
      "Learn to draft employment contracts, offer letters, and workplace agreements.",
  },
  {
    number: "03",
    title: "Service Agreements",
    description:
      "Draft service agreements, consulting contracts, and client engagement documents.",
  },
  {
    number: "04",
    title: "NDA & IP Contracts",
    description:
      "Prepare confidentiality agreements and intellectual property contracts.",
  },
  {
    number: "05",
    title: "Freelancing & Clients",
    description:
      "Learn pricing, proposals, negotiations, and client management for freelancers.",
  },
  {
    number: "06",
    title: "Live Projects",
    description:
      "Work on practical drafting assignments and receive expert feedback.",
  },
];

function Curriculum() {
  return (
    <section className="curriculum" id="curriculum">
      <h2>Course Curriculum</h2>
      <p className="curriculum-subtitle">
        A structured learning path designed to make you confident in contract
        drafting and legal freelancing.
      </p>

      <div className="curriculum-grid">
        {modules.map((module) => (
          <div className="module-card" key={module.number}>
            <span className="module-number">Module {module.number}</span>
            <h3>{module.title}</h3>
            <p>{module.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Curriculum;