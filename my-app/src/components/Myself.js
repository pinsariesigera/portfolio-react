import "./MyselfStyles.css"

import React from 'react'

import Profile from "../assets/profile.jpg"

function Myself() {
    return (
        <div className="about">
            <div className="left">
                <h1>
                    Who Am I?
                </h1>
                <p>Experienced Account Assistant with a demonstrated history of working in the insurance industry. Skilled in Analytical Skills, Revenue Recognition, Microsoft Excel, Accounting, and General Ledger. Strong operations professional studying for a Bachelor's degree focused in Management Information Systems and Services from University of Colombo School of Computing.</p>
                <h1>
                    Secondary Education
                </h1>
                <p> Anula Vidyalaya, Nugegoda</p>
                <h1>
                    Primary Education
                </h1>
                <p> Vidura College, Hokandara</p>
                <h1>
                    Co-Curricular activities
                </h1>
                <p> AIESEC in UOC</p>
                <p> ACM in UCSC</p>
                <p> IEEE in UCSC</p>
                <h1>
                    Experience
                </h1>
                <p> 2021-2022 accounts assistant at RIB</p>
                <p> Team member iGT</p>
                <p> Team Leader IGT</p>
                <p> OCVP Finance - Insight 2022</p>
                <p> OCVP Logistics - Excellentia 2023</p>



            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-self">
                        <img src={Profile} className="img" alt="this is me"/>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Myself