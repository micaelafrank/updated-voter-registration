import React, { useState, useEffect } from "react";
import EditVoterFN from "./EditVoterFN";
import EditVoterLN from "./EditVoterLN";
import { FaEdit } from "react-icons/fa";
import EditVoterAddress from "./EditVoterAddress";
import EditVoterParty from "./EditVoterParty";

function EditVoterCard({ id, count, canEdit, isActive, address1, address2, age, firstName, lastName, party, postalCode, deleteVoter }) {
    const fullName = `${firstName} ${lastName}`;
    console.log(firstName)
    console.log(lastName)
    console.log(fullName);
    function generate(n) {
        var add = 1, max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.   
        if (n > max) {
            return generate(max) + generate(n - max);
        }

        max = Math.pow(10, n + add);
        var min = max / 10; // Math.pow(10, n) basically
        var number = Math.floor(Math.random() * (max - min + 1)) + min;

        return ("" + number).substring(add);
    }

    function handleDelete() {
        fetch(`http://localhost:9292/editvoter/${id}`, {
            method: "DELETE",
        })
        deleteVoter(id);
    }

    return (
        <>
            <h1 className="formHeading4" style={{marginTop: "100px"}}>EDIT VOTER INFORMATION</h1>
            <div className="searchItemEdit">
                <div className={isActive ? "searchContainerBlack" : "searchContainerRed"}>
                    <div style={{ display: "flex", marginLeft:"auto", marginRight:"auto", paddingBottom: "12px", textAlign: "center", justifyContent: "center", justifyItems: "center", alignItems:"center", flexDirection:"row"}}>
                        {/* <p id="fullNameTitle" style={{ fontSize: "18px", textAlign: "center", alignItems: "center", fontWeight: "bold", lineHeight: ".4" }}><EditVoterFN/></p> */}
                        <EditVoterFN id={id} firstName={firstName} />
                    </div>
                    <div style={{ display: "flex", paddingBottom: "12px", marginLeft: "auto", marginRight: "auto", textAlign:"center", justifyContent:"center", justifyItems:"center", alignItems: "center", flexDirection: "row" }}>
                        {/* <p id="fullNameTitle" style={{ fontSize: "18px", textAlign: "center", alignItems: "center", fontWeight: "bold", lineHeight: ".4" }}>Last Name</p> */}
                        <EditVoterLN id={id} lastName={lastName} />
                    </div>
                    {/* <EditVoterFN id={id} firstName={firstName} /> <EditVoterLN lastName={lastName} /> */}
                    <p style={{ lineHeight: "0", fontSize: "16px" }}><span style={{ fontWeight: "bold" }}>AGE: </span>{age} years old</p>
                    <p style={{ textAlign: "center", fontSize: "16px", alignItems: "center" }}><span style={{ fontWeight: "bold" }}>VOTER SERIAL NUMBER (VSN): </span>{generate(6)}</p>
                    {/* <p style={{ alignItems: "left", fontSize: "16px" }}><span style={{ fontWeight: "bold" }}>PARTY: </span>{party ? party.party_name : 'Neutral'}</p> */}
                    <EditVoterParty party={party} id={id} />
                    <p style={{ fontSize: "16px", color: isActive ? "black" : "red" }}><span style={{ fontWeight: "bold" }}>VOTER STATUS: </span>{isActive ? "ACTIVE" : "INACTIVE"}</p>
                    <p style={{ fontSize: "16px" }}><span style={{ fontWeight: "bold" }}>RESIDENTIAL ADDRESS: </span><span style={{ display: "flex", flexDirection: "row" }}>{address1}, {address2}, {postalCode}</span></p>
                    <EditVoterAddress id={id} postalCode={postalCode} address1={address1} address2={address2} />
                    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <button id="deleteRegBtn" style={{ marginRight: "5px" }}><a style={{ textDecoration: "none", color: "black" }} href="https://findmypollsite.vote.nyc/?hn=&sn=&zip=">FIND MY POLLSITE</a></button>
                        <button id="deleteRegBtn" style={{marginLeft:"5px"}} onClick={handleDelete}>DELETE MY VOTING RECORD</button>
                    </div>
                </div>
            </div> 
        </>
    );
}
export default EditVoterCard;
