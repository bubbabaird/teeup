module.exports = {
    name: "userDashboard",
    array: {
        templateUrl: 'templates/userdashboard.html',
        controller: 'BookedCourseController',
        bindings: {
            which: "<",
        }
    }
}