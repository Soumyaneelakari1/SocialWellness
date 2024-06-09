package com.mpproject.volunteer.repository;
import org.springframework.data.jpa.repository.JpaRepository;


import com.mpproject.volunteer.model.Events;
//import com.mpproject.volunteer.model.User;


public interface EventsRepository extends JpaRepository <Events,Long>{

}
