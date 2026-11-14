import { useState } from "react";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState("home");

  const menus = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Achievement", id: "achievement" },
    { label: "Organization", id: "organization" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a
          className="navbar-brand"
          href="#home"
          onClick={() => setActiveMenu("home")}
        >
          Portofolio
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {menus.map((menu) => (
              <li className="nav-item" key={menu.id}>
                <a
                  className={`nav-link ${
                    activeMenu === menu.id ? "active" : ""
                  }`}
                  href={`#${menu.id}`}
                  onClick={() => setActiveMenu(menu.id)}
                >
                  {menu.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
