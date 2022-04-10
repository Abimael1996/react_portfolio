import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Project(props) {

    return (
        <div className='projectContainer'>
            <img src={props.imgLink} alt='perfect meal app' className='projectImg'/>
            <div className='projectContent hide'>
                <div className='links'>
                    <a href={props.appLink} target='_blank' rel='noreferrer'><h3 className='appLink'>{props.title}</h3></a>
                    <a href={props.gHlink} target='_blank' rel='noreferrer' className='gHLink'><FontAwesomeIcon icon={faGithub} /></a>
                </div>
                <div>
                    <h4>{props.description}</h4>
                    <p>{props.technologies}</p>
                </div>
            </div>
        </div>
    )
}

export default Project;