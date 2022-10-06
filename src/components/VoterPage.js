import React, { useState } from "react";
import VoterList from "./VoterList";
// import GridColSizesExample from "./GridColSizesExample";
import Search from "./Search";

function VoterPage({ voters, setVoters }) {
    // const [formData, setFormData] = useState({ first: "", last: "", postalCode: "" });
    // const [voters, setVoters] = useState([])
    const [search, setSearch] = useState("");
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [zip, setZip] = useState("");

    function deleteVoter(id) {
        const updatedList = voters.filter((voter) => voter.id !== id);
        setVoters(updatedList);
    }

    const searchedNames = voters.filter((voter) => {
        return (voter.first.toLowerCase() === (firstName.toLowerCase())) &&
            (voter.last.toLowerCase() === (lastName.toLowerCase())) &&
            (voter.postalCode.toLowerCase() == (zip.toLowerCase()))
    })

    return (
        <main className="voterPageContainer" style={{paddingTop: "35px", paddingBottom: "30px"}}>
            {/* <GridColSizesExample /> */}
            <Search setSearch={setSearch} />
            {/* <VoterList voters={searchedNames} voters={voters} setVoters={setVoters} searchVoters={searchVoters} deleteVoter={deleteVoter} /> */}
            <VoterList voters={searchedNames} handleDelete={deleteVoter} />
        </main>
)}

export default VoterPage;
