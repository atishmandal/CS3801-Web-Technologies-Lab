import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Placements from "./pages/Placements";
import Contact from "./pages/Contact";
import SectionPage from "./pages/SectionPage";
import sectionContent from "./data/sectionContent";
import "./App.css";

function App() {
  return (
    // Navbar is rendered once, outside <Routes>, so it stays visible
    // on every page. Only the content below it changes.
    <div className="app">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/contact" element={<Contact />} />

          {/* All the dropdown sub-pages (Departments, Programs, Scholarships,
              and so on) share the same SectionPage component. We map over
              the sectionContent data instead of writing 12 routes by hand. */}
          {sectionContent.map((section) => (
            <Route
              key={section.path}
              path={section.path}
              element={
                <SectionPage
                  eyebrow={section.eyebrow}
                  title={section.title}
                  paragraphs={section.paragraphs}
                />
              }
            />
          ))}

          {/* Fallback for unknown routes */}
          <Route
            path="*"
            element={
              <SectionPage
                eyebrow="Error"
                title="Page not found"
                paragraphs={["The page you are looking for does not exist. Use the navigation bar above to find your way back."]}
              />
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
