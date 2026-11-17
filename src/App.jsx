import { useState, useRef } from "react";
import "./App.css";
function PresenterWidget() {
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);
  const utteranceRef = useRef(null);

  const introduction =
    "Hello! I'm Gorli Naveen. I'm an Artificial Intelligence and Machine Learning Engineer and AI Trainer. I graduated with a B.Tech in Computer Science and Artificial Intelligence. I enjoy building intelligent applications, developing machine learning solutions, and exploring emerging AI technologies. Welcome to my portfolio!";

  const playSpeech = () => {
    if (!("speechSynthesis" in window)) {
      alert("Your browser does not support voice playback.");
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(introduction);
    utterance.rate = 0.95;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => {
      setSpeaking(true);
      setPaused(false);
    };

    utterance.onend = () => {
      setSpeaking(false);
      setPaused(false);
    };

    utterance.onerror = () => {
      setSpeaking(false);
      setPaused(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const pauseSpeech = () => {
    if (window.speechSynthesis.speaking) {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        setPaused(false);
      } else {
        window.speechSynthesis.pause();
        setPaused(true);
      }
    }
  };

  const stopSpeech = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
    setPaused(false);
  };

  return (
    <div className={`presenter-widget ${speaking ? "is-speaking" : ""}`}>
      <img
        src="/naveen-presenter.jpg"
        alt="Gorli Naveen presenter"
        className="presenter-photo"
      />

      <div className="presenter-content">
        <span className="presenter-label">MEET YOUR PRESENTER</span>
        <h3>Hi, I'm Naveen!</h3>

        <p>
          Welcome to my portfolio. Let me introduce myself
          and show you what I build.
        </p>

        <div className="presenter-controls">
          <button onClick={playSpeech}>
            ▶ Play
          </button>

          <button onClick={pauseSpeech} disabled={!speaking}>
            {paused ? "▶ Resume" : "Ⅱ Pause"}
          </button>

          <button onClick={playSpeech}>
  ↻ Replay
</button>
        </div>

        <small className="presenter-status">
          {speaking ? (paused ? "Voice paused" : "Speaking...") : "Ready to introduce myself"}
        </small>
      </div>
    </div>
  );
}
function App() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="portfolio">

      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="logo">GN.</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk ↗
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="hero" id="home">

        <div className="hero-left">

          <span className="availability">
            <span className="green-dot"></span>
            AVAILABLE FOR OPPORTUNITIES
          </span>

          <p className="intro-text">HELLO, I'M</p>

          <h1>
            Gorli
            <br />
            <span>Naveen.</span>
          </h1>

          <h2>
            AI / ML Engineer <br />
            & AI Trainer.
          </h2>

          <p className="description">
            Building intelligent solutions through Artificial
            Intelligence, Machine Learning and innovative
            technology.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore My Work ↗
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Naveennavii1831"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/naveengorli"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
  href="/Gorli-Naveen-Resume.pdf"
  download="Gorli-Naveen-Resume.pdf"
  className="resume-button"
>
  <span>↓</span> Download Resume
</a>
          </div>

        </div>

        {/* INTERACTIVE ID CARD */}
        <div className="hero-right">

          <div
            className={`id-card ${flipped ? "flipped" : ""}`}
            onClick={() => setFlipped(!flipped)}
          >

            <div className="card-inner">

              {/* FRONT */}
              <div className="card-front">

                <div className="card-top">
                  <span>PERSONAL IDENTITY</span>
                  <span>2026</span>
                </div>

                <div className="avatar">
                  GN
                </div>

                <h2>GORLI NAVEEN</h2>

                <p>AI / ML ENGINEER</p>

                <div className="card-line"></div>

                <div className="card-details">
                  <div>
                    <small>EDUCATION</small>
                    <strong>B.Tech CSE (AI)</strong>
                  </div>

                  <div>
                    <small>GRADUATION</small>
                    <strong>2025</strong>
                  </div>
                </div>

                <div className="flip-hint">
                  CLICK TO FLIP ↻
                </div>

              </div>

              {/* BACK */}
              <div className="card-back">

                <span>BEYOND THE CODE</span>

                <h2>
                  Curious mind.
                  <br />
                  Creative builder.
                </h2>

                <p>
                  Exploring AI, Machine Learning,
                  Deep Learning and innovative
                  software solutions.
                </p>

                <div className="card-line"></div>

                <strong>GORLI NAVEEN</strong>

                <div className="flip-hint">
                  CLICK TO RETURN ↻
                </div>

              </div>

            </div>
          </div>

          <div className="floating-tag tag-one">
            🤖 Artificial Intelligence
          </div>

          <div className="floating-tag tag-two">
            💻 Machine Learning
          </div>
          <PresenterWidget />

        </div>

      </section>

      {/* ABOUT SECTION */}
      <section className="about-section" id="about">

        <div className="section-heading">
          <span className="section-label">01 — ABOUT ME</span>

          <h2>
            More than just
            <span> lines of code.</span>
          </h2>
        </div>

        <div className="about-content">

          <div className="about-left">
            <div className="about-image-placeholder">
              <span>GN.</span>
              <p>AI / ML ENTHUSIAST</p>
            </div>

            <div className="about-caption">
              <span>BASED IN INDIA 🇮🇳</span>
              <span>GRADUATED · 2025</span>
            </div>
          </div>

          <div className="about-right">

            <p className="about-intro">
              I'm Gorli Naveen, an AI-focused engineering
              graduate passionate about building intelligent
              and practical technology solutions.
            </p>

            <p className="about-description">
              With a background in Computer Science and
              Artificial Intelligence, I explore the intersection
              of machine learning, deep learning, software
              engineering and emerging AI technologies.
            </p>

            <p className="about-description">
              My experience as a freelance AI Trainer has
              strengthened my ability to evaluate AI-generated
              responses, analyze technical content and work
              with AI systems.
            </p>

            <p className="about-description">
              I enjoy transforming ideas into working
              applications, experimenting with new technologies
              and developing projects that solve real-world
              problems.
            </p>

            <div className="about-highlights">

              <div>
                <span>01</span>
                <strong>Artificial Intelligence</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Machine Learning</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Software Development</strong>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* BOTTOM MARQUEE */}
      {/* EDUCATION SECTION */}

