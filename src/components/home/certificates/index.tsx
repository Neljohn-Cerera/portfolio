import { RibbonIcon } from "@assets/icons";
import {
  img_certificate_advancereact,
  img_certificate_frontendcareerpath,
  img_certificate_learnresponsivedesign,
} from "@assets/images";
import { Title, Image } from "@components/shared";
import classnames from "classnames";
import { useState } from "react";

const CertificatesSection = () => {
  const [openCertificateOne, setOpenCertificateOne] = useState(false);
  const [openCertificateTwo, setOpenCertificateTwo] = useState(false);
  const [openCertificateThree, setOpenCertificateThree] = useState(false);

  const handleClickOpenCertificate = (certificate: string) => {
    if (certificate === "certificateOne") {
      setOpenCertificateOne(true);
    } else if (certificate === "certificateTwo") {
      setOpenCertificateTwo(true);
    } else {
      setOpenCertificateThree(true);
    }

    return;
  };

  return (
    <section className="certificates-section">
      <div className="container">
        {/* certificate title */}
        <Title.Section classname="certificate-title">
          CERTIFICATES
        </Title.Section>

        {/* certificate one */}
        <div className="certificate certificate-one">
          {/* certificate animations */}
          <div
            className={classnames("certificate-animation", {
              "certificate-animation--animate": openCertificateOne,
            })}
          >
            <button
              className={classnames("certificate-animation__btn-open", {
                "certificate-animation__btn-open--animate": openCertificateOne,
              })}
              onClick={() => handleClickOpenCertificate("certificateOne")}
            >
              OPEN
            </button>
            <div
              className={classnames("certificate-animation__left", {
                "certificate-animation__left--animate": openCertificateOne,
              })}
            >
              <div className="certificate-animation__left-line"></div>
              <div className="certificate-animation__left-line"></div>
              <div className="certificate-animation__left-line--short"></div>
              <div className="certificate-animation__left-line"></div>
              <div className="certificate-animation__left-line"></div>
            </div>
            <div
              className={classnames("certificate-animation__right", {
                "certificate-animation__right--animate": openCertificateOne,
              })}
            >
              <RibbonIcon classname="certificate-animation__right-ribbon" />
            </div>
          </div>
          {/* certificate buttons */}
          <div className="certificate-buttons">
            <h4 className="certificate-buttons__title">Advance React</h4>
            <button>Certificate</button>
          </div>
          {/* certificate image */}
          <Image
            classname="certificate-img"
            src={img_certificate_advancereact}
            alt="advance react certificate image"
          />
        </div>

        {/* certificate two */}
        <div className="certificate certificate-two">
          {/* certificate animations */}
          <div
            className={classnames("certificate-animation", {
              "certificate-animation--animate": openCertificateTwo,
            })}
          >
            <button
              className={classnames("certificate-animation__btn-open", {
                "certificate-animation__btn-open--animate": openCertificateTwo,
              })}
              onClick={() => handleClickOpenCertificate("certificateTwo")}
            >
              OPEN
            </button>
            <div
              className={classnames("certificate-animation__left", {
                "certificate-animation__left--animate": openCertificateTwo,
              })}
            >
              <div className="certificate-animation__left-line"></div>
              <div className="certificate-animation__left-line"></div>
              <div className="certificate-animation__left-line--short"></div>
              <div className="certificate-animation__left-line"></div>
              <div className="certificate-animation__left-line"></div>
            </div>
            <div
              className={classnames("certificate-animation__right", {
                "certificate-animation__right--animate": openCertificateTwo,
              })}
            >
              <RibbonIcon classname="certificate-animation__right-ribbon" />
            </div>
          </div>
          {/* certificate buttons */}
          <div className="certificate-buttons">
            <h4 className="certificate-buttons__title">
              Front End Development Career Path
            </h4>
            <button>Certificate</button>
          </div>
          {/* certificate image */}
          <Image
            classname="certificate-img"
            src={img_certificate_frontendcareerpath}
            alt="front end development career path certificate image"
          />
        </div>

        {/* certificate three */}
        <div className="certificate certificate-three">
          {/* certificate animations */}
          <div
            className={classnames("certificate-animation", {
              "certificate-animation--animate": openCertificateThree,
            })}
          >
            <button
              className={classnames("certificate-animation__btn-open", {
                "certificate-animation__btn-open--animate":
                  openCertificateThree,
              })}
              onClick={() => handleClickOpenCertificate("certificateThree")}
            >
              OPEN
            </button>
            <div
              className={classnames("certificate-animation__left", {
                "certificate-animation__left--animate": openCertificateThree,
              })}
            >
              <div className="certificate-animation__left-line"></div>
              <div className="certificate-animation__left-line"></div>
              <div className="certificate-animation__left-line--short"></div>
              <div className="certificate-animation__left-line"></div>
              <div className="certificate-animation__left-line"></div>
            </div>
            <div
              className={classnames("certificate-animation__right", {
                "certificate-animation__right--animate": openCertificateThree,
              })}
            >
              <RibbonIcon classname="certificate-animation__right-ribbon" />
            </div>
          </div>
          {/* certificate buttons */}
          <div className="certificate-buttons">
            <h4 className="certificate-buttons__title">
              Learn Responsive Design
            </h4>
            <button>Certificate</button>
          </div>
          {/* certificate image */}
          <Image
            classname="certificate-img"
            src={img_certificate_learnresponsivedesign}
            alt="learn responsive design certificate image"
          />
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
