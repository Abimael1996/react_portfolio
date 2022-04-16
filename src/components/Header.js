import React from 'react';
import Navigation from './Navigation';

function header(props) {
    return (
        <Navigation changePage={props.changePage}/>
    )
}

export default header;