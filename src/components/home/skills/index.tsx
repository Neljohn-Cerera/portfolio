import {
  img_mongodb,
  img_skills_nextjs,
  img_skills_nodejs,
  img_skills_msyql,
  img_skills_reactjs,
  img_skills_tailwind,
  img_skills_postgres,
} from "@assets/images";
import { Image, Title } from "@components/shared";

const SkillsSection = () => {
  return (
    <div className="skills-section">
      <div className="container">
        <Title.Section>SKILLS</Title.Section>
        <ul role={"list"} className="skills-image__list">
          <li className="skills-image__item">
            <Image src={img_skills_nextjs} alt="Nextjs logo" />
          </li>
          <li className="skills-image__item">
            <Image src={img_skills_nodejs} alt="Nodejs logo" />
          </li>
          <li className="skills-image__item">
            <Image src={img_skills_msyql} alt="Mysql logo" />
          </li>
          <li className="skills-image__item">
            <Image src={img_skills_reactjs} alt="Reactjs logo" />
          </li>
          <li className="skills-image__item">
            <Image src={img_skills_tailwind} alt="Tailwind CSS logo" />
          </li>
          <li className="skills-image__item">
            <Image
              src={img_skills_postgres}
              alt="PostgreSQL logo"
              classname=""
            />
          </li>
          <li className="skills-image__item">
            <Image src={img_mongodb} alt="Mongodb logo" classname="" />
          </li>
        </ul>

        <div className="skills-shapes">
          <div className="skills-shapes__circle"></div>
          <div className="skills-shapes__circle"></div>
          <div className="skills-shapes__circle"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
