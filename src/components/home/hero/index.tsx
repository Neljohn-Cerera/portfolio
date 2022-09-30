import { FacebookIcon, GithubIcon, LinkinIcon } from "@assets/icons";

const HeroSection = () => {
  return (
    <section className="section-hero">
      <div className="container">
        <div className="section-hero__details">
          <h1>HELLO</h1>
          <h2>I'm</h2>
          <h2>
            Neljohn <span>Cerera</span>
          </h2>
          <p>Web Developer</p>
        </div>
        <div className="section-hero__socials">
          <p>Follow me</p>
          <div></div>
          <FacebookIcon classname="icon-social" />
          <GithubIcon classname="icon-social" />
          <LinkinIcon classname="icon-social" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
