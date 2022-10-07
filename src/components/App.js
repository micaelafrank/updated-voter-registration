
import RegistrationForm from './RegistrationForm'
import VoterPage from './VoterPage'
import React, {useEffect, useState} from 'react'
// import { Switch, Route } from 'react-router-dom'
// import Search from './Search'
import CandidateList from './CandidateList'
import Home from './Home'
import { Route, Routes } from 'react-router-dom';
import WithNav from './WithNav'
import NewForm from './NewForm'

function App(){
  // const [search, setUserSearch] = useState("")
  const [candidates, setCandidates] = useState([])
  // const [search, setSearch] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:9292/voters")
  //   .then(res=> res.json())
  //   .then(voters=> setVoters(voters))
  // }, [])
  // console.log(voters)

  useEffect(() => {
    fetch("http://localhost:9292/candidates")
    .then(res => res.json())
    .then(candidates=> setCandidates(candidates))
  }, [])
  console.log(candidates)

  // function deleteVoter(id){
  //   const updatedList = voters.filter((voter) => voter.id !== id);
  //   setVoters(updatedList);
  // }


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      <Route element={<WithNav />}>
          <Route className="hidden" path="/home" element={<Home />} />
          <Route path="/voters" element={<VoterPage />} />
          <Route path="/candidates" element={<CandidateList candidates={candidates} />} />
          {/* <Route path="/register" element={<RegistrationForm addNewVoter={addNewVoter} />} /> */}
          <Route path="/register" element={<NewForm />} />
          {/* <Route path="*">
            <React.Fragment>404 not found</React.Fragment>
          </Route> */}
        </Route>
      </Routes>
    </div>
  )}

export default App;