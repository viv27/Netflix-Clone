import React from 'react'
import './Navbar.css'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import kinda from './images/kinda.png'

function Navbar() {

   

    return (
        <div className={`nav`}>
           <img
        className="nav__logo"
        src={kinda}
        alt="Netflix Logo"
      />

      
            <p className="nav__link"><Link style={{ textDecoration: 'none',color: 'white',fontWeight: 'bold' }} to ="/">Home</Link></p>
            <p className="nav__link"><Link style={{ textDecoration: 'none',color: 'white',fontWeight: 'bold'}} to ="/watched">My Favourites</Link></p>
            <p className="nav__link"><Link style={{ textDecoration: 'none',color: 'white',fontWeight: 'bold'}} to ="/search">Search</Link></p>
            <p className="nav__link"><Link style={{ textDecoration: 'none',color: 'white',fontWeight: 'bold'}} to ="/watchlist">Watchlist</Link></p>
            

          

        </div>
    )
}

export default Navbar
