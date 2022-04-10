import React from 'react';

function Contact() {
    return (
        <main className='mainContent'>
            <div className='contact'>
                <form>
                    <label for='name'>Name:</label>
                    <input
                        type='text'
                        value=''
                        name='name'
                        id='name'
                        onChange=''
                    />
                    <label for='email'>Email address:</label>
                    <input
                        type='text'
                        value=''
                        name='email'
                        id='email'
                        onChange=''
                    />
                    <label for='message'>Message:</label>
                    <textarea
                        value=''
                        rows='10'
                        cols='80'
                        name='message'
                        id='message'
                        onChange=''>
                    </textarea>
                    <button>Submit</button>
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