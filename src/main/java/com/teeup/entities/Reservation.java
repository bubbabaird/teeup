package com.teeup.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.time.LocalDateTime;

/**
 * Created by BUBBABAIRD on 5/31/17.
 */
@Entity
@Table(name = "reservations")
public class Reservation {
    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    LocalDateTime startTime;

    @Column(nullable = false)
    LocalDateTime endTime;

    @Column(nullable = false)
    int golfers;

    @Column(nullable = false)
    int amount;

    @ManyToOne
    GolfCourse course;

    public Reservation() {
    }

    public Reservation(LocalDateTime startTime, LocalDateTime endTime, int golfers, int amount, GolfCourse course) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.golfers = golfers;
        this.amount = amount;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }

    public int getGolfers() {
        return golfers;
    }

    public void setGolfers(int golfers) {
        this.golfers = golfers;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public GolfCourse getCourse() {
        return course;
    }

    public void setCourse(GolfCourse course) {
        this.course = course;
    }
}
