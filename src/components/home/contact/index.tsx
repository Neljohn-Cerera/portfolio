import { img_contact } from "@assets/images";
import { Image, Title } from "@components/shared";
import { useInView } from "react-intersection-observer";
import classnames from "classnames";

const ContactSection = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <section ref={ref} id="contactme" className="contact-section">
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
          <Title.Section
            classname={classnames("contact-details__title", {
              "contact-details__title--animate": inView,
            })}
          >
            CONTACT ME
          </Title.Section>
          <p
            className={classnames("contact-details__key", {
              "contact-details__key--animate": inView,
            })}
          >
            Mobile # : <br />
            <span className="contact-details__key-value">09457065593</span>
          </p>
          <p
            className={classnames("contact-details__key", {
              "contact-details__key--animate": inView,
            })}
          >
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
