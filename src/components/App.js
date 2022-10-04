
import RegistrationForm from './RegistrationForm'
import VoterList from './VoterList'
import {useEffect, useState} from 'react'
import { Switch, Route } from 'react-router-dom'
import Search from './Search'
import CandidateList from './CandidateList'
import Home from './Home'
import NavBar from './NavBar'


function App(){
  const [search, setUserSearch] = useState("")
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

  function deleteVoter(id){
    const updatedList = voters.filter((voter) => voter.id !== id);
    setVoters(updatedList);
  }

  function addNewVoter(newVoter){
    const updatedList = [...voters, newVoter];
    setVoters(updatedList)
  }
  
  const searchVoters = voters.filter((voter) => {
    return (voter.first.toLowerCase().includes(search.toLowerCase()) || voter.last.toLowerCase().includes(search.toLowerCase())) 
  })

  return (
    <div>
        <NavBar/>
          <Switch>
          <Route path="/voters">
            <Search search={search} handleSearch={setUserSearch}/>
            <VoterList setVoters={setVoters} searchVoters={searchVoters} voters={voters} deleteVoter={deleteVoter}/>
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
        </Switch>
    </div>
  )}

export default App;