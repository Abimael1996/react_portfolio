import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className='mt-auto align-self-center'>
            <div>
                <a href='https://github.com/Abimael1996' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} className='icons-footer'/></a>
                <a href='https://www.linkedin.com/in/abimael-monarrez/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} className='icons-footer'/></a>
                <FontAwesomeIcon icon={faStackOverflow} className='icons-footer'/>
            </div>
        </footer>
    )
}

export default Footer;
