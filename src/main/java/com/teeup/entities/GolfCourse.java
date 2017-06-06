package com.teeup.entities;

import javax.persistence.*;

/**
 * Created by BUBBABAIRD on 5/31/17.
 */
@Entity
@Table(name = "golfcourses")
public class GolfCourse {
    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    String name;

    @Column(nullable = false)
    int minPrice;

    @Column(nullable = false)
    String gclocation;

    @Column(nullable = false)
    String openTime;

    @Column(nullable = false)
    String closeTime;

    @Column(nullable = false)
    double starRating;

    public GolfCourse() {
    }

    public GolfCourse(int id, String name, int minPrice, String gclocation, String openTime, String closeTime, double starRating) {
        this.id = id;
        this.name = name;
        this.minPrice = minPrice;
        this.gclocation = gclocation;
        this.openTime = openTime;
        this.closeTime = closeTime;
        this.starRating = starRating;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getMinPrice() {
        return minPrice;
    }

    public void setMinPrice(int minPrice) {
        this.minPrice = minPrice;
    }

    public String getGclocation() {
        return gclocation;
    }

    public void setGclocation(String gclocation) {
        this.gclocation = gclocation;
    }

    public String getOpenTime() {
        return openTime;
    }

    public void setOpenTime(String openTime) {
        this.openTime = openTime;
    }

    public String getCloseTime() {
        return closeTime;
    }

    public void setCloseTime(String closeTime) {
        this.closeTime = closeTime;
    }

    public double getStarRating() {
        return starRating;
    }

    public void setStarRating(double starRating) {
        this.starRating = starRating;
    }
}