<section className="education-section" id="education">

  <div className="section-heading">

    <span className="section-label">
      05 — EDUCATION
    </span>

    <h2>
      The foundation
      <span> behind my work.</span>
    </h2>

    <p className="education-intro">
      My academic journey in computer science,
      artificial intelligence and technology.
    </p>

  </div>

  <div className="education-container">

    {/* DEGREE */}

    <div className="education-card featured-education">

      <div className="education-card-top">
        <span>UNDERGRADUATE DEGREE</span>
        <span>2025</span>
      </div>

      <div className="education-icon">
        🎓
      </div>

      <h3>
        Bachelor of Technology
      </h3>

      <h4>
        Computer Science and Engineering
        (Artificial Intelligence)
      </h4>

      <p>
        Specialized academic background in
        Computer Science and Artificial Intelligence,
        developing foundational knowledge in
        programming, machine learning and intelligent systems.
      </p>

      <div className="education-bottom">
        <span>DEGREE</span>
        <strong>B.Tech CSE (AI)</strong>
      </div>

    </div>
    {/* INTERMEDIATE */}

<div className="education-card">

  <div className="education-card-top">
    <span>HIGHER SECONDARY EDUCATION</span>
    <span>2019 – 2021</span>
  </div>

  <div className="education-icon">
    📖
  </div>

  <h3>Intermediate</h3>

  <h4>Sri Chaitanya Junior College</h4>

  <p>
    Completed intermediate education,
    building a strong foundation for
    higher studies in Computer Science
    and Artificial Intelligence.
  </p>

  <div className="education-bottom">
    <span>ACADEMIC RESULT</span>
    <strong>86.8%</strong>
  </div>

