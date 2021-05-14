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
