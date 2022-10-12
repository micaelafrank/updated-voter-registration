import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaEdit, FaRegCheckCircle } from "react-icons/fa";


function EditVoterFN({ firstName, id }){
    const [firstNameState, setFirstNameState] = useState("");
    const [editState, setEditState] = useState(false);
    const [initialFNValue, setInitialFNValue] = useState(firstName);


    function handleEdit(){
        setEditState(!editState);
        if (firstNameState !== "") {
            fetch(`/editvoter/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: firstNameState,
                    id: id,
                }),
            })
                .then((resp) => resp.json())
                .then((data) => setInitialFNValue(data.firstName));
        }
    };


    return(
        <>
        {editState ? 
            (<div>
                    {/* <p id="fullNameTitle" style={{ fontSize: "18px", textAlign: "center", alignItems: "center", fontWeight: "bold", lineHeight: ".4" }}>{initialFNValue}</p> */}
                    <Row className="mt-2">
                        <Col>
                            <textarea
                            className="form-controlFN"
                            defaultValue={initialFNValue}
                            onChange={(e) => setFirstNameState(e.target.value)}
                            />
                        </Col>
                    </Row>
                </div>
                ) : (
                    // </InputGroup>
                    // </ListGroup.Item>
                    // <ListGroup.Item className="text-center">
                    <Row className="my-2 text-center">
                        <Col className="px-3">
                            <span>{initialFNValue}</span>
                        </Col>
                    </Row>
                )
            }
            
            {editState ? <FaRegCheckCircle id="checkButton" onClick={handleEdit} /> : <FaEdit className="--fa-primary-color --fa-secondary-color" id="editButton" onClick={handleEdit} />}
            {/* </Button> */}
    </>
  )
}

export default EditVoterFN;