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
      <ContactBar />
      <div className=" hero bg-center bg-cover h-[61vh] ">
        <div className="overlay">
          <div className="absolute -top-[73px] md:top-24 text-center  w-full">
            <div className="flex  justify-between items-center mx-auto  md:w-[60%] ">
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
                {/* {!isOpen ? (
                  <FaBars
                    onClick={() => setisOpen(true)}
                    className="text-white border-2 text-4xl p-1 cursor-pointer rounded-sm border-white"
                  />
                ) : (
                  <ImCross
                    onClick={() => setisOpen(false)}
                    className="text-white text-4xl md:absolute md:z-10 p-1 cursor-pointer rounded-sm "
                  />
                )} */}
                <FaBars
                    onClick={() => setisOpen(true)}
                    className="text-white border-2 text-4xl p-1 cursor-pointer rounded-sm border-white"
                  />
              </div>
            </div>
            <div className=" mx-auto md:flex md:justify-between items-start md:w-[60%] my-32 md:my-20">
              {/* Heading */}
              <div className="md:w-[50%] text-left mx-2 mt-3 ">
                <h1 className="  logo-heading  ">
                  Air Conditioning 
                    <br />
                  Repair London
                </h1>
                <br />
                <small className="text-[#788082] my-3 text-lg">
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
