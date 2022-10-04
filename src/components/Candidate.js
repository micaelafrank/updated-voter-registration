import React from 'react'

function Candidate({img, name, seat, votingParty, issue1, issue1Description}){
    // const {name, img, seat, party, issue1, issue1Description} = candidate;
    return(
        <div className="candidateBox">
            <h4 className="candidateName">{name}</h4>
            <p style={{fontWeight:"bold", paddingBottom: "10px"}}>Running for: {seat}</p>
            <img className="candidate-headshot" src={img} alt="headshot"/>
            <p style={{padding:"10px"}}>{votingParty}</p>
            <p className="candidateIssueTitle">Passionate About: {issue1}</p>
            <p className="candidateIssueDescription">{issue1Description}</p>
            <button className="candidateButton"><a href="https://https://vote.nyc/">Learn more about {name}!</a></button>
        </div>
)}

export default Candidate;