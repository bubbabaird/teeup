package com.teeup.services;

import com.teeup.entities.GolfCourse;
import com.teeup.entities.Request;
import com.teeup.entities.Reservation;
import com.teeup.repositories.GolfCourseRepo;
import com.teeup.repositories.ReservationRepo;
import org.aspectj.weaver.ast.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by BUBBABAIRD on 5/31/17.
 */
@Service
public class BidService {
    //  We need to auto-wire our golf courses in this Service class.
    @Autowired
//  courses is an instance of GolfCourseRepo
    GolfCourseRepo courses;

    @Autowired
    ReservationRepo reservationRepo;

    //  We need to make a new method and name it's parameters as the Class we want to reference
//  and make an instance of this class called 'bid'
    public Reservation findAndMakeReservation(Request bid) {
//      Make a new ArrayList called 'currentList' that will hold a list of golf courses

//      this list will hold golf courses
        List<GolfCourse> a = (List) courses.findAll();

//      for each golfcourse in g (variable that we have named): a is the list of what we are iterating over

//            Class     variable we want to store
//              ^       ^   a is what we want to iterate over
//              |       |   ^
        for (GolfCourse g : a) {
//          if the date is "today" then check to see if
//          today is available in the range of times each golf course
//          is open

            LocalTime start = bid.getStartTime();
            LocalTime end = bid.getEndTime();
            int amt = bid.getAmount();
            double star = bid.getStars();


            // find out if both start and end are between "g.getOpenTime() and g.getCloseTime()".
            // if so, print "success!" and break out of the loop.

            if (
                // if the bid starttime starts after the opentime AND
                start.isAfter(g.getOpenTime()) &&

                // if the bid starttime starts before the closetime AND
                start.isBefore(g.getCloseTime()) &&

                // if the bid endtime starts after the opentime AND
                end.isAfter(start) &&

                // if the bid endtime ends before the closetime
                end.isBefore(g.getCloseTime()) &&

                // if the amt is less than the bid amt
                g.getMinPrice() <= amt &&

                // if the star rating is greater than the bid star rating
                g.getStarRating() >= star &&

                calculateDistance(g.getGcLat(), g.getGcLong(), bid.getReqLat(), bid.getReqLong()) <= bid.getMiles()) {

                // if all ^ is true, then make a reservation
                return makeReservation(g, bid);
            }

//          Test Code:
            if (
                    start.isAfter(g.getOpenTime()) &&
                    start.isBefore(g.getCloseTime()) &&
                    end.isAfter(start) &&
                    end.isBefore(g.getCloseTime()) &&
                    g.getMinPrice() <= amt &&
                    g.getStarRating() >= star &&
                    calculateDistance(g.getGcLat(), g.getGcLong(), bid.getReqLat(), bid.getReqLong()) <= bid.getMiles()

                    ) {
                return makeReservation(g, bid);
            }
        }
        return null;
    }

    private double distance(double lat1, double lon1, double lat2, double lon2, char unit) {
        double theta = lon1 - lon2;
        double dist = Math.sin(deg2rad(lat1)) * Math.sin(deg2rad(lat2)) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.cos(deg2rad(theta));
        dist = Math.acos(dist);
        dist = rad2deg(dist);
        dist = dist * 60 * 1.1515;
        if (unit == 'K') {
            dist = dist * 1.609344;
        } else if (unit == 'N') {
            dist = dist * 0.8684;
        }
        return (dist);
    }
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
/*::  This function converts decimal degrees to radians             :*/
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
    private double deg2rad(double deg) {
        return (deg * Math.PI / 180.0);
    }
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
/*::  This function converts radians to decimal degrees             :*/
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
    private double rad2deg(double rad) {
        return (rad * 180.0 / Math.PI);
    }

    private int calculateDistance(double courseLat, double courseLong, double bidLat, double bidLong) {
        double miles = distance(courseLat, courseLong, bidLat, bidLong, 'M');

        return (int)miles;
    }

    private Reservation makeReservation(GolfCourse course, Request bid) {
        // build a new reservation object

        Reservation results = new Reservation();

        String date = bid.getDate(); // either "today" or "tomorrow".
        LocalTime start = bid.getStartTime(); // e.g. 07:00.
        LocalTime end = bid.getEndTime();

        LocalDate requestDate;

//      if date = today
        if (date.equalsIgnoreCase("today")) {
//          set localdate = date
            requestDate = LocalDate.now();
//        otherwise set localdate plus 1 = date
        } else {
            requestDate = LocalDate.now().plusDays(1);
        }

        // this localdate time will always be the result of combining the
        // date you found earlier with the end time from the request.
        //  LocalDateTime endDateTime = _____;
        // convert the date and the start into one LocalDateTime object.
        // results.setStartTime();
        // using the given golf course and the given bid.

//      set 'startDateTime' = to the combination of the LocalDateTime of whatever the requestDate is (either "today" or "tomorrow") + the user's StartTime
        LocalDateTime startDateTime = LocalDateTime.of(requestDate, start);

//      set the StartTime for this new 'results' reservation to the new combined 'StartDateTime'
        results.setStartTime(startDateTime);

//      set the 'endDateTime' = to the combination of the LocalDateTime of whatever the requestDate is (either "today" or "tomorrow") + the user's EndTime
        LocalDateTime endDateTime = LocalDateTime.of(requestDate, end);

//      set the EndTime for this new 'results' reservation tot he new combined 'EndDateTime'
        results.setEndTime(endDateTime);

//      set the amount of the reservation to whatever the user wanted
        results.setAmount(bid.getAmount());

//      set the number of stars to the golf course number of stars
        results.setCourse (course);

//      set the number of golfers to the bid number of golfers
        results.setGolfers(bid.getGolfers());

//      save reservation to database, then return.
        reservationRepo.save(results);

        return results;

//      ask the database if there is a reservation stored for [GOLF COURSE] at [bid.getStartTime]
//      Date
//      Time
//      Amount
//      Stars
//      Location

//        Course Page
//        needs to display all the bids that are stored in the database per GOLF COURSE page
//        get request
//        for GOLF COURSE, get all the reservations from
//        Courses can have many reservations
//        Reservation can only have one Course
//        The Reservaton class has a:
//        @ManyToOne relationship with
//        GolfCourse course;


    }
}
