import { FacebookIcon, GithubIcon, LinkinIcon } from "@assets/icons";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-section__details">
          <h1 className="hero-title">HELLO</h1>
          <h2 className="hero-subtitle">
            I'm <br />
            Neljohn <span>Cerera</span>
          </h2>
          <div className="hero-detail__line"></div>
          <p className="hero-detail__role">Web Developer</p>
        </div>
        <div className="hero-section__socials">
          <p className="hero-social__title">Follow me</p>
          <div className="hero-social__line"></div>
          <div className="hero-social__icons">
            <FacebookIcon classname="icon-social" />
            <GithubIcon classname="icon-social" />
            <LinkinIcon classname="icon-social" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
