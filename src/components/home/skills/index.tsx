import { img_mongodb } from "@assets/images";
import { Title } from "@components/shared";
import Image from "next/image";

const SkillsSection = () => {
  return (
    <div className="skills-section">
      <div className="container">
        <Title.Section>SKILLS</Title.Section>
        <ul role={"list"} className="skills-image__list">
          <li className="skills-image__item">
            <Image
              src={img_mongodb}
              alt="Mongo db skills image"
              width={100}
              height={100}
            />
          </li>
          <li className="skills-image__item">
            <Image
              src={img_mongodb}
              alt="Mongo db skills image"
              width={100}
              height={100}
            />
          </li>
          <li className="skills-image__item">
            <Image
              src={img_mongodb}
              alt="Mongo db skills image"
              width={100}
              height={100}
            />
          </li>
          <li className="skills-image__item">
            <Image
              src={img_mongodb}
              alt="Mongo db skills image"
              width={100}
              height={100}
            />
          </li>
          <li className="skills-image__item">
            <Image
              src={img_mongodb}
              alt="Mongo db skills image"
              width={100}
              height={100}
            />
          </li>
          <li className="skills-image__item">
            <Image
              src={img_mongodb}
              alt="Mongo db skills image"
              width={100}
              height={100}
            />
          </li>
          <li className="skills-image__item">
            <Image
              src={img_mongodb}
              alt="Mongo db skills image"
              width={100}
              height={100}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsSection;
