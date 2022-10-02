import { img_me } from "@assets/images";
import { Image, Title } from "@components/shared";

const AboutMeSection = () => {
  return (
    <section className="aboutme-section">
      <div id="AboutMe" className="container">
        <Title.Section classname="aboutme-title">About Me</Title.Section>

        {/* about me details */}
        <p className="aboutme-details">
          {"I'm"} a recent college graduate with a Bachelor of Science in
          Information Technology who is passionate and committed to developing
          websites and integrating Android applications.
        </p>

        {/* about me img container */}
        <div className="aboutme-img__container">
          <Image
            src={img_me}
            alt="Graduation picture"
            classname="aboutme-details__img"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
