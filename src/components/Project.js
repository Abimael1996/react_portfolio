import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Project(props) {

    return (
        <div className='project-container'>
            <div className='content-container d-lg-none'>
                <div className='w-100 px-3 links'>
                    <a href={props.appLink} target='_blank' rel='noreferrer' className='text-decoration-none text-reset'><h3 className='display-4 title-link'>{props.title}</h3></a>
                    <a href={props.gHlink} target='_blank' rel='noreferrer' className='gh-link'><FontAwesomeIcon icon={faGithub} className='icons-links' /></a>
                </div>
                <p className='px-3 technologies'>{props.technologies}</p>
                <a href={props.appLink} target='_blank' rel='noreferrer' className='img-container'><img src={props.imgLink} alt={props.title} className='col-12 project-img' /></a>
                <h5 className='px-3 description'>{props.description}</h5>
            </div>

            <div className="card bg-dark text-black project-container d-none d-lg-flex">
                <img src={props.imgLink} className="card-img project-img" alt={props.title} />
                    <div className="card-img-overlay content-container">
                        <h3 className="card-title display-4 links">
                            <a href={props.appLink} target='_blank' rel='noreferrer' className='text-decoration-none text-reset title-link'>{props.title}</a>
                            <a href={props.gHlink} target='_blank' rel='noreferrer' className='gh-link'><FontAwesomeIcon icon={faGithub} className='icons-links' /></a>
                        </h3>
                        <p className="card-text technologies">{props.technologies}</p>
                        <p className="card-text description">{props.description}</p>
                    </div>
            </div>

        </div>
    )
}

export default Project;