module.exports = {
    name: "CourseService",
    func: function ($http) {

        const bookings = [];

        const course = {};

        return {
            getBookings: function () {
                $http.get('https://teeup.herokuapp.com/reservations/' + 77).then(function (response) {
                    for (let i = 0; i < response.data.length; i++) {
                        response.data[i].startTime = moment(response.data[i].startTime).format('LT');
                        bookings.push(response.data[i]);
                    }
                });
                
                return bookings;
            },
            getCourse: function () {
                $http.get('https://teeup.herokuapp.com/courses/' + 77).then(function (response) {
                    console.log(response.data);
                    course.name = response.data.name;
                    course.minPrice = response.data.minPrice;
                    course.maxPrice = response.data.maxPrice;
                    course.openTime = response.data.openTime;
                    course.closeTime = response.data.closeTime;
                    course.starRating = response.data.starRating;
                    course.gcLat = response.data.gcLat;
                    course.gcLong = response.data.gcLong;
                    course.location = response.data.location;
                    course.imageHero = response.data.imageHero;
                    course.enabled = response.data.enabled;
                });

                return course;
            },
            setRange: function (newRange) {
                $http.put('https://teeup.herokuapp.com/courses/' + 77, newRange).then(function (response) {
                    console.log(response);
                })
            },

            getPopCourse: function () {
                return $http.get('https://teeup.herokuapp.com/courses').then(function (response) {
                    return response.data[0]; 
                })
            }
        }
    }
}