import { useState } from "react";

const categories = ["All", "Website", "UI/UX"];

const projects = [
  {
    category: "Website",
    type: "WEB DEVELOPMENT",
    title: "Sleman Mart",
    description:
      "Platform e-commerce untuk memudahkan pembelian produk UMKM di Sleman",
    link: "View Project",
    url: "#projects",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1000&q=85",
    alt: "Tanaman hias dalam ruangan",
  },
  {
    category: "UI/UX",
    type: "UI/UX DESIGN",
    title: "Navismart",
    description:
      "Aplikasi mobile untuk memudahkan pengguna dalam mencari lokasi dan navigasi",
    link: "View Project",
    url: "#projects",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85",
    alt: "Laptop di atas meja kerja",
  },
  {
    category: "Website",
    type: "WEB DEVELOPMENT",
    title: "Florist Latopia",
    description:
      "Website untuk toko bunga yang menyediakan berbagai jenis bunga dan layanan",
    link: "View Project",
    url: "https://florist-react.vercel.app",
    image: "/images/hd.jpg",
    alt: "Website Florist Latopia",
  },
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="projects-section container-fluid" id="projects">
      <header className="projects-header">
        <h2 className="projects-heading">My Projects</h2>
      </header>

      <nav className="projects-filters" aria-label="Filter proyek">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`projects-filter ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </nav>

      <div className="row projects-grid">
        {filteredProjects.map((project) => (
          <div className="col-12 col-md-6 col-xl-4" key={project.title}>
            <article className="projects-card">
              <div className="projects-image-wrapper">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="projects-image"
                />
              </div>

              <div className="projects-card-content">
                <p className="projects-type">{project.type}</p>

                <h3 className="projects-project-title">{project.title}</h3>

                <p className="projects-description">{project.description}</p>

                <a
                  href={project.url}
                  className="projects-link"
                  target={project.url.startsWith("http") ? "_blank" : undefined}
                  rel={
                    project.url.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {project.link} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
