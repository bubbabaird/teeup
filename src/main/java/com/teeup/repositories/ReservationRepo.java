package com.teeup.repositories;

import com.teeup.entities.GolfCourse;
import com.teeup.entities.Request;
import com.teeup.entities.Reservation;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.time.LocalDateTime;
import java.util.List;

/**
 * Created by BUBBABAIRD on 6/1/17.
 */
public interface ReservationRepo extends CrudRepository<Reservation, Integer> {
//    @Query("SELECT * FROM GolfCourses WHERE g.name LIKE ?1%")
//    List<GolfCourse> findBy(String name);
    List<Reservation> findByCourseAndStartTimeAfter(GolfCourse g, LocalDateTime start);
}
