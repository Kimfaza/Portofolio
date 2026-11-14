import profileImage from "../assets/fauza.jpg";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-lg-5 about-image-wrapper">
            <div className="about-image-bg">
              <img src={profileImage} alt="Fauza" className="about-image" />
            </div>

            <div className="about-decoration about-decoration-one"></div>
            <div className="about-decoration about-decoration-two"></div>
          </div>

          {/* Content */}
          <div className="col-lg-7 about-content">
            <span className="about-label">GET TO KNOW ME</span>

            <h2>About Me</h2>

            <p>
              Saya merupakan lulusan Teknik Informatika dari Universitas Amikom
              Yogyakarta yang memiliki ketertarikan di bidang pengembangan
              website dan desain antarmuka pengguna (UI/UX Design). Saya senang
              mempelajari hal-hal baru, khususnya teknologi yang dapat digunakan
              untuk menciptakan website yang menarik, responsif, dan mudah
              digunakan.
            </p>

            <p>
              Saya memiliki pengalaman dalam mengembangkan proyek website
              menggunakan HTML, CSS, JavaScript, PHP, dan beberapa teknologi
              lainnya. Saya juga tertarik untuk terus mengembangkan kemampuan di
              bidang frontend maupun backend development.
            </p>

            <p>
              Selain kemampuan teknis, saya terbiasa bekerja secara individu
              maupun dalam tim. Saya memiliki semangat untuk terus belajar,
              bertanggung jawab terhadap pekerjaan, serta mampu beradaptasi
              dengan lingkungan dan tantangan baru.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
