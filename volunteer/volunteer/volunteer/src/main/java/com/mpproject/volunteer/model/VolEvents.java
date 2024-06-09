package com.mpproject.volunteer.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class VolEvents {
    @Id
    @GeneratedValue
    private long id;

    @ManyToOne
    @JoinColumn(name = "v_id")
    private Volunteer volunteer;

    @ManyToOne
    @JoinColumn(name = "e_id")
    private Events event;

    // Getters and Setters
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Volunteer getVolunteer() {
        return volunteer;
    }

    public void setVolunteer(Volunteer volunteer) {
        this.volunteer = volunteer;
    }

    public Events getEvent() {
        return event;
    }

    public void setEvent(Events event) {
        this.event = event;
    }
}
