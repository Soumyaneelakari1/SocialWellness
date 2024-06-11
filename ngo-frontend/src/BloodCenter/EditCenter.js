import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import './addcenter.css'
export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [bloodCenter, setUser] = useState({
    u_name: "",
    location: "",
    timing: "",
    status: "",
  });

  const { u_name, location, timing ,status } = bloodCenter;

  const onInputChange = (e) => {
    setUser({ ...bloodCenter, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const timingPattern = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
    if (!timingPattern.test(timing)) {
      alert("Timing must be in the format HH:mm:ss");
      return;
    }
    await axios.put(`http://localhost:8080/bloodCenter/${id}`, bloodCenter, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/bloodCenter/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container pt-5 mt-5">
      <div className="row">
        <div className="add-center-form col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
            <label htmlFor="U_name" className="form-label">
              HName
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Hospital name"
                name="u_name"
                value={u_name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
            <label htmlFor="Location" className="form-label">
              Location
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter hospital location"
                name="location"
                value={location}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
            <label htmlFor="Timing" className="form-label">
              Timing
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the hospital timing"
                name="timing"
                value={timing}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Status" className="form-label">
              Status
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the hospital status"
                name="status"
                value={status}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/bloodcenter">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}