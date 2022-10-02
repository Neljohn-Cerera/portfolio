import React, { ReactNode } from "react";
import classnames from "classnames";

interface Props {
  children: ReactNode;
  classname?: string;
}

const Title = (props: Props) => {
  return <>{props.children}</>;
};

const Section: React.FC<Props> = ({ children, classname }) => {
  return <h3 className={classnames("title-section", classname)}>{children}</h3>;
};

const SectionSubtitle: React.FC<Props> = ({ children, classname }) => {
  return (
    <h4 className={classnames("subtitle-section", classname)}>{children}</h4>
  );
};

Title.Section = Section;
Title.SectionSubtitle = SectionSubtitle;

export default Title;
