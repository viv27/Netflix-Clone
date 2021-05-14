import React,{ useState,useEffect } from 'react'
import './ResultCard.css'

function ResultCard({movie}) {

    const [trailerUrl, setTrailerUrl] = useState("")
    const [modal, openModal] = useState(false)

    const modalOpen =()=>{
        openModal(prev => !prev)
    }

   
    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <div className="poster__item">
                    <img onClick={modalOpen}  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
                    <button>Watch Trailer</button>
                    </div>
                ):(
                   <div></div> 
                ) }
            </div>
            
            
        </div>
    )
}

export default ResultCard
