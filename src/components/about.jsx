import pdf from "../assets/CVJordanAkpovi2024.pdf";
import { Typewriter } from "react-simple-typewriter";

export default function About() {
  return (
    <section id="profile">
      <div className="section_pic-container">
        <img
          className="profile-picture"
          src="./images/hero/DSC083341.jpg"
          alt="Jordan Akpovi profile picture"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hey, je suis </p>
        <h1 className="title">Jordan Akpovi</h1>
        <h1 className="section__text__p2">
          <Typewriter
            words={["Développeur Web"]}
            loop={0}
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={3000}
          />
        </h1>

        <div className="btn-container">
          <a
            className="btn btn-color-2"
            href={pdf}
            target="_blank"
            download="CVJordanAkpovi2024.pdf"
            rel="noopener noreferrer"
          >
            Mon CV
          </a>

          <a className="btn btn-color-1" href="#contact">
            Contactez-moi
          </a>
        </div>
        <div id="social-container">
          <a
            href="https://www.linkedin.com/in/jordan-akpovi-50b372109/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/logo/linkedin.png" className="icon" />
          </a>
          <a
            href="https://github.com/jodinotnice"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/logo/github.png" className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
