import React from 'react';
import Candidate from './Candidate';

function CandidateList({candidates}){

    const candidatesList = candidates.map((candidate) => (
        <Candidate
        key={candidate.id}
        id={candidate.id}
        name={candidate.name}
        img={candidate.img}
        seat={candidate.seat}
        votingParty={candidate.votingParty}
        issue1={candidate.issue1}
        issue1Description={candidate.issue1Description}
        />
    ))

    return(
        <div>
            <h1 style={{paddingTop:"45px"}} className="formHeading3">MEET YOUR CANDIDATES</h1>
            <h1 className="formHeading3">MEET YOUR CANDIDATES</h1>
            <h1 style={{paddingTop:"15px"}} className="formHeading3">MEET YOUR CANDIDATES</h1>
            <div className="candidateList">
                {candidatesList}
            </div>
        </div>
)}
    export default CandidateList;
