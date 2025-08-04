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
                    <p>I am an ambitious, hardworking, and cooperative individual who aspires to gain extensive experience in the IT field.
                        I am seeking a position at an established IT company that offers the opportunity to learn the latest technologies and methodologies in software development.
                        I am eager to contribute my skills while continuously growing and developing professionally.</p>
                    <p>
                        I am a confident, curious, creative, and ambitious individual who loves learning from others
                        as well as working collaboratively in a team.
                    </p>
                    <p>I would describe myself as an active, social, and extroverted person
                        who loves adventures, traveling, and all things tech. I am also a big sports fan with a passion for working out.</p>
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
