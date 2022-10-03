import {
  img_certificate_advancereact,
  img_certificate_frontendcareerpath,
  img_certificate_learnresponsivedesign,
} from "@assets/images";
import { Title, Button, Image } from "@components/shared";

const CertificatesSection = () => {
  return (
    <section className="certificates-section">
      <div className="container">
        {/* certificate title */}
        <Title.Section classname="certificate-title">
          CERTIFICATES
        </Title.Section>

        {/* certificate one */}
        <div className="certificate certificate-one">
          <div className="certificate-buttons">
            <h4 className="certificate-buttons__title">Advance React</h4>
            <button>View</button>
          </div>
          <Image
            classname="certificate-img"
            src={img_certificate_advancereact}
            alt="advance react certificate image"
          />
        </div>

        {/* certificate two */}
        <div className="certificate certificate-two">
          <div className="certificate-buttons">
            <h4 className="certificate-buttons__title">
              Front End Development Career Path
            </h4>
            <button>View</button>
          </div>
          <Image
            classname="certificate-img"
            src={img_certificate_frontendcareerpath}
            alt="front end development career path certificate image"
          />
        </div>

        {/* certificate three */}
        <div className="certificate certificate-three">
          <div className="certificate-buttons">
            <h4 className="certificate-buttons__title">
              Learn Responsive Design
            </h4>
            <button>View</button>
          </div>
          <Image
            classname="certificate-img"
            src={img_certificate_learnresponsivedesign}
            alt="learn responsive design certificate image"
          />
        </div>

        {/* certificate btn */}
        <Button text="View all" classNames="certificates-btn" />
      </div>
    </section>
  );
};

export default CertificatesSection;
