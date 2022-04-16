import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className='mt-auto align-self-center'>
            <div className='d-flex justify-content-around'>
                <a href='https://github.com/Abimael1996' target='_blank' rel='noreferrer' className='text-reset'><FontAwesomeIcon icon={faGithub} className='icons-footer'/></a>
                <a href='https://www.linkedin.com/in/abimael-monarrez/' target='_blank' rel='noreferrer' className='text-reset'><FontAwesomeIcon icon={faLinkedin} className='icons-footer'/></a>
                <a href='https://stackoverflow.com/users/18820271/abi' target='_blank' rel='noreferrer' className='text-reset'><FontAwesomeIcon icon={faStackOverflow} className='icons-footer'/></a>
            </div>
        </footer>
    )
}

export default Footer;
