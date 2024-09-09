import './about.css'
import headshot from "../media/headshot.jpg"



function About() {

    return (
        <div className='about'>
            <div className='text'>
                <img className='headshot' alt="headshot" src={headshot}></img>
                <p>Hi! My name is Reagan Gary and I am currently a juior at Virginia Tech.
                    I am majoring in computer science with an interest in software development.
                </p>

            </div>
            
        </div>
    )
}

export default About