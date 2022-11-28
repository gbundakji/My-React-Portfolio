import '../../styles/Resume.css';
import { BsCloudDownload } from "react-icons/bs";

function Resume() {
    return (
    <div>
        <div>
            <div className="head">
                <h2>My Resume</h2>
                <a href={''} className="download" download>
                    <BsCloudDownload />
                </a>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="card">
                    <h3>My Education</h3>
                    <p>California State University Fullerton, 
                        B.A. Busines Administration (Finance)</p>
                    <p>University of California Irvine Boot Camps, Coding/Full-Stack Web Development</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="card">
                    <h3>Work Experience</h3>
                    <h5>Berkshire Hathaway HomeServices California Properties</h5>
                    <h6>Real Estate Broker Associate</h6>
                    <p>April 2021 - September 2022</p>
                    <h5>West Shores Realty</h5>
                    <h6>Real Estate Broker Associate</h6>
                    <p>October 2020 - April 2021</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="card">
                    <h3>My Programming Proficiencies</h3>
                    <ul>
                        <li>HTML/CSS/Git</li>
                        <li>JavaScript</li>
                        <li>JQuery</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>NoSQL</li>
                        <li>React</li>
                        <li>MERN Stack</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="card">
                    <h3>My Certifications</h3>
                    <h5>California Real Estate Broker License</h5>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="card">
                    <h3>Additional Information</h3>
                    <p>Languages: English and Arabic</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="card">
                    <h3>Contact Information</h3>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Resume;