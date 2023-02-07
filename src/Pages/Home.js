import React from 'react'
import "../styles/Home.css";
import {Link} from "react-router-dom";
import fullImage from "../assets/pexels-scott-webb-1048035.jpg";

function Home() {
  return (
    <div className="home">
        <img src={fullImage} width="420px"/>
        <h1 className="firstHeader">Indoor</h1>
        <h1 className="secondHeader">Plants</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet auctor vulputate. Aenean bibendum viverra elit rutrum porta. Duis varius massa a massa eleifend, nec lobortis est tristique. Duis eget dapibus tortor. Nulla varius massa est, at consectetur massa semper ac. Donec sodales mattis luctus. Aenean sollicitudin mollis varius. Suspendisse id massa eget arcu elementum tincidunt quis lacinia turpis. Curabitur dictum leo tortor, eu facilisis nisl porta ut. Nunc vel lacinia eros. Donec sollicitudin mollis urna ut condimentum. Nulla porttitor arcu et nisi pharetra, ut auctor quam imperdiet.</p>
        <button className="btn">
          <Link to="/products">Order Now</Link>
          </button>
    </div>
  )
}

export default Home