const app = angular.module('teeUpApp', ['ui.router', 'star-rating']);

// require service
const services = [
    require('./services/BidService'),
];

// loop all services
for (let i = 0; i < services.length; i++) {
    app.factory(services[i].name, services[i].func);
};

// require controllers
const controllers = [
    require('./controllers/BidController'),
    require('./controllers/UserDashboardController'),
    // require('./controllers/StarController'),
];

// loop all controllers
for (let i = 0; i < controllers.length; i++) {
    console.log("controller.name: " + controllers[i].name);
    app.controller(controllers[i].name, controllers[i].func);
};

// require components
const components = [
    require('./components/bidfield'),
    require('./components/userdashboard'),
    require('./components/courseview'),
]

// loop all components
for (let i = 0; i < components.length; i++) {
    app.component(components[i].name, components[i].array);
}

app.config(function ($stateProvider) {

    $stateProvider.state({
        name: 'home',
        url: '/home',
        component: 'bidfield',
    });

    $stateProvider.state({
        name: 'userDashboard',
        url: '/dashboard',
        component: 'userDashboard'
    });

})
