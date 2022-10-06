import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';
import PassClosedEye from './PassClosedEye';
import PassOpenEye from './PassOpenEye';

function NewForm({ addNewVoter }) {

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

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    console.log(formData)


    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/voters`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(addNewVoter)
        setFormData({ name: "", address1: "", address2: "", state: "", postalCode: "", age: 18, party: "", password: "" })
        // history.push('/voters')
    }

    return (
        <React.Fragment>
            <div id="overviewContainer" style={{ marginLeft: "auto", marginRight: "auto", width: "65%", alignItems:"center", justifyContent:"center", border:"1px solid black", padding:"5px 20px 20px 20px"}}>
                <p id="overviewTitle" className="formHeading2">OVERVIEW</p>
                <div style={{ margin: "15px", alignItems: "center" }}>
                    <p style={{ fontSize: "17px", paddingBottom: "13px", fontWeight: "bold", fontFamily: "monospace" }}>TO REGISTER IN NEW YORK STATE YOU MUST:</p>
                        <ul style={{ listStyleType: "circle", fontFamily: "monospace" }}>
                            <li id="bullet1">Be a citizen of the United States & 18 years old.</li>
                            <li id="bullet2">Be a resident of this state and the county, city or village for at least 30 days before the election.</li>
                            <li id="bullet2">Not be in prison for a felony conviction.</li>
                        </ul>
                </div>
                <div style={{margin:"15px 35px 15px 15px", alignItems:"center"}}>
                    <p style={{fontSize:"17px", paddingBottom:"13px", paddingTop:"13px", fontWeight:"bold", fontFamily:"monospace"}}>IF YOU HAVE ALREADY REGISTERED TO VOTE, YOU ARE PERMANENTLY REGISTERED UNLESS:</p>
                    <ul style={{ listStyleType: "circle", fontFamily: "monospace" }}>
                        <li id="bullet1">You moved your residence outside the city or county in which you were registered.</li>
                        <li id="bullet2">You are an inactive voter who has not voted in any election, including two consecutive Federal Elections, and have not confirmed your address during that period.</li>
                    </ul>
                </div>
            </div>
            <div id="form-container-new">
                <h1 className="formHeading4">REGISTER</h1>
                <Form id="registerForm">
                    <Row style={{display:"flex", flexDirection:"row"}}>
                        <Col xs={7}>
                            <label style={{paddingRight:"10px"}}>FIRST NAME:</label>
                            <Form.Control required className="inputText" placeholder="First Name" name="name" value={formData.first} onChange={handleChange} />
                        </Col>
                        <Col xs={7}>
                            <label style={{ paddingRight: "10px", paddingLeft:"16px" }}>LAST NAME:</label>
                            <Form.Control required className="inputText" placeholder="Last Name" name="name" value={formData.last} onChange={handleChange} />
                        </Col>
                    </Row>
                    <Row style={{ display: "flex", flexDirection: "row", alignItems:"center" }}>
                        <Col>
                            <label style={{paddingRight: "10px"}}>ADDRESS 1:</label>
                            <Form.Control id="add1" required className="inputText" placeholder="Street address" name="address1" value={formData.address1} onChange={handleChange} />
                        </Col>
                        <Col style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <label style={{ paddingRight: "10px", paddingLeft: "16px" }}>ADDRESS 2 (OPTIONAL):</label>
                            <Form.Control id="add2" className="inputText" placeholder="Apt/Floor" name="address2" value={formData.address2} onChange={handleChange} />
                        </Col>
                    </Row>
                    <Row style={{ display: "flex", flexDirection: "row", alignItems:"center" }}>
                        <Col>
                            <label style={{ paddingRight: "10px" }}>POSTAL CODE:</label>
                            <Form.Control className="inputText" id="zip" placeholder="Postal Code" name="postalCode" value={formData.postalCode} onChange={handleChange} />
                        </Col>
                        <Col>
                            <label style={{ paddingRight: "10px", paddingLeft: "16px" }}>BIRTHDAY:</label>
                            <Form.Control id="bday" className="inputText" placeholder="MM/DD/YYYY" />
                        </Col>
                        <Col>
                            <label style={{ paddingRight: "10px", paddingLeft: "16px" }}>AGE:</label>
                            <Form.Control id="age" className="inputText" placeholder="Age" name="age" value={formData.age} onChange={handleChange} />
                        </Col>
                    </Row>
                    <Row style={{ display: "flex", flexDirection: "row", alignItems:"center" }}>
                        <Form.Group as={Col} controlId="formGridState" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <Form.Label style={{ paddingRight: "10px"}}>CHOOSE A PARTY:</Form.Label>
                            <Form.Select id="partyOptions" required defaultValue={'DEFAULT'} value={formData.party_name} style={{height:"30px"}} onChange={handleChange}>
                                <option value="DEFAULT">Choose one</option>
                                <option>Democrat Party</option>
                                <option>Green Party</option>
                                <option>Independent Party</option>
                                <option>Working Families Party</option>
                                <option>Republican Party</option>
                            </Form.Select>
                        </Form.Group>
                        <Col>
                            <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                                <label style={{ paddingRight: "10px", paddingLeft:"16px" }}>CREATE A LOGIN PASSWORD:</label>
                                <Form.Control required className="inputText" placeholder="Minimum 8 characters" type="password" name="password" value={formData.password} onChange={handleChange} />
                                <PassOpenEye/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Form.Check style={{ display: "flex", flexDirection: "row", alignItems: "center", textAlign: "center", lineHeight: "1" }} required label="I agree that I am 18 years old or will be on the date of the election." />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ span: 10, offset: 2 }} >
                            <Form.Check style={{ display: "flex", flexDirection: "row", alignItems: "center", textAlign: "center", lineHeight:"1" }} id="formCheck2" required label="I certify that the above information is true and correct." />
                        </Col>
                    </Row>
                    <Button style={{ marginTop: "35px", marginLeft:"10px", fontFamily:"KGThankYouStamp"}} variant="primary" id="newVoterSubmit" type="submit">SUBMIT</Button>
                </Form>
            </div>
        </React.Fragment>
    );
}



export default NewForm;