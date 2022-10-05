import React from "react"

function Home(){
    return(
        <React.Fragment>
            <section className="homePageContainer">
                <h2 className="title">POWER TO THE PEOPLE</h2>
                <h3 style={{color: "black", textShadow: "none", fontSize: "40px", fontFamily: "monospace"}}>GETTING NYC REGISTERED & READY FOR ELECTIONS</h3>
                <div className="buttonContainerHome">
                    <button className="homeButton"><span className="buttonText">Register</span></button>
                    <button className="homeButton"><span className="buttonText">Check Registration</span></button>
                    <button className="homeButton"><span className="buttonText">On The Ballot</span></button>
                </div>
            </section>
        </React.Fragment>
    )}
export default Home;