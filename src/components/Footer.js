import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className='icons'>
            <a href='https://github.com/Abimael1996' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a>
            <a href='https://www.linkedin.com/in/abimael-monarrez/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a>
            <FontAwesomeIcon icon={faStackOverflow} />
        </div>
    )
}

export default Footer;
