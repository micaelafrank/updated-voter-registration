import React, { useState, useEffect } from "react";
import VoterList from "./VoterList";
// import GridColSizesExample from "./GridColSizesExample";
import Search from "./Search";

function VoterPage() {
    const [firstNameSearch, setFirstNameSearch] = useState("")
    const [lastNameSearch, setLastNameSearch] = useState("")
    const [zipSearch, setZipSearch] = useState("")
    const [isSearching, setIsSearching] = useState(false);
    const [error, setError] = useState("");
    const [voters, setVoters] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/voters")
            .then(res => res.json())
            .then(voters => setVoters(voters))
    }, [])
    console.log(voters)

    // function addNewVoter(newVoter) {
    //     const updatedList = [...voters, newVoter];
    //     setVoters(updatedList)
    // }

    function deleteVoter(id) {
        const updatedList = voters.filter((voter) => voter.id !== id);
        setVoters(updatedList);
    }

    function handleSearch() {
        setIsSearching(isSearching => (!isSearching))
    }

    const renderMessage = "Not found: Your search did not match any record on file. Please ensure fields are accurate and try again."

    const searchedNames = voters.filter((voter) => {
         return (voter.first == firstNameSearch) && (voter.last == lastNameSearch) && (voter.postalCode.toString() == zipSearch)
    })

    return (
        <main className="voterPageContainer" style={{paddingTop: "35px", paddingBottom: "30px"}}>
            {/* <GridColSizesExample /> */}
            <Search setFirstNameSearch={setFirstNameSearch} setLastNameSearch={setLastNameSearch} handleSearch={handleSearch} setZipSearch={setZipSearch} firstNameSearch={firstNameSearch} lastNameSearch={lastNameSearch} zipSearch={zipSearch} />
            {/* <VoterList voters={searchedNames} voters={voters} setVoters={setVoters} searchVoters={searchVoters} deleteVoter={deleteVoter} /> */}
            <VoterList error={error} voters={isSearching ? searchedNames : voters} handleSearch={handleSearch} handleDelete={deleteVoter} firstNameSearch={firstNameSearch} lastNameSearch={lastNameSearch} zipSearch={zipSearch} setZipSearch={setZipSearch} setFirstNameSearch={setFirstNameSearch} setLastNameSearch={setLastNameSearch} />
        </main>
)}

export default VoterPage;
