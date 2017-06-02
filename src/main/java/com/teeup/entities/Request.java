package com.teeup.entities;

import javax.persistence.*;

/**
 * Created by BUBBABAIRD on 5/31/17.
 */

public class Bid {

    int id;
    String date;
    String startTime;
    String endTime;
    int golfers;
    int amount;
    int stars;
    String location;

    public Bid() {
    }

    public Bid(int id, String date, String startTime, String endTime, int golfers, int amount, int stars, String location) {
        this.id = id;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.golfers = golfers;
        this.amount = amount;
        this.stars = stars;
        this.location = location;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
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

    public int getStars() {
        return stars;
    }

    public void setStars(int stars) {
        this.stars = stars;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
