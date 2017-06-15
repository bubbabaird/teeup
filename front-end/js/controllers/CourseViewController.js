module.exports = {
    name: 'CourseViewController',
    func: function ($scope, CourseService) {
        $scope.bookings = CourseService.getBookings();
        $scope.course = CourseService.getCourse();
        
        $scope.changeRange = function () {
            $scope.course.minPrice = $scope.min_bid;
            $scope.course.maxPrice = $scope.max_bid;
            CourseService.setRange($scope.course);
            $scope.min_bid = '';
            $scope.max_bid = '';
        };
    }
}
