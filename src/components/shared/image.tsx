import classnames from "classnames";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  alt: string;
  src: StaticImageData;
  classname?: string;
}

const image = ({ alt, src, classname }: Props) => {
  return (
    <div className={classnames("img-container", classname)}>
      <Image src={src} alt={alt} layout="fill" />
    </div>
  );
};

export default image;
