import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useState, useEffect } from 'react';
import { faAngular, faCss, faDocker, faGit, faHtml5, faJava, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [loading, setLoading] = useState(true);
    const [loadedBars, setLoadedBars] = useState(false);

    const skillsData = [
        { name: 'Python (1 year)', value: 78, color: '#306998' },
        { name: 'Java (9 months)', value: 68, color: '#dd6300' },
        { name: 'PostgreSQL (4 months)', value: 65, color: '#ef5b65' },
        { name: 'CSS (3 months)', value: 45, color: '#28A4D9' },
        { name: 'JavaScript(3 months)', value: 30, color: '#f7df1e' },
        { name: 'C# (3 months)', value: 50, color: '#68217A' }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 1000);

        const timer2 = setTimeout(() => {
            setLoading(false);
            setLoadedBars(true);
        }, 1800);

        return () => {
            clearTimeout(timer);
            clearTimeout(timer2);
        };
    }, []);

    if (loading) return <div className='loader'></div>;

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <p>Hello, I'm Bogdan. I am currently starting my second year of my computer science/software technology studies in Sweden, Linnaeus University. I am a passionate learner with an indomitable ambition, especially when it comes to results, learning new things, and becoming the best version of myself.</p>

                <p>I am a confident, curious, creative, and ambitious individual who loves learning from others as well as working collaboratively in a team, which is also the best way I can learn new technologies and methodologies.</p>

                <p>So far, I've had some experience with the following: Java, Python, JavaScript, HTML5, CSS, SCSS, React framework, Entity Framework, C#, PostgreSQL, and of course SQL, with plans to expand my skills further in the future.</p>

                <p>For the moment, since I've only recently finished my first year in computer science, I've contributed to a project based in Java, utilizing PostgreSQL and Docker for the backend and JavaFX for the overall UI and front-end. This was my first full-stack project, where I also acted as the project manager for our small group of 4 people.</p>

                <p>I would describe myself as an active, social, and extroverted person who loves adventures, traveling, and all things tech, especially learning new programming languages. I am also a big sports fan with a passion for working out. I am a strong believer that nothing is impossible and always push my limits no matter the circumstances to reach my goals/objectives, whether in my personal or work life.</p>


                <div className='skills'>
                    {skillsData.map((skill, idx) => (
                        <div className='skill' key={idx} style={{ marginBottom: '20px' }}>
                            <span className='skill-name'>{skill.name}</span>
                            <div style={{
                                width: '400px',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                borderRadius: '4px',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    width: loadedBars ? `${skill.value}%` : '0%',
                                    backgroundColor: skill.color,
                                    height: '20px',
                                    borderRadius: '4px',
                                    transition: 'width 1.5s ease-in-out'
                                }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'><FontAwesomeIcon icon={faPython} color="#008cddff" /></div>
                    <div className='face2'><FontAwesomeIcon icon={faHtml5} color="#ff0202ff" /></div>
                    <div className='face3'><FontAwesomeIcon icon={faCss} color="#28A4D9" /></div>
                    <div className='face4'><FontAwesomeIcon icon={faDocker} color="#1085f3ff" /></div>
                    <div className='face5'><FontAwesomeIcon icon={faJava} color="#dd6300ff" /></div>
                    <div className='face6'><FontAwesomeIcon icon={faReact} color="#5ED4F4" /></div>
                    <div className='face7'><FontAwesomeIcon icon={faGit} color="#fc7147ff" /></div>
                </div>
            </div>
        </div>
    );
}

export default About;
