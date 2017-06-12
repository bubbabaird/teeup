(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

}).run(function ($state) {
    // stuff to do when the app first loads
    const width = window.innerWidth;

    if (width > 400) {
        $state.go('home');
    } else {
        $state.go('mobile');
    }
});

},{"./components/bidfield":2,"./components/completebid":3,"./components/courseview":4,"./components/location":5,"./components/mobile":6,"./components/stars":7,"./components/time":8,"./components/userdashboard":9,"./controllers/BidController":10,"./controllers/CourseViewController":11,"./controllers/MobileBidController":12,"./controllers/UserDashboardController":13,"./services/BidService":14,"./services/CourseService":15}],2:[function(require,module,exports){
module.exports = {
    name: "bidfield",
    array: {
        templateUrl: 'templates/bidfield.html',
        controller: 'BidController',
        bindings: {
            which: "<",
        }
    }
}
},{}],3:[function(require,module,exports){
module.exports = {
    name: 'completebid',
    array: {
        templateUrl: 'templates/completebid.html',
        controller: 'MobileBidController',
    }
}
},{}],4:[function(require,module,exports){
module.exports = {
    name: "courseview",
    array: {
        templateUrl: "templates/courseview.html",
        controller: "CourseViewController",
        bindings: {
            which: "<",
        }
    }
}
},{}],5:[function(require,module,exports){
module.exports = {
    name: "location",
    array: {
        templateUrl: "templates/location.html",
        controller: "MobileBidController",
    }
}
},{}],6:[function(require,module,exports){
module.exports = {
    name: "mobile",
    array: {
        templateUrl: 'templates/mobile.html',
    }
}
},{}],7:[function(require,module,exports){
module.exports = {
    name: "stars",
    array: {
        templateUrl: "templates/stars.html",
        controller: "MobileBidController",
    }
}
},{}],8:[function(require,module,exports){
module.exports = {
    name: 'time',
    array: {
        templateUrl: "templates/time.html",
        controller: "MobileBidController",
    }
}
},{}],9:[function(require,module,exports){
module.exports = {
    name: "userDashboard",
    array: {
        templateUrl: 'templates/userdashboard.html',
        controller: 'UserDashboardController',
        bindings: {
            which: "<",
        }
    }
}
},{}],10:[function(require,module,exports){

function doubleDig(num) {
    if (num.toString().length == 2) {
        return num.toString();
    } else {
        return '0' + num
    }
};

module.exports = {
    name: 'BidController',
    func: function ($scope, BidService) {

        let input = document.getElementById('locationSearch');
        if (input) {
            let options = {
                types: ['address']
            };
            let autocomplete = new google.maps.places.Autocomplete(input, options);

            $scope.valid = false;
            $scope.lat = null;
            $scope.long = null;

            autocomplete.addListener('place_changed', function () {
                $scope.lat = autocomplete.getPlace().geometry.location.lat();
                $scope.long = autocomplete.getPlace().geometry.location.lng();


                $scope.$apply(function () {
                    $scope.valid = true;
                });
            });
        }
        $scope.stars = null;
        $scope.onRatingChange = function ($event) {
            $scope.stars = $event.rating; 
        }

        $scope.bid_amount = null;
        $scope.start_time = null;
        $scope.end_time = null;
        $scope.selected_day = null;
        $scope.miles = null;
        $scope.location = null;
        $scope.golfer_number = null;

        $scope.updateBid = function () {
            console.log($scope.start_time.getHours());
            BidService.updateBid({
                amount: $scope.bid_amount,
                stars: $scope.stars,
                // API accepts only time format of "XX:XX:XX"
                startTime: doubleDig($scope.start_time.getHours()) + ':' + doubleDig($scope.start_time.getMinutes()) + ':' + doubleDig($scope.start_time.getSeconds()),
                endTime: doubleDig($scope.end_time.getHours()) + ':' + doubleDig($scope.end_time.getMinutes()) + ':' + doubleDig($scope.end_time.getSeconds()),
                date: $scope.selected_day,
                miles: $scope.miles, 
                reqLat: $scope.lat,
                reqLong: $scope.long,
                golfers: $scope.golfer_number,  
            });
            BidService.submitBid();
        }
    }
}

},{}],11:[function(require,module,exports){
module.exports = {
    name: 'CourseViewController',
    func: function ($scope, CourseService) {
        $scope.bookings = CourseService.getBookings();
        $scope.range = CourseService.getRange();
        $scope.min_bid = '';
        $scope.max_bid = '';
        $scope.changeRange = function () {
            let rangeReq = {
                min: $scope.min_bid,
                max: $scope.max_bid,
            }
            CourseService.setRange(rangeReq);
            $scope.min_bid = '';
            $scope.max_bid = '';
        };
        // $scope.changeStatus = function () {
        //     CourseService.changeStatus();
        // };
        // $scope.teeTime = CourseService.CourseView(); 
    }
}
},{}],12:[function(require,module,exports){
function doubleDig(num) {
    if (num.toString().length == 2) {
        return num.toString();
    } else {
        return '0' + num
    }
}

module.exports = {
    name: "MobileBidController",
    func: function ($scope, BidService) {
        let input = document.getElementById('locationSearch');
        if (input) {
            let options = {
                types: ['establishment']
            };
            let autocomplete = new google.maps.places.Autocomplete(input, options);
            $scope.valid = false;
            $scope.lat = null;
            $scope.long = null;

            autocomplete.addListener('place_changed', function () {
                $scope.lat = autocomplete.getPlace().geometry.location.lat();
                $scope.long = autocomplete.getPlace().geometry.location.lng();
                $scope.$apply(function () {
                $scope.valid = true;
                });
            });
        }
        
        $scope.stars = null;
        $scope.bid_amount = null;
        $scope.start_time = null;
        $scope.end_time = null;
        $scope.selected_day = null;
        $scope.miles = null;
        $scope.golfer_number = null;
        
        $scope.onRatingChange = function ($event) {
            $scope.stars = $event.rating;
        };

        $scope.updateLocation = function () {
            console.log($scope.miles);
            BidService.updateBid({
                miles: $scope.miles,
                reqLat: $scope.lat,
                reqLong: $scope.long,
            });
        };

        $scope.updateTime = function () {
            BidService.updateBid({
                startTime: doubleDig($scope.start_time.getHours()) + ':' + doubleDig($scope.start_time.getMinutes()) + ':' + doubleDig($scope.start_time.getSeconds()),
                endTime: doubleDig($scope.end_time.getHours()) + ':' + doubleDig($scope.end_time.getMinutes()) + ':' + doubleDig($scope.end_time.getSeconds()),
                date: $scope.selected_day,
            });
        };

        $scope.updateStars = function () {
            BidService.updateBid({
                stars: $scope.stars,
            });
        };

        $scope.updateBid = function () {
            BidService.updateBid({
                amount: $scope.bid_amount,
                golfers: $scope.golfer_number,
            });
            BidService.submitBid()
        }
    }
}
},{}],13:[function(require,module,exports){
module.exports = {
   name: 'UserDashboardController',
   func: function ($scope, BidService) {
       $scope.course = BidService.getCourse();
   }
}

// needs to pull the course info from backend and display the info in the html page 
// - once bid is placed, the page will switch to userdashboard
// - this dashboard will display name of course, address, bid, tee time
},{}],14:[function(require,module,exports){

module.exports = {
    name: 'BidService', 
    func: function ($http) {
        
        const course = {
            image: "https://thewedgegolftour.com/wp-content/uploads/2016/02/TheReserveGolfClub%E2%80%93SouthCourse_500x500.jpg",
            name: null, 
            location: null,
            bid: '40', 
            time: '3:00pm',
            rating: null,
        }; 

        const bid = {
            amount: null,
            stars: null,
            startTime: null,
            endTime: null,
            date: null,
            miles: null, 
            reqLat: null,
            reqLong: null,
            golfers: null,
        };

        return {
            submitBid: function () {
                console.log(bid);
                $http.post('https://pure-peak-13504.herokuapp.com/bid', bid).then(function (response) {
                    console.log(response.data.course);
                    let result = response.data.course;
                    // if (result === '') {

                    // }
                    course.name = result.name;
                    course.location = result.location;
                    course.rating = result.starRating;
                })
            }, 

            updateBid: function (props) {
                const keys = Object.keys(props);

                for (let i = 0; i < keys.length; i++) {
                    bid[keys[i]] = props[keys[i]];
                } 
            },

            getCourse: function () {
                return course; 
            }, 

        }; 
    }
}; 

},{}],15:[function(require,module,exports){
module.exports = {
    name: "CourseService",
    func: function ($http) {

        const bookings = [
            { teeTime: '7:30', golfers: 3, id: "Bob Vance" },
            { teeTime: '10:00', golfers: 2, id: "Frank Reynolds" },
            { teeTime: '9:52', golfers: 1, id: "Brian Lefevre" },
        ]

        const range = {
            min: 25,
            max: 45,
        }

        return {
            // getBookings: function () {
            //     $http.get('https://pure-peak-13504.herokuapp.com/courses').then(function (response) {
            //         for (let i = 0; i < response.data.length; i++) {
            //             bookings.push(response.data[i]);
            //         }
            //     }) 
            //     return bookings;
            // },
            getBookings: function () {
                return bookings;
            },
            getRange: function () {
                return range;
            },
            setRange: function (req) {
                console.log(req);
            },

        }
    }
}
},{}]},{},[1]);
