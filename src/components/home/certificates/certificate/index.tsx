import { RibbonIcon } from "@assets/icons";
import { Image } from "@components/shared";
import classnames from "classnames";
import { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";

interface Props {
  certificateLink: string; // Certificate link
  certificateName: string; // Certificate name
  openCertificate: boolean; // State which certificate needs to be opened
  certificateImg: StaticImageData; // Certificate image
  handleClickOpenCertificate: (certificate: string) => void; // function which will open certificate
  certificateNumber: string; // Certificate number state, also use in handleClickOpenCertificate parameter
}

/**
 *
 * @param certificateLink Certificate link
 * @param certificateName Certificate name
 * @param certificateImg Certificate image
 * @param openCertificate State which certificate needs to be opened
 * @param handleClickOpenCertificate function which will open certificate
 * @param certificateNumber Certificate number state, also use in handleClickOpenCertificate parameter
 * @returns
 */

const Certificate = ({
  certificateLink,
  certificateName,
  certificateImg,
  openCertificate,
  handleClickOpenCertificate,
  certificateNumber,
}: Props) => {
  return (
    <div
      className={classnames("certificate", {
        "certificate-one": certificateNumber === "certificateOne",
        "certificate-two": certificateNumber === "certificateTwo",
        "certificate-three": certificateNumber === "certificateThree",
      })}
    >
      {/* certificate animation */}
      <div
        className={classnames("certificate-animation", {
          "certificate-animation--animate": openCertificate,
        })}
      >
        {/* certificate animation btn open */}
        <button
          className={classnames("certificate-animation__btn-open", {
            "certificate-animation__btn-open--animate": openCertificate,
          })}
          onClick={() => handleClickOpenCertificate(certificateNumber)}
        >
          OPEN
        </button>

        {/* certificate animations left */}
        <div
          className={classnames("certificate-animation__left", {
            "certificate-animation__left--animate": openCertificate,
          })}
        >
          <div className="certificate-animation__left-line"></div>
          <div className="certificate-animation__left-line"></div>
          <div className="certificate-animation__left-line--short"></div>
          <div className="certificate-animation__left-line"></div>
          <div className="certificate-animation__left-line"></div>
        </div>

        {/* certificate animations right */}
        <div
          className={classnames("certificate-animation__right", {
            "certificate-animation__right--animate": openCertificate,
          })}
        >
          <span
            className={classnames("certificate-animation__right-certified", {
              "certificate-animation__right-certified--animate":
                openCertificate,
            })}
          >
            Certified
          </span>
          <RibbonIcon classname="certificate-animation__right-ribbon" />
        </div>
      </div>

      {/* certificate buttons */}
      <div className="certificate-buttons">
        <h4 className="certificate-buttons__title">{certificateName}</h4>
        <Link href={certificateLink} passHref>
          <a target="_blank" rel="noreferrer">
            Certificate
          </a>
        </Link>
      </div>

      {/* certificate image */}
      <Image
        classname="certificate-img"
        src={certificateImg}
        alt="advance react certificate image"
      />
    </div>
  );
};

export default Certificate;
