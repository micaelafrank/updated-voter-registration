import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalSignIn({ show, validated, handleSubmit, setShow, handleClose, handleShow }) {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // const [validated, setValidated] = useState(false);

    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }

    //     setValidated(true);
    // };

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
                            <Form.Label id="signInName" className="signInStyle">FULL NAME:</Form.Label>
                            <Form.Control
                                className="signInInput"
                                type="text"
                                placeholder="Enter first and last name"
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
                            <Form.Label className="signInStyle">PASSWORD:</Form.Label>
                            <Form.Control
                                type="password"
                                className="signInInput"
                                placeholder="Enter password"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                            <Form.Label className="signInStyle">CONFIRM PASSWORD:</Form.Label>
                            <Form.Control
                                type="password"
                                className="signInInput"
                                placeholder="Re-enter password"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="modal-btn" id="modal1" onClick={handleClose}>
                        CANCEL
                    </Button>
                    <Button variant="primary" className="modal-btn" id="modal2" onClick={handleClose}>
                        SIGN IN
                    </Button>
                </Modal.Footer>
            </Modal>
            </section>
        </div>
    );
}

export default ModalSignIn;