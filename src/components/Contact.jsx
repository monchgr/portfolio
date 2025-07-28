import BlurText from "../components/BlurText";
import "./About.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="contacto">
      <h2>
        <BlurText
          text={t("contactTitle")}
          delay={100}
          animateBy="words"
          direction="top"
          className="text-2xl mb-4"
        />
      </h2>
      <div className="tarjeta-contacto">
        <a href="mailto:monseirina.garcia@gmail.com">
          Email: monseirina.garcia@gmail.com
        </a>
        <a href="http://github.com/monchgr">GitHub: github.com/monchgr</a>
      </div>
    </section>
  );
};

export default Contact;
