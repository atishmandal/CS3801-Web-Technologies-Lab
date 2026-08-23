import { Link } from "react-router-dom";

const quickLinks = [
  {
    title: "Academics",
    text: "Browse departments, degree programs, and the academic calendar.",
    path: "/academics/departments",
  },
  {
    title: "Admissions",
    text: "Find eligibility details, deadlines, and scholarship options.",
    path: "/admissions/undergraduate",
  },
  {
    title: "Research",
    text: "See our active research centers and recent faculty publications.",
    path: "/research/centers",
  },
  {
    title: "Campus Life",
    text: "Explore hostels, student clubs, events, and sports facilities.",
    path: "/campus-life/hostels",
  },
];

function Home() {
  return (
    <>
      <section className="hero">
        <p className="hero-eyebrow">XYZ University</p>
        <h1>A place to learn, question, and build something that matters.</h1>
        <p>
          Use the navigation bar above to explore About Us, Academics,
          Admissions, Research, Campus Life, Placements, and Contact Us.
          Hover or tap on any menu item with an arrow to open its dropdown.
        </p>
        <div className="hero-rule" />
      </section>

      <section className="quick-links">
        {quickLinks.map((link) => (
          <Link to={link.path} className="quick-link-card" key={link.title}>
            <h3>{link.title}</h3>
            <p>{link.text}</p>
          </Link>
        ))}
      </section>
    </>
  );
}

export default Home;
