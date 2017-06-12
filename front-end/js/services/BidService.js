
module.exports = {
    name: 'BidService', 
    func: function ($http) {
        
        const course = {
            image: "https://thewedgegolftour.com/wp-content/uploads/2016/02/TheReserveGolfClub%E2%80%93SouthCourse_500x500.jpg",
            name: null, 
            location: null,
            bid: '40', 
            time: '3:00pm',
            rating: null,
            gcLat: null, 
            gcLong: null, 
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
                console.log(bid);

                return $http.post('https://pure-peak-13504.herokuapp.com/bid', bid).then(function (response) {
                // $http.post('https://pure-peak-13504.herokuapp.com/bid', bid).then(function (response) {
                    // console.log(response);
                    console.log(response.data.course);
                    let result = response.data.course;
                    // if (result === '') {

                    // }
                    course.name = result.name;
                    course.location = result.location;
                    course.rating = result.starRating;
                    course.gcLat = result.gcLat; 
                    course.gcLong = result.gcLong; 
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
