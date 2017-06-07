
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

        return {
            submitBid: function (amount) {
               $http.post('https://pure-peak-13504.herokuapp.com/bid', amount).then(function (response) {
                console.log(response.data.course);
                let result = response.data.course;
                course.name = result.name;
                course.location = result.location;
            })   
                // $http.post('http://192.168.1.38:8080/bid', amount).then(function (response) {
                
                // })   
            }, 

            getCourse: function () {
                return course; 
            }, 

 

        }; 
    }
}; 
