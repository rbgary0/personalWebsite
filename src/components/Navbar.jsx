import './navbar.css'
import logo from "./rg-high-resolution-logo.png"


function Navbar() {

    return (
        <div>
            <nav className="navbar">
                <div className='navbar-left'>
                    <img src={logo}></img> 
                </div>
                <div className='navbar-right'>
                    <ul className='nav-links'>
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <a>Projects</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar