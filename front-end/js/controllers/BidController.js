module.exports = {
    name: 'BidController',
    func: function ($scope, BidService) {
        $scope.bid_amount = '';
        $scope.submit() = function () {
            BidService.submitBid($scope.bid_amount);
        }
    }
}