import React,{ useState,useEffect } from 'react'
import './ResultCard.css'
import Youtube from 'react-youtube'
import axios from './axios'
function ResultCard({movie}) {

    const [trailerUrl, setTrailerUrl] = useState("")
    

   
    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <img  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
                ):(
                   <div></div> 
                ) }
            </div>
            
        </div>
    )
}

export default ResultCard
