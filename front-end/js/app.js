const app = angular.module('teeUpApp', ['ui.router', 'star-rating']);

// require service
const services = [
    require('./services/BidService'),
    require('./services/CourseService'),
];

// loop all services
for (let i = 0; i < services.length; i++) {
    app.factory(services[i].name, services[i].func);
};

// require controllers
const controllers = [
    require('./controllers/BidController'),
    require('./controllers/UserDashboardController'),
    require('./controllers/CourseViewController'),
    require('./controllers/MobileBidController'),
];

// loop all controllers
for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
};

// require components
const components = [
    require('./components/bidfield'),
    require('./components/userdashboard'),
    require('./components/courseview'),
    require('./components/location'),
    require('./components/time'),
    require('./components/stars'),
    require('./components/completebid'),
    require('./components/mobile'),
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
        name: 'mobile',
        url: '/mobile',
        component: 'mobile',
    });

    $stateProvider.state({
        name: 'userDashboard',
        url: '/dashboard',
        component: 'userDashboard',
    });

    $stateProvider.state({
        name: 'courseDashboard',
        url: '/courseTools',
        component: 'courseview',
    });

    $stateProvider.state({
        name: 'location',
        url: '/location',
        component: 'location',
    });

    $stateProvider.state({
        name: 'time',
        url: '/time',
        component: 'time',
    });

    $stateProvider.state({
        name: "star",
        url: '/stars',
        component: 'stars',
    });

    $stateProvider.state({
        name: 'completebid',
        url: '/completebid',
        component: 'completebid',
    });
// });
}).run(function ($state) {
    // checks screen size, and directs to appropriate home page view
    const width = window.innerWidth;

    if (width > 400) {
        $state.go('home');
    } else {
        $state.go('mobile');
    }
});
