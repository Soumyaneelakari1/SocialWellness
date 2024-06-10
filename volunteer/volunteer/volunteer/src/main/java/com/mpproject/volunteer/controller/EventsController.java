package com.mpproject.volunteer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mpproject.volunteer.exception.UserNotFoundException;
import com.mpproject.volunteer.model.BloodDonation;
import com.mpproject.volunteer.model.Events;
import com.mpproject.volunteer.repository.EventsRepository;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class EventsController {
    
    @Autowired
    private EventsRepository eventsRepository;
    
    @PostMapping("/addevent")
    public Events newEvent(@RequestBody Events newEvent){
        return eventsRepository.save(newEvent);
    }
    
    @GetMapping("/getevents")
    public List<Events> getAllEvents(){
        return eventsRepository.findAll();
    }
    
    @GetMapping("/getevent/{id}")
    Events getEventById(@PathVariable Long id) {
        return eventsRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }
    
    @PutMapping("/updateevent/{id}")
    public Events updateEvent(@RequestBody Events newEvent, @PathVariable Long id) {
        return eventsRepository.findById(id)
                .map(event -> {
                    event.setEname(newEvent.getEname());
                    event.setDate(newEvent.getDate());
                    event.setTime(newEvent.getTime());
                    event.setVenue(newEvent.getVenue());
                    event.setTask(newEvent.getTask());
                    return eventsRepository.save(event);
                })
                .orElseThrow(() -> new UserNotFoundException(id));
    }
}
