import React from "react";
import "./Style.css";

// Main Images
import heroImage from "./assets/hassan1294.jpg"; // Hero Image
import hsn2 from "./assets/hsn2.jpg";     // About Me Image
import hsn3 from "./assets/hsn3.jpg";     // Get In Touch Image

// Project / Work Cards
import s10 from "./assets/s10.jpg";
import s20 from "./assets/s20.jpg";
import s30 from "./assets/s30.jpg";
import s40 from "./assets/s40.jpg";
import s50 from "./assets/s40.jpg";
import s60 from "./assets/s60.jpg";

const App = () => {
  return (
    <div className="app">
      {/* ====== Header / Hero Section ====== */}
      <section className="hero">
        <div className="hero-text">
          <h1>Hassan Shahzad</h1>
          <h2>Professional Web Developer</h2>
          <p>
            Responsive Websites / Front & Back-End Integration / Building Scalable Web App /
            API Development / Optimized Database Management
          </p>
          <a
            href="https://wa.me/03333372204"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
          >
            Work With Me
          </a>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hassan Shahzad" />
        </div>
      </section>

      {/* ====== About Me Section ====== */}
      <section className="about">
        <h1>About Me</h1>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate and experienced Website Developer with a strong foundation in both front-end and back-end technologies. 
              With a focus on clean code, performance optimization, and responsive design, I help businesses and individuals build professional, scalable, and dynamic web applications.
            </p>
          </div>
          <div className="about-image">
            <img src={hsn2} alt="About Hassan" />
          </div>
        </div>
      </section>

      {/* ====== My Work Section ====== */}
      <section className="work">
        <h1>My Work</h1>
        <div className="work-cards">
          <div className="card"><img src={s10} alt="Project 1" /></div>
          <div className="card"><img src={s20} alt="Project 2" /></div>
          <div className="card"><img src={s30} alt="Project 3" /></div>
          <div className="card"><img src={s40} alt="Project 4" /></div>
          <div className="card"><img src={s50} alt="Project 5" /></div>
          <div className="card"><img src={s60} alt="Project 6" /></div>
        </div>
      </section>

      {/* ====== Education Section ====== */}
      <section className="education">
        <h1>Education</h1>
        <ul>
          <li>Matric: Al-Hamd English School, Karachi – Pakistan</li>
          <li>Inter: Intermediate (ICS Science) - In Progress - Computer</li>
        </ul>
      </section>

      {/* ====== Skills Section ====== */}
      <section className="skills">
        <h1>Skills</h1>
        <ul>
          <li>MS Office</li>
          <li>Wordpress – Basic Knowledge</li>
          <li>PHP</li>
          <li>Laravel</li>
          <li>C# </li>
          <li>HTML</li>
          <li>CSS</li>
          <li>.Net</li>
          <li>Flutter</li>
          <li>React.Js – Learning / Currently Improving</li>
          <li>Adobe Illustrator – Beginner level</li>
          <li>Canva</li>
        </ul>
      </section>

      {/* ====== Contact Section ====== */}
      <section className="contact">
  <h1>Get In Touch</h1>
  <div className="contact-main-image">
    <img src={hsn3} alt="Get In Touch" />
  </div>
  <div className="contact-info">
    <span><i className="fas fa-home"></i> Karachi, Pakistan</span>
    <span><i className="fas fa-phone"></i> Mobile: 0333 337 2204</span>
    <span><i className="fas fa-envelope"></i> Email: hassanhere246@gmail.com</span>
      <span><i className="fas fa-envelope"></i> Instagram:  coder_syntax1294</span>
  </div>
</section>

    </div>
  );
};

export default App;
