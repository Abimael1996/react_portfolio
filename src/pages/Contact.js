import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Form, Button } from "react-bootstrap";
import emailjs from '@emailjs/browser';

function Contact() {
    let validated = true;
    let [displayAlert, setDisplay] = useState(false);
    let [alert, setAlert] = useState('');

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const [formErrors, setFormErrors] = useState({});

    // function validateEmail(emailAdress) {
    //     const regexEmail = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    //     if (emailAdress.match(regexEmail)) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    const validate = (values) => {
        const errors = {};
        const emailRegex = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!values.email) {
            errors.email =
                "Please enter your email!";
            validated = false;
        } else if (!emailRegex.test(values.email)) {
            errors.email = "Please enter a valid email!";
            validated = false;
        }
        if (!values.name) {
            errors.name = "Please enter your name!";
            validated = false;
        }
        if (!values.message) {
            errors.message = "Please enter a message!";
            validated = false;
        }
        return errors;
    };

    // function handleChange(e) {
    //     if (e.target.name === 'name') {
    //         setName(e.target.value);
    //     } else if (e.target.name === 'email') {
    //         setEmail(e.target.value);
    //     } else {
    //         setMessage(e.target.value);
    //     }
    // }

    // function validate(target) {
    //     if (target === 'textarea') {
    //         if (validateEmail(email) || email === '') {
    //             setDisplay(false)
    //         } else {
    //             setDisplay(true);
    //             setAlert('Your email is invalid.')
    //         }
    //     } else if (target === 'button') {
    //         if (validateEmail(email) && name !== '' && message !== '') {
    //             setDisplay(true);
    //             setAlert(`Message sent! I'll be back to you as soon as possible, ${name} :)`);
    //             handleSubmit();
    //             return true
    //         } else {
    //             if (!validateEmail(email)) {
    //                 if (email === '') {
    //                     setDisplay(true);
    //                     setAlert('Email is required.')
    //                 } else {
    //                     setDisplay(true);
    //                     setAlert('Your email is invalid.')
    //                 }
    //             } else if (name === '') {
    //                 setDisplay(true);
    //                 setAlert('Name is required.')
    //             } else if (message === '') {
    //                 setDisplay(true);
    //                 setAlert('Message is required.')
    //             }
    //         }
    //     } else {
    //         setDisplay(false);
    //     }
    // }

    function handleSubmit(e) {
        e.preventDefault();

        setFormErrors(validate(formValues));

        if (validated === true) {

            emailjs.sendForm('service_wto9p3c', 'template_al5u08h', e.target, 'eie7jwVf7khOEjfau')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            setDisplay(true);
            setAlert(`Message sent! I'll be back to you as soon as possible, ${formValues.name} :)`)
            setFormValues({
                name: '',
                email: '',
                message: ''
            });
        }
    }

    return (
        <main>
            <div className='d-lg-flex flex-lg-wrap justify-content-lg-around'>
                <Form noValidate className='col-12 col-lg-6' onSubmit={handleSubmit}>
                    <Form.Group
                        className="mb-3"
                    >
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            name="name"
                            value={formValues.name}
                            type="text"
                            onChange={handleChange}
                        />
                        <Form.Text id="nameAlert" className="text-danger fs-6">
                            {formErrors.name}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                    >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="text"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                        <Form.Text id="emailAlert" className="text-danger fs-6">
                            {formErrors.email}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="form-field mb-3">
                        <Form.Label htmlFor="description">Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="message"
                            style={{ height: '100px' }}
                            onChange={handleChange}
                            value={formValues.message}
                            required
                        />
                        <Form.Text id="messageAlert" className="text-danger fs-6">
                            {formErrors.message}
                        </Form.Text>
                    </Form.Group>
                    <p className={
                        displayAlert
                            ? ''
                            : 'd-none'
                    }>{alert}</p>
                    <Button type="submit" className="btn btn-light">Submit</Button>
                </Form>

                <div className='row justify-content-center contact-info align-self-center'>
                    <div className="card bg-light d-flex flex-column align-items-center my-3 p-2 col-10 col-lg-12 contact-content">
                        <h5 className="card-title text-black">Contact Info</h5>
                        <div className='d-flex flex-column'>
                            <a href="mailto:abimael.monarrez58@gmail.com" className='mb-3'><FontAwesomeIcon icon={faEnvelope} className='me-2 text-black' />abimael.monarrez58@gmail.com</a>
                            <a href="tel:52-667-420-3849"><FontAwesomeIcon icon={faPhone} className='me-2 text-black' />+56 667 420 3849</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact;