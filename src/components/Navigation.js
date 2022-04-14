import React from "react";

function Navigation(props) {
    const titles = [
        {
            id: 1,
            text: 'About Me',
            class: 'text-white'
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
        // <nav>
        //     <ul className="list-unstyled d-flex flex-column flex-sm-row flex-sm-wrap flex-md-nowrap justify-content-sm-end">
        //         {titles.map(title => (
        //             <li onClick={(e) => props.changePage(e.target)} className={`display-6 mx-sm-3 mx-md-3 title ${title.class} text-secondary`} key={title.id}>{title.text}</li>)
        //         )}
        //     </ul>
        // </nav>
        <nav class="navbar navbar-expand-md navbar-light bg-black">
            <div class="container-fluid">
                <h1 class="text-white display-1 mx-auto">Abimael</h1>
                <button class="navbar-toggler toggler-custom" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end nav-custom" id="navbarNav">
                    <ul class="navbar-nav flex-sm-wrap flex-lg-nowrap ul-nav-custom">
                        {titles.map(title => (
                            <li onClick={(e) => props.changePage(e.target)} className={`display-6 mx-sm-3 mx-md-2 title ${title.class} nav-item nav-link text-secondary`} key={title.id}>{title.text}</li>)
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;