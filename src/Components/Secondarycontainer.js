import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const Secondarycontainer = () => {
    const movies=useSelector((store)=>store.movies)
    
    
    return (
        movies.nowPlayingMovies &&
        <div className="bg-black">
            <div className="mt:0 md:-mt-44 relative Z:10">
            <Movielist title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
            <Movielist title={"Top Rated"} movies={movies?.topRatedMovies}/>
            <Movielist title={"Popular"} movies={movies?.popularMovies}/>
            <Movielist title={"Upcoming"} movies={movies?.upcomingMovies}/>
            </div>
        </div>
    )
}

export default Secondarycontainer
/**
 * Movie list *n - nowplaying movies
 *  -title
 *  -moviecards
 * Movie list *n - top rated movies
 *  -title
 *  -movie cards
 * Movie list *n - popular movies
 *  -title
 *  -movie cards
 * Movie list *n - upcoming movies
 *  -title
 *  -movie cards
 *  
 * 
 */