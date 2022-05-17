import React from "react";

const Form = () => {
  return (
    <form className="form flex flex-col">
      <input
        type="text"
        style={{ border: "1px solid #CCCCCC" }}
        name="Name"
        className="my-1  "
        placeholder="Name"
        id=""
      />
      <input
        type="email"
        name="Email"
        style={{ border: "1px solid #CCCCCC" }}
        className="my-2 "
        placeholder="Email"
        id=""
      />

      <input
        type="tel"
        name="Name"
        style={{ border: "1px solid #CCCCCC" }}
        className="my-1 "
        placeholder="Phone"
        id=""
      />
      <textarea
        name="Message"
        style={{ border: "1px solid #CCCCCC" }}
        placeholder="Message"
        className="my-2  "
      ></textarea>
      <button
        className=" mx-auto md:mx-0 font-bold hover:bg-[#3898EC] text-white text-xl w-[50%] bg-[#3898EC]"
      >
        Send
      </button>
    </form>
  );
};

export default Form;
