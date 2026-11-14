const achievements = [
  {
    title: "Top 5 Finalis UI/UX MAGE X ITS",
    category: "COMPETITION",
    year: "November 2024",
    description:
      "Berhasil meraih peringkat 5 besar dalam kompetisi UI/UX MAGE X ITS melalui perancangan UI/UX aplikasi NaviSmart, sebuah aplikasi berbasis Smart City yang dirancang untuk membantu penyandang tunanetra dalam mengakses informasi dan layanan publik dengan lebih mudah, serta dapat digunakan oleh masyarakat umum secara inklusif.",
    photo: "src/assets/mageX.jpg",
  },
  {
    title: "Top 10 Finalis Mobile UI/UX Competition",
    category: "COMPETITION",
    year: "Juli 2024",
    description:
      "Berhasil masuk dalam 10 besar finalis Mobile UI/UX Competition melalui perancangan desain UI/UX aplikasi mobile, mulai dari pembuatan wireframe, prototype interaktif, hingga desain antarmuka yang berfokus pada kemudahan navigasi dan pengalaman pengguna.",
    photo: "src/assets/uiux.jpeg",
  },
  {
    title: "Baparekraf Developer Day",
    category: "EVENT",
    year: "Oktober 2024",
    description:
      "Mengikuti Baparekraf Developer Day, sebuah acara teknologi yang diselenggarakan oleh Dicoding bekerja sama dengan Baparekraf, yang menghadirkan wawasan dan pengetahuan seputar teknologi digital, pengembangan perangkat lunak, serta industri IT.",
    photo: "src/assets/Baparekraf.jpg",
  },
];

function Achievement() {
  return (
    <section id="achievement" className="achievement-section">
      <div className="container">
        <div className="section-heading text-center">
          <span className="section-label">MILESTONES & AWARDS</span>
          <h2>
            My <span>Achievements</span>
          </h2>
          <p>
            Every achievement represents a step forward in my personal and
            professional journey
          </p>
        </div>

        <div className="row g-4">
          {achievements.map((achievement, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="achievement-card">
                <div className="achievement-icon">
                  <img src={achievement.photo} alt={achievement.name} />
                </div>

                <div className="achievement-info">
                  <span className="achievement-category">
                    {achievement.category}
                  </span>

                  <span className="achievement-year">
                    <i className="bi bi-calendar3"></i>
                    {achievement.year}
                  </span>
                </div>

                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievement;
