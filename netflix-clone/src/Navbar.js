import React from 'react'
import './Navbar.css'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {

    // const [show, handleShow] = useState(false);
    // useEffect(()=>{
    //     window.addEventListener("scroll", () => {
    //   if (window.scrollY > 100) {
    //     handleShow(true);
    //   } else {
    //     handleShow(false);
    //   }
    // });
    // return () => {
    //   window.removeEventListener("scroll");
    // };

    // },[])

    return (
        <div className={`nav`}>
           <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />

      {/* <button className="nav__button nav__watched">Watched</button>
      <button className="nav__button nav__watchlist">WatchList</button>
      <button className="nav__button nav__search">Search</button> */}
      {/* <img
        className="nav__avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />  */}
            <button className="nav__button"><Link to ="/">Home</Link></button>
            <button className="nav__button"><Link to ="/watched">My Favourites</Link></button>
            <button className="nav__button"><Link to ="/search">Search</Link></button>
            <button className="nav__button"><Link to ="/watchlist">Watchlist</Link></button>
            
=======
          <img
        className="nav__avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      /> 

        </div>
    )
}

export default Navbar
