import { useEffect } from "react";
import profileImage from "./assets/profile.jpeg";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
  FaCode,
  FaMobileAlt,
  FaBug,
  FaPalette,
} from "react-icons/fa";

const personal = {
  name: "S.M. Abheetha Dhananjaya",
  role: "Technology Professional",
  intro:
    "Responsible and detail-oriented technology professional with experience in IT infrastructure support, web and mobile application development, UI/UX understanding, and software testing.",
  about:
    "I am S.M. Abheetha Dhananjaya, a responsible and detail-oriented technology professional with hands-on experience in managing and supporting organizational IT infrastructure. Skilled in developing web and mobile applications, designing user-friendly interfaces, and performing software testing to ensure high-quality deliverables. Highly motivated to learn emerging technologies, adopt new testing methodologies, and contribute to improving system efficiency and reliability.",
  email: "abheethasma@gmail.com",
  github: "https://github.com/abheethasma/",
  linkedin: "https://www.linkedin.com/in/abheethasma/",
};

const skillGroups = [
  {
    title: "Programming & Development",
    items: [
      "C",
      "C++",
      "Java",
      "MERN Stack",
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "RESTful API Integration",
    ],
  },
  {
    title: "Mobile Development",
    items: ["Android Studio", "Kotlin", "Mobile App Development"],
  },
  {
    title: "UI / UX Understanding",
    items: ["Figma", "Canva", "draw.io", "UI Design", "UX Basics"],
  },
  {
    title: "Software Testing",
    items: [
      "Playwright",
      "Selenium",
      "UAT",
      "Postman",
      "Test Case Writing",
      "Test Design Techniques",
    ],
  },
  {
    title: "Problem Solving & Analysis",
    items: [
      "Troubleshooting",
      "Performance Optimization",
      "System Reliability",
      "Analytical Thinking",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Communication",
      "Teamwork",
      "Leadership",
      "Adaptability",
      "Quick Learner",
      "Organization",
      "Time Management",
    ],
  },
];

const educationList = [
  {
    title: "BSc (Hons) in Information Technology",
    institute: "SLIIT",
    duration: "2022 – 2026",
    location: "Malabe, Sri Lanka",
  },
  {
    title: "Diploma in Information Technology",
    institute: "Esoft Metro Campus",
    duration: "2018 – 2019",
    location: "Kalutara, Sri Lanka",
  },
  {
    title: "Diploma in Human Resources and Management",
    institute: "University Of Colombo",
    duration: "2022 – 2024",
    location: "Colombo, Sri Lanka",
  },
  {
    title: "G.C.E. Advanced Level",
    institute: "C.W.W. Kannangara Central College",
    duration: "Bio Science Stream",
    location: "2B's & 1C",
  },
  {
    title: "G.C.E. Ordinary Level",
    institute: "C.W.W. Kannangara Central College",
    duration: "Academic Result",
    location: "7A's, 1B, 1C",
  },
];

