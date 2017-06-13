module.exports = {
    name: "CourseService",
    func: function ($http) {

        const bookings = [
            // { teeTime: '7:30', golfers: 3, id: "Bob Vance" },
            // { teeTime: '10:00', golfers: 2, id: "Frank Reynolds" },
            // { teeTime: '9:52', golfers: 1, id: "Brian Lefevre" },
        ]

        const range = {
            min: 25,
            max: 45,
        }

        return {
            getBookings: function () {
                $http.get('https://pure-peak-13504.herokuapp.com/reservations/' + 77).then(function (response) {
                    for (let i = 0; i < response.data.length; i++) {
                        bookings.push(response.data[i]);
                    }
                }) 
                return bookings;
            },
            // getBookings: function () {
            //     return bookings;
            // },
            getRange: function () {
                return range;
            },
            setRange: function (req) {
                console.log(req);
            },

        }
    }
}