import React from 'react';
import './App.css';
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import Navbar from './Navbar'
import Main from './Main'
import Watched from './Watched'
import Search from './Search'
import Watchlist from './Watchlist'
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'


function App() {
  return (
    // <div className="app">
    //   <Router>
    //   <Navbar/>
    //   <Banner />

    //   <Row isLargeRow title="NETFLIX ORIGINALS" fetchURL ={requests.fetchNetflixOriginals}/>
    //   <Row title="Trending Now" fetchURL ={requests.fetchTrending}/>
    //   <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
    //   <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
    //   <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
    //   <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
    //   <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    //   </Router>

    // </div>
    
    
    <Router>
      
      <Navbar/>
      <Switch>
        
        <Route exact path="/"><Main/></Route>
        <Route  path="/watched"><Watched/></Route>
        <Route  path="/search"><Search/></Route>
        <Route path ="/watchlist"><Watchlist/></Route>

      </Switch>

    </Router>
    
  );
}

export default App;
