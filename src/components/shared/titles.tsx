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

const SectionSubtitle: React.FC<Props> = ({ children }) => {
  return <h4 className="subtitle-section">{children}</h4>;
};

Title.Section = Section;
Title.SectionSubtitle = SectionSubtitle;

export default Title;
