import React from "react";

const Banner = () => {
  return (
    <div className="banner bg-cover bg-center ">
      <div className="banner-overlay p-5">
        <h1 className=" my-10 uppercase text-4xl text-center font-bold text-[#fff]">
          For immediate assistance, please call us.
        </h1>
        <div className="mx-auto text-center mb-20">
          <a
            className="text-white contact-button font-bold text-xl bg-[#ce7235]"
            href="tel:+4402039037225"
            role="button"
          >
            +44 020 3903 7225
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