</div>

    {/* SCHOOL EDUCATION */}

    <div className="education-card school-education">

      <div className="education-card-top">
        <span>SECONDARY EDUCATION</span>
        <span>2018-2019</span>
      </div>

      <div className="education-icon">
        📚
      </div>

      <h3>Secondary School Education</h3>

      <h4>Pratibha Vidyalayam</h4>

      <p>
        Completed secondary education with
        a strong academic foundation.
      </p>

      <div className="education-bottom">
        <span>ACADEMIC RESULT</span>
        <strong>9.8 GPA</strong>
      </div>

    </div>

  </div>

  <div className="education-note">
    <span>CONTINUOUS LEARNING</span>
    <p>
      Always exploring new technologies,
      strengthening technical knowledge and
      developing practical AI solutions.
    </p>
  </div>

</section>
      {/* PROFESSIONAL EXPERIENCE */}

<section className="experience-section" id="experience">

  <div className="section-heading">
    <span className="section-label">03 — MY JOURNEY</span>

    <h2>
      Experience &
      <span> contributions.</span>
    </h2>

    <p className="experience-intro">
      My professional journey, practical experience
      and contributions across AI and software development.
    </p>
  </div>

  <div className="experience-timeline">

    {/* EXPERIENCE 1 */}

    <div className="experience-item">

      <div className="experience-marker">
        <span></span>
      </div>

      <div className="experience-card">

        <div className="experience-top">
          <span className="experience-type">
            FREELANCE · REMOTE
          </span>

          <span className="experience-duration">
            1 YEAR
          </span>
        </div>

        <h3>Freelance AI Trainer</h3>

        <h4>
          Outlier · Handshake AI · AI Training Platforms
        </h4>

        <p>
          Worked on AI training and evaluation tasks,
          focusing on improving the quality, accuracy
          and reliability of AI-generated responses.
        </p>

        <ul>
          <li>Evaluated AI-generated responses for accuracy and relevance.</li>
          <li>Performed data annotation and quality assessment.</li>
          <li>Analyzed and compared AI model responses.</li>
          <li>Worked on prompt evaluation and instruction following.</li>
          <li>Provided structured feedback to improve AI outputs.</li>
        </ul>

        <div className="experience-tags">
          <span>AI Evaluation</span>
          <span>Data Annotation</span>
          <span>Prompt Engineering</span>
          <span>Quality Assessment</span>
        </div>

      </div>

    </div>


    {/* EXPERIENCE 2 */}

    <div className="experience-item">

      <div className="experience-marker">
        <span></span>
      </div>

      <div className="experience-card">

        <div className="experience-top">
          <span className="experience-type">
            INTERNSHIP
          </span>

          <span className="experience-duration">
            1 YEAR
          </span>
        </div>

        <h3>Web Developer Intern</h3>

        <h4>
          Robust Construction Safety System (RCSS)
        </h4>

        <p>
          Contributed to the development of a web-based
          construction safety system associated with
          an Australian construction industry partner.
        </p>

        <ul>
          <li>Developed responsive user interface components.</li>
          <li>Worked on dashboard development and UI improvements.</li>
          <li>Improved cross-device compatibility and responsiveness.</li>
          <li>Worked with frontend and backend web technologies.</li>
        </ul>

        <div className="experience-tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>Bootstrap</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>MySQL</span>
        </div>

      </div>

    </div>

  </div>

</section>
{/* FEATURED PROJECTS */}

