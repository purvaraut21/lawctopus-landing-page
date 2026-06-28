import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Lawctopus</h2>
      </div>

      <ul className="nav-links">
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#curriculum">Curriculum</a></li>
        <li><a href="#benefits">Benefits</a></li>
        <li><a href="#mentors">Mentors</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>

      <button className="enroll-btn">Enroll Now</button>
    </nav>
  );
}

export default Navbar;
