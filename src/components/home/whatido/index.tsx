import { TestIcon } from "@assets/icons";
import { Title } from "@components/shared";

const WhatIdoSection = () => {
  return (
    <div className="whatido-section">
      <div className="container">
        <Title.Section>WHAT I DO</Title.Section>
        <ul role="list" className="whatido__list">
          <li className="whatido__item">
            <TestIcon classname="whatido__item-icon" />
            <p className="whatido__item-detail">Responsive Design</p>
          </li>
          <li className="whatido__item">
            <TestIcon classname="whatido__item-icon" />
            <p className="whatido__item-detail">Mobile First</p>
          </li>
          <li className="whatido__item">
            <TestIcon classname="whatido__item-icon" />
            <p className="whatido__item-detail">Design to Code</p>
          </li>
          <li className="whatido__item">
            <TestIcon classname="whatido__item-icon" />
            <p className="whatido__item-detail">Design to Code</p>
          </li>
        </ul>
        <div className="whatido__line"></div>
      </div>
    </div>
  );
};

export default WhatIdoSection;
