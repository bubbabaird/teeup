package com.teeup.repositories;

import com.teeup.entities.GolfCourse;
import com.teeup.entities.Request;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by BUBBABAIRD on 6/2/17.
 */
public interface GolfCourseRepo extends CrudRepository <GolfCourse, Integer> {
    List<GolfCourse> findAllByOrderByStarRatingDesc();
}
