module.exports = {
    name: 'UserDashboardController',
    func: function ($scope, BidService) {
        $scope.course = BidService.getCourse();
        initMap($scope.course.gcLat, $scope.course.gcLong);
        $scope.mapShow = true;
        $scope.showMap = function () {
            $scope.mapShow = false;
        };
    },
}

function initMap(lat, long) {
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
