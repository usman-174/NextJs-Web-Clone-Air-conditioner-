import React, { useState } from "react";
import ContactBar from "./ContactBar";
import { FaBars } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { useMediaQuery } from "../hooks/useMediaQuery";
import Form from "./Form";
import NavRing from "./NavRing";

<MdPhone className=" mr-3 mt-1 text-3xl " />;
const Hero = () => {
  const [isOpen, setisOpen] = useState(false);
  const Wider = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <ContactBar />
      <div className=" hero bg-center bg-cover h-[63vh] md:h-[80vw]">
        <div className="overlay">
          <div className="absolute -top-[73px] md:top-24 w-full">
            <div className="flex justify-between items-center mx-auto w-[95%] md:w-[76%] ">
              <img
                src="https://1mbys2xvv1i3i04op1tfwqjb-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/logo-header.svg"
                alt="Logo"
                width={!Wider ? 185 : 305}
                height={!Wider ? 185 : 305}
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
            <div className="heading  mx-auto md:flex md:justify-between md:w-[76%] mt-28 md:mt-10">
              {/* Heading */}
              <div className="md:w-[50%] m-2 ">
                <h1 className="text-white text-5xl md:text-5xl  ">
                  Air Conditioning Repair London
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
