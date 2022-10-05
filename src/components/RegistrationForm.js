import React, { useState } from "react"
// import { useHistory } from 'react-router-dom'

function RegistrationForm({ addNewVoter }) {
    const [formData, setFormData] = useState(
      {
       name: "",
       address1: "", 
       address2: "",
       state: "", 
       postalCode: "",
       age: 18,
       party: "", 
       password: "",
      }
    )
    // const history = useHistory();
       
    function handleChange(e){
      setFormData({...formData, [e.target.name]: e.target.value})
    }

    console.log(formData)
    
    
    function handleSubmit(e){
      e.preventDefault();
      fetch(`http://localhost:9292/voters`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
    },
      body: JSON.stringify(formData),
    })
    .then(res=> res.json())
    .then(addNewVoter)
    setFormData({name:"", address1: "", address2: "", state: "", postalCode: "", age: 18, party: "", password: ""})
    // history.push('/voters')
  }

  // useEffect(()=>{
  //   window.scrollTo(0, 0);
  // }, ["/"]);

    return (
        <div className="formBackground">
            <h1 className="formHeading2">REGISTER</h1>
            <p>If you have already registered in New York, you are permanently registered unless:</p>
            <ul>
              <li>You moved your residence outside the city or county in which you were registered.</li>
              <li>You are an inactive voter who has not voted in any election, including two consecutive Federal Elections, and have not confirmed your address during that period.</li>
            </ul>
            <form id="newVoterForm" onSubmit={handleSubmit}>
              <label style={{paddingTop: "0"}}>NAME:</label>
              <input required className="inputText" placeholder="First Name, Last Name" name="name" value={formData.name} onChange={handleChange}/>
              <label>ADDRESS:</label>
              <input required className="inputText" placeholder="Address1" name="address1" value={formData.address1} onChange={handleChange}/>
              <input style={{paddingBottom:"12px"}} className="inputText" placeholder="Address2 (Optional)" name="address2" value={formData.address2} onChange={handleChange}/>
              <label>STATE:</label>
              <input required className="inputText" placeholder="State" name="state" value={formData.state} onChange={handleChange}/>
              <label>POSTAL CODE:</label>
              <input className="inputText" placeholder="Postal Code" name="postalCode" type="number" value={formData.postalCode} onChange={handleChange}/>
              <label>AGE:</label>
              <input className="inputText" placeholder="Age" name="age" type="number" value={formData.age} onChange={handleChange}/>
              <div className="flexBoxContainer">
                <input className="flexBox" type="checkbox"/>
                <p className="flexBox" style={{ fontSize: "12px" }}>I agree that I am 18 years old or will be on the date of the election.</p>
              </div>
              <label>SELECT A PARTY:</label>
              <select required style={{ height:"45px", width:"300px", fontSize: "14px" }} name="party" defaultValue={'DEFAULT'} value={formData.party_name} onChange={handleChange}>
                <option value="DEFAULT">Choose one</option>
                <option>Democrat</option>
                <option>Green</option>
                <option>Independent</option>
                <option>Republican</option>
                <option>Working Families</option>
              </select>
              <label>CREATE A LOGIN PASSWORD:</label>
              <input required className="inputText" placeholder="Must contain at least 8 characters" name="password" value={formData.password} type="password" onChange={handleChange}/>
              <input id="submit" type="submit" style={{ height:"50px", width:"300px" }} />
            </form>
        </div>
)}
export default RegistrationForm;