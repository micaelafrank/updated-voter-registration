import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalSignIn({ show, setShow, lastName, firstName, password, handleClose, handleShow }) {
    const [inputColor, setInputColor] = useState(false);
    const [loginLastName, setLoginLastName] = useState("");
    const [loginFirstName, setLoginFirstName] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loginPasswordConf, setLoginPasswordConf] = useState("");
    const [validated, setValidated] = useState(false);
    const [errors, setErrors] = useState([])

    function handleNameInput(){
        setInputColor(true);
    }

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        console.log(firstName);
        console.log(lastName);
        console.log(password);
        console.log(loginFirstName);
        console.log(loginLastName);
        // const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        //     event.preventDefault();
        //     event.stopPropagation();
        // }
        e.preventDefault();
        setErrors([]);
        if(loginFirstName === firstName && loginLastName === lastName && loginPassword === password && loginPassword === loginPasswordConf) {
            setValidated(true);
            // <EditVoterInfo/>
        } else {
            setErrors(err => err.errors);
            console.log(errors)
    }};

    return (
        <div className='modal-container'>
            <section className="modal">
            <Button variant="primary" onClick={handleShow}>Edit Voter Information</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-header">
                {/* closeButton> */}
                    <Modal.Title className="modal-title1">
                        Sign In
                    </Modal.Title>
                    <Modal.Title className="modal-title2">
                        To make any changes to your registration record, sign in using the password connected to your account.
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-content">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label id="signInName" className="signInStyle">FIRST NAME:</Form.Label>
                            <Form.Control
                                style={inputColor ? { color: "black" } : { color: "gray" }}
                                className="signInInput"
                                type="text"
                                value={loginFirstName}
                                name="loginFirstName"
                                onChange={(e) => {
                                    handleNameInput();
                                    setLoginFirstName(e.target.value)}
                                }
                                placeholder="Enter first name"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label id="signInName" className="signInStyle">LAST NAME:</Form.Label>
                            <Form.Control
                                style={inputColor ? { color: "black" } : { color: "gray" }}
                                className="signInInput"
                                type="text"
                                value={loginLastName}
                                name="loginLastName"
                                    onChange={(e) => {
                                    handleNameInput();
                                    setLoginLastName(e.target.value)}
                            }
                                placeholder="Enter last name"
                                autoFocus
                            />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label className="signInStyle">Last Name:</Form.Label>
                            <Form.Control
                                className="signInInput"
                                type="text"
                                placeholder="Enter last name"
                                autoFocus
                            />
                        </Form.Group> */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label id="passwordLabel1" className="signInStyle">PASSWORD:</Form.Label>
                            <Form.Control
                                type="password"
                                style={inputColor ? { color: "black" } : { color: "gray" }}
                                className="signInInput"
                                value={loginPassword}
                                name="loginPassword"
                                placeholder="Enter password"
                                onChange={(e) => {
                                    handleNameInput();
                                    setLoginPassword(e.target.value)}
                                }
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                        <Form.Label id="passwordLabel2" className="signInStyle">CONFIRM PASSWORD:</Form.Label>
                            <Form.Control
                                type="password"
                                style={inputColor ? { color: "black" } : { color: "gray" }}
                                className="signInInput"
                                onChange={(e) => {
                                    handleNameInput();
                                    setLoginPasswordConf(e.target.value)}
                                }
                                value={loginPasswordConf}
                                name="loginPasswordConf"
                                placeholder="Re-enter password"
                                autoFocus
                            />
                            {errors.map((err) => (
                                <p key={err} style={{ color: "red" }}>
                                    {err}
                                </p>
                            ))}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {errors.map((err) => (
                        <p key={err} style={{ color: "red" }}>
                            {err}
                        </p>
                    ))}
                    <Button variant="secondary" className="modal-btn" id="modal1" onClick={handleClose}>
                        CANCEL
                    </Button>
                    <Button variant="primary" className="modal-btn" id="modal2" type="submit">
                        SIGN IN
                    </Button>
                </Modal.Footer>
            </Modal>
            </section>
        </div>
    );
}

export default ModalSignIn;