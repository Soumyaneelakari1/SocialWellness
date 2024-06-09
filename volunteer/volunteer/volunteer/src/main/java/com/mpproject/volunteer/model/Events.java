package com.mpproject.volunteer.model;

import java.sql.Date;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;

@Entity
public class Events {
	
@Id
@GeneratedValue
private long  eid;
private String ename;
private Date date;
private String time;
private String venue;
private String task;
public long getEid() {
	return eid;
}
public void setEid(long eid) {
	this.eid = eid;
}
public String getEname() {
	return ename;
}
public void setEname(String ename) {
	this.ename = ename;
}
public Date getDate() {
	return date;
}
public void setDate(Date date) {
	this.date = date;
}
public String getTime() {
	return time;
}
public void setTime(String time) {
	this.time = time;
}
public String getVenue() {
	return venue;
}
public void setVenue(String venue) {
	this.venue = venue;
}
public String getTask() {
	return task;
}
public void setTask(String task) {
	this.task = task;
}


}
