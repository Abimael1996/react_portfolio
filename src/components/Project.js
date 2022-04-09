import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Project(props) {
    
    return (
        <div className='projectContainer'>
            <div className='links'>
                <a href={props.appLink} target='_blank' rel='noreferrer'><h3>{props.title}</h3></a>
                <a href={props.gHlink} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a>
                <h4>{props.description}</h4>
                <p>{props.technologies}</p>
            </div>
        </div>
    )
}

export default Project;