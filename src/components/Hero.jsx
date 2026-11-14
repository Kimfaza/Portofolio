import profileImage from "../assets/hero-profile.jpg";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 hero-content">
            <p className="hero-greeting">Hello, I'm</p>

            <h1 className="hero-name">
              Fauza
              <br />
              Khoirunisa
            </h1>

            <div className="hero-role">Fulstack Web Developer</div>

            <p className="hero-description">
              A passionate fresh graduate who loves creating beautiful,
              responsive, and user-friendly websites. Let&apos;s turn creative
              ideas into reality!
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="hero-btn hero-btn-primary">
                My Projects
                <i className="bi bi-arrow-right"></i>
              </a>

              <a href="#contact" className="hero-btn hero-btn-secondary">
                Contact Me
              </a>
            </div>
          </div>

          <div className="col-lg-6 hero-image-wrapper">
            <div className="hero-image-bg">
              <img
                src={profileImage}
                alt="Fauza - Web Developer"
                className="hero-image"
              />
            </div>

            <div className="hero-decoration decoration-one"></div>
            <div className="hero-decoration decoration-two"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
