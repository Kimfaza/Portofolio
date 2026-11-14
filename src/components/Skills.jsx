function Skills() {
  const skillCategories = [
    {
      title: "UI/UX Design",
      icon: "bi-palette",
      description: "Designing intuitive and user-friendly interfaces",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Wireframing", level: 80 },
        { name: "Prototyping", level: 75 },
        { name: "UI Design", level: 85 },
      ],
    },
    {
      title: "Frontend Development",
      icon: "bi-code-slash",
      description: "Building responsive and interactive website",
      skills: [
        { name: "HTML & CSS", level: 90 },
        { name: "JavaScript", level: 75 },
        { name: "Bootstrap", level: 85 },
        { name: "React.js", level: 80 },
      ],
    },
    {
      title: "Backend Development",
      icon: "bi-server",
      description: "Developing functional web applications and systems",
      skills: [
        { name: "PHP", level: 80 },
        { name: "Laravel", level: 75 },
        { name: "MySQL", level: 80 },
        { name: "REST API", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-heading text-center">
          <span className="section-label">MY ABILITIES</span>
          <h2>My Skills</h2>
          <p>
            Here are some technologies and tools I use to bring ideas into
            reality
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="skill-card">
                <div className="skill-icon">
                  <i className={`bi ${category.icon}`}></i>
                </div>

                <h4>{category.title}</h4>
                <p className="skill-description">{category.description}</p>

                <div className="skill-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div className="skill-item" key={skillIndex}>
                      <div className="skill-info">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>

                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${skill.level}%` }}
                          aria-valuenow={skill.level}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
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

export default Skills;
