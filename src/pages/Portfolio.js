import React from 'react';
import Project from '../components/Project';

function Portfolio() {
    const projects = [
        {
            title: 'Perfect Meal',
            gHlink: 'https://github.com/Abimael1996/Perfect_Meal',
            appLink: 'https://thawing-depths-19417.herokuapp.com/',
            description: 'Perfect Meal is a web app that makes nutritionist work easier.',
            technologies: 'Sequelize, Handlebars, Express, JavaScript, CSS, HTML'
        },
        {
            title: 'Weather Dashboard',
            gHlink: 'https://github.com/Abimael1996/weather_dashboard',
            appLink: 'https://abimael1996.github.io/weather_dashboard/',
            description: 'This web application allows the user to search for any city and obtain information about its weather.',
            technologies: 'Weather API, JavaScript, CSS, HTML'
        },
        {
            title: 'Day Planner',
            gHlink: 'https://github.com/Abimael1996/work_day_scheduler',
            appLink: 'https://abimael1996.github.io/work_day_scheduler/',
            description: 'This project consists of a calendar application that allows a user to save events for each hour of a working schedule (9 to 5).',
            technologies: 'jQuery, JavaScript, CSS, HTML'
        },
        {
            title: 'Tech Blog',
            gHlink: 'https://github.com/Abimael1996/tech_blog',
            appLink: 'https://sheltered-reaches-16118.herokuapp.com/',
            description: 'The Tech Blog is an internet forum for developers to discuss about tech.',
            technologies: 'Sequelize, Handlebars, Express, JavaScript, CSS, HTML'
        },
        {
            title: 'Text Editor',
            gHlink: 'https://github.com/Abimael1996/text_editor',
            appLink: 'https://peaceful-headland-90409.herokuapp.com/',
            description: 'A PWA Application that allows you to create notes or code snippets with or without an internet connection.',
            technologies: 'Webpack, Workbox, JavaScript, CSS, HTML'
        },
        {
            title: 'Watch & Chill',
            gHlink: 'https://github.com/rargotte/watch-chill',
            appLink: 'https://rargotte.github.io/watch-chill/',
            description: 'A web app that recommends movies based on criteria selected by the user.',
            technologies: 'The Movie DB API, JavaScript, CSS, HTML'
        },
    ];

    return projects.map((project) => (
        <section>
            <Project 
            title={project.title}
            gHlink={project.gHlink}
            appLink={project.appLink}
            description={project.description}
            technologies={project.technologies}
            />
        </section>

    ))

}

export default Portfolio;