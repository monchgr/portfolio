import i18n from "i18next";
import { initReactI18next, Translation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "es", //Idioma por defecto
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          //Acá las traducciones en inglés
          //Menú de navegación
          nav: {
            about: "About",
            projects: "Projects",
            contact: "Contact",
          },
          // Contenido de ejemplo para las páginas
          homeTitle: "Welcome to my portfolio",

          //ABOUT
          about: {
            title: "About Me",
            photoAlt: "Montserrat Garcia profile picture",
            intro:
            //   "Hi! I'm Montserrat Garcia, a passionate Front-End Developer.",
            description:
            //   "My journey in web development focuses on creating intuitive and appealing user experiences. I enjoy transforming ideas into functional and visually impactful interfaces. I am motivated by the possibility of solving complex problems and seeing my code come to life in the browser.",
            strengths:
            //   "I am proficient in **Vanilla JavaScript** and currently specializing in **React**, building modern and efficient applications. I am passionate about **web accessibility** and **responsive design**, ensuring every project is inclusive and looks perfect on any device.",
            callToAction:
            //   "Ready to see my projects? Explore my work or contact me to discuss your next project.",
          },
          projectsTitle: "My Projects",
          projectsText: "Here is a list of my recent work.",
          contactTitle: "Get in Touch",
          contactText:
            "Feel free to reach out to me through the following channels.",
        },
      },
      es: {
        translation: {
          // Aquí van todas tus traducciones en español
          // Menú de navegación
          nav: {
            about: "Sobre mí",
            projects: "Proyectos",
            contact: "Contacto",
          },

          // Contenido de ejemplo para las páginas
          homeTitle: "Bienvenido a mi portafolio",
          // ABout
          about: {
            title: "Sobre Mí",
            photoAlt: "Foto de perfil de Montserrat García",
            intro:
            //   "¡Hola! Soy Montserrat García, una apasionada desarrolladora front-end.",
            description:
            //   "Mi viaje en el desarrollo web se centra en crear experiencias de usuario intuitivas y atractivas. Disfruto transformando ideas en interfaces funcionales y visualmente impactantes. Me motiva la posibilidad de resolver problemas complejos y ver cómo mi código cobra vida en el navegador.",
            strengths:
            //   "Soy experta en **Vanilla JavaScript** y actualmente me estoy especializando en **React**, construyendo aplicaciones modernas y eficientes. Me apasiona la **accesibilidad web** y el **diseño responsivo**, asegurando que cada proyecto sea inclusivo y se vea perfecto en cualquier dispositivo.",
            callToAction:
            //   "¿Listo para ver mis proyectos? Explora mi trabajo o contáctame para hablar sobre tu próximo proyecto.",
          },

          projectsTitle: "Mis Proyectos",
          projectsText: "Esta es una lista de mis trabajos recientes.",
          contactTitle: "Ponte en Contacto",
          contactText:
            "No dudes en contactarme a través de los siguientes canales.",
        },
      },
    },
  });

export default i18n;
