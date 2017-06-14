function doubleDig(num) {
    if (num.toString().length == 2) {
        return num.toString();
    } else {
        return '0' + num
    }
}

module.exports = {
    name: "MobileBidController",
    func: function ($scope, BidService, $state) {
        let input = document.getElementById('locationSearch');
        if (input) {
            let options = {
                types: ['address']
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
        
        $scope.bidAllow = true;
        $scope.reject = false;
        $scope.stars = null;
        $scope.bid_amount = null;
        $scope.start_time = null;
        $scope.end_time = null;
        $scope.selected_day = null;
        $scope.miles = null;
        $scope.golfer_number = null;
        
        $scope.onRatingChange = function ($event) {
            $scope.stars = $event.rating;
        };

        $scope.updateLocation = function () {
            BidService.updateBid({
                miles: $scope.miles,
                reqLat: $scope.lat,
                reqLong: $scope.long,
            });
        };

        $scope.updateTime = function () {
            BidService.updateBid({
                startTime: doubleDig($scope.start_time.getHours()) + ':' + doubleDig($scope.start_time.getMinutes()) + ':' + doubleDig($scope.start_time.getSeconds()),
                endTime: doubleDig($scope.end_time.getHours()) + ':' + doubleDig($scope.end_time.getMinutes()) + ':' + doubleDig($scope.end_time.getSeconds()),
                date: $scope.selected_day,
            });
        };

        $scope.updateStars = function () {
            BidService.updateBid({
                stars: $scope.stars,
            });
        };

        $scope.updateBid = function () {
            BidService.updateBid({
                amount: $scope.bid_amount,
                golfers: $scope.golfer_number,
            });
            BidService.submitBid().then(function () {
                $state.go('userDashboard');
            }).catch(function () {
                $scope.reject = true;
                $scope.bidAllow = false;
                
            })
        }
    }
}