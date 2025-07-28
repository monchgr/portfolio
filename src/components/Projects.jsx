import BlurText from '../components/BlurText';
import './Projects.css';
import { useTranslation } from 'react-i18next';

const projects = [
  {
    title: 'App del clima',
    image: 'img/web-clima.jpg', // Reemplaza con la ruta correcta
    link: 'api-clima-proyecto.vercel.app',
  },
  {
    title: 'Mi Proyecto 2',
    image: 'img/web.jpg',
    link: 'https://mi-proyecto2.com',
  },  {
    title: 'App del clima',
    image: 'img/web.jpg',
    link: 'https://mi-proyecto2.com',
  },
  // Agrega más proyectos  aquí
];
const Projects = () => { 
    const { t } = useTranslation();
    return ( 

    <section className='projects-section'>
        <h2>
            <BlurText
                text={t('projectsTitle')}
                delay={100}
                animateBy="words"
                direction="top"
                className="text-2xl mb-4"
            />
        </h2>
        <div className="projects-container">
            {projects.map((project, index) => (
                <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card"
                >
                    <img src={project.image} alt={project.title} />
                    <div className="project-info">
                        <h3>{project.title}</h3>
                    </div>
                </a>
            ))}
        </div>
    </section>
    );
};

export default Projects;
