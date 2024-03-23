import React, { useState } from 'react';
import Axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const forms = {
    'Add Account': 'account',
    'Add Income': 'income',
    'Remove account': 'account',
    'Remove income': 'income'
}


function isValidAccountNumber(accountNumber) {
    // Regular expression pattern for a valid account number
    const accountNumberPattern = /^[0-9]{6,}$/;

    // Detect account type
    let accountType;
    if (accountNumber.startsWith('4') && (accountNumber.length === 13 || accountNumber.length === 16)) {
        accountType = 'Visa';
    } else if (accountNumber.startsWith('5') && (accountNumber.length === 16)) {
        accountType = 'Mastercard';
    } else if (accountNumber.startsWith('3') && (accountNumber.length === 15)) {
        accountType = 'American Express';
    } else if (accountNumber.startsWith('6') && (accountNumber.length === 16)) {
        accountType = 'Discover';
    } else if (accountNumber.startsWith('37') && (accountNumber.length === 15)) {
        accountType = 'Diners Club';
    } else if (accountNumber.startsWith('62') && (accountNumber.length === 16)) {
        accountType = 'UnionPay';
    } else if (accountNumber.startsWith('35') && (accountNumber.length === 16)) {
        accountType = 'JCB';
    } else {
        accountType = 'Unknown';
    }

    return {isValidAccountNumber: accountNumberPattern.test(accountNumber), accType: accountType};
}


function IncomeForm({input, handleChange}) {
    return (
        <Form>
            <Form.Group className='mb-3' controlId='formFinancialData'>
                <Form.Label>Income name</Form.Label>
                <Form.Control type='text' placeholder='Salary/Investment/Other' onChange={handleChange} />
                <Form.Label>Income amount</Form.Label>
                <Form.Control type='text' placeholder='Enter Income Amount'  onChange={handleChange} />
                <Form.Label>Income type</Form.Label>
                <Form.Select aria-label="inctype" onChange={handleChange}>
                    <option value="1">Salary</option>
                    <option value="2">Investment</option>
                    <option value="3">Other</option>
                </Form.Select>
            </Form.Group>
        </Form>
    );
}


function AccountForm({input, handleChange}) { 
    return (
        <Form>
            <Form.Group className='mb-3' controlId='formFinancialData'>
                <Form.Label>Card name</Form.Label>
                <Form.Control type='text' placeholder='Cheque/Savings/Credit Account' onChange={handleChange} />
                <Form.Label>Card number</Form.Label>
                <Form.Control type='text' placeholder='Enter Card Number' onChange={handleChange} />
                <Form.Label>Card type</Form.Label>
                <Form.Select aria-label="inctype" onChange={handleChange}>
                    <option value="1">Cheque</option>
                    <option value="2">Savings</option>
                    <option value="3">Credit</option>
                </Form.Select>
            </Form.Group>
        </Form>
    );
}


function CreateButton (opts) {
    const [ show, setShow ] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [input, setInput] = useState({});

    const handleChange = (ev) => {
        setInput({
            ...input,
            [ev.target.name]: ev.target.value
        });
    }

    const handleSubmit = (ev, input) => {
        ev.preventDefault();
        console.log(input);
        Axios.post(`http://localhost:3001/${forms[opts.name]}`, {
            data: input
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            handleClose();
        });
    }

    
    return (
        <>
            <Button variant='Light' onClick={handleShow}>{opts.name}</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{opts.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {forms[opts.name] === 'account' ? 
                        <AccountForm input={input} handleChange={handleChange} /> : <IncomeForm input={input} handleChange={handleChange} />}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>Close</Button>
                    <Button variant='primary' type='submit' onClick={(ev, input) => handleSubmit(ev, input)}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default CreateButton;
