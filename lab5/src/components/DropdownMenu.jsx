import { useState } from "react";
import { Link } from "react-router-dom";

// DropdownMenu is a REUSABLE component.
// It receives "props" from its parent (Navbar):
//   - title: text shown on the top-level menu button (e.g. "Academics")
//   - items: an array of { name, path } objects for the dropdown links
function DropdownMenu({ title, items }) {
  // useState is a React Hook that gives this component its own memory.
  // isOpen starts as false (dropdown closed). setIsOpen updates it.
  const [isOpen, setIsOpen] = useState(false);

  return (
    // onMouseEnter / onMouseLeave are EVENT HANDLERS.
    // They run our functions when the mouse enters/leaves this menu item.
    <li
      className="nav-item dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* onClick lets the menu also open/close on tap, which helps on mobile */}
      <button className="nav-link" onClick={() => setIsOpen((prev) => !prev)}>
        {title} <span className="arrow">{isOpen ? "▲" : "▼"}</span>
      </button>

      {/* Only render the dropdown list when isOpen is true.
          This is called "conditional rendering" in React. */}
      {isOpen && (
        <ul className="dropdown-menu">
          {/* items.map() loops through the array passed in via props
              and turns each item into a clickable link. */}
          {items.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="dropdown-link"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default DropdownMenu;
