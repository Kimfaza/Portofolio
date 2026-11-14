function Contact() {
  return (
    <main id="contact" className="contact-page">
      <header className="contact-hero">
        <span className="contact-eyebrow">Get in touch</span>
        <h1>Let's Connect</h1>
        <p>
          Feel free to reach out to me for collaboration, job opportunities, or
          just to say hello!
        </p>
      </header>

      <section className="contact-section" aria-labelledby="contact-title">
        <div className="contact-card">
          <div className="contact-intro">
            <h2 id="contact-title">Let's Connect!</h2>
            <p>
              I'm always open to discussing new opportunities, creative ideas,
              and exciting projects.
            </p>

            <div className="social">
              <h3>Follow Me</h3>
              <div className="social-links">
                <a
                  className="social-link"
                  href="https://www.linkedin.com/in/fauzakhoirunisa"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <i class="bi bi-linkedin"></i>
                </a>

                <a
                  className="social-link"
                  href="https://instagram.com/fauzakhoirun"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <i class="bi bi-instagram"></i>
                </a>

                <a
                  className="social-link"
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <i class="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-details">
            <div className="contact-detail">
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <div>
                <span className="detail-label">Email</span>
                <a href="mailto:fauzakhoirunisa65@gmail.com">
                  fauzakhoirunisa65@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <div>
                <span className="detail-label">Location</span>
                <span>Indonesia</span>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </span>
              <div>
                <span className="detail-label">Availability</span>
                <span>Open for Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
