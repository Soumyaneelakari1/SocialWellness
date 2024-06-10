import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './VolunteerList.css'; // Import CSS file for styling

function VolunteerList() {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    axios.get('http://localhost:8080/volunteers') // Replace with your backend API endpoint
      .then(response => {
        setVolunteers(response.data);
      })
      .catch(error => {
        console.error('Error fetching volunteers:', error);
      });
  }, []);

  return (
    <div>
      <h2>List of Volunteers</h2>
      <div className="card-container">
        {volunteers.map(volunteer => (
          <div className="card" id="volList" key={volunteer.id}>
            <p className="heading"><strong>Volunteer ID:</strong> {volunteer.id}</p>
            <p className="heading"><strong>User ID:</strong> {volunteer.user.id}</p>
            <p><strong>Name:</strong> {volunteer.user.firstName} {volunteer.user.lastName}</p>
            <p><strong>Username:</strong> {volunteer.user.username}</p>
            <p><strong>Email:</strong> {volunteer.user.email}</p>
            <p><strong>Skills:</strong> {volunteer.skills.join(', ')}</p>
            <p><strong>Preferred Tasks:</strong> {volunteer.prefTasks.join(', ')}</p>
            <p><strong>Preferred Days:</strong> {volunteer.prefDays.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VolunteerList;
