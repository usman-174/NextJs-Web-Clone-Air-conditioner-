import React from "react";

const Form = () => {
  return (
    <form className="flex flex-col">
      <input
        type="text"
        style={{border : "1px solid #CCCCCC"}}
        name="Name"
        className="p-4 my-1  rounded-md"
        placeholder="Name"
        id=""
      />
      <input
        type="email"
        name="Email"
        style={{border : "1px solid #CCCCCC"}}

        className="p-4 my-2 rounded-md"
        placeholder="Email"
        id=""
      />

      <input
        type="tel"
        name="Name"
        style={{border : "1px solid #CCCCCC"}}

        className="p-4 my-1 rounded-md"
        placeholder="Phone"
        id=""
      />
      <textarea
        name="Message"
        style={{border : "1px solid #CCCCCC"}}

        placeholder="Message"
        className="p-4 my-2  rounded-md"
      ></textarea>
      <button
        className="py-2 px-4 font-bold hover:bg-[#3898EC] text-white text-xl w-[50%] bg-[#3898EC]"
        style={{
          borderRadius: "50px 50px 50px 50px",
        }}
      >
        Send
      </button>
    </form>
  );
};

export default Form;
