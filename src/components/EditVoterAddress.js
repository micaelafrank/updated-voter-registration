import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaEdit, FaRegCheckCircle } from "react-icons/fa";


function EditVoterAddress({ address1, address2, id, postalCode }) {
    const [address1State, setAddress1State] = useState("");
    const [postalCodeState, setPostalCodeState] = useState("");
    const [address2State, setAddress2State] = useState("");
    const [editState, setEditState] = useState(false);
    // const [editState2, setEditState2] = useState(false);
    const [initialAddress1Value, setInitialAddress1Value] = useState(address1);
    const [initialPostalCodeValue, setInitialPostalCodeValue] = useState(postalCode);
    const [initialAddress2Value, setInitialAddress2Value] = useState(address2);

    function handleEdit(){
        setEditState(!editState);
        if (address1State !== "" && address2State !== "" && postalCodeState !== "") {
            fetch(`/editvoter/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    address1: address1State,
                    address2: address2State,
                    postalCode: postalCodeState,
                    id: id,
                }),
            })
            .then((resp) => resp.json())
            .then((data) => handleStateUpdates(data));
        }
    };

    function handleStateUpdates(data){
        setAddress1State(data.address1);
        setAddress2State(data.address2);
        setPostalCodeState(data.postalCodeState);
    }


    return (
        <>
            {editState ?
                (<div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-evenly"}}>
                    {/* <p id="fullNameTitle" style={{ fontSize: "18px", textAlign: "center", alignItems: "center", fontWeight: "bold", lineHeight: ".4" }}>{initialFNValue}</p> */}
                    <Row className="mt-2" style={{ marginRight: "25px" }}>
                        <Col>
                            <textarea
                                className="form-controlFN"
                                defaultValue={initialAddress1Value}
                                onChange={(e) => setAddress1State(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row className="mt-2" style={{ marginRight: "25px" }}>
                        <Col>
                            <textarea
                                className="form-controlFN"
                                defaultValue={initialAddress2Value}
                                onChange={(e) => setAddress2State(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row className="mt-2" style={{ marginRight: "10px" }}>
                        <Col>
                            <textarea 
                                className="form-controlFN"
                                placeholder={initialPostalCodeValue}
                                defaultValue={initialPostalCodeValue}
                                onChange={(e) => setPostalCodeState(e.target.value)}
                            />
                        </Col>
                    </Row>
                    {editState ? <FaRegCheckCircle id="checkButton" onClick={handleEdit} /> : <FaEdit id="editButton" onClick={handleEdit} />}
                </div>
                ) : (
                    // </InputGroup>
                    // </ListGroup.Item>
                    // <ListGroup.Item className="text-center">
                <div>
                    <Row className="my-2 text-center">
                        <Col className="px-3">
                            <span>{initialAddress1Value}</span>
                        </Col>
                    </Row>
                    <Row className="my-2 text-center">
                        <Col className="px-3">
                            <span>{initialAddress2Value}</span>
                        </Col>
                    </Row>
                    <Row className="my-2 text-center">
                        <Col className="px-3">
                            <span>{initialPostalCodeValue}</span>
                        </Col>
                    </Row>
                    {editState ? <FaRegCheckCircle id="checkButton" onClick={handleEdit} /> : <FaEdit id="editButton" onClick={handleEdit} />}
                </div>
                )
            }


            {/* {editState2 ? (
                <Row className="mt-2">
                    <Col>
                        <textarea
                            className="form-controlFN"
                            defaultValue={initialAddress2Value}
                            onChange={(e) => setAddress2State(e.target.value)}
                        />
                    </Col>
                </Row>
            ) : (
                // </InputGroup>
                // </ListGroup.Item>
                // <ListGroup.Item className="text-center">
                <Row className="my-2 text-center">
                    <Col className="px-3">
                            <span>{initialAddress2Value}</span>
                    </Col>
                </Row>
            )
            } */}
            
                {/* {editState2 ? <FaRegCheckCircle id="checkButton" onClick={handleEdit2} /> : <FaEdit id="editButton" onClick={handleEdit2} />} */}
        </>
    )
}

export default EditVoterAddress;