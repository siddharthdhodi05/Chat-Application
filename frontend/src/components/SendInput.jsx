import React from "react";
import { IoSendOutline } from "react-icons/io5";

const SendInput = () => {
  return (
    <form className=" my-3 px-4">
      <div className=" w-full relative">
        <input
          type="text"
          placeholder="Send a message..."
          className=" border text-sm rounded-lg p-3 border-zinc-700 block w-full bg-gray-800 text-white"
         />
         <button className=" inset-y-0 end-0 pr-4 absolute flex items-center">
            <IoSendOutline className=""/>
         </button>
      </div>
    </form>
  );
};

export default SendInput;
