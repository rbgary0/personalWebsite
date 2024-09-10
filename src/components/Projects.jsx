import './projects.css'
import logo from './rg-high-resolution-logo.png'
import swipafy from './Spotify_logo_without_text.svg.png'
import raspberry from './Raspberry.png'



function Projects() {

    return (
        <div>
            <h1>Projects</h1>
                    <ul className='projectList'>
                        <li>
                            <h3>Personal Website</h3>
                            <img className='logo' alt="logo" src={logo}></img>
                            <p>I took a full stack development course last summer and used what I learned about
                            React to create this website. Showcases my skills and projects in Computer Science.</p>
                            <p>Languages/Tools Used: JavaScript, CSS, HTML, React</p>
                            
                        </li>
                        <li>
                            <h3>Swipafy</h3>
                            <img className='swipafy' alt="Swipafy" src={swipafy}></img>
                            <p>I programmed a website which utilizes Spotify’s API to collect data for the logged 
                            in user to display their top artists and songs in a unique way. It allows users to discover 
                            new songs using a “Tinder-like” format, which allows users to swipe left or right on 
                            new song recommendations.
                            </p>
                            <p>Languages/Tools Used: TypeScript, HTML, CSS</p>
                        </li>
                        <li>
                            <h3>Wifi-Testing</h3>
                            <img className='raspberry' alt="Raspberry Pi" src={raspberry}></img>
                            <p>I worked with a small group of 4 students during senior year to develop a program in python to test the school network throughout the day to try to predict and detect outages.
                            Placed Raspberry Pi’s around school to collect data.
                            Collaborated with mentors, logged data, and analyzed results.
                            Helped detect Wi-Fi dead spots around the school.
                            </p>
                            <p>Languages/Tools Used: Python, Raspberry Pi</p>
                        </li>
                    </ul>
        </div>
    )
}

export default Projects