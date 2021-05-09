import React from 'react';
import './App.css';
import Row from './Row'
import requests from './requests'

function App() {
  return (
    <div className="app">
      <h1>Netflix</h1>
      <Row isLargeRow title="NETFLIX ORIFINALS" fetchURL ={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchURL ={requests.fetchTrending}/>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
