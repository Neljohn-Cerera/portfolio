import { img_contact } from "@assets/images";
import { Image, Title } from "@components/shared";

const ContactSection = () => {
  return (
    <section id="contactme" className="contact-section">
      <div className="container">
        {/* contact background image */}
        {/* <ContactIcon classname="contact-img" /> */}
        {/* about me img container */}
        <div className="contact-img__container">
          <Image
            src={img_contact}
            alt="Contact background picture"
            classname="contact-img"
          />
        </div>
        {/* contact details */}
        <div className="contact-details">
          <Title.Section classname="contact-details__title">
            CONTACT ME
          </Title.Section>
          <p className="contact-details__key">
            Mobile # : <br />
            <span className="contact-details__key-value">09457065593</span>
          </p>
          <p className="contact-details__key">
            Email : <br />
            <span className="contact-details__key-value">
              neljohncerera.github@gmail.com
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
