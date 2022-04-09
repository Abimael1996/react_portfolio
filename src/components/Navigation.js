import React from "react";

function Navigation(props) {
    return (
        <nav>
            <ul>
                <li onClick={(e) => props.changePage(e.target.innerHTML)}>About Me</li>
                <li onClick={(e) => props.changePage(e.target.innerHTML)}>Portfolio</li>
                <li onClick={(e) => props.changePage(e.target.innerHTML)}>Contact</li>
                <li onClick={(e) => props.changePage(e.target.innerHTML)}>Resume</li>
            </ul>
        </nav>
    )
}

export default Navigation;