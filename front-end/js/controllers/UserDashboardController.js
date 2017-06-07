module.exports = {
   name: 'UserDashboardController',
   func: function ($scope, BidService) {
       $scope.course = BidService.getCourse();
   }
}

// needs to pull the course info from backend and display the info in the html page 
// - once bid is placed, the page will switch to userdashboard
// - this dashboard will display name of course, address, bid, tee time