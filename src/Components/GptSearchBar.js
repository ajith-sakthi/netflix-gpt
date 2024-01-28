import React from "react";
import lang from "../Utils/langConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const getlang = useSelector((store) => store.config.language);

  return (
    <div className="pt-[12%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-2 my-4 mx-2 bg-white rounded-lg col-span-9"
          placeholder={lang[getlang].placeholder}
        />
        <button className="bg-red-700 text-white text-lg px-4 py-2 my-4 mx-2 rounded-lg col-span-3">
          {lang[getlang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
