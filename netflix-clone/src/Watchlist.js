import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import {ThemeContextConsumer} from './Context'
import './Watched.css'

function Watchlist() {

    const [watchlist,setWatchlist] = useState([])
    
    
    
    

    return (
        <>
        <ThemeContextConsumer>
            {context=>{
                setWatchlist(context.watchlist)
            }}
        
        </ThemeContextConsumer>
        <p className="watched__header">Movies Watched</p>
        <div className="watched__list">
        {watchlist.length > 0 && watchlist.map(movie=>{
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

export default Watchlist
