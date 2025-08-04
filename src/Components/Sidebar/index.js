import { Link, NavLink } from "react-router-dom"
import "./index.scss"
import LogoS from "../../assets/images/NewBogdanLogo.png"
import logoSub from '../../assets/images/NewlogoSubs.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faProjectDiagram, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faRProject } from "@fortawesome/free-brands-svg-icons";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons/faSuitcase";

const Sidebar = () => (
    <div className = "nav-bar">
        <Link className="logo" to ="/">
            <img src ={LogoS} alt= "logo" />
            <img className="sub-logo" src ={logoSub} alt= "bogdan" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon = {faHome} color="#3a3a3aff"/>
            </NavLink>

             <NavLink exact="true" activeclassname="active"  className="about-link" to="/about">
                <FontAwesomeIcon icon = {faUser} color="#3a3a3aff"/>
            </NavLink>

             <NavLink exact="true" activeclassname="active" className= "contact-link" to="/contact">
                <FontAwesomeIcon icon = {faEnvelope} color="#3a3a3aff"/>
            </NavLink>
             <NavLink exact="true" activeclassname="active" className= "projects-link" to="/projects">
                <FontAwesomeIcon icon = {faProjectDiagram} color="#3a3a3aff"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                    target ="_blank" 
                    rel ="noreferrer" 
                    href="https://www.linkedin.com/in/bogdan-sorinescu-6b1613348/" >
                    <FontAwesomeIcon icon = {faLinkedin} color="#3a3a3aff"/>
                </a>
            </li>

            <li>
                <a 
                    target ="_blank" 
                    rel ="noreferrer" 
                    href="https://github.com/BogdanSorinescu" >
                    <FontAwesomeIcon icon = {faGithub} color="#3a3a3aff"/>
                </a>
            </li>


        </ul>
    </div>

)

export default Sidebar