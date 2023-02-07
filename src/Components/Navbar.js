import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../assets/logo 1.png";
import Menu from "../assets/Menu.png";

function Navbar() {
const [openLinks, setOpenLinks] = useState(false);

const toggleNavbar = () => {
  setOpenLinks(!openLinks);
}

  return (
    <div className="navbar">
        <div className="leftSide">
            <Link to="/"><img src={Logo} width="30px"/></Link>
        </div>
        <div className="rightSide" id={openLinks ? "open" : "close"}>
          <div className='hiddenLinks'>
            <Link to="/">HOME</Link>
            <Link to="/products">PRODUCTS</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">SIGN IN</Link> 
            </div>
            <button onClick={toggleNavbar}><img src={Menu} width="24px"/></button>
        </div>
    </div>
  )
}

export default Navbar