import React from 'react';
import Navigation from './Navigation';

function header(props) {
    return (
        // <h1 className='display-1'>Abimael</h1>
        <Navigation changePage={props.changePage}/>
    )
}

export default header;