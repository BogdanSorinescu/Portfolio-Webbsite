import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { faAngular, faCss, faDocker, faGit, faHtml5, faJava, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 1000);

        const timer2 = setTimeout(() => {
            setLoading(false);
        }, 1800);

        return () => {
            clearTimeout(timer);
            clearTimeout(timer2);
        };
    }, []);

    if (loading){
        return <div className='loader'></div>
    }
    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>Hello, I'm Bogdan, I am currently starting my second year of my computer science/software technology studies in Sweden, Linnaeus University. I am a passionate learner with a indomitable ambition especially when it comes to results and learning new things and to become the best version of myself. </p>
                    <p>
                        I am a confident, curious, creative, and ambitious individual who loves learning from others
                        as well as working collaboratively in a team, that also being the best way I can learn new technologies and methodologies.
                    </p>

                    <p>So far ive had some experience with the following: Java, Python, JavaScript, Html5, css, scss, react framework, entity framework, C#, PostgreSQL and of course SQL and with plans to expand my skills for the future of course.</p>
                    <p>For the moment since Ive only recently finished my first year in compute science ive contributed to a project based in Java, utilizing PostgreSQL and docker for the backend and JavaFX for the overall UI and front-end. Thus being my first fullstack project where i also was the project manager for our small group of 4 people.</p>
                    <p>I would describe myself as an active, social, and extroverted person
                        who loves adventures, traveling, and all things tech, especially learning new programming languages. I am also a big sports fan with a passion for working out. As well as a huge believer in that nothing is impossible, and always push my limits no matter the circumstances in order to reach my goals/objectives wether thats in my personal or work life.</p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faPython} color="#008cddff" />
                        </div>

                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#ff0202ff" />
                        </div>

                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss} color="#28A4D9" />
                        </div>

                        <div className='face4'>
                            <FontAwesomeIcon icon={faDocker} color="#1085f3ff" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJava} color="#dd6300ff" />
                        </div>

                        <div className='face6'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className='face7'>
                            <FontAwesomeIcon icon={faGit} color="#fc7147ff" />
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default About; 
