import headshot from './media/headshot.jpg'


function App() {

  return (
    <body className='bg-stone-950 h-screen text-white font-mono'>
      <nav className='bg-neutral-700 p-4 max-w-6xl mx-auto rounded-b-lg'>
        <div className='flex justify-evenly items-center text-lg'>
          <a className='hover:text-gray-400 hover:cursor-pointer'>Home</a>
          <a className='hover:text-gray-400 hover:cursor-pointer'>Experience</a>
          <a className='hover:text-gray-400 hover:cursor-pointer'>Projects</a>
          <a className='hover:text-gray-400 hover:cursor-pointer'>LinkedIn</a>
          <a className='hover:text-gray-400 hover:cursor-pointer'>Email</a>
          <a className='hover:text-gray-400 hover:cursor-pointer'>Resume</a>
        </div>
      </nav>
      
      <div className='max-w-5xl mx-auto pt-60 flex'>
        <div className='p-10'>
          <div className='text-5xl pb-5'>
            Hi! I'm Reagan Gary
          </div>
          <div className='text-lg text-gray-300'>
            I’m a rising senior at Virginia Tech, majoring in Computer Science, with a focus on software engineering and full stack development.
            Currently, I’m interning at Zeta Associates, where I’m gaining hands-on experience in developing real-world tech solutions.
            On campus, I’m an active member of Virginia Tech’s Competitive Robotics Organization (VT CRO). There, I work on the
            Manufacturing Workcell Team designing an automated 3D print farm system.
          </div>
          <button className='bg-blue-500 text-white text-lg px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:cursor-pointer mt-5'>Explore my portfolio &gt;</button>
        </div>
        <img src={headshot} className='max-w-100 max-h-100 rounded-full' alt='Profile Image' />
      </div>
    </body>
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