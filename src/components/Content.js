import React from 'react'
import grlImg from '../assets/download (1).png';
import { FaLinkedin,FaGithub , FaFacebook} from "react-icons/fa";
function Content() {

  const config={
    subtitle:"Iam a Front End Developer ",
    social:{
      linkedin:"https://www.linkedin.com/in/monisha-sridhar-611352248/",
      github:"https://github.com/moninandy"

    }
  }



  return (
    <section className='flex flex-col md:flex-row px-5 py-20 bg-secondary justify-center ' id="contetnt">
        <div className='md:w-1/2 flex flex-col'>
        <h1 className=' text-black text-7xl font-content-font '>Hi,<br/>Im Monisha.S
        <p className='text-2xl'>{config.subtitle}</p></h1>
        <div className='flex py-10'>
            <a href={config.social.linkedin} className='pr-5 text-white'><FaLinkedin  size={30}/></a>
            <a href={config.social.github} className='pr-5 text-white'><FaGithub size={30}/></a>
            {/* <a href={config.social.facebook} className='text-white'><FaFacebook size={30}/></a> */}
        </div>
        </div>
        <img  className='md:w-1/3'src={grlImg} alt="images" />
    </section>
  )
}

export default Content