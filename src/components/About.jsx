import './about.css'
import headshot from "../media/headshot.jpg"



function About() {

    return (
        <div className='about'>
            <div className='text'>
                <img className='headshot' alt="headshot" src={headshot}></img>
                <p>Hi! My name is Reagan Gary and I am currently a junior at Virginia Tech.
                    I am majoring in computer science with an interest in software development.
                    <br></br>
                    <br></br>
                    I built this website to share a little about myself and my computer science
                    experience and skills, which you can find below.
                    <br></br>
                    <br></br>
                    Linkedin: <a href="https://www.linkedin.com/in/reagangary">www.linkedin.com/in/reagangary</a>
                    <br></br>
                    Email: reagangary14@gmail.com
                </p>

            </div>
            
        </div>
    )
}

export default About