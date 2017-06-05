module.exports = {
    name: 'BidController',
    func: function ($scope, BidService) {
        $scope.bid_amount = '';
        $scope.submit = function (bid_amount) {
            BidService.submitBid($scope.bid_amount);
        }
        // $scope.result = BidService.getCourse(); 
    }
}