
module.exports = {
    name: 'BidService', 
    func: function ($http) {
        
        const course = {
            name: null, 
            location: null,
            bid: '40', 
            time: '3:00pm',
            rating: null,
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
            submitBid: function () {
                $http.post('https://pure-peak-13504.herokuapp.com/bid', bid).then(function (response) {
                    console.log(response.data.course);
                    let result = response.data.course;
                    course.name = result.name;
                    course.location = result.location;
                    course.rating = result.starRating;
                })     
            }, 

            updateBid: function (props) {
                const keys = Object.keys(props);

                for (let i = 0; i < keys.length; i++) {
                    bid[keys[i]] = props[keys[i]];
                } 
            },

            getCourse: function () {
                return course; 
            }, 

        }; 
    }
}; 
