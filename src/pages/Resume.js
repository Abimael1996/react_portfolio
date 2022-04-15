import React from 'react';

function Resume() {
    return (
        <main className='ms-4'>
            <p className='fs-1'>Download my full <span><a href='./Abimael-Monarrez-Resume.pdf' target='_blank' download>resume</a></span></p>
            <div className='d-flex flex-column justify-content-start flex-sm-row justify-content-sm-around'>
                <div>
                    <h3 className='display-6'>Front-end Proficiencies</h3>
                    <ul className='fs-3'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>responsive design</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div>
                    <h3 className='display-6'>Back-end Proficiencies</h3>
                    <ul className='fs-3'>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default Resume;