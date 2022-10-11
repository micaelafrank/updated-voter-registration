import React, { useState, useEffect } from 'react';
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
    const [errorHandling, setErrorHandling] = useState(false);
    const[errorMessages, setErrorMessages] = useState("");
    // const [change, setChange] = useState(false);

    const formData = {loginFirstName, loginLastName, loginPassword, loginPasswordConf}
    // function handleChange(e) {
    //     let key = e.target.name
    //     let value = e.target.value
    //     setFormData((formData) => ({ ...formData, [key]: value }))
    //     console.log(formData)
    // }

    function handleNameInput(){
        setInputColor(true);
    }

    let errorNum = 0;
    const error1 = "First name entered is not associated with this voter record. Please try again.";
    const error2 = "Last name entered is not associated with this voter record. Please try again.";
    let count = 0;
    const error3 = "Password is incorrect. Please try again.";
    const error4 = "Passwords entered do not match. Please try again.";


    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // const [validated, setValidated] = useState(false);
    useEffect(() => console.log("re-render because input changed: ", handleSubmit), [errorMessages])

    function handleSubmit(e){
        e.preventDefault();
        console.log(firstName);
        console.log(lastName);
        console.log(password);
        console.log(loginFirstName);
        console.log(formData);
        // const data = e.currentTarget;
        // if (data.checkValidity() === false) {
        //     e.preventDefault();
        //     e.stopPropagation();
        // }
        // setErrorMessages([]);
        
        if(loginFirstName === firstName){
            errorNum = 0;
            // setErrorMessages(errorNum);
            console.log(errorMessages);
        } else if (loginFirstName !== firstName){
            errorNum = 1;
            setErrorMessages(error1);
        }
        if(errorNum===0 && (loginLastName === lastName)){
            errorNum = 0;
        }
        else if (errorNum === 0 && (loginLastName !== lastName)){
            errorNum = 2;
            setErrorMessages(error2);
        }
        if (errorNum === 0 && (loginPassword === password)) {
            errorNum = 0;
        }
        else if (errorNum === 0 && (loginPassword !== password)) {
            errorNum = 3;
            setErrorMessages(error3);
        }
        if (errorNum === 0 && loginPassword !== loginPasswordConf){
            errorNum=4;
            setErrorMessages(error4);
        }
        else if (errorNum === 0 && loginPassword === loginPasswordConf){
            setValidated(true);
            setErrorMessages("");
            console.log("No errors!")
        }
        console.log(errorMessages)
        return(errorMessages)
    }

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
                    {errorMessages ? <p className="errorMessage" style={{ color: "red" }}>{errorMessages}</p> : null}
                </Modal.Header>
                <Modal.Body className="modal-content">
                    {/* {errorMessages ? <Form.Label className="errorMessage" style={{ color: "red" }}>{errorMessages}</Form.Label> : null} */}
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label id="signInName" className="signInStyle">FIRST NAME:</Form.Label>
                            <Form.Control
                                id="firstNameInput"
                                style={inputColor ? { color: "black" } : { color: "gray" }}
                                className="signInInput"
                                type="text"
                                value={loginFirstName}
                                name="loginFirstName"
                                onChange={(e) => setLoginFirstName(e.target.value)}
                                placeholder="Enter first name"
                                autoFocus
                            />
                        </Form.Group>
                        {/* {errorNum = 1 ? <Form.Label className="errorMessage" style={{color: "red" }}>{error1}</Form.Label> : null} */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label id="signInName" className="signInStyle">LAST NAME:</Form.Label>
                            <Form.Control
                                style={inputColor ? { color: "black" } : { color: "gray" }}
                                className="signInInput"
                                type="text"
                                value={loginLastName}
                                name="loginLastName"
                                onChange={(e) => setLoginLastName(e.target.value)}
                                placeholder="Enter last name"
                                autoFocus
                            />
                        </Form.Group>
                        {/* {errorNum = 2 ? <Form.Label className="errorMessage" style={{ color: "red" }}>{error2}</Form.Label> : null}                             */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label id="passwordLabel1" className="signInStyle">PASSWORD:</Form.Label>
                            <Form.Control
                                type="password"
                                style={inputColor ? { color: "black" } : { color: "gray" }}
                                className="signInInput"
                                value={loginPassword}
                                name="loginPassword"
                                placeholder="Enter password"
                                onChange={(e) => setLoginPassword(e.target.value)}
                                autoFocus
                            />
                        </Form.Group>
                        {/* {errorNum=3 ? <Form.Label className="errorMessage" style={{ color: "red" }}>{error3}</Form.Label> : null}                             */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                        <Form.Label id="passwordLabel2" className="signInStyle">CONFIRM PASSWORD:</Form.Label>
                        <Form.Control
                                type="password"
                                style={inputColor ? { color: "black" } : { color: "gray" }}
                                className="signInInput"
                                onChange={(e) => setLoginPasswordConf(e.target.value)}
                                value={loginPasswordConf}
                                name="loginPasswordConf"
                                placeholder="Re-enter password"
                                autoFocus
                            />
                        </Form.Group>
                        {/* {errorNum = 4 ? <Form.Label className="errorMessage" style={{ color: "red" }}>{error4}</Form.Label> : null}                             */}
                    <Modal.Footer>
                        {/* {errors.map((error) => (
                            <p key={error} style={{ color: "red" }}>
                                {error}
                            </p>
                        ))} */}
                        <Button variant="secondary" className="modal-btn" id="modal1" onClick={handleClose}>
                            CANCEL
                        </Button>
                        <input variant="primary" className="modal-btn modal1" id="submit" type="submit" value="SIGN IN" />
                    </Modal.Footer>
                        </Form>

                    </Modal.Body>
            </Modal>
            </section>
        </div>
    );
}

export default ModalSignIn;