import React from "react"
import { Link } from "react-router-dom";

function Home(){
    return(
        <React.Fragment>
            <section className="homePageContainer">
                <h2 className="title">BIG APPLE BALLOTS</h2>
                <h3 style={{ color: "black", textShadow: "none", fontSize: "40px", fontFamily: "KGThankYouStamp" }}>FOR THE CITY THAT NEVER SLEEPS ON VOTING</h3>
                <h3 style={{ color: "black", textShadow: "none", fontSize: "30px", fontFamily: "monospace" }}>VOTER INFORMATION & RESOURCES ON UPCOMING ELECTIONS.</h3>
                <div className="buttonContainerHome">
                    <button id="button1home" className="homeButton"><Link className="homeNavItem" to="/register">REGISTER</Link></button>
                    <button id="button2home" className="homeButton"><Link className="homeNavItem" to="/voters">CHECK REGISTRATION</Link></button>
                </div>
                <button id="button3home" className="homeButton"><Link className="homeNavItem" to="/candidates">ON THE BALLOT</Link></button>
            </section>
        </React.Fragment>
    )}
export default Home;