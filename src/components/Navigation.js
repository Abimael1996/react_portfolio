import React from "react";

function Navigation(props) {
    const titles = [
        {
            id: 1,
            text: 'About Me',
            class: 'text-primary'
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
            <ul className="list-unstyled d-flex flex-column flex-sm-row flex-sm-wrap flex-md-nowrap justify-content-sm-end">
                {titles.map(title => (
                <li onClick={(e) => props.changePage(e.target)} className={`display-6 mx-sm-3 mx-md-3 title ${title.class}`} key={title.id}>{title.text}</li>)
                )}
            </ul>
        </nav>
    )
}

export default Navigation;