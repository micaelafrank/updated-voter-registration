import React, { useState } from "react";

function EditVoterAddress() {
    const [address1State, setAddress1State] = useState("");
    const [address2State, setAddress2State] = useState("");
    const [editState1, setEditState1] = useState(false);
    const [editState2, setEditState2] = useState(false);
    const [initialAddress1Value, setInitialAddress1Value] = useState(address1);
    const [initialAddress2Value, setInitialAddress2Value] = useState(address2);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    let handleEdit1 = (e) => {
        setEditState1(!editState1);

        if (e.target.textContent === "Done Editing" && address1State !== "") {
            fetch(`/edit/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    address1: address1State,
                    id: id,
                }),
            })
                .then((resp) => resp.json())
                .then((data) => setInitialAddress1Value(data.address1));
        }
    };

    let handleEdit2 = (e) => {
        setEditState2(!editState2);

        if (e.target.textContent === "Done Editing" && address2State !== "") {
            fetch(`/edit/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    address1: address2State,
                    id: id,
                }),
            })
                .then((resp) => resp.json())
                .then((data) => setInitialAddress2Value(data.address2));
        }
    };



    return (
        <>
            {editState1 ? (
                <Row className="mt-2">
                    <Col>
                        <textarea
                            className="form-control"
                            defaultValue={initialAddress1Value}
                            onChange={(e) => setAddress1State(e.target.value)}
                        />
                    </Col>
                </Row>
            ) : (
                // </InputGroup>
                // </ListGroup.Item>
                // <ListGroup.Item className="text-center">
                <Row className="my-2 text-center">
                    <Col className="px-3">
                            <span>{initialAddress1Value}</span>
                    </Col>
                </Row>
            )
            }
            {editState2 ? (
                <Row className="mt-2">
                    <Col>
                        <textarea
                            className="form-control"
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
            }
            {/* </ListGroup.Item> */}
            <Button
                variant="outline-dark"
                onClick={handleEdit1}
                className="addCartButton border-1 border-dark sm"
                style={{
                    backgroundColor: isHovering ? "#1d1a0c" : "white",
                    // color: isHovering ? "#d8a941" : "black",
                    // color: isHovering ? "#d8a941" : "white",
                    color: isHovering ? "white" : "black",
                    width: "100%",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {editState1 ? "Done Editing" : "Edit Address"}
            </Button>
            <Button
                variant="outline-dark"
                onClick={handleEdit2}
                className="addCartButton border-1 border-dark sm"
                style={{
                    backgroundColor: isHovering ? "#1d1a0c" : "white",
                    // color: isHovering ? "#d8a941" : "black",
                    // color: isHovering ? "#d8a941" : "white",
                    color: isHovering ? "white" : "black",
                    width: "100%",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {editState2 ? "Done Editing" : "Edit Suite/Floor/Apt"}
            </Button>
        </>
    )
}

export default EditVoterAddress;