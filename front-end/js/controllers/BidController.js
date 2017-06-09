
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
