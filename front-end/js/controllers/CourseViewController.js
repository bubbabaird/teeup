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