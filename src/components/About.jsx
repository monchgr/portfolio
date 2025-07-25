import BlurText from '../components/BlurText';
import './About.css';

const About = () => (
    <section>
        <h2 className='titulo2'>
            <BlurText
                text="Sobre mí"
                delay={100}
                animateBy="words"
                direction="top"
                className="text-2xl mb-4"
            />
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illo ex quasi a maiores consequatur
             est eveniet, quisquam eligendi odio consectetur fuga eaque ad soluta, pariatur porro ipsam similique id?.</p>

    </section>
);

export default About;