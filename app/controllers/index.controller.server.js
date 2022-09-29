/* created by Pedro da Silva Dergado
File name: index.controller.server.js
Student’s Name: Pedro da Silva Dergado
StudentID: 301239283
Date: 09/29/2022
*/
export function displayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', myName: 'Thiago' });
};

export function displayAboutPage(req, res, next) {
    res.render('index', { title: 'About', page: 'about' });
};

export function displayProjectsPage(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects' });
};

export function displayServicesPage(req, res, next) {
    res.render('index', { title: 'Services', page: 'services' });
};

export function displayContactPage(req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact' });
};


