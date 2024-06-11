package com.mpproject.volunteer.controller;

import com.mpproject.volunteer.repository.BloodCenterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.mpproject.volunteer.exception.UserNotFoundException;
import com.mpproject.volunteer.model.BloodCenter;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class BloodCenterController {

    @Autowired
    private BloodCenterRepository bloodCenterRepository;

    @PostMapping("/bloodCenter")
    BloodCenter newUser(@RequestBody BloodCenter newUser){
        return bloodCenterRepository.save(newUser);
    }
    @GetMapping("/bloodCenter")
    List<BloodCenter> getAllUsers(){
        return bloodCenterRepository.findAll();
    }
    @GetMapping("/bloodCenter/{id}")
    BloodCenter getUserById(@PathVariable Long id)
    {
        return bloodCenterRepository.findById(id)
                .orElseThrow(()-> new UserNotFoundException(id));
    }
    @PutMapping("/bloodCenter/{id}")
    BloodCenter updateUser(@RequestBody BloodCenter newUser,@PathVariable Long id){
        return bloodCenterRepository.findById(id)
                .map(bloodCenter -> {
                    bloodCenter.setU_name(newUser.getU_name());
                    bloodCenter.setLocation(newUser.getLocation());
                    bloodCenter.setTiming(newUser.getTiming());
                    bloodCenter.setStatus(newUser.getStatus());
                    return bloodCenterRepository.save(bloodCenter);
                }).orElseThrow(() ->new UserNotFoundException(id));


    }
    @DeleteMapping("/bloodCenter/{id}")
    String deleteUser(@PathVariable Long id){
        if(!bloodCenterRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        bloodCenterRepository.deleteById(id);
        return "bloodCenter with id "+id+" has been deleted success.";
    }
}