<section className="projects-section" id="projects">

  <div className="section-heading">

    <span className="section-label">
      04 — SELECTED WORK
    </span>

    <h2>
      Projects that
      <span> make an impact.</span>
    </h2>

    <p className="projects-intro">
      A selection of AI and software engineering projects
      where I turn technical concepts into working applications.
    </p>

  </div>

  <div className="projects-container">

    {/* PROJECT 1 */}

    <article className="project-card">

      <div className="project-visual medical-visual">

        <span className="project-number">01 / 02</span>

        <div className="project-visual-content">
          <span className="project-symbol">✳</span>
          <h3>MEDICAL AI</h3>
          <p>INTELLIGENT IMAGE ANALYSIS</p>
        </div>

        <span className="project-category">
          DEEP LEARNING
        </span>

      </div>

      <div className="project-details">

        <div className="project-heading">
          <div>
            <span className="project-label">
              ARTIFICIAL INTELLIGENCE
            </span>

            <h3>
              AI-Assisted Medical Imaging
              and Diagnosis System
            </h3>
          </div>

          <span className="project-arrow">↗</span>
        </div>

        <p className="project-description">
          An AI-powered medical imaging application that
          analyzes chest X-ray images using DenseNet121
          trained on ChestMNIST. Includes Grad-CAM
          visualizations for model explainability and a
          review workflow for human assessment.
        </p>

        <div className="project-tech">
          <span>Python</span>
          <span>PyTorch</span>
          <span>DenseNet121</span>
          <span>FastAPI</span>
          <span>React</span>
          <span>Docker</span>
          <span>SQLite</span>
        </div>

        <div className="project-actions">

          <a
            href="https://medical-ai-imaging.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="project-live"
          >
            Live Demo ↗
          </a>

          <a
            href="https://github.com/Naveennavii1831/AI-Assisted-Medical-Imaging-and-Diagnosis-System"
            target="_blank"
            rel="noreferrer"
            className="project-github"
          >
            GitHub ↗
          </a>

        </div>

      </div>

    </article>


    {/* PROJECT 2 */}

    <article className="project-card">

      <div className="project-visual reelrank-visual">

        <span className="project-number">02 / 02</span>

        <div className="project-visual-content">
          <span className="project-symbol">◈</span>
          <h3>REELRANK</h3>
          <p>PERSONALIZED RECOMMENDATIONS</p>
        </div>

        <span className="project-category">
          RECOMMENDATION SYSTEM
        </span>

      </div>

      <div className="project-details">

        <div className="project-heading">
          <div>
            <span className="project-label">
              MACHINE LEARNING
            </span>

            <h3>
              ReelRank Recommendation Engine
            </h3>
          </div>

          <span className="project-arrow">↗</span>
        </div>

        <p className="project-description">
          A large-scale movie recommendation system built
          using a two-stage architecture. Combines
          Two-Tower candidate retrieval, DCN ranking,
          FAISS vector search and ONNX Runtime inference
          to generate personalized recommendations.
        </p>

        <div className="project-tech">
          <span>Python</span>
          <span>Two-Tower</span>
          <span>DCN</span>
          <span>FAISS</span>
          <span>ONNX</span>
          <span>FastAPI</span>
          <span>React</span>
        </div>

        <div className="project-actions">

          <a
            href="https://luxury-speculoos-b9883e.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="project-live"
          >
            Live Demo ↗
          </a>

          <a
            href="https://github.com/Naveennavii1831/reelrank-recommendation-engine"
            target="_blank"
            rel="noreferrer"
            className="project-github"
          >
            GitHub ↗
          </a>

        </div>

      </div>

    </article>

  </div>

  <div className="projects-footer">
    <span>BUILDING INTELLIGENT SOLUTIONS</span>
    <span>IDEAS INTO APPLICATIONS ↗</span>
  </div>

</section>
      {/* TECHNICAL SKILLS SECTION */}

