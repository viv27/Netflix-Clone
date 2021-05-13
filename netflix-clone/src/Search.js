import React from 'react'
import Banner from './Banner'
import './Search.css'
import TextField from '@material-ui/core/TextField';
import Navbar from './Navbar'
import ResultCard from './ResultCard'
import {ThemeContextConsumer} from './Context'

import {useState} from 'react'

function Search() {

    const [query,setQuery] = useState("")
    const [results,setResults] = useState([])

    const onChange = (e)=>{
        e.preventDefault()

        setQuery(e.target.value)

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=b8bad15dce28b1a77d6f842607d2ff3c&language=en-US&page=1&include_adult=true&query=${e.target.value}`)
        .then(res => res.json())
        .then(data =>{
            if(!data.errors){
                setResults(data.results)
            }else{
                setResults([])
            }
        })
    }
    const handleLike=(movie)=>{
        <>
        {console.log("Movie: ",movie.title)}
        <ThemeContextConsumer>
            {context=>{
                context.addTheme()
            }}
        </ThemeContextConsumer>
        </>

    }
    return (
        
        <div className="search">
           
            
            
            
            
            <div className="search__input">
            
            <TextField className="search__input__box" onChange={onChange} value={query} color="secondary" id="outlined-basic" label="Search for movies....." variant="outlined" />
            
            </div>
            <div className="search__results">
             {results.length > 0 && (
                <ul className="results">
                    {results.map(movie=>(
                        <div className="results__poster">
                        <img  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
                        <div className="results__poster__button">
                        
                         <ThemeContextConsumer>
                             {context =>(
                              <button onClick={()=> context.addTheme(movie)}>Like</button>
                             )}
                        
                        </ThemeContextConsumer>   
                        <button>Trailer</button>
                        <button>Watched</button>
                        </div>
                        </div>
                   
                    ))}
                </ul>
            )} 
            </div>
             

        </div>
    )
}

export default Search