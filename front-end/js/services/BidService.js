
module.exports = {
    name: 'BidService', 
    func: function ($http) {
        
        const course = {}; 

        return {
            sumbitBid: function (amount) {
               $http.post('https.//', JSON.stringify(data)).then(function (reponse) {
               })     
            }, 

            getCourse: function () {
                return course; 
            }, 

 

        }; 
    }
}; 