<section className="skills-section" id="skills">

  <div className="section-heading">
    <span className="section-label">02 — MY EXPERTISE</span>

    <h2>
      Technologies I
      <span> work with.</span>
    </h2>

    <p className="skills-intro">
      A collection of technologies and tools I use to
      develop intelligent applications and solve problems.
    </p>
  </div>

  <div className="skills-grid">

    {/* PROGRAMMING */}
    <div className="skill-category">

      <div className="skill-category-header">
        <span>01</span>
        <h3>Programming & Data Science</h3>
      </div>

      <div className="skill-items">
        {[
          "Python",
          "NumPy",
          "Pandas",
          "Matplotlib",
          "SQL"
        ].map((skill) => (
          <div className="skill-card" key={skill}>
            <span>✳</span>
            {skill}
          </div>
        ))}
      </div>

    </div>

    {/* AI & ML */}
    <div className="skill-category">

      <div className="skill-category-header">
        <span>02</span>
        <h3>AI & Machine Learning</h3>
      </div>

      <div className="skill-items">
        {[
          "Machine Learning",
          "Deep Learning",
          "TensorFlow",
          "Keras",
          "PyTorch",
          "Scikit-learn"
        ].map((skill) => (
          <div className="skill-card" key={skill}>
            <span>✳</span>
            {skill}
          </div>
        ))}
      </div>

    </div>

    {/* DEVELOPMENT */}
    <div className="skill-category">

      <div className="skill-category-header">
        <span>03</span>
        <h3>Web & Backend Development</h3>
      </div>

      <div className="skill-items">
        {[
          "React",
          "JavaScript",
          "HTML5",
          "CSS3",
          "FastAPI",
          "REST APIs"
        ].map((skill) => (
          <div className="skill-card" key={skill}>
            <span>✳</span>
            {skill}
          </div>
        ))}
      </div>

    </div>

    {/* TOOLS */}
    <div className="skill-category">

      <div className="skill-category-header">
        <span>04</span>
        <h3>Tools & Technologies</h3>
      </div>

      <div className="skill-items">
        {[
          "Git & GitHub",
          "Docker",
          "SQLite",
          "FAISS",
          "ONNX",
          "Netlify",
          "Render"
        ].map((skill) => (
          <div className="skill-card" key={skill}>
            <span>✳</span>
            {skill}
          </div>
        ))}
      </div>

    </div>

  </div>

  <div className="skills-bottom">
    <span>ALWAYS LEARNING</span>
    <span>ALWAYS BUILDING ↗</span>
  </div>
  {/* CONTACT SECTION */}

<section className="contact-section" id="contact">

  <div className="section-heading">

    <span className="section-label">
      06 — GET IN TOUCH
    </span>

    <h2>
      Have an opportunity?
      <span> Let's connect.</span>
    </h2>

    <p className="contact-intro">
      I'm interested in AI/ML engineering opportunities,
      AI training projects and collaborations.
      Let's build something meaningful together.
    </p>

  </div>

  <div className="contact-container">

    <div className="contact-left">

      <span className="contact-availability">
        <span className="green-dot"></span>
        OPEN TO OPPORTUNITIES
      </span>

      <h3>
        Let's turn ideas
        <br />
        into reality.
      </h3>

      <p>
        Whether you have a job opportunity,
        an interesting project or simply want
        to connect, feel free to reach out.
      </p>

      <a
        href="mailto:gorlinaveen658@gmail.com"
        className="contact-email-button"
      >
        Send Me an Email ↗
      </a>

    </div>

    <div className="contact-right">

      <a
        href="mailto:gorlinaveen03@gmail.com"
        className="contact-link"
      >
        <div>
          <small>EMAIL</small>
          <strong>gorlinaveen03@gmail.com</strong>
        </div>
        <span>↗</span>
      </a>

      <a
        href="tel:+917680895580"
        className="contact-link"
      >
        <div>
          <small>PHONE</small>
          <strong>+91 7680895580</strong>
        </div>
        <span>↗</span>
      </a>

      <a
        href="https://www.linkedin.com/in/naveengorli"
        target="_blank"
        rel="noreferrer"
        className="contact-link"
      >
        <div>
          <small>LINKEDIN</small>
          <strong>Connect professionally</strong>
        </div>
        <span>↗</span>
      </a>

      <a
        href="https://github.com/Naveennavii1831"
        target="_blank"
        rel="noreferrer"
        className="contact-link"
      >
        <div>
          <small>GITHUB</small>
          <strong>Explore my repositories</strong>
        </div>
        <span>↗</span>
      </a>

    </div>

  </div>

</section>

</section>
      <div className="marquee">
        <div>
          ARTIFICIAL INTELLIGENCE ✳ MACHINE LEARNING ✳
          DEEP LEARNING ✳ PYTHON ✳ INNOVATION ✳
          ARTIFICIAL INTELLIGENCE ✳ MACHINE LEARNING ✳
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        © 2026 Gorli Naveen. All rights reserved.
      </footer>

    </div>
  );
}

export default App;