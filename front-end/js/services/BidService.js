
module.exports = {
    name: 'BidService', 
    func: function ($http) {
        
        const course = {
            name: 'Pinehurst', 
            location: '112 South Tryon Street, Charlotte NC 28206',
            bid: '42'
        }; 

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
