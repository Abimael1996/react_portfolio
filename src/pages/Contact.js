import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [message, setMessage] = useState('');
    let [displayAlert, setDisplay] = useState(false);
    let [alert, setAlert] = useState('');

    function validateEmail(emailAdress) {
        const regexEmail = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (emailAdress.match(regexEmail)) {
            return true;
        } else {
            return false;
        }
    }

    function handleChange(e) {
        if (e.target.name === 'name') {
            setName(e.target.value);
        } else if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else {
            setMessage(e.target.value);
        }
    }

    function validate(target) {
        if (target === 'textarea') {
            if (validateEmail(email) || email === '') {
                setDisplay(false)
            } else {
                setDisplay(true);
                setAlert('Your email is invalid.')
            }
        } else if (target === 'button') {
            if (validateEmail(email) && name !== '' && message !== '') {
                setDisplay(true);
                setAlert(`Message sent! I'll be back to you as soon as possible, ${name} :)`);
                handleSubmit();
                return true
            } else {
                if (!validateEmail(email)) {
                    if (email === '') {
                        setDisplay(true);
                        setAlert('Email is required.')
                    } else {
                        setDisplay(true);
                        setAlert('Your email is invalid.')
                    }
                } else if (name === '') {
                    setDisplay(true);
                    setAlert('Name is required.')
                } else if (message === '') {
                    setDisplay(true);
                    setAlert('Message is required.')
                }
            }
        } else {
            setDisplay(false);
        }
    }

    function handleSubmit() {
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <main className='mainContent'>
            <div className='contact'>
                <form>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Name</label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            name='name' value={name}
                            onChange={handleChange} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input
                            type="email"
                            class="form-control"
                            id="exampleFormControlInput1"
                            name='email' value={email} onChange={handleChange}
                            onClick={(e) => validate(e.target.localName)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3" name='message'
                            value={message}
                            onChange={handleChange}
                            onClick={(e) => validate(e.target.localName)}></textarea>
                    </div>
                    <p className={
                        displayAlert
                            ? ''
                            : 'hide'
                    }>{alert}</p>
                    <button type="submit" class="btn btn-primary" onClick={(e) => {
                        e.preventDefault();
                        validate(e.target.localName)
                    }}>Submit</button>
                </form>
                <div className='row justify-content-center'>
                    <div className="card d-flex flex-column align-items-center my-3 p-2 col-10 col-lg-4">
                        <h5 className="card-title">Contact Info</h5>
                        <div className='d-flex flex-column'>
                            <a href="mailto:abimael.monarrez58@gmail.com" className='mb-3'><FontAwesomeIcon icon={faEnvelope} className='me-2'/>abimael.monarrez58@gmail.com</a>
                            <a href="tel:52-667-420-3849"><FontAwesomeIcon icon={faPhone} className='me-2'/>+56 667 420 3849</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact;