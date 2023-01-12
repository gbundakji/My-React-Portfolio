import '../../styles/Portfolio.css';
import weatherDash from '../../images/weather-dashboard.png';
import employeeTracker from '../../images/Employee1.png';
import noteTaker from '../../images/note-taker1.png';
import projectImg from '../../images/project2.png';
import noSqlImg from '../../images/createreaction.png';



function Portfolio() {
    return (
        <div>
            <div className="work">
                <div className="head">
                    <h2>Projects</h2>
                </div>
            </div>
            <div className="all-proj">
                <div className="project">
                    <h3>NoSql Api</h3>
                        <p>
                        This is an API for a social network web application where users can share 
                        their thoughts, react to a friends thought, and create a friend list. 
                        We will use Express.js for routing, a MongoDB database, and the Mongoose ODM.
                        </p>
                    <a href="https://github.com/gbundakji/NoSQL-API">
                        <img src={noSqlImg} className="proj-img" alt="Social Media Back-End" />
                    </a>
                </div>
                <div className="project">
                    <h3>Bark Movies</h3>
                        <p>
                        This application is a full-stack application created to be a movie review website
                        based on an audience rating built around a playfull dog theme. This application allows
                        you to make an account, sign in, give a movie a rating, and leave a review.
                        </p>
                    <a href="https://github.com/aurorayihe/Project2_team10">
                        <img src={projectImg} className="proj-img" alt="Bark Movies" />
                    </a>
                </div>
                <div className="project">
                    <h3>Note Taker</h3>
                        <p>
                        This application was created to allow a user to write and save tasks as notes 
                        in order to keep their thoughts organized. The application will be depolyed 
                        with the use of Heroku CLI.
                        </p>
                    <a href="https://github.com/gbundakji/Note-Taker">
                        <img src={noteTaker} className="proj-img" alt="Note Taker" />
                    </a>
                </div>
                <div className="project"> 
                    <h3>Employee Tracker</h3>
                        <p>
                        This application was created to allow a business owner to view and manage the
                        departmets, roles, and employees in thier company so that they can better 
                        organize and plan their business.
                        </p>
                    <a href="https://github.com/gbundakji/Employee-Tracker">
                        <img src={employeeTracker} className="proj-img" alt="Employee Tracker" />
                    </a>
                </div>
                <div className="project">
                    <h3>Weather Dashboard</h3>
                    <p>
                        This webpage is a weather application. When you input a city in the search bar
                        it populates the current weather and details of the weather along with a five
                        day forecast. You will be able to use this to find out what the weather is today
                        and the next five days to come with one search entry.
                    </p>
                    <a href="https://github.com/gbundakji/weather-dashboard">
                        <img src={weatherDash} className="proj-img" alt="Weather Dashboard" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;