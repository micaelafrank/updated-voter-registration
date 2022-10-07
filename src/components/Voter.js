import React, { useState, useEffect } from "react";
// import Popup from 'reactjs-popup';

function Voter({ id, isActive, search, firstName, lastName, party, postalCode, password, deleteVoter }){
     const [formName, setName] = useState("")
     const [formPassword, setPassword] = useState("")

     const initial = firstName[0];

    function handleSubmit(e){
        e.preventDefault()
        if(firstName===formName && password===formPassword){
            handleDelete();
        } else{
            e.target.reset();
        }
    }

    function handleDelete(){
        fetch(`http://localhost:9292/voters/${id}`,{
            method: "DELETE",
        })
        deleteVoter(id);
    }

    return (
        <div className={`gridItem`}>
        <div className={isActive ? "voterContainerBlack" : "voterContainerRed"}>
            {/* <p style={{ fontSize:"18px", fontWeight:"bold" }}>{firstName}</p> */}
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>{initial}. {lastName}</p>
            <p><span style={{fontWeight: "bold"}}>Party:</span>{party ? party.party_name : 'Neutral'}</p>
            <p style={{ fontWeight: "bold", fontSize: "13px", color: isActive ? "black" : "red" }}>Voter Status: {isActive ? "ACTIVE" : "INACTIVE"}</p>
            <p>{postalCode}</p>
            <button id="moreInfoButton">Voter Details</button>
            {/* <Popup trigger={<button> Delete Voter Record</button>} position="right center">
                <form className="popuptext" onSubmit={handleSubmit}>
                    <p>To deactivate your registration, please confirm your full name and login password.</p>
                    <label >Enter first and last name:</label>
                    <input className="deleteInput form-control" placeholder="Name" name="name" type="text" onChange={(e)=> setName(e.target.value)} required></input>
                    <label>Enter password:</label>
                    <input className="deleteInput form-control" placeholder="Password" name="password" type="password" onChange={(e)=> setPassword(e.target.value)} required></input>
                    <button id="submit" type="submit">Delete</button>
                </form>
            </Popup> */}
        </div>
    </div>
    );
}
export default Voter;
