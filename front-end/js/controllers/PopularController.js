module.exports = {
    name: 'PopularController',
    func: function ($scope, CourseService) {
        CourseService.getPopCourse().then(function (results){
        $scope.popCourse = results; 
        }); 
    },
}

