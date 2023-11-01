import React from "react";
import { AiOutlineLine } from "react-icons/ai";
import { MinusIcon } from "@heroicons/react/24/solid";
// import image from "public\assets\pexels-pixabay-208518.jpg";

function Home() {
  return (
    <div>
      <p className="font-black text-sm my-5">
        <span className="text-yellow-500">DELL</span> LIGHT
      </p>
      {/* <AiOutlineLine size={40} className='bg-amber-300'/> */}
      <span className="ml-7 inline-flex">
        <AiOutlineLine className="w-6 h-6 text-amber-300 " />
        <h1 className="font-semibold text-sm md:text-sm">COMPANY</h1>
      </span>
      <h2 className="font-black text-3xl lg:text-5xl  text-[#1e1e1e] my-5 lg:my-10">
        Who we are
      </h2>
      <p className="text-[#3e3e3e] text-lg md:max-w-screen-lg md:ml-4">
        Since our establishment in 2008,
        <span className="text-yellow-500">Dell light Pharmaceuticals </span>has
        been dedicated to making a positive impact on healthcare. Our commitment
        to excellence in medical dispensing has consistently{" "}
        <span className="text-yellow-500">brought smiles to faces</span> and{" "}
        <span className="text-yellow-500">
          improved the well-being of individuals.
        </span>
        At Dell-light Pharmaceuticals, our mission is clear: we aim to make
        essential{" "}
        <span className="text-yellow-500">
          medical drugs and equipment easily accessible to everyone
        </span>
        . We believe that quality healthcare should be within reach for all
        individuals, and we're taking concrete steps to make this a reality.
      </p>
      <img src="https://images.pexels.com/photos/208518/pexels-photo-208518.jpeg?auto=compress&cs=tinysrgb&w=400"></img>
    </div>
  );
}

export default Home;

// AiOutlineLine
