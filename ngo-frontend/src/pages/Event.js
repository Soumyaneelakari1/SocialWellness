import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import AuthContext from '../AuthContext';

export default function Event() {
  const [events, setEvents] = useState([]);
  const { authState } = useContext(AuthContext);
  const [userRole, setUserRole] = useState('');
  const [volevent, setVolEvents] = useState({
    volunteer: {},
    events: []
  });

  const { id } = useParams();
  const [volunteer1, setVolunteer] = useState({
    skills: [],
    prefTasks: [],
    prefDays: [],
    user: {}
  });

  useEffect(() => {
    fetchUserRole(authState.userId);
    loadEvents();
    loadVolunteer(authState.vId);
  }, []);

  const fetchUserRole = async (userId) => {
    const res = await axios.get(`http://localhost:8080/user/role?userId=${userId}`);
    setUserRole(res.data);
    console.log(userRole);
  };

  const loadEvents = async () => {
    const res = await axios.get("http://localhost:8080/getevents");
    setEvents(res.data);
  };

  const loadVolunteer = async (vId) => {
    if (vId > 0) {
      const res = await axios.get(`http://localhost:8080/volunteers/${vId}`);
      setVolEvents(prevState => ({
        ...prevState,
        volunteer: res.data
      }));
    }
  };

  const participate = async (eid) => {
    const res = await axios.get(`http://localhost:8080/getevent/${eid}`);
    const updatedEvent = res.data;
    console.log("updated event: ", updatedEvent);
    setVolEvents(prevState => ({
      ...prevState,
      events: [...prevState.events, updatedEvent]
    }));

    const payload = {
      volunteer: volevent.volunteer,
      event: updatedEvent
    };

    const res1 = await axios.post("http://localhost:8080/volevents", payload);
    console.log(res1.data);
  };

  useEffect(() => {
    console.log("volunteer:", volevent.volunteer);
    console.log("events:", volevent.events);
  }, [volevent]);

  return (
    <div className="container">
      <h2 className='my-3'>Events</h2>
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Event Name</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Venue</th>
              <th scope="col">Task</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={event.eid}>
                <td>{event.eid}</td>
                <td>{event.ename}</td>
                <td>{event.date}</td>
                <td>{event.time}</td>
                <td>{event.venue}</td>
                <td>{event.task}</td>
                <td>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editevent/${event.eid}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => participate(event.eid)}
                  >
                    Participate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link className='btn btn-primary' to='/addevent'>Add Events</Link>
    </div>
  );
}
