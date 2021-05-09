import React from 'react';
import './App.css';
import Row from './Row'
import requests from './requests'

function App() {
  return (
    <div className="App">
      <h1>Netflix</h1>
      <Row title="NETFLIX ORIFINALS" fetchURL ={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchURL ={requests.fetchTrending}/>

    </div>
  );
}

export default App;
