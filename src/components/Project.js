import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Project(props) {

    return (
        <div className='project-container'>
            <div className='content-container'>
                <div className='w-100 px-3 d-flex justify-content-between links'>
                    <a href={props.appLink} target='_blank' rel='noreferrer' className='text-decoration-none text-reset'><h3 className='display-4'>{props.title}</h3></a>
                    <a href={props.gHlink} target='_blank' rel='noreferrer' className='gHLink'><FontAwesomeIcon icon={faGithub} className='icons-links'/></a>
                </div>
                <p className='px-3 technologies'>{props.technologies}</p>
                <a href={props.appLink} target='_blank' rel='noreferrer'><img src={props.imgLink} alt='perfect meal app' className='col-12 project-img' /></a>
                <h5 className='px-3 description'>{props.description}</h5>
            </div>
        </div>
    )
}

export default Project;