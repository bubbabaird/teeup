package com.teeup.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.time.LocalTime;
import java.util.List;

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
    LocalTime openTime;

    @Column(nullable = false)
    LocalTime closeTime;

    @Column(nullable = false)
    double starRating;

    @Column(nullable = false)
    double gcLat;

    @Column(nullable = false)
    double gcLong;

    @Column(nullable = false)
    String location;

    @Column(nullable = false)
    String imageHero;

    @OneToMany(mappedBy = "course")
    @JsonBackReference
    List<Reservation> reservations;

    public GolfCourse() {
    }

    public GolfCourse(int id, String name, int minPrice, LocalTime openTime, LocalTime closeTime, double starRating, double gcLat, double gcLong, String location) {
        this.id = id;
        this.name = name;
        this.minPrice = minPrice;
        this.openTime = openTime;
        this.closeTime = closeTime;
        this.starRating = starRating;
        this.gcLat = gcLat;
        this.gcLong = gcLong;
        this.location = location;
    }

    public List<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
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

    public LocalTime getOpenTime() {
        return openTime;
    }

    public void setOpenTime(LocalTime openTime) {
        this.openTime = openTime;
    }

    public LocalTime getCloseTime() {
        return closeTime;
    }

    public void setCloseTime(LocalTime closeTime) {
        this.closeTime = closeTime;
    }

    public double getStarRating() {
        return starRating;
    }

    public void setStarRating(double starRating) {
        this.starRating = starRating;
    }

    public double getGcLat() {
        return gcLat;
    }

    public void setGcLat(double gcLat) {
        this.gcLat = gcLat;
    }

    public double getGcLong() {
        return gcLong;
    }

    public void setGcLong(double gcLong) {
        this.gcLong = gcLong;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getImageHero() {
        return imageHero;
    }

    public void setImageHero(String imageHero) {
        this.imageHero = imageHero;
    }
}
