import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Title = (props: Props) => {
  return <>{props.children}</>;
};

const Section: React.FC<Props> = ({ children }) => {
  return <h3 className="title-section">{children}</h3>;
};

Title.Section = Section;

export default Title;
