import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import footImg from "../../images/space.jpg"
import '../../styles/Footer.css';

function Footer() {
    return (
      <footer>
        <img src={footImg} className="footimg" style={{ width: "100%" }} alt="foot cover"/>
        <h2>Made with React</h2>
        <h3>By: Gassan Bundakji</h3>
        
        <p>
          <ul>
            <a href="https://github.com/gbundakji">
              <li className="icon">
                <VscGithubAlt />
              </li>
            </a>
            <a href="https://www.linkedin.com/in/gassanbundakji/">
              <li className="icon">
                <AiOutlineLinkedin />
              </li>
            </a>
            <a href="https://www.instagram.com/gassanbundakji/">
              <li className="icon">
                <FaInstagram />
              </li>
            </a>
          </ul>
        </p>
      </footer>
    );
  }
  
  export default Footer;