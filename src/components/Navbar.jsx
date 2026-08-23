import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

// This is plain JS data describing the menu structure.
// Passing this to DropdownMenu as "items" is what makes DropdownMenu reusable
// for Academics, Admissions, Research, Campus Life, etc. without copy-pasting code.
const academicsItems = [
  { name: "Departments", path: "/academics/departments" },
  { name: "Programs Offered", path: "/academics/programs" },
  { name: "Academic Calendar", path: "/academics/calendar" },
];

const admissionsItems = [
  { name: "Undergraduate", path: "/admissions/undergraduate" },
  { name: "Postgraduate", path: "/admissions/postgraduate" },
  { name: "Scholarships", path: "/admissions/scholarships" },
];

const researchItems = [
  { name: "Research Centers", path: "/research/centers" },
  { name: "Publications", path: "/research/publications" },
];

const campusLifeItems = [
  { name: "Hostels", path: "/campus-life/hostels" },
  { name: "Clubs & Events", path: "/campus-life/clubs" },
  { name: "Sports", path: "/campus-life/sports" },
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">
          <span className="brand-mark">XU</span>
          <span className="brand-text">XYZ University</span>
        </Link>
      </div>

      <ul className="nav-list">
        {/* Simple links use Link, which is React Router's version of an anchor tag.
            It changes the page without a full browser reload. */}
        <li className="nav-item">
          <Link to="/about" className="nav-link">About Us</Link>
        </li>

        {/* Sections that need a dropdown reuse the same DropdownMenu component,
            just with different "title" and "items" props. */}
        <DropdownMenu title="Academics" items={academicsItems} />
        <DropdownMenu title="Admissions" items={admissionsItems} />
        <DropdownMenu title="Research" items={researchItems} />
        <DropdownMenu title="Campus Life" items={campusLifeItems} />

        <li className="nav-item">
          <Link to="/placements" className="nav-link">Placements</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
