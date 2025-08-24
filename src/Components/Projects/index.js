
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import "./index.scss";
import Loader from "react-loaders";


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

      <div className="projects-container">
        <div className="slide-cards">
          <img src="/images/PortfolioImage.png" alt="Portfolio" />
          <h2>Portfolio Website</h2>
          <p>Responsive Portfolio website made with JavaScript, React and SCSS.</p>
        </div>

        <div className="slide-cards">
          <img src="/images/KioskImage.png" alt="Portfolio" />
          <h2>Self service kiosk</h2>
          <p>University project made with PostgreSQL backend, Java for functionality and JavaFX.</p>
        </div>
      </div>
    </div>
  )



};

export default Projects;
