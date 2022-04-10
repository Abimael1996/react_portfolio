import React, { useState } from 'react';

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
        console.log(target);
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
                    <label>Name:</label>
                    <input
                        type='text'
                        value={name}
                        name='name'
                        onChange={handleChange}
                    />
                    <label>Email address:</label>
                    <input
                        type='text'
                        value={email}
                        name='email'
                        onChange={handleChange}
                        onClick={(e) => validate(e.target.localName)}
                    />
                    <label>Message:</label>
                    <textarea
                        value={message}
                        rows='10'
                        cols='80'
                        name='message'
                        onChange={handleChange}
                        onClick={(e) => validate(e.target.localName)}>
                    </textarea>
                    <p className={
                        displayAlert
                            ? ''
                            : 'hide'
                    }>{alert}</p>
                    <button onClick={(e) => {
                        e.preventDefault();
                        validate(e.target.localName)
                    }
                    }>Submit</button>
                </form>
                <div className='contactLinks'>
                    <a href='mailto:abimael.monarrez58@gmail.com'><h3>abimael.monarrez58@gmail.com</h3></a>
                    <a href='tel:52-667-420-3849'><h3>+56 667 420 3849</h3></a>
                </div>
            </div>
        </main>
    )
}

export default Contact;