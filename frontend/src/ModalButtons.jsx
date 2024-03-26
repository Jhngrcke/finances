import React, { useState } from 'react';
import { Axios } from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function CreateButton (opts) {
    const [ show, setShow ] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (ev) => {
        ev.preventDefault();
        handleClose();
    }

    return (
        <>
            <Button variant='Light' onClick={handleShow}>{opts.name}</Button>

            <Modal show={show} onHide={handleClose}>
                <Form>
                    <Modal.Header closeButton>
                        <Modal.Title>{opts.name}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form.Group className='mb-3' controlId='formFinancialData'>
                            
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant='secondary' onClick={handleClose}>Close</Button>
                        <Button variant='primary' type='submit' onClick={handleSubmit}>Submit</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default CreateButton;