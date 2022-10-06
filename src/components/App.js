
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
  const [voters, setVoters] = useState([])
  const [candidates, setCandidates] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/voters")
    .then(res=> res.json())
    .then(voters=> setVoters(voters))
  }, [])
  console.log(voters)

  useEffect(() => {
    fetch("http://localhost:9292/candidates")
    .then(res => res.json())
    .then(candidates=> setCandidates(candidates))
  }, [])
  console.log(candidates)

  function addNewVoter(newVoter) {
    const updatedList = [...voters, newVoter];
    setVoters(updatedList)
  }

  // function deleteVoter(id){
  //   const updatedList = voters.filter((voter) => voter.id !== id);
  //   setVoters(updatedList);
  // }

  // const searchVoters = voters.filter((voter) => {
  //   return (voter.first.includes(search)) || (voter.last.includes(search)) 
  // })

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      <Route element={<WithNav />}>
          <Route className="hidden" path="/home" element={<Home />} />
          <Route path="/voters" element={<VoterPage voters={voters} setVoters={setVoters} />} />
          <Route path="/candidates" element={<CandidateList candidates={candidates} />} />
          <Route path="/register" element={<RegistrationForm addNewVoter={addNewVoter} />} />
          <Route path="/signup" element={<NewForm addNewVoter={addNewVoter} />} />
          {/* <Route path="*">
            <React.Fragment>404 not found</React.Fragment>
          </Route> */}
        </Route>
      </Routes>
        {/* <NavBar/>
          <Switch>
          <Route path="/voters"> */}
            {/* <Search search={search} handleSearch={setUserSearch}/>
            <VoterList search={search} voters={voters} setVoters={setVoters} searchVoters={searchVoters} deleteVoter={deleteVoter}/> */}
            {/* <VoterPage voters={voters} setVoters={setVoters} />
          </Route>
          <Route path="/candidates">
            <CandidateList candidates={candidates}/> 
          </Route>
          <Route path="/registrationform">
            <RegistrationForm addNewVoter={addNewVoter}/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <h1>404 not found</h1>
          </Route>
        </Switch> */}
    </div>
  )}

export default App;