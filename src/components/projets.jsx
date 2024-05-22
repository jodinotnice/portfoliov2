import { projets } from "../data.js";

export default function Projets() {
  return (
    <section id="projet">
      <p className="section__text__p1">Parcourez mes récents</p>
      <h1 className="title">Projets</h1>
      <div className="experience-details-container-2">
        <div className="about-containers-2">
          {projets.map((projet, index) => (
            <div key={index} className="details-container color-container-2">
              <div className="article-container2">
                <img
                  src={projet.image}
                  alt={projet.title}
                  className="project-img"
                />
                <h1>{projet.title}</h1>
                <p>{projet.description}</p>
                <h2 className="project-subtitle">{projet.subtitle}</h2>
              </div>

              <div className="btn-container2">
                <button className="btn btn-color-2 project-btn">
                  /GitHub/
                </button>
                <button className="btn btn-color-2 project-btn">
                  /Live Demo/
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <a href="#contact">
        <img
          src="./images/logo/arrow.png"
          alt="Arrow Icon"
          className="icon arrow"
        />
      </a>
    </section>
  );
}
