import {
  DataStructureIcon,
  ResponsiveMobileIcon,
  MobileIcon,
  CodeIcon,
} from "@assets/icons";
import { Title } from "@components/shared";

const WhatIdoSection = () => {
  return (
    <div id="WhatIDo" className="whatido-section">
      <div className="container">
        <Title.Section classname="whatido-title">WHAT I DO</Title.Section>
        {/* whatido list */}
        <ul role="list" className="whatido__list">
          <li className="whatido__item">
            <ResponsiveMobileIcon classname="whatido__item-icon" />
            <p className="whatido__item-detail">Responsive Design</p>
          </li>
          <li className="whatido__item">
            <MobileIcon classname="whatido__item-icon" />
            <p className="whatido__item-detail">Mobile First</p>
          </li>
          <li className="whatido__item">
            <CodeIcon classname="whatido__item-icon" />
            <p className="whatido__item-detail">Design to Code</p>
          </li>
          <li className="whatido__item">
            <DataStructureIcon classname="whatido__item-icon" />
            <p className="whatido__item-detail">Data Structure</p>
          </li>
        </ul>
        {/* <div className="whatido__line"></div> */}
      </div>
    </div>
  );
};

export default WhatIdoSection;
