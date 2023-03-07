import "./footerstyles.css"

import React from 'react'

import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                  <FaHome size={20} style={{ color:"black", marginRight:"2rem"}}/>
                  <div>
                    <p>242/26,Isuru Mawatha,</p>
                    <p>Hiripitiya,</p>
                    <p>Pannipitiya.</p>
                  </div>
                    
                </div>

                <div className="phone">
                    <h4><FaPhone size={20} style={{ color:"black", marginRight:"2rem"}}/>
                011-963-856-745</h4>
                

                </div>

                <div className="email">
                    <h4><FaMailBulk size={20} style={{ color:"black", marginRight:"2rem"}}/>
                emailewanna@pls.lk</h4>
                

                </div>


            </div>

            <div className="right">
                <h4>
                    Read!
                </h4>
                <p>
                I'm still a work in progress, I have been coding this website for 5 hours straight as for now.There's alot more to get done too. but I'm lowkey proud about my self. 
                meka kiyawana kenata ADAREI.
                </p>
                <div className="social">
                <FaFacebook size={30} style={{ color:"black", marginRight:"2rem"}}/>
                <FaInstagram size={30} style={{ color:"black", marginRight:"2rem"}}/>
                <FaLinkedin size={30} style={{ color:"black", marginRight:"2rem"}}/>
                <FaGithub size={30} style={{ color:"black", marginRight:"2rem"}}/>

                </div>


            </div>
            


        </div>
    </div>
  )
}

export default footer