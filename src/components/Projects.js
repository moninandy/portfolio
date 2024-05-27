import React from 'react'
import websiteImg from '../assets/Ecommerce.jpg'
import  img1 from "../assets/download.jpg"

function Projects() {
 const config={
    projects:[
        {
            image:img1,
            description:"A Ecommerce Website. Using With Tailwind CSS",
            link:'https://cozy-fairy-3c862e.netlify.app/'

        },
         {
            image:websiteImg,
            description:"A Responsive cards Built with React Hooks",
            link:'https://master--tangerine-centaur-b1c087.netlify.app/'

         }
        // {
        //     image:websiteImg,
        //     description:"A Ecommerce Website. Built with MERN STACK ",
        //     link:''

        // }
    ]
 }


  return (
   <section id="projects" className='flex flex-col py-20 px-5 justify-center bg-secondary text-white'>
<div className='w-full'>
    <div className='flex flex-col px-10 py-5' >
    <h1 className='text-4xl border-b-4 border-primary mb-5 w-[150px] font-bold '>Projects</h1>
    <p> These are my some of projects. I have Built these with React  Vanila CSS.Check them out</p>
    </div>
</div>
<div className='w-full'>
    <div className='flex flex-col md:flex-row px-10 gap-5'>
        {config.projects.map((project)=>(
           
        <div className='relative'>
    <img className='h-[300px] w-[500px]'key={project.id} src={project.image} alt="proimg"/>
    <div className='absolute left-0 right-0 bottom-[45px] top-0 bg-primary opacity-0 hover:opacity-100'>
    <p className='text-center px-5 py-5'>{project.description}</p>
    <div className='flex justify-center'>
        <a className='button' href={project.link}>View Project</a></div>
    </div>
    </div>
   
   
    
))}
       
</div>
</div>


   </section>
  )
}

export default Projects