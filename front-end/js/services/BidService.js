
module.exports = {
    name: 'BidService', 
    func: function ($http) {
        
        const course = {
            image: null,
            name: null, 
            location: null,
            bid: null, 
            time: null,
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
                    if (response.data === '') {
                        return Promise.reject();
                    } else {
                        console.log(response);
                        let result = response.data;
                        course.name = result.course.name;
                        course.location = result.course.location;
                        course.bid = result.amount;
                        course.time = result.startTime;
                        course.rating = result.course.starRating;
                        course.gcLat = result.course.gcLat; 
                        course.gcLong = result.course.gcLong;
                        course.image = result.course.imageHero;
                    } 
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
