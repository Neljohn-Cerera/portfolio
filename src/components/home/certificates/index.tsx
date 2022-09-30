import { img_certficate } from "@assets/images";
import { Title, Button } from "@components/shared";
import Image from "next/image";

const CertificatesSection = () => {
  return (
    <section className="certificates-section">
      <div className="container">
        <Title.Section>CERTIFICATES</Title.Section>
        <Title.SectionSubtitle>The Front End Career Path</Title.SectionSubtitle>
        <Image
          src={img_certficate}
          alt="Certificate"
          width={400}
          height={400}
        />
        <Button text="View all" classNames="certificates-btn" />
      </div>
    </section>
  );
};

export default CertificatesSection;
