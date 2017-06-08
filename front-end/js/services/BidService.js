
module.exports = {
    name: 'BidService', 
    func: function ($http) {
        
        const course = {
            name: '', 
            location: '',
            bid: '40', 
            time: '3:00pm',
            rating: '4'
        }; 

        const bid = {
            amount: null,
            stars: null,
            startTime: null,
            endTime: null,
            date: null,
            miles: null, 
            reqLat: null,
            reqLong: null,
            golfers: null,
        };

        return {
            submitBid: function (bid) {
               $http.post('https://pure-peak-13504.herokuapp.com/bid', bid).then(function (response) {
                console.log(response.data.course);
                let result = response.data.course;
                course.name = result.name;
                course.location = result.location;
                })   
                // $http.post('http://192.168.1.38:8080/bid', amount).then(function (response) {
                
                // })   
            }, 

            updateBid: function (props) {
                 
            },

            getCourse: function () {
                return course; 
            }, 

        }; 
    }
}; 
