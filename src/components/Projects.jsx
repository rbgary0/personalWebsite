import './projects.css'
import logo from '/rg-high-resolution-logo.png'



function Projects() {

    return (
        <div>
            <h1>Projects</h1>
                    <ul className='projectList'>
                        <li>
                            <h3>This website</h3>
                            <img alt="logo" src={logo}></img>
                            <p>I took a full stack development course last summer and used what I learned about
                            React to create this website. Showcases my skills and projects in Computer Science.</p>
                            <p>Languages/Tools Used: JavaScript, CSS, HTML, React</p>
                            
                        </li>
                        <li>
                            <h3>Swipafy</h3>
                            <p>Programmed a website which utilizes Spotify’s API to collect data for the logged 
                            in user to display their top artists and songs in a unique way. Allows users to discover 
                            new songs using a “Tinder-like” format, which allows users to swipe left or right on 
                            new song recommendations.
                            </p>
                            <p>Languages/Tools Used: TypeScript, HTML, CSS</p>
                        </li>
                        <li>
                            <h3>Wifi-Testing</h3>
                        </li>
                    </ul>
        </div>
    )
}

export default Projects