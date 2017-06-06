package com.teeup.entities;

import javax.persistence.*;

/**
 * Created by BUBBABAIRD on 6/1/17.
 */
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue
    int id;

    // User Information

    @Column(nullable = false, unique = true)
    String userName;

    @Column(nullable = false)
    String password;

    @Column(nullable = false)
    String firstName;

    @Column(nullable = false)
    String lastName;

    // Billing Address

    @Column(nullable = false)
    String address;

    @Column(nullable = false)
    String city;

    @Column(nullable = false)
    String state;

    @Column(nullable = false)
    String zip;

    // Credit Card Information

    @Column(nullable = false)
    String ccNumber;

    @Column(nullable = false)
    int ccMonth;

    @Column(nullable = false)
    int ccYear;

    @Column(nullable = false)
    int ccv;

    public User() {
    }

    public User(int id, String userName, String password, String firstName, String lastName, String address, String city, String state, String zip, String ccNumber, int ccMonth, int ccYear, int ccv) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.ccNumber = ccNumber;
        this.ccMonth = ccMonth;
        this.ccYear = ccYear;
        this.ccv = ccv;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getCcNumber() {
        return ccNumber;
    }

    public void setCcNumber(String ccNumber) {
        this.ccNumber = ccNumber;
    }

    public int getCcMonth() {
        return ccMonth;
    }

    public void setCcMonth(int ccMonth) {
        this.ccMonth = ccMonth;
    }

    public int getCcYear() {
        return ccYear;
    }

    public void setCcYear(int ccYear) {
        this.ccYear = ccYear;
    }

    public int getCcv() {
        return ccv;
    }

    public void setCcv(int ccv) {
        this.ccv = ccv;
    }
}
