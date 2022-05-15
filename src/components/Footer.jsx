import React from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { RiYoutubeLine, RiFacebookBoxLine } from "react-icons/ri";
import { MdMailOutline, MdPhone } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
const Footer = () => {
  const Wider = useMediaQuery("(min-width: 768px)");

  return (
    <div className="footer bg-[#374A52] p-5">
      <div className=" w-[80%] mx-auto pt-10">
        {/* Upper Area */}
        <div className="flex md:justify-around flex-col md:flex-row border-b-2 border-b-[#7e7878] ">
          <div>
            <ul>
              <li>Air Conditioning Installation</li>
              <li>Air Conditioning Repair</li>
              <li>Domestic Air Conditioning</li>
              <li>Commercial Air Conditioning</li>
              <li>Refrigeration</li>
              <li>Ventilation System</li>
              <li>Air Conditioning Installation</li>
            </ul>
          </div>
          <div className=" my-12 md:my-0">
            <ul>
              {" "}
              <li>Air Conditioning Installation</li>
              <li>Air Conditioning Repair</li>
              <li>Domestic Air Conditioning</li>
              <li>Commercial Air Conditioning</li>
              <li>Ventilation System</li>
              <li>Air Conditioning Installation</li>
              <li>VRV/VRF Systems</li>
            </ul>
          </div>

          <div className="mb-10">
            <ul>
              {" "}
              <li>Restaurant Air Conditioning</li>
              <li>Shop Air Conditioning</li>
              <li>Server Room Air Conditioning</li>
              <li>Healthcare Air Conditioning</li>
              <li>Warehouse Air Conditioning</li>
              <li>Office Air Conditioning</li>
              <li>About Us</li>
              <li>Shop</li>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>

        {/* Lower Area */}
        <div className="flex mt-10 md:justify-around flex-col md:flex-row">
          <div className="one md:w-[30%]">
            <img
              src="https://1mbys2xvv1i3i04op1tfwqjb-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/logo-header.svg"
              alt="Logo"
              width={!Wider ? 150 : 240}
              height={!Wider ? 150 : 240}
            />
            <p className="text-[#717a7e] my-3 mx-auto">
              © Copyright 2022 Aircon Company is a trade name of Air
              Conditioning Service London. Company No: 12070860
            </p>
    
            <div className="flex text-white text-4xl">
              <RiFacebookBoxLine className="mx-2" />
              <RiYoutubeLine />
            </div>
          </div>
          <div className="two md:w-[30%] md:mx-5 my-10 md:my-0 md:text-center">
            <strong className="text-white text-lg">
              Call us for a free quote
            </strong>
            {/* Prone row */}
            <div className="flex md:justify-center text-white  items-center my-3 ">
              <MdPhone className=" text-4xl  mx-3" />{" "}
              <strong className="text-xl">
                <a href="tel:07889 367 301">07889 367 301</a>
              </strong>
            </div>
            {/* Prone row */}
            <div className="flex md:justify-center text-white items-center my-3 ">
              <MdPhone className=" text-4xl  mx-3" />{" "}
              <strong className="text-xl ">
                <a href="tel:07889 367 301">07889 367 301</a>
              </strong>
            </div>
          </div>
          <div className="three md:w-[30%] md:mx-auto">
            <strong className="text-[#E1E4E5] ml-3">Email Us</strong>
            <div className="flex text-white items-center my-3 ">
              <MdMailOutline className=" text-4xl  mx-3" />{" "}
              <strong className="text-md ">
                <a href="mailto:info@aircon-company.com">
                  info@aircon-company.com
                </a>
              </strong>
            </div>
            <strong className="text-[#E1E4E5] ml-3">Open Hours</strong>

            <div className="flex text-white items-center my-3 ">
              <AiOutlineClockCircle className=" text-4xl  mx-3" />{" "}
              <strong className="text-md ">
                <a href="/">Mon-Sat: 9am - 6pm</a>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
