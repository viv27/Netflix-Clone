import React,{useEffect} from 'react'
import Banner from './Banner'
import './Search.css'
import TextField from '@material-ui/core/TextField';
import Navbar from './Navbar'
import ResultCard from './ResultCard'
import {ThemeContextConsumer} from './Context'
import axios from './axios'
import ReactPlayer from 'react-player'


import ReactDOM from 'react-dom'


import {useState} from 'react'

function Search() {
    const styles = theme => ({
    multilineColor:{
        color:'red'
    }
});

    const [query,setQuery] = useState("")
    const [results,setResults] = useState([])
    const [isOpen, setOpen] = useState(false)
    const [trailerUrl, setTrailerUrl] = useState("")
    const[watched,setWatched] = useState([])
    const [watchlist,setWatchList] = useState([])

    

    const onChange = (e)=>{
        e.preventDefault()

        setQuery(e.target.value)

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=b8bad15dce28b1a77d6f842607d2ff3c&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
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
    const handleClick = async (movie)=>{ 

        const URL = await handleUrl(movie)
        console.log("MMM: ",movie)
        console.log("uuuuuuu: ",URL)
        setTrailerUrl(URL)
        console.log("yyyy: ",trailerUrl)

        window.open(`https://www.youtube.com/watch?v=${URL}`, "_blank")
        console.log("https://www.youtube.com/watch?v=");
        
        setTrailerUrl("")
        

    }
    const handleUrl = async (movie) => {
    // if (trailerUrl) {
    //   setTrailerUrl("");
    // } else {
        console.log("HHH: ",movie)
      let trailerurl = await axios.get(
        `/movie/${movie.id}/videos?api_key=fb34530271b349314af0de263d16ab5a`
      );
    
      return trailerurl.data.results[0]?.key
      
      
    // }
  };
    return (
        
        <div className="search">
           
            
            
            
            
            <div className="search__input">
            
            <TextField className="search__input__box" onChange={onChange} value={query} color="secondary" id="outlined-basic" label="Search for movies....." variant="outlined" InputProps={{
        style: {
            color: "red",
            backgroundColor: "white",
            margin: "10px"
            
        }
    
  }} InputLabelProps={{style:{color:"black",fontSize:"20px",padding:"3px"}}}/>
            
            </div>
            <div className="search__results">
             {results.length > 0 && (
                <ul className="results">
                    {results.map(movie=>(
                        
                      movie.poster_path &&  <div className="results__poster">
                         <img  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`}/>
                        <div className="results__poster__button">
                        
                         <ThemeContextConsumer>
                             {context =>(
                                <>
                              <button onClick={()=> context.addTheme(movie)}>Favourite</button>
                              <button onClick={()=> context.addWatched(movie)}>Add+</button>
                              {/* {setWatchList(...context.watchlist)}
                              {setWatched(...context.watched)} */}
                              </>
                             )}
                        
                        </ThemeContextConsumer>   
                        
                        <button onClick={()=>handleClick(movie)}>Trailer</button>
                        
                        
                        
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