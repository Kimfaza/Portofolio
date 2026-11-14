const organizations = [
  {
    name: "Amikom Computer Club (AMCC)",
    position: "Instruktur Web Programming",
    period: "Oktober 2023 - November 2024",
    category: "ORGANIZATION",
    description:
      "Bertanggung jawab mengelola ratusan anggota aktif AMCC di Universitas Amikom Yogyakarta serta menjadi instruktur Web Frontend dengan memberikan materi dan membimbing anggota dalam mempelajari HTML, CSS, JavaScript, Tailwind CSS dan pengembangan website.",
    activities: ["Teamwork", "Communication", "Event Management"],
    photo: "/images/amcc.jpg",
  },
];

function Organization() {
  return (
    <section id="organization" className="organization-section">
      <div className="container">
        <div className="section-heading text-center">
          <span className="section-label">BEYOND THE CLASSROOM</span>
          <h2>
            My <span>Organization</span>
          </h2>
          <p>
            Experiences that helped me grow, collaborate, and develop new skills
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {organizations.map((organization, index) => (
            <div className="col-lg-6 col-md-8" key={index}>
              <article className="organization-card">
                <div className="organization-card-top">
                  <div className="organization-icon">
                    <img src={organization.photo} alt={organization.name} />
                  </div>
                </div>

                <h3>{organization.name}</h3>
                <h5>{organization.position}</h5>

                <div className="organization-period">
                  <i className="bi bi-calendar3"></i>
                  <span>{organization.period}</span>
                </div>

                <p className="organization-description">
                  {organization.description}
                </p>

                <div className="organization-skills">
                  {organization.activities.map((activity, activityIndex) => (
                    <span key={activityIndex}>{activity}</span>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Organization;
