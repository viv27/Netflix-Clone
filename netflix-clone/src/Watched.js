import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import {ThemeContextConsumer} from './Context'
import './Watched.css'

function Watched() {

    const [watched,setWatched] = useState([])
    const [final, setFinal] = useState([])
    console.log("WATCHEDDDDDD: ",watched)
    
    

    return (
        <>
        <ThemeContextConsumer>
            {context=>{
                setWatched(context.watched)
            }}
        
        </ThemeContextConsumer>
        <p className="watched__header">Movies Watched</p>
        <div className="watched__list">
        {watched.length > 0 && watched.map(movie=>{
            {console.log("FINAL :",movie.title)}
            
             return <div className="watched__list__poster">
             <img  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
             <p>{movie.title}</p>
             </div>
             
             
             
                    
            
})}
        </div>
        </>
            
            
        
    )
}

export default Watched
