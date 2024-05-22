import React from 'react'
import AboutImg from '../assets/hero.png'

function About() {
 const config= {
   line1:"Hi,My name is Monisha. am an enthusiastic Front-End Developer with 7 months of hands-on experience as a UI Developer. My expertise lies in building responsive, user-friendly web applications using HTML, CSS, and JavaScript. My journey in web development includes valuable internships where I developed strong foundational skills and a keen eye for detail.",
   line2:"I have a strong foundation in React.js, JavaScript, HTML, Tailwind CSS, and CSS3, which I use to build dynamic and responsive web applications",
   line3:"In addition to my professional experience, I have completed a comprehensive Professional Front-End Development course, which has equipped me with up-to-date knowledge of industry standards and best practices. I am passionate about learning new technologies and continuously improving my skills"
 }
  return (
   <section className='flex flex-col md:flex-row bg-primary px-5' id="about">
    <div className='py-5 md:w-1/2'>
        <img  src={AboutImg} width="500px" height="500px" />
    </div>
    <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white pr-2'>
        <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[170px] font-bold '>About Me</h1>
        <p className='pb-5'>{config.line1} </p>
        <p className='pb-5 '>{config.line2}</p>
        <p className='pb-5'>{config.line3}</p>
        </div>
    </div>
   </section>
  )
}

export default About