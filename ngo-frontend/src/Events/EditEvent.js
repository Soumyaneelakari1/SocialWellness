import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditCamp() {
    let navigate = useNavigate();

    const { id } = useParams();
  
    const [event, setEvent] = useState({
      ename: "",
      date: "",
      time: "",
      venue: "",
      task : ""
    });
  
    const { ename,date, time,venue, task } = event;
  
    const onInputChange = (e) => {
      setEvent({ ...event, [e.target.name]: e.target.value });
    };
  
    useEffect(() => {
      loadEvent();
    }, []);
  
    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:8080/updateevent/${id}`, event);
      navigate("/");
    };
  
    const loadEvent = async () => {
      const result = await axios.get(`http://localhost:8080/getevent/${id}`);
      setEvent(result.data);
    };
  return (
    <div className='container'>
    <div className='row'>
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

      <div className='text center'>Edit Events</div>
      <form onSubmit={(e)=>onSubmit(e)}>
        <div className='mb-3'>
        <div className='mb-3'>
          <label htmlFor='ename' className='form-label'>Event Name</label>
          <input type={'text'} className='form-control'
          placeholder='Enter time' name='ename' value={ename}
          onChange={(e)=>onInputChange(e)}/>
        </div>
          <label htmlFor='date' className='form-label'>Date</label>
          <input type={"date"} className='form-control'
          placeholder='Select Date' name='date' value={date}
          onChange={(e)=>onInputChange(e)}/>
        </div>
        <div className='mb-3'>
          <label htmlFor='time' className='form-label'>Time</label>
          <input type={'text'} className='form-control'
          placeholder='Enter time' name='time' value={time}
          onChange={(e)=>onInputChange(e)}/>
        </div>
        <div className='mb-3'>
          <label htmlFor='venue' className='form-label'>Venue</label>
          <input type={'text'} className='form-control'
          placeholder='Enter venue' name='venue' value={venue}
          onChange={(e)=>onInputChange(e)}/>
        </div>
        <div className='mb-3'>
          <label htmlFor='task' className='form-label'>Task</label>
          <input type={'text'} className='form-control'
          placeholder='Enter task' name='task' value={task}
          onChange={(e)=>onInputChange(e)}/>
        </div>
        
        <button type="submit" className='btn btn-outline-primary'>Submit</button>
        <Link className="btn btn-outline-danger mx-2" to="/">
            Cancel
          </Link>
      </form>
    </div>
      
  </div>
  </div>
  )
}
