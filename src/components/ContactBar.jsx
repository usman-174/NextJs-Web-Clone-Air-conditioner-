import React from "react";
import { FaBars } from "react-icons/fa";
import { MdMailOutline, MdPhone } from "react-icons/md";

const ContactBar = ({setisOpen}) => {
  
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
      <div className="flex md:hidden justify-between items-center mx-auto px-2 w-full ">
              <img
                src="https://1mbys2xvv1i3i04op1tfwqjb-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/logo-header.svg"
                alt="Logo"
                width="200"
                height="200"
              />
              <div>
                <MdPhone className=" md:hidden text-white text-4xl " />
              </div>
              <div>
              
                <FaBars
                    onClick={() => setisOpen(true)}
                    className="text-white border-2 text-4xl p-1 cursor-pointer rounded-sm border-white"
                  />
              </div>
            </div>
    </div>
  );
};

export default ContactBar;
