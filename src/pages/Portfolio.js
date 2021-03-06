import React from 'react';
import Project from '../components/Project';

function Portfolio() {
    const projects = [
        {
            imgLink: './images/squad-finder.png',
            title: 'Squad Finder',
            gHlink: 'https://github.com/isaacgalvan10/squad-finder',
            appLink: 'https://serene-dawn-32243.herokuapp.com/',
            description: "A web app where developers can showcase their new project ideas, or join other people's projects to build a robust portfolio.",
            technologies: 'React | GraphQL | MongoDB | JavaScript | CSS | HTML',
            id: 1
        },
        {
            imgLink: './images/perfect-meal.png',
            title: 'Perfect Meal',
            gHlink: 'https://github.com/Abimael1996/Perfect_Meal',
            appLink: 'https://thawing-depths-19417.herokuapp.com/',
            description: 'Perfect Meal is a web app that makes nutritionist work easier.',
            technologies: 'Sequelize | Handlebars | Express | JavaScript | CSS | HTML',
            id: 2
        },
        {
            imgLink: './images/weather-dashboard.png',
            title: 'Weather Dashboard',
            gHlink: 'https://github.com/Abimael1996/weather_dashboard',
            appLink: 'https://abimael1996.github.io/weather_dashboard/',
            description: 'This web application allows the user to search for any city and obtain information about its weather.',
            technologies: 'Weather API | JavaScript | CSS | HTML',
            id: 3
        },
        {
            imgLink: './images/tech-blog.png',
            title: 'Tech Blog',
            gHlink: 'https://github.com/Abimael1996/tech_blog',
            appLink: 'https://sheltered-reaches-16118.herokuapp.com/',
            description: 'The Tech Blog is an internet forum for developers to discuss about tech.',
            technologies: 'Sequelize | Handlebars | Express | JavaScript | CSS | HTML',
            id: 4
        },
        {
            imgLink: './images/text-editor.png',
            title: 'Text Editor',
            gHlink: 'https://github.com/Abimael1996/text_editor',
            appLink: 'https://peaceful-headland-90409.herokuapp.com/',
            description: 'A PWA Application that allows you to create notes or code snippets with or without an internet connection.',
            technologies: 'Webpack | Workbox | JavaScript | CSS | HTML',
            id: 5
        },
        {
            imgLink: './images/watch-chill.png',
            title: 'Watch & Chill',
            gHlink: 'https://github.com/rargotte/watch-chill',
            appLink: 'https://rargotte.github.io/watch-chill/',
            description: 'A web app that recommends movies based on criteria selected by the user.',
            technologies: 'The Movie DB API | JavaScript | Bulma | CSS | HTML',
            id: 6
        },
    ];

    return (
        <main className='mb-4 d-flex flex-column flex-sm-row flex-sm-wrap justify-content-sm-around'>
            {projects.map((project) => (
                <section key={project.id} className='col-12 col-sm-5 mb-4'>
                    <Project
                        imgLink={project.imgLink}
                        title={project.title}
                        gHlink={project.gHlink}
                        appLink={project.appLink}
                        description={project.description}
                        technologies={project.technologies}
                    />
                </section>
            ))}
        </main>

    )

}

export default Portfolio;