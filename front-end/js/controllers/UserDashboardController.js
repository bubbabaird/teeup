module.exports = {
    name: 'UserDashboardController',
    func: function ($scope, BidService) {
        $scope.course = BidService.getCourse();
        // $scope.course = {
        //     name: 'The Tradition Golf Club',
        //     image: 'http://i.imgur.com/cNBlSf8.jpg',
        //     location: '1212 Boogie Woogie Avenue, Charlotte, NC 29220',
        //     rating: '4.2',
        //     bid: '$69',
        //     time: '4:00pm'

        // }
        initMap($scope.course.gcLat, $scope.course.gcLong);
        $scope.mapShow = true;
        $scope.showMap = function () {
            $scope.mapShow = false;
        };
    },
}

function initMap(lat, long) {

    // let currentCourse = { lat: 35.224149, lng: -80.845362 };
    let currentCourse = { lat: lat, lng: long }; 
    console.log(currentCourse); 
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: currentCourse
    });
    let marker = new google.maps.Marker({
        position: currentCourse,
        map: map
    });
}



// needs to pull the course info from backend and display the info in the html page 
// - once bid is placed, the page will switch to userdashboard
// - this dashboard will display name of course, address, bid, tee time