const experiences = [
  {
    title: "Web Programming Internship",
    company: "Dinas Koperasi, Usaha Kecil dan Menengah",
    period: "September 2025 - Desember 2025",
    description:
      "Selama memegang tanggung jawab ini, fokus utama saya adalah memperbarui dan merawat antarmuka website Sleman Mart agar pengunjung bisa navigasi dengan nyaman. Selain urusan tampilan dan fungsionalitas web, saya juga bertanggung jawab merapikan database informasi UMKM agar mudah diakses. Saya aktif mengidentifikasi bug atau kendala di sistem untuk perbaikan berkelanjutan, serta mendukung penuh kegiatan operasional dan event UMKM lewat administrasi, dokumentasi, dan koordinasi tim.",
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    icon: "bi-code-slash",
  },
  {
    title: "UI/UX Designer Internship",
    company: "PT. Wesclic Indonesia Neotech",
    period: "September 2024 - Januari 2025",
    description:
      "Bertanggung jawab merancang solusi digital dengan menyelaraskan kebutuhan pengguna dan tujuan bisnis. Saya mengidentifikasi berbagai permasalahan pengguna melalui feedback serta usability testing sebagai acuan utama dalam pengembangan desain. Proses kerja saya mencakup penyusunan user flow, wireframe, mockup, hingga prototype interaktif yang berorientasi pada kemudahan penggunaan. Selain merancang antarmuka, saya juga aktif melakukan evaluasi desain berbasis data/metrik penggunaan serta berkolaborasi erat dengan tim developer, produksi, dan manajemen untuk memastikan eksekusi produk berjalan optimal.",
    skills: ["Figma", "Asana", "Teamwork", "Communication", "Leadership"],
    icon: "bi-people",
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-heading text-center">
          <span className="section-label">MY JOURNEY</span>

          <h2>Experience</h2>

          <p>An overview of my professional experience and career journey</p>
        </div>

        {/* Timeline */}
        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-icon">
                <i className={`bi ${experience.icon}`}></i>
              </div>

              {/* Card */}
              <div className="experience-card">
                <div className="experience-card-header">
                  <h3>{experience.title}</h3>

                  <span className="experience-period">
                    <i className="bi bi-calendar3"></i>
                    {experience.period}
                  </span>
                </div>

                <h5>
                  <i className="bi bi-building"></i>
                  {experience.company}
                </h5>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="experience-skills">
                  {experience.skills.map((skill, skillIndex) => (
                    <span key={skillIndex}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
