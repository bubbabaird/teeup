module.exports = {
    name: 'BidController',
    func: function ($scope, BidService) {
        let input = document.getElementById('locationSearch');
        let options = {
            types: ['establishment']
        };
        let autocomplete = new google.maps.places.Autocomplete(input, options);
        
        $scope.valid = false;

        autocomplete.addListener('place_changed', function () {
            $scope.location = {
                lat: autocomplete.getPlace().geometry.location.lat(),
                long: autocomplete.getPlace().geometry.location.lng(),
            }

            $scope.$apply(function () {
                $scope.valid = true;
            });
        });

        $scope.bid_amount = '';
        $scope.star_select = '';
        $scope.start_time = '';
        $scope.end_time = '';
        $scope.selected_day = '';
        $scope.miles = '';
        $scope.location = {};
        $scope.golfer_number = '';
        $scope.submit = function () {
            let bid = {
                amount: $scope.bid_amount,
                stars: $scope.star_select,
                start_time: $scope.start_time,
                end_time: $scope.end_time,
                day: $scope.selected_day,
                miles: $scope.miles,
                location: $scope.location,
                golfers: $scope.golfer_number,
            }
            console.log(bid);
            // BidService.submitBid(bid);
        }
        // $scope.result = BidService.getCourse(); 
    }
}