package com.teeup.services;

import com.teeup.repositories.GolfCourseRepo;
import com.teeup.repositories.ReservationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by BUBBABAIRD on 6/5/17.
 */
@Service
public class ReservationService {
//  We need to auto-wire our golf courses in this Service class.
    @Autowired
//  courses is an instance of ReservationRepo
    ReservationRepo reservations;

}
