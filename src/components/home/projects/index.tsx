import { img_books, img_mobile } from "@assets/images";
import { Title, Button, Image } from "@components/shared";
// import Image from "next/image";

const ProjectSection = () => {
  return (
    <section id="Projects" className="project-section">
      <div className="container">
        <Title.Section classname="project-title">PROJECTS</Title.Section>

        <Image
          src={img_books}
          alt="Hands holding Books picture"
          classname="project-img"
        />

        {/* project details */}
        <div className="project-details">
          <Title.SectionSubtitle>
            Library Book Reservation
          </Title.SectionSubtitle>
          {/* project details tech list */}
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
            <li className="project-details__tech-list__item">PostgreSQL</li>
          </ul>
        </div>

        {/* project view all button */}
        <Button text="View all" classNames="project-btn" />
      </div>
    </section>
  );
};

export default ProjectSection;
