import i18n from 'i18next';
import { initReactI18next, Translation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { interpolate } from 'framer-motion';
import Projects from './components/Projects';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'es', //Idioma por defecto
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    //Acá las traducciones en inglés
                    //Menú de navegación
                    about: 'About',
                    projects: 'Projects',
                    contact: 'Contact',

                    // Contenido de ejemplo para las páginas
                    homeTitle: 'Welcome to my portfolio',
                    aboutTitle: 'About Me',
                    aboutText: 'This is where you can write a paragraph about yourself.',
                    projectsTitle: 'My Projects',
                    projectsText: 'Here is a list of my recent work.',
                    contactTitle: 'Get in Touch',
                    contactText: 'Feel free to reach out to me through the following channels.'
                }
            },
            es: {
                translation: {
                    // Aquí van todas tus traducciones en español
                    // Menú de navegación
                    about: 'Sobre mí',
                    projects: 'Proyectos',
                    contact: 'Contacto',

                    // Contenido de ejemplo para las páginas
                    homeTitle: 'Bienvenido a mi portafolio',
                    aboutTitle: 'Sobre Mí',
                    aboutText: 'Aquí es donde puedes escribir un párrafo sobre ti.',
                    projectsTitle: 'Mis Proyectos',
                    projectsText: 'Esta es una lista de mis trabajos recientes.',
                    contactTitle: 'Ponte en Contacto',
                    contactText: 'No dudes en contactarme a través de los siguientes canales.'
                }
            }
        }
    })

    export default i18n;