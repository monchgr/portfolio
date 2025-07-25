import BlurText from '../components/BlurText';
import './About.css';

const Projects = () => (
    <section>
        <h2>
            <BlurText
                text="Proyectos"
                delay={100}
                animateBy="words"
                direction="top"
                className="text-2xl mb-4"
            />
        </h2>
  
    </section>
);

export default Projects;
