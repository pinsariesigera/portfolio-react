import "./PriceStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

const Price = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>BLA BLA 1</h3>
                <span className="bar"></span>
                <p className="btc">BLA</p>
                <p>Type Something</p>
                <p>Type Something</p>
                <p>Type Something</p>
                <p>Type Something</p>
                <Link to="/contact" className="btn">Press ME</Link>


            </div>

            <div className="card">
                <h3>BLA BLA 2</h3>
                <span className="bar"></span>
                <p className="btc">BLA</p>
                <p>Type Something</p>
                <p>Type Something</p>
                <p>Type Something</p>
                <p>Type Something</p>
                <Link to="/contact" className="btn">Press ME</Link>


            </div>

            <div className="card">
                <h3>BLA BLA 3</h3>
                <span className="bar"></span>
                <p className="btc">BLA</p>
                <p>Type Something</p>
                <p>Type Something</p>
                <p>Type Something</p>
                <p>Type Something</p>
                <Link to="/contact" className="btn">Press ME</Link>


            </div>



        </div>

    </div>
  )
}

export default Price

