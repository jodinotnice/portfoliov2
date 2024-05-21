import { skills } from "../data-stack";

export default function Skills() {
  return (
    <section id="experience">
      <p className="section__text__p1">Explorez Mes</p>
      <h1 className="title">Compétences</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-subtitle">Frontend</h2>
            <div className="article-container">
              {skills.map(
                (competence) =>
                  competence.titleFront && (
                    <article key={competence.id}>
                      <img
                        className="icon"
                        src="./images/logo/checkmark.png"
                        alt="Icon compétences"
                      />

                      <div>
                        <h2>{competence.titleFront}</h2>
                      </div>
                    </article>
                  )
              )}
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-subtitle">Backend</h2>
            <div className="article-container">
              {skills.map(
                (competence) =>
                  competence.titleBack && (
                    <article key={competence.id}>
                      <img
                        className="icon"
                        src="./images/logo/checkmark.png"
                        alt="Icône compétences"
                      />

                      <div>
                        <h2>{competence.titleBack}</h2>
                      </div>
                    </article>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
      <a href="#projet">
        <img
          src="./images/logo/arrow.png"
          alt="Arrow Icon"
          className="icon arrow"
        />
      </a>
    </section>
  );
}
