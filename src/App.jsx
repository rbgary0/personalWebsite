import headshot from './media/headshot.jpg'
import zeta from './media/ZETA_logo.svg'
import vtcro from './media/vtcro.png'
import croqueue from './media/croqueue.png'
import spot from './media/spot.png'
import { HiOutlineMail, HiOutlineDocumentText, HiMenu, HiX } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'
import { useState } from 'react';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-stone-950 min-h-screen text-white font-mono' id='home'>
      <nav className='bg-neutral-800 p-4 max-w-6xl mx-auto rounded-b-lg sticky top-0'>
        <div className='flex justify-between items-center'>
          <div className='text-xl font-bold text-white'>
            Reagan Gary
          </div>

          <div className='hidden md:flex flex-wrap gap-4 text-base md:text-lg'>
            <a className='hover:bg-neutral-600 px-2 py-1 rounded transition hover:cursor-pointer' href='#home'>Home</a>
            <a className='hover:bg-neutral-600 px-2 py-1 rounded transition hover:cursor-pointer' href='#work'>Experience</a>
            <a className='hover:bg-neutral-600 px-2 py-1 rounded transition hover:cursor-pointer' href='#project'>Projects</a>
            <a className='hover:bg-neutral-600 px-2 py-1 rounded transition flex items-center gap-1 hover:cursor-pointer' href='https://www.linkedin.com/in/reagangary/' target='_blank' rel='noopener noreferrer'><FaLinkedin size={20} /></a>
            <a className='hover:bg-neutral-600 px-2 py-1 rounded transition flex items-center gap-1 hover:cursor-pointer ' href='mailto:reagangary14@gmail.com'><HiOutlineMail size={20} /></a>
            <a className='hover:bg-neutral-600 px-2 py-1 rounded transition flex items-center gap-1 hover:cursor-pointer' href='/files/test.pdf' target='_blank'><HiOutlineDocumentText size={20} /></a>
          </div>

          <button
            className='md:hidden text-white focus:outline-none'
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
          {isOpen && (<div className='flex flex-col gap-4 mt-4 md:hidden'>
            <a className='hover:bg-neutral-600 px-2 py-1 rounded transition hover:cursor-pointer' href='#home'>Home</a>
            <a className='hover:bg-neutral-600 px-2 py-1 rounded transition hover:cursor-pointer' href='#work'>Experience</a>
            <a className='hover:bg-neutral-600 px-2 py-1 rounded transition hover:cursor-pointer' href='#project'>Projects</a>
            <a className='hover:bg-neutral-600 px-2 py-1 rounded transition flex items-center gap-1 hover:cursor-pointer' href='https://www.linkedin.com/in/reagangary/' target='_blank' rel='noopener noreferrer'><FaLinkedin size={20} /></a>
            <a className='hover:bg-neutral-600 px-2 py-1 rounded transition flex items-center gap-1 hover:cursor-pointer ' href='mailto:reagangary14@gmail.com'><HiOutlineMail size={20} /></a>
            <a className='hover:bg-neutral-600 px-2 py-1 rounded transition flex items-center gap-1 hover:cursor-pointer' href='/files/test.pdf' target='_blank'><HiOutlineDocumentText size={20} /></a>
          </div>)}
      </nav>
      
      <div className='max-w-5xl mx-auto pt-20 md:pt-60 flex flex-col md:flex-row items-center gap-8 px-4'>
        <div className='p-4'>
          <div className='text-3xl md:text-5xl pb-4'>
            Hi! I'm Reagan Gary
          </div>
          <div className='text-base md:text-lg text-gray-300'>
            I’m a rising senior at Virginia Tech, majoring in Computer Science, with a focus on software engineering and full stack development.
            Currently, I’m interning at Zeta Associates, where I’m gaining hands-on experience in developing real-world tech solutions.
            On campus, I’m an active member of Virginia Tech’s Competitive Robotics Organization (VT CRO). There, I work on the
            Manufacturing Workcell Team designing an automated 3D print farm system.
          </div>
          <a href='#work'>
            <button className='bg-blue-500 text-white text-base md:text-lg px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400  mt-5 hover:cursor-pointer mt-5'>Explore my portfolio &gt;</button>
          </a>
        </div>
        <img src={headshot} className='w-40 w-40 md:w-100 md:h-100 rounded-full object-cover' alt='Profile Image' />
      </div>

      <div className='max-w-5xl mx-auto pt-20 md:pt-55 text-3xl md:text-5xl px-4'>
        Work & Experience
      </div>
      <div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center px-4 pt-5 pb-10 scroll-mt-35' id='work'>
        <div>
          <div className='text-2xl md:text-4xl pb-4'>
            Zeta Associates
          </div>
          <div className='text-base md:text-lg md:pr-5 text-gray-300'>
            I am currently interning at Zeta Associates where I am working on creating a Virtual Private Cloud on our hardware using Incus and OVN.
            While working on this, I have learned and used many networking concepts such as OVNs & OVS, ACLs, Vlans, peer routing, and more. 
          </div>
        </div>
        <img src={zeta} className='w-40 md:w-100 object-contain mt-5' alt='Zeta Company Logo'></img>
      </div>

      <div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 pt-5'>
        <div>
          <div className='text-2xl md:text-4xl pb-5'>
            Virginia Tech Competitive Robotics Organization
          </div>
          <div className='text-gray-300 text-lg mr-5'>
            At school I am the software lead of the VTCRO Manufacuring Workcell team where we are designing an automated 3D print farm to assist with 
            prototyping and innovation in our lab. I personally work on and maintain the print queue system where users in the organization can log on
            and upload their gcode files to be printed.
          </div>
        </div>
        <img src={vtcro} className='w-60 md:w-100 object-contain' alt='VTCRO Logo'></img>
      </div>


      <div className='max-w-5xl mx-auto pt-20 md:pt-60 text-3xl md:text-5xl px-4'>
        Projects
      </div>
      <div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 pt-5 px-4 scroll-mt-35' id='project'>
        <div>
          <div className='text-2xl md:text-4xl pb-4'>
            VTCRO Workcell Queue System
          </div>
          <div className='text-base text-gray-300 md:text-lg'>
            The queue system allows members of the organization to upload their 3D printing files into a queue which is pulled from
            every time a printer finishes its current task. The user is authenticated using discord (having to be in our orgs discord server)
            and has to download the specific config file for our printers. Once that is done, the user is free to upload their files and 
            the user will recieve a ping through discord when their print is done. The application records different statistics such as 
            how much fillament is used and amount of prints queued to be able to track prints and better improve the system.
            I created the queue system using React for the frontend and ExpressJs & Firebase for the backend.
          </div>
        </div>
        <img src={croqueue} className='w-full md:w-80 rounded-lg object-cover' alt='VTCRO Queue'></img>
      </div>

      <div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 pt-5'>
        <div>
          <div className='text-2xl md:text-4xl pb-4'>
            Spotify Web App
          </div>
          <div className='text-gray-300 text-base md:text-lg mr-5'>
            I created a website which utilizes Spotify’s API to collect data to display users top artists and songs in a unique way.
            It also allows users to discover new songs using a “Tinder-like” format, giving users the ability to swipe left or right on new song recommendations
            which are then recorded in a list. For this project I used HTML, CSS, and Typescript.
          </div>
        </div>
        <img src={spot} className='w-40 md:w-70 rounded-lg object-cover' alt='Web App'></img>
      </div>
          <footer className='mx-auto max-w-lg text-gray-300 text-center px-4 py-8'>&copy; Copyright Reagan Gary 2025</footer>
    </div>

  )
}

