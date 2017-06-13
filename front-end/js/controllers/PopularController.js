module.exports = {
    name: 'PopularController',
    func: function ($scope, CourseService) {
        // $scope.popCourse = CourseService.getPopCourse();
        // console.log($scope.popCourse); 


        CourseService.getPopCourse().then(function (results){
 
            $scope.popCourse = results; 
        }); 
    },
}

