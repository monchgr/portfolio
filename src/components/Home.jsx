import "./About.css";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h2>{t("homeTitle")}</h2>
    </section>
  );
};

export default Home;
