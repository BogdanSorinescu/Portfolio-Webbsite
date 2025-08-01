import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/NewBogdanLogo.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import React, { useEffect, useState } from 'react';
import Logo from './Logo';

const Home = ()=>{
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['o', 'g', 'd', 'a', 'n']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r','e', ' ', 'D', 'e','v', 'e','l','o','p','e','r']

    useEffect(() => {
    const timer = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(timer);
}, []);


    return (
        <div className="container home-page">
            <div className="text-zone">

                <h1> 
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>

                <h2>Software Developer / Software Technology student </h2>
                <br></br>
                <Link to = "/contact" className='flat-button'>CONTACT ME</Link>
            </div>

            <Logo/>
            
        </div>
    );
}

export default Home