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

        $scope.bid_amount = null;
        $scope.start_time = null;
        $scope.end_time = null;
        $scope.selected_day = null;
        $scope.miles = null;
        $scope.location = null;
        $scope.golfer_number = null;

        $scope.updateBid = function () {
            BidService.updateBid({
                amount: $scope.bid_amount,
                stars: $scope.stars,
                startTime: "10:00:00",
                endTime: "16:00:00",
                date: $scope.selected_day,
                miles: $scope.miles, 
                reqLat: $scope.lat,
                reqLong: $scope.long,
                golfers: $scope.golfer_number,  
            });
            BidService.submitBid();
        }


        // $scope.submit = function () {
        //     let bid = {
        //         amount: $scope.bid_amount,
        //         // stars: $scope.star_select,
        //         stars: $scope.stars, 
        //         // startTime: $scope.start_time.getHours() + ':' + $scope.start_time.getMinutes() + ':' + $scope.start_time.getSeconds(),
        //         // endTime: $scope.end_time.getHours() + ':' + $scope.end_time.getMinutes() + ':' + $scope.end_time.getSeconds(),
        //         startTime: "10:00:00",
        //         endTime: "16:00:00",
        //         date: $scope.selected_day,
        //         miles: $scope.miles,
        //         reqLat: $scope.lat,
        //         reqLong: $scope.long,
        //         golfers: $scope.golfer_number,
        //     }
        //     console.log(bid);

        //     // BidService.getCourse();
        //     BidService.submitBid(bid);
        // }
        // BidService.submitBid($scope.bid_amount);
    }


    // $scope.result = BidService.getCourse(); 
}
}