const projects = [
  {
    title: "People’s Pay Mobile App – UAT Testing",
    type: "QA / UAT Testing",
    description:
      "Performed User Acceptance Testing (UAT) for the People’s Pay mobile application. Designed and executed test cases, identified defects, and collaborated with the development team to ensure a smooth and reliable user experience.",
    tech: ["UAT", "Mobile Testing", "Test Cases", "Defect Reporting"],
  },
  {
    title: "PixelsSuite Automation Testing – Playwright",
    type: "Automation Testing",
    description:
      "Automated end-to-end test flows for PixelsSuite using Playwright, covering conversion, validation, and download workflows. Organized feature-wise test suites with screenshots and reports for efficient debugging and maintenance.",
    tech: ["Playwright", "E2E Testing", "Reports", "Automation"],
  },
  {
    title: "PixelsSuite Automation Testing – Selenium",
    type: "Automation Testing",
    description:
      "Developed maintainable Selenium WebDriver automation for PixelsSuite using Java and Maven to validate core functional and UI workflows.",
    tech: ["Selenium", "Java", "Maven", "WebDriver"],
  },
  {
    title: "Predictive Analytics Framework for Optimizing Mushroom Cultivation",
    type: "Research Project",
    description:
      "Developed an AI- and IoT-based predictive analytics framework for mushroom cultivation, combining environmental monitoring, disease diagnosis, mushroom type prediction, and growth stage prediction. The system provided alerts, recommendations, and mobile-based decision support to improve crop health and cultivation efficiency.",
    tech: ["AI", "IoT", "Predictive Analytics", "Mobile Support"],
  },
  {
    title: "EventEase",
    type: "E-Commerce Platform",
    description:
      "Designed and deployed a full-stack ticket booking and management system using the MERN stack.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Task Management Mobile App",
    type: "Mobile Application",
    description:
      "Designed a task management mobile application using Kotlin in Android Studio.",
    tech: ["Kotlin", "Android Studio", "Mobile UI"],
  },
  {
    title: "Figma Design (UI/UX)",
    type: "UI / UX Design",
    description:
      "Designed Food Delivery and Event Management mobile application interfaces using Figma with a focus on modern UI and user-friendly UX.",
    tech: ["Figma", "UI Design", "UX Design", "Prototyping"],
  },
];

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".scroll-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      <div className="bg-orb orb-one"></div>
      <div className="bg-orb orb-two"></div>
      <div className="bg-grid"></div>

      <header className="navbar">
        <div className="container nav-inner">
          <a href="#home" className="logo">
            <span className="logo-mark">&lt;/&gt;</span> Abheetha
            <span className="logo-highlight"> Dhananjaya</span>
          </a>

          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="nav-btn icon-btn"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div className="hero-text scroll-reveal reveal-left">
              <p className="section-kicker">WELCOME TO MY PORTFOLIO</p>

              <h1>
                Hi, I’m <span>{personal.name}</span>
              </h1>

              <h2>{personal.role}</h2>

              <p className="hero-description">{personal.intro}</p>

              <div className="hero-tags">
                <span>
                  <FaCode /> Web Development
                </span>
                <span>
                  <FaMobileAlt /> Mobile Apps
                </span>
                <span>
                  <FaBug /> Software Testing
                </span>
                <span>
                  <FaPalette /> UI / UX
                </span>
              </div>

              <div className="hero-actions">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  className="primary-btn icon-btn"
                  rel="noreferrer"
                >
                  <FaDownload />
                  View CV
                </a>

                <a href="#contact" className="secondary-btn icon-btn">
                  Contact Me
                  <FaArrowRight />
                </a>
              </div>

              <div className="hero-socials">
                <a href={`mailto:${personal.email}`} aria-label="Email">
                  <FaEnvelope />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            <div className="hero-visual scroll-reveal reveal-right">
              <div className="profile-card floating">
                <div className="profile-badge">QA • Web • Mobile</div>

                <img
                  src={profileImage}
                  alt="S.M. Abheetha Dhananjaya"
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <SectionTitle
              kicker="About Me"
              title="Who I Am"
              subtitle="A technology professional with strong interest in development, testing, and system improvement."
            />

            <div className="about-layout">
              <div className="card about-card scroll-reveal reveal-left">
                <h3>Professional Summary</h3>
                <p>{personal.about}</p>
              </div>

              <div className="about-side">
                <div className="card mini-card scroll-reveal reveal-right">
                  <h4>Focus Areas</h4>
                  <ul className="mini-list">
                    <li>Web Application Development</li>
                    <li>Mobile App Development</li>
                    <li>Software Testing & UAT</li>
                    <li>UI / UX Understanding</li>
                  </ul>
                </div>

                <div className="card mini-card scroll-reveal reveal-right">
                  <h4>Strengths</h4>
                  <ul className="mini-list">
                    <li>Problem Solving</li>
                    <li>Attention to Detail</li>
                    <li>Quick Learning</li>
                    <li>Team Collaboration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <SectionTitle
              kicker="Skills"
              title="What I Can Do"
              subtitle="A blend of development, testing, design understanding, and professional soft skills."
            />

            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <div
                  className="card skill-card scroll-reveal reveal-zoom"
                  style={{ "--delay": `${index * 90}ms` }}
                  key={group.title}
                >
                  <h3>{group.title}</h3>

                  <div className="chip-wrap">
                    {group.items.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <SectionTitle
              kicker="Experience"
              title="Professional Experience"
              subtitle="Hands-on industrial experience in quality assurance and application testing."
            />

            <div className="card experience-card scroll-reveal reveal-up">
              <div className="experience-top">
                <div>
                  <h3>QA Engineering Intern</h3>
                  <p>People’s Bank (Head Office)</p>
                </div>

                <span className="pill">6 Months</span>
              </div>

              <p className="experience-text">
                Completed a 6-month internship focusing on User Acceptance
                Testing (UAT) for the People’s Pay mobile app. Gained practical
                experience in test case design, defect identification, test
                execution, and collaboration with the development team to ensure
                application quality.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <SectionTitle
              kicker="Projects"
              title="Featured Work"
              subtitle="A collection of development, research, UI/UX, and testing related work."
            />

            <div className="projects-grid">
              {projects.map((project, index) => (
                <div
                  className="card project-card scroll-reveal reveal-zoom"
                  style={{ "--delay": `${index * 90}ms` }}
                  key={project.title}
                >
                  <div className="project-top">
                    <span className="project-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="project-type">{project.type}</span>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="chip-wrap">
                    {project.tech.map((tech) => (
                      <span className="chip small-chip" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <SectionTitle
              kicker="Education"
              title="Academic Background"
              subtitle="My educational journey and academic qualifications."
            />

            <div className="timeline">
              {educationList.map((item, index) => (
                <div
                  className="timeline-item scroll-reveal reveal-left"
                  style={{ "--delay": `${index * 90}ms` }}
                  key={item.title}
                >
                  <div className="timeline-dot"></div>

                  <div className="card timeline-card">
                    <h3>{item.title}</h3>
                    <h4>{item.institute}</h4>
                    <p>{item.duration}</p>
                    <span>{item.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <SectionTitle
              kicker="Contact"
              title="Let’s Connect"
              subtitle="Feel free to contact me for opportunities, collaborations, or professional discussions."
            />

            <div className="card contact-card scroll-reveal reveal-up">
              <p>
                I’m interested in software testing, quality assurance, web
                development, mobile applications, and emerging technologies.
              </p>

              <div className="contact-actions">
                <a
                  href={`mailto:${personal.email}`}
                  className="primary-btn icon-btn"
                >
                  <FaEnvelope />
                  Email Me
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-btn icon-btn"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-btn icon-btn"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>
            © {new Date().getFullYear()} S.M. Abheetha Dhananjaya. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="section-title scroll-reveal reveal-up">
      <p className="section-kicker">{kicker}</p>
      <h2>{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  );
}

export default App;