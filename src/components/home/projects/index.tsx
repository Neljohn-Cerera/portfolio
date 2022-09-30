import { img_mobile } from "@assets/images";
import { Title, Button } from "@components/shared";
import Image from "next/image";

const ProjectSection = () => {
  return (
    <section className="project-section">
      <div className="container">
        <Title.Section>PROJECTS</Title.Section>
        <Image
          src={img_mobile}
          alt="Mongo db skills image"
          width={400}
          height={400}
        />
        <div className="project-details">
          <Title.SectionSubtitle>
            Library Book Reservation
          </Title.SectionSubtitle>
          <p className="project-details__title">Technology Used</p>
          <ul role={"list"} className="project-details__tech-list">
            <li className="project-details__tech-list__item">
              Next js Typescript
            </li>
            <li className="project-details__tech-list__item">Tailwind css</li>
            <li className="project-details__tech-list__item">Graphql</li>
            <li className="project-details__tech-list__item">
              Apollo Express Server
            </li>
            <li className="project-details__tech-list__item">
              React native Expo
            </li>
            <li className="project-details__tech-list__item">Postgres</li>
          </ul>
        </div>
        <Button text="View all" classNames="project-btn" />
      </div>
    </section>
  );
};

export default ProjectSection;
