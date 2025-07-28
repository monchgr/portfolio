import BlurText from "../components/BlurText";
import "./About.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section className="about-section">
      <h2>
        <BlurText
          text={t("about.title")}
          delay={100}
          animateBy="words"
          direction="top"
          className="text-2xl mb-4"
        />
      </h2>

      {/* contenedor de la imagen y texto */}
      <div className="about-content">
        <div className="about-image-container">
          {/* <img
            src="img/monserrat-foto.jpeg"
            alt={t("about.photoAlt")}
            className="profile-photo"
          /> */}
        </div>

        <div className="about-text-content">
          <p className="about-intro">{t("about.intro")}</p>{" "}
          {/* Tu nombre e introducción */}
          <p className="about-description">{t("about.description")}</p>{" "}
          {/* Tu biografía detallada */}
          <p className="about-strengths">{t("about.strengths")}</p>{" "}
          {/* Tus fortalezas y pasiones */}
          <p className="about-call-to-action">{t("about.callToAction")}</p>{" "}
          {/* Llamado a la acción */}
        </div>
      </div>
    </section>
  );
};

export default About;
