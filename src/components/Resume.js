import React from 'react'
import ResumeImg from '../assets/resume.png'

function Resume() {

  const config ={
    link:"https://drive.google.com/file/d/1J7rlENWASxLxnPb_UGiE_Vgvzf9etArC/view?usp=sharing"
  }
  return (
   <section id="Resume" className='flex flex-col md:flex-row bg-primary px-5'>
    <div className='py-5 md:w-1/2 flex md:justify-end'>
        <img  className='w-[300px]' src={ResumeImg} alt="Resumeimage"  />
    </div>
    <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white pr-2'>
        <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold '>Resume</h1>
        <p className='pb-5'>You can view my Resume <a  className='button' href={config.link}>Download</a></p>
        
        </div>
    </div>
   </section>
  )
}

export default Resume