import React, { useRef } from "react";
import lang from "../Utils/langConstants";
import { useSelector, useDispatch } from "react-redux";
import openai from "../Utils/openAi";
import { API_OPTIONS } from "../Utils/constants";
import { addGptMovies } from "../Utils/toggleGptSearchSlice";


const GptSearchBar = () => {
  const getlang = useSelector((store) => store.config.language);
 
  const searchText=useRef(null)
  const dispatch=useDispatch();
    //Search movies stored in `gptSearchResults` in TMDB
    const searchGptMovies = async (movieName)=>{
      const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movieName+"&include_adult=false&language=en-US&page=1", API_OPTIONS)
      const json =await data.json()
      // console.log(json.results)
      return json.results
    }


  const handleGptSearch=async ()=>{
    
    console.log(searchText.current.value);
      const gptQuery =
    "Act as a movie recommendation system and suggest some movies for query:" +
    searchText.current.value +
    "only give me  the name of five movies with comma separated  like the example result ahead.Example:Jai bhim,Tamilan,War,Don,Cars";
    //Gpt search API
     const gptSearchResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    // console.log(gptSearchResults)
    // if(!gptSearchResults.choices) {
    //   return <ErrorPage></ErrorPage>}
    console.log(gptSearchResults.choices[0].message.content)
    const movies=gptSearchResults?.choices[0]?.message?.content.split(",")
    // ['Andaz Apna Apna', ' Golmaal', ' Chupke Chupke', ' Sholay', ' Padosan']

    

    //For each movie I search on TMBD
    
    const promiseArray=movies.map((movie)=> searchGptMovies(movie))
    // [Promises,Promises,Promises,Promises,Promises,]
    const tmbdSearchResults=await Promise.all(promiseArray);
    console.log(tmbdSearchResults)
    
   dispatch(addGptMovies({moviesName:movies,moviesTmdbResults:tmbdSearchResults}))
  }

  return (
    <div className="pt-[12%] flex justify-center">
      <form className="mx-1 md:mx-2 w-[100%] md:w-1/2 md:mx-0 bg-black grid grid-cols-12 mt-[25%] md:mt-0" onSubmit={(e)=>e.preventDefault()}>
        <input
        ref={searchText}
          type="text"
          className="p-2 my-4 mx-1 md:mx-0  bg-white rounded-lg col-span-9"
          placeholder={lang[getlang].placeholder}
        />
        <button className="bg-red-700 text-white md:text-lg p-2 my-4 mx-1 md:my-4 md:mx-2 rounded-lg col-span-3" onClick={handleGptSearch}>
          {lang[getlang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
