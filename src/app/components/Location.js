import React from 'react'
import { AiOutlineLine } from "react-icons/ai";


function Location() {
  return (
    <div className='m-auto h-auto lg:mt-40 lg:mb-10'>
        <span className="ml-7 inline-flex">
        <AiOutlineLine className="w-6 h-6 text-amber-300 " />
        <h1 className="font-semibold text-sm md:text-sm">LOCATION</h1>
      </span>
      <h2 className="font-black text-3xl lg:text-5xl  text-[#1e1e1e] my-5 lg:my-10">
        WHERE ARE WE?
      </h2>
      <iframe className="w-fit h-fit md:w-600 md:h-450 lg:w-800 lg:h-600"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.791617321775!2d36.7542415751278!3d-1.299848698687795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a416442a7a3%3A0x82f3d298b8e33be8!2sDell%20-%20Light%20Pharmaceuticals!5e0!3m2!1sen!2ske!4v1698865746499!5m2!1sen!2ske"></iframe>
    </div>
  )
}

export default Location