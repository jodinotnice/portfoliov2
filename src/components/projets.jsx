export default function Projets() {
  return (
    <section>
      <p className="section__text__p1">Parcourez mes récents</p>
      <h1 className="title">Projets</h1>
      <div className="experience-details-container">
        <div className="details-container color-container">
          <div className="article-container">
            <img
              src="./images/hero/gxmrd.png"
              alt="Project 1"
              className="project-img"
            />
          </div>
          <h2 className="experience-subtitle project-title">Project One</h2>
          <div className="btn-container">
            <button className="btn btn-color-2 project-btn">GitHub</button>
          </div>
        </div>
      </div>
    </section>
  );
}
