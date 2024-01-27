import { API_OPTIONS } from "../Utils/constants"
import { addUpcomingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useUpcomingMovies=()=>{
    const dispatch=useDispatch()
    const getUpcomingMovies= async ()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/upcoming",API_OPTIONS);
        const json=await data.json()
        dispatch(addUpcomingMovies(json.results));

    }
    useEffect(()=>{
        getUpcomingMovies();
    },[])
}
export default useUpcomingMovies;