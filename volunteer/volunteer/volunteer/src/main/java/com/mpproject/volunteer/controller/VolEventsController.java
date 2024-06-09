
package com.mpproject.volunteer.controller;

import com.mpproject.volunteer.model.VolEvents;
import com.mpproject.volunteer.repository.VolEventsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class VolEventsController {

    private final VolEventsRepository volEventsRepository;

    @Autowired
    public VolEventsController(VolEventsRepository volEventsRepository) {
        this.volEventsRepository = volEventsRepository;
    }

    @GetMapping("/volevents")
    public List<VolEvents> getAllVolEvents() {
        return volEventsRepository.findAll();
    }

    @PostMapping("/volevents")
    public VolEvents createVolEvents(@RequestBody VolEvents volEvents) {
        return volEventsRepository.save(volEvents);
    }

    @DeleteMapping("/volevents/{id}")
    public void deleteVolEvents(@PathVariable Long id) {
        volEventsRepository.deleteById(id);
    }
}
