
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import "./index.scss";
import Loader from "react-loaders";
import portfolioImage from "../../assets/images/PortfolioImage.png";
import kioskImage from "../../assets/images/KioskImage.png";

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

   if (loading){
        return <div className='loader'></div>
    }

  return (
    <div className="projects">
      <h1 className="page-title">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
          idx={15}
        />
      </h1>
      <p className="click-instruction">Click on images to open project repos!</p>

      <div className="projects-container">
        <a href="https://github.com/BogdanSorinescu/Portfolio-Webbsite" target="_blank" rel="noopener noreferrer" className="project-link">
          <div className="slide-cards">
            <img src={portfolioImage} alt="Portfolio" />
            <h2>Portfolio Website</h2>
            <p>Responsive Portfolio website made with JavaScript, React and SCSS.</p>
          </div>
        </a>

        <div className="slide-cards">
          <img src={kioskImage} alt="Kiosk" />
          <h2>Self service kiosk</h2>
          <p>University project made with PostgreSQL backend, Java for functionality and JavaFX.</p>
        </div>
      </div>
    </div>
  )



};

export default Projects;
