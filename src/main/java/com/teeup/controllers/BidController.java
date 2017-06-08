package com.teeup.controllers;

import com.opencsv.CSVReader;
import com.teeup.entities.GolfCourse;
import com.teeup.entities.Request;
import com.teeup.entities.Reservation;
import com.teeup.entities.User;
import com.teeup.repositories.GolfCourseRepo;
import com.teeup.repositories.ReservationRepo;
import com.teeup.repositories.UserRepo;
import com.teeup.services.BidService;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.time.LocalTime;
import java.util.List;

/**
 * Created by BUBBABAIRD on 5/31/17.
 */
@RestController
public class BidController {
    BidService bidService;
    ReservationRepo reservationRepo;
    UserRepo users;
    GolfCourseRepo golfCourseRepo;

    public BidController(BidService bidService, ReservationRepo reservationRepo, UserRepo users, GolfCourseRepo golfCourseRepo) {
        this.bidService = bidService;
        this.reservationRepo = reservationRepo;
        this.users = users;
        this.golfCourseRepo = golfCourseRepo;
    }

    @PostConstruct
    public void Read() throws IOException {
        if (golfCourseRepo.count() == 0) {
            CSVReader csvReader = new CSVReader(new FileReader(new File("golfcourses.csv")));

            // stores the current line we're talking about
            String[] columns;

            while((columns = csvReader.readNext()) !=null) {
                // take the data and convert it to a Golf Course object, amount, etc.
                // pass the first and/or second column into your Golf Course object.
                System.out.println("Hey Dude");
                GolfCourse golfCourse = new GolfCourse();
                golfCourse.setName(columns[0]);
                golfCourse.setGcLat(Double.valueOf(columns[1]));
                golfCourse.setGcLong(Double.valueOf(columns[2]));
                golfCourse.setLocation(columns[3]);
                golfCourse.setMinPrice(Integer.valueOf(columns[4]));
                golfCourse.setOpenTime(LocalTime.parse(columns[5]));
                golfCourse.setCloseTime(LocalTime.parse(columns[6]));
                golfCourse.setStarRating(Double.valueOf(columns[7]));

                golfCourseRepo.save(golfCourse);
            }

            // make a new golf course object
//            GolfCourse gc = new GolfCourse();
//
//            // set all the fields for a given golf course
//            gc.setName("Ballentyne Country Club");
//            gc.setGclocation("111 Ballentyne Commons Drive, Charlotte, NC 28227");
//            gc.setMinPrice(45);
//            gc.setOpenTime("8:00am");
//            gc.setCloseTime("6:00pm");
//            gc.setStarRating(4);
//
//
//            // save the golf course object into our database using our `courseRepo` variable.
//            golfCourseRepo.save(gc);
        }
    }

    // all the reservations that a single golf course has
    // GET /reservations/1
    // GET /reservations/2
    @CrossOrigin
    @RequestMapping(path = "/reservations/{golf_course_id}", method = RequestMethod.GET)
    public List<Reservation> courseReservations(@PathVariable("golf_course_id") int courseId) {
        GolfCourse course = golfCourseRepo.findOne(courseId);

        return course.getReservations();
    }

    @CrossOrigin
    @RequestMapping(path = "/courses", method = RequestMethod.GET)
    public List<GolfCourse> courses() {
        List<GolfCourse> courses = (List<GolfCourse>)golfCourseRepo.findAll();

        return courses;
    }

    // Make a POST request for all of the bid information
    @CrossOrigin
    @RequestMapping(path = "/bid", method = RequestMethod.POST)
    // create a new Request object
    // make a new method that returns a Reservation
    public Reservation addBid(@RequestBody Request userBid) {
        // return the findAndMakeReservation from bidService and pass in the userBid
        Reservation r = bidService.findAndMakeReservation(userBid);

        System.out.println(r.getCourse().getName());
        return r;
        // figure out a simple algorithm for which golf course to pick
        // based off the details of the request.

        // when you figure out the details of which golf course
        // is best for this request, create a bid that points to this user
        // and a particular golf course

        // at a minimum, each bid should contain a reference to:
        // 1: the golf course
        // 2: the user that made the request.

        // it should also have a boolean field for if it's been accepted or not.


//        bidService.makeReservation(userBid);
        // save the bid information to our database
    }
    // do i need a route for a "Reservation" ??
    // should that be located in a place like "/bidresult/{id},
    // otherwise how else would you specify which {id} ----^
    // I am trying to use??

//    @RequestMapping(path = "/bid/{id}", method = RequestMethod.GET)
//    public Request getBid(@PathVariable("id") int id) {
//        return reservationRepo.findOne(id);
//    }


    public String index(HttpSession session, Model model, Integer id, String date,
                       String startTime, String endTime, Integer golfers, Integer amount,
                       Integer stars, String location) {

        // ask session for a value at the key "user"
        // set "user" = userName
        String userName = (String) session.getAttribute("user");

        // ask the database if we have this user
        User user = users.findFirstByUserName(userName);

        // if we have a "user" add that user to the model
        if (user != null) {
            model.addAttribute("user", user);
        }
        // given all the data about a bid, create a bid object


        // now find the criteria that matches that bid from the database



        return "home";
    }

}
