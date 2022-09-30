import { Title } from "@components/shared";

const AboutMeSection = () => {
  return (
    <section className="aboutme-section">
      <div className="container">
        <Title.Section>About Me</Title.Section>
        <p className="aboutme__details">
          I'm a recent college graduate with a Bachelor of Science in
          Information Technology who is passionate and committed to developing
          websites and integrating Android applications.
        </p>
      </div>
    </section>
  );
};

export default AboutMeSection;
