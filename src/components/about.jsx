export default function About() {
  return (
    <section id="profile">
      <div className="section_pic-container">
        <img
          src="./images/hero/gxmrd.png"
          alt="Jordan Akpovi profile picture"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hey, je suis </p>
        <h1 className="title">Jordan Akpovi</h1>
        <p className="section__text__p2">Developper Web</p>
        <div className="btn-container">
          <a href="#contact" className="btn btn-color-1">
            Contactez-moi
          </a>

          <a className="btn btn-color-2">CV</a>
        </div>
        <div id="social-container">
          <img src="./images/logo/linkedin.png" className="icon" />
          <img src="./images/logo/github.png" className="icon" />
        </div>
      </div>
    </section>
  );
}
