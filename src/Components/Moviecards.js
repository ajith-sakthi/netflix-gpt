import React from 'react'
import { IMG_CDN_URL } from '../Utils/constants'

const Moviecards = ({posterPath}) => {
    if(!posterPath) return null;
    return (
        <div className="w-36 pr-2 cursor-move">
            <img alt="movie-poster" src={IMG_CDN_URL + posterPath}/>
        </div>
    )
}

export default Moviecards
