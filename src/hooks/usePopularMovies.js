import { API_OPTIONS } from "../Utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import {addPopularMovies} from "../Utils/moviesSlice";


const usePopularMovies=()=>{
    const dispatch=useDispatch()
    const popularMovies = useSelector((store)=>store.movies.popularMovies)
    const getPopularMovies =async ()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/popular",API_OPTIONS)
        const json=await data.json()
        dispatch(addPopularMovies(json?.results))
    }
    useEffect(()=>{
        !popularMovies && getPopularMovies()
    },[])
}
export default usePopularMovies;