import React, { useState } from "react";

function EditVoterLN() {
    const [lastNameState, setLastNameState] = useState("");
    const [editState, setEditState] = useState(false);
    const [initialLNValue, setInitialLNValue] = useState(lastName);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    let handleEdit = (e) => {
        setEditState(!editState);

        if (e.target.textContent === "Done Editing" && lastNameState !== "") {
            fetch(`/edit/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    lastName: lastNameState,
                    id: id,
                }),
            })
                .then((resp) => resp.json())
                .then((data) => setInitialLNValue(data.lastName));
        }
    };


    return (
        <>
            {editState ? (
                <Row className="mt-2">
                    <Col>
                        <textarea
                            className="form-control"
                            defaultValue={initialLNValue}
                            onChange={(e) => setLastNameState(e.target.value)}
                        />
                    </Col>
                </Row>
            ) : (
                // </InputGroup>
                // </ListGroup.Item>
                // <ListGroup.Item className="text-center">
                <Row className="my-2 text-center">
                    <Col className="px-3">
                        <span>{initialLNValue}</span>
                    </Col>
                </Row>
            )
            }
            {/* </ListGroup.Item> */}
            <Button
                variant="outline-dark"
                onClick={handleEdit}
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
                {editState ? "Done Editing" : "Edit Last Name"}
            </Button>
        </>
    )
}

export default EditVoterLN;