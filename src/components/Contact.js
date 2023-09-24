import React from "react";

const ContactMe = () => {
  return (
    <div
      className="h-[100vh] bg-purple-300 flex flex-col justify-center items-center"
      id="contact"
    >
      <h1 className="text-2xl border-b-4 border-solid border-purple-950 py-1">
        Contact Me
      </h1>

      <form>
        <div className="flex flex-wrap ">
          <div className="flex flex-col w-[90%] m-2 lg:w-96 lg:mr-4">
            <input
              type="text"
              placeholder="Name"
              className="p-2 rounded-lg w-[100%]  m-2 border-none"
            ></input>
            <input
              type="text"
              placeholder="Email"
              className="p-2 rounded-lg w-[100%] m-2"
            ></input>
            <input
              type="text"
              placeholder="Phone No"
              className="p-2 rounded-lg w-[100%] m-2"
            ></input>
          </div>

          <div className="w-[90%] m-2 lg:w-96 lg:mr-4">
            <textarea
              placeholder="Message or Question"
              className="p-2 m-2 w-[100%] h-[150px] rounded-lg  "
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <button className="p-2 border-2 border-solid border-purple-950 rounded-lg">
            Cancel
          </button>
          <button className="p-2 border-2 border-solid border-purple-950 bg-purple-800 hover:bg-purple-950 rounded-lg text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