export default App



//  <div className="h-screen bg-gray-100 font-mono">
//       <div className="max-w-md mx-auto pt-10">
//         Navbar goes here
//       </div>
//       <div className="bg-blue-300 p-3 max-w-300 mx-auto shadow-md rounded-md flex">
//         <img src={headshot} className="max-w-75 max-h-75 rounded-md mr-4"></img>
//           <div className='text-2xl'>
//             Hi! I'm Reagan Gary
//           </div>
//           <div className='max-w-xl pr-4'>
//             {/*  */}
//             <br /> <br /> 
//             {/* I’m passionate about building systems that bridge hardware and software to solve complex problems.  */}
//             Explore my portfolio to see what I’ve been working on!
//             {/* I am a rising senior at Virginia Tech studying computer science. I'm currently interning as a software engineer at Zeta Associates.
//             At Virgina Tech, I am a part of VT CRO (Competitive Robics Organization), but more specifically the manufacturing workcell team. */}
//           </div>
//       </div>

//       {/* <div className="text-lg max-w-md mx-auto pt-5">
//         Work & Experience
//       </div>
//       <div className="bg-blue-300 p-6 max-w-md mx-auto shadow-md rounded-md flex">
//       </div>

//       <div className="text-lg max-w-md mx-auto pt-5">
//         Education
//       </div>
//       <div className="bg-blue-300 p-6 max-w-md mx-auto shadow-md rounded-md">
        
//       </div>

//       <div className="text-lg max-w-md mx-auto pt-5">
//         Projects
//       </div>
//       <div className="bg-blue-300 p-6 max-w-md mx-auto shadow-md rounded-md">

//       </div>

//       <div className="text-lg max-w-md mx-auto pt-5">
//         Skills?
//       </div>
//       <div className="bg-blue-300 p-6 max-w-md mx-auto shadow-md rounded-md">
//       </div> */}