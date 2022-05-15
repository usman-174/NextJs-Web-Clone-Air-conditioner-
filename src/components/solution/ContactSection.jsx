import React from "react";
import Form from "../Form";
const ContactSection = () => {
  return (
    <div className="md:flex justify-around my-14 md:w-[80%] mx-auto">
      <div className=" md:w-[50%] mx-5 p-2 md:mx-auto">
        <Form />
      </div>
      <div className="details md:w-[50%] mx-auto">
        <h1 className=" mt-8  md:my-4   md:w-full text-4xl text-center font-bold text-[#333333]">
          Send Us A Message
        </h1>

        <p className="p-5 text-[#465156]">
          If you have any questions or concerns about our service, please do not
          hesitate to write us a message or phone us directly at <a className="text-[#05a0e2] leading-8" href="tel:+4402039037225"><strong>+44 020 3903 7225</strong></a> and a member of our customer care staff will respond to you as
          soon as possible.
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
