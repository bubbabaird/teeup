package com.teeup.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import javax.persistence.*;
import java.time.LocalTime;

/**
 * Created by BUBBABAIRD on 5/31/17.
 */


/*

{
    "date": "something",
    "startTime": "7:30am",
    "golfers": 4,
    "amount": 15,
    "location": "Charlotte"
}


 */
public class Request {

    int id;
    String date;

    @JsonFormat(pattern = "HH:mm:ss")
    LocalTime startTime;

    @JsonFormat(pattern = "HH:mm:ss")
    LocalTime endTime;

    int golfers;
    int amount;
    double stars;
    int miles;

    @JsonFormat(pattern = "")
    double reqLat;

    @JsonFormat(pattern = "")
    double reqLong;

    public Request() {
    }

    public Request(String date, LocalTime startTime, LocalTime endTime, int golfers, int amount, double stars, int miles, double reqLat, double reqLong) {
        this.id = id;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.golfers = golfers;
        this.amount = amount;
        this.stars = stars;
        this.miles = miles;
        this.reqLat = reqLat;
        this.reqLong = reqLong;
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

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalTime endTime) {
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

    public double getStars() {
        return stars;
    }

    public void setStars(double stars) {
        this.stars = stars;
    }

    public int getMiles() {
        return miles;
    }

    public void setMiles(int miles) {
        this.miles = miles;
    }

    public double getReqLat() {
        return reqLat;
    }

    public void setReqLat(double reqLat) {
        this.reqLat = reqLat;
    }

    public double getReqLong() {
        return reqLong;
    }

    public void setReqLong(double reqLong) {
        this.reqLong = reqLong;
    }
}
