import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/");

      // Scroll after the page renders
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <nav className="w-full py-4 px-8 flex justify-between items-center bg-black sticky top-0 z-50 shadow-md">
      {/*Content on the left side*/}
      <Link
        to="/"
        onClick={(e) => {
          if (location.pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        className="text-2xl font-bold text-white"
      >
        Taylan Özdabak
      </Link>
      
      {/*Content on the right side */}
      <ul className="flex gap-8 text-gray-400 text-lg">
        <li>
          <button onClick={() => handleNavClick("about")} className="hover:text-white transition">
            About
          </button>
        </li>
        <li>
          <button onClick={() => handleNavClick("projects")} className="hover:text-white transition">
            Projects
          </button>
        </li>
        <li>
          <button onClick={() => handleNavClick("contact")} className="hover:text-white transition">
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
