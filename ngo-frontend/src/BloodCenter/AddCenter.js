import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './addcenter.css';

export default function AddCenter() {
  const navigate = useNavigate();

  const [bloodCenter, setBloodCenter] = useState({
    u_name: "",
    location: "",
    timing: "",
    status: "",
  });

  const { u_name, location, timing, status } = bloodCenter;

  const onInputChange = (e) => {
    const { name, value } = e.target;

    let validValue = value;
    if (name === 'u_name' || name === 'status') {
      const regex = /^[a-zA-Z\s]*$/; // Only letters and spaces are allowed
      if (!regex.test(value)) {
        alert("Only alphabetic characters and spaces are allowed for hospital name and status.");
        return;
      }
    }

    setBloodCenter({ ...bloodCenter, [name]: validValue });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const timingPattern = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
    if (!timingPattern.test(timing)) {
      alert("Timing must be in the format HH:mm:ss");
      return;
    }
    try {
      await axios.post("http://localhost:8080/bloodCenter", bloodCenter, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/bloodcenter");
    } catch (error) {
      console.error("Error adding blood center:", error);
      // Handle error (e.g., display error message to the user)
    }
  };

  return (
    <div className="add-center-container pt-5 mt-5">
      <div className="content-wrapper">
        <div className="row">
          <div className="add-center-form col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Register Blood Center</h2>

            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="u_name" className="form-label">
                  Hospital Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter hospital name"
                  name="u_name"
                  value={u_name}
                  onChange={onInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="location" className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter hospital location"
                  name="location"
                  value={location}
                  onChange={onInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="timing" className="form-label">
                  Timing (HH:mm:ss)
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter timing to open hospital"
                  name="timing"
                  value={timing}
                  onChange={onInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="status" className="form-label">
                  Status
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter status of hospital"
                  name="status"
                  value={status}
                  onChange={onInputChange}
                />
              </div>
              <button type="submit" className="btn btn-outline-primary me-2">
                Submit
              </button>
              <Link to="/bloodcenter" className="btn btn-outline-danger">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
