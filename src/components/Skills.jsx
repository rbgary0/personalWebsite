import './skills.css'
import logo from './rg-high-resolution-logo.png'
import python from './python.png'
import java from './java.png'
import C from './C.png'
import JavaScript from './javascript.png'
import HTML from './html.png'
import CSS from './css.png'
import SQL from './sql.png'
import ReactJS from './reactjs.svg'
import NodeJS from './nodejs.png'
import Git from './git.png'
import Postman from './postman.png'





function Skills() {

    return (
        <div>
            <h1>Skills</h1>
                <div className='countainer'>
                        <ul className='skillList1'>
                            <li>
                            <img className='python' alt="python logo" src={python}></img>
                                <h3>Python</h3>
                            </li>
                            <li>
                            <img className='java' alt="java logo" src={java}></img>
                                <h3>Java</h3>
                            </li>
                            <li>
                            <img className='C' alt="C logo" src={C}></img>
                                <h3>C</h3>
                            </li>
                            <li>
                            <img className='JavaScript' alt="JavaScript logo" src={JavaScript}></img>
                                <h3>JavaScript</h3>
                            </li>
                        </ul>
                        <ul className='skillList2'>
                            <li>
                            <img className='HTML' alt="HTML logo" src={HTML}></img>
                                <h3>HTML</h3>
                            </li>
                            <li>
                            <img className='CSS' alt="CSS logo" src={CSS}></img>
                                <h3>CSS</h3>
                            </li>
                            <li>
                            <img className='SQL' alt="SQL logo" src={SQL}></img>
                                <h3>SQL</h3>
                            </li>
                            <li>
                            <img className='ReactJS' alt="ReactJS logo" src={ReactJS}></img>
                                <h3>ReactJS</h3>
                            </li>
                        </ul>   
                        <ul className='skillList3'>
                            <li>
                            <img className='NodeJS' alt="NodeJS logo" src={NodeJS}></img>
                                <h3>NodeJS</h3>
                            </li>
                            <li>
                            <img className='Git' alt="Git logo" src={Git}></img>
                                <h3>Git</h3>
                            </li>
                            <li>
                            <img className='Postman' alt="logo" src={Postman}></img>
                                <h3>Postman</h3>
                            </li>
                        </ul>
                </div>
        </div>
    )
}

export default Skills