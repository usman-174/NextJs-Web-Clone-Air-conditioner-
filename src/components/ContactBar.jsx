import React from "react";
import { MdMailOutline, MdPhone } from "react-icons/md";
const ContactBar = () => {
  return (
    <div className=" md:flex w-full  md:px-8 h-[20vw] md:h-auto text-white items-center 
    bg-[#1D262B] py-2 justify-around">
      <div className="hidden md:flex items-center font-bold">
        {" "}
        <MdMailOutline className="mr-2 mt-1 text-3xl " />{" "}
        <span className="text-[#BBBDBF] text-xl">info@aircon-company.com</span>
      </div>
      <p className=" hidden md:block text-lg ml-5">Mon-Sat: 9am - 6pm </p>
      <div className="hidden md:flex items-center font-bold">
        <MdPhone className=" mr-3 mt-1 text-3xl " />
        <span className="text-[#BBBDBF] text-xl">020 3903 7225 </span>
      </div>
    </div>
  );
};

export default ContactBar;
