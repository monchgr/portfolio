import { useState } from "react";
import "./App.css";
import "./index.css";
import Waves from "./Waves";
import Switch from "./Switch";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  const { t } = useTranslation();

  const [modoOscuro, setModoOscuro] = useState(false);

  const handleToggle = () => {
    setModoOscuro(!modoOscuro);
  };

  return (
    <div className={modoOscuro ? "oscuro" : "claro"}>
      <Router>
        <div className="todo">
          <Waves
            lineColor="#E4E4E7"
            backgroundColor="rgba(255, 255, 255, 0.2)"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />

          <header>
            <div className="carta">
              <h1>Monserrat</h1>
              <div className="selectores">
                <Switch onToggle={handleToggle} isChecked={modoOscuro} />
                <LanguageSwitcher isDarkMode={modoOscuro} />
              </div>
            </div>
            </header>

            <div className="flex flex-row items-start gap-8 mt-10">
              <nav className="w-[30%]">
                <ul>
                  <li>
                    <Link to="/About">{t("nav.about")}</Link>
                  </li>
                  <li>
                    <Link to="/Projects">{t("nav.projects")}</Link>
                  </li>
                  <li>
                    <Link to="/Contact">{t("nav.contact")}</Link>
                  </li>
                  <li>
                    <Link to="/Skills">{t("nav.skills")}</Link>
                  </li>
                </ul>
              </nav>
         

          <main className="w-[70%]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Skills" element={<Skills />} />
            </Routes>
          </main>
          </div>
        </div>
   
      </Router >
   
    </div >
  );
}

export default App;
