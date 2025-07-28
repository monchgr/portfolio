import BlurText from '../components/BlurText';
import './About.css';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    return (
        <section>
            <h2 className='titulo2'>
                <BlurText
                    text={t('aboutTitle')}
                    delay={100}
                    animateBy="words"
                    direction="top"
                    className="text-2xl mb-4"
                />
            </h2>
            <p>{t('aboutText')}</p>

        </section>
    );
};

export default About;