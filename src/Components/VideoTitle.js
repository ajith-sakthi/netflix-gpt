import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen aspect-video absolute bg-gradient-to-r from-black">
      <div className="w-full pt-[16%] pl-14">
        <h1 className="my-2 font-bold text-6xl text-white">{title}</h1>
        <p className="w-1/4 my-4 text-white">{description}</p>
        <button className="bg-red-600 text-white p-4 px-10 rounded-lg font-bold text-lg hover:opacity-85">
          Play
        </button>
        <button className="bg-gray-700 text-white p-4 px-10 ml-2 rounded-lg font-bold text-lg hover:opacity-85">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
