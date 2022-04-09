import React from "react";

function Navigation(props) {
    return (
        <nav>
            <ul>
                <li onClick={(e) => props.changePage(e.target)} className='highlighted'>About Me</li>
                <li onClick={(e) => props.changePage(e.target)}>Portfolio</li>
                <li onClick={(e) => props.changePage(e.target)}>Contact</li>
                <li onClick={(e) => props.changePage(e.target)}>Resume</li>
            </ul>
        </nav>
    )
}

export default Navigation;