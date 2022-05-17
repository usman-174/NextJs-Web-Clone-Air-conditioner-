import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { useMediaQuery } from "../hooks/useMediaQuery";
import ContactBar from "./ContactBar";
import Form from "./Form";
import NavRing from "./NavRing";

const Hero = () => {
  const [isOpen, setisOpen] = useState(false);
  const Wider = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <ContactBar setisOpen={setisOpen} />
      <div className="hero lg:h-[1020px]">
        <div className="overlay relative">
          <div className="md:w-[70%]  pb-52 sm:pb-0 mx-auto">
            <div className="hidden md:flex justify-between items-center mx-auto py-14 px-3 w-full ">
              <img
                src="https://1mbys2xvv1i3i04op1tfwqjb-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/logo-header.svg"
                alt="Logo"
                width={!Wider ? 165 : 280}
                height={!Wider ? 165 : 280}
              />
              <div>
                <MdPhone className=" md:hidden text-white text-3xl " />
              </div>
              <div>
              
                <FaBars
                    onClick={() => setisOpen(true)}
                    className="text-white border-2 text-4xl p-1 cursor-pointer rounded-sm border-white"
                  />
              </div>
            </div>
            <div className="py-20  w-full md:mx-auto md:flex md:pb-52  md:justify-around  ">
              {/* Heading */}
              <div className="md:w-[50%] md:px-0 px-3 text-left mt-3 ">
                <h1 className="  logo-heading  ">
                  Air 
                  {!Wider && <br/>} {" "}
                  Conditioning 
                    <br />
                  Repair {!Wider && <br/>} {" "}London
                </h1>
                <br />
                <small className="text-[#c2c3c4] my-3 text-lg">
                  Servicing with an Air of Confidence
                </small>
              </div>
              {/* Form */}
              <div className="hidden md:block  w-[47%] p-2">
                <Form />
              </div>
            </div>
          </div>
         
        </div>
        {isOpen && <NavRing isOpen={isOpen} setisOpen={setisOpen} />}
      </div>
    </>
  );
};

export default Hero;
