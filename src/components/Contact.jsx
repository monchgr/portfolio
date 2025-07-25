import BlurText from '../components/BlurText';
import './About.css';

const Contact = () => (
    <section className='contacto'>
        <h2>
            <BlurText
                text="Contacto"
                delay={100}
                animateBy="words"
                direction="top"
                className="text-2xl mb-4"
            />
        </h2>
        <div className="tarjeta-contacto">
        <a href="mailto:monseirina.garcia@gmail.com">Email: monseirina.garcia@gmail.com</a>
        <a href="http://github.com/monchgr">GitHub: github.com/monchgr</a>
        </div>
    </section>
);

export default Contact;
