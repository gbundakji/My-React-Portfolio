import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
// import footImg from "../../../public/images/space.jpg"

function Footer() {
    return (
      <footer>
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