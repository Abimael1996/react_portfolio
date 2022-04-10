import React from "react";

function Navigation(props) {
    const titles = [
        {
            id: 1,
            text: 'About Me',
            class: ' highlighted'
        },
        {
            id: 2,
            text: 'Portfolio',
            class: ''
        },
        {
            id: 3,
            text: 'Contact',
            class: '',
        },
        {
            id: 4,
            text: 'Resume',
            class: ''
        }
    ];

    return (
        <nav>
            <ul>
                {titles.map(title => (
                <li onClick={(e) => props.changePage(e.target)} className={`navLi${title.class}`}  key={title.id}>{title.text}</li>)
                )}
            </ul>
        </nav>
    )
}

export default Navigation;