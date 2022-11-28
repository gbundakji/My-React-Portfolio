import '../../styles/About.css';
import headShot from '../../images/headshot.jpg';

function About() {
  return (
    <div className="about">
        <div className="aboutme">
          <h1>About Me</h1>
        </div>
        <div className="my-img">
            <img src={headShot} style={{width: "30%"}} alt="headshot" />
        </div>
        <div className="my-intro">    
        <p>
          Hello! I am Gassan Bundakji and welcome to my portfolio. I reside in Orange County, California 
          where I have lived all my life. I studied at California State University Fullerton and received my B.A. in Business
          Administration with a concentration in Finance. After graduation I decided to pursue a career in real estate and went
          on to get my real estate broker license. I worked in this field for 2 years but later decided to shift careers. I
          quickly gained an interest in the world of programming and emersed my self in it by taking a Full Stack Web Development
          Bootcamp at UC Irvine. This program has paved the way for my web development career and my on going pursuit of knowledge 
          in this ever changing field. Aside from my work and studies, I like to spend my time being active, learning new hobbies,
          and spending time with my friends and family. I very much enjoy playing sports, weight lifting, cars, gaming, movies, 
          traveling, and animals. A majority of my time is spent with my dog, Princess Leia, who has been nothing but pure joy in
          my life. Thank you for taking the time to read a little bit about me!
        </p>
        </div>
    </div>
  );
}

export default About;