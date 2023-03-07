import "./HeroimgStyles.css";
import "../index.css";

import React from 'react'

import introimg from "../assets/intro.jpg"
import { Link } from "react-router-dom";
const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={introimg} alt="ai penne naththe?" />
        </div>
        <div className="content">
            <p> Hi! I'M Pinsarie Sigera</p>
            <h1>Undergraduate at UCSC</h1>

            <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn">Contact</Link>
            </div>

        </div>
        

    </div>
  )
}

export default Heroimg