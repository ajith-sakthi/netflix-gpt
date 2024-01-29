import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen aspect-video absolute bg-gradient-to-r from-black">
      <div className="w-full pt-[20%] md:pt-[16%]  pl-14">
        <h1 className="my-2 font-bold text-lg md:text-6xl text-white">{title}</h1>
        <p className="hidden md:block w-1/4 my-4 text-white">{description}</p>
        <button className="bg-red-600 text-white py-1 px-4  md:p-4 md:px-10 rounded-lg md:font-bold text-lg hover:opacity-85">
          Play
        </button>
        <button className="hidden md:inline-block bg-gray-700 text-white p-2 px-4 md:p-4 md:px-10 ml-2 rounded-lg md:font-bold text-lg hover:opacity-85">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
