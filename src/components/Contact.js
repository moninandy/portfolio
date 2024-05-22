import React from 'react'

function Contact() {

    const config={
        email:" monishashreedhar@gmail.com",
        phone:"9176533681"
    }
  return (
    <section className='flex flex-col bg-secondary px-5 py-32' id="contact">
   
    <div className='flex  flex-col items-center text-white'>
        <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold '>Contact</h1>
        <p className='pb-5'> If You Want To discuss more in detail, please conatct me</p>
        <p className='py-2'><span className='font-bold'>Email:{config.email}</span></p>
        <p className='py-2'><span className='font-bold'>Phone:{config.phone}</span></p>
        </div>
   </section>
  )
}

export default Contact