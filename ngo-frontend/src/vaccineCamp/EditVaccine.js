import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import '../pages//VaccineCamp.css';

export default function EditVaccine() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    vaccine: "",
    vdate: "",
    vtime: "",
    vlocation: "",
  });

  const { vaccine, vdate, vtime, vlocation } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/vaccineCamp/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/vaccineCamp/${id}`);
    setUser(result.data);
  };
  return (
    <div className="editvaccine-page">
    <div className='vaccine-container container mt-5 pt-5'>
      <div className='row'>
        <div className="editvaccine-form col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

          <div className='vaccine-heading text-center fs-2 my-20 fw-semibold p-4 rounded'>Edit Vaccine Camp</div>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='vaccine' className='form-label fs-5'>Vaccine</label>
              <input type={"text"} className='form-control'
                placeholder='Enter Vaccine name' name='vaccine' value={vaccine}
                onChange={(e) => onInputChange(e)} />
            </div>
            <div className='mb-3'>
              <label htmlFor='vdate' className='form-label fs-5'>Date</label>
              <input type={"date"} className='form-control'
                placeholder='Select Date' name='vdate' value={vdate}
                onChange={(e) => onInputChange(e)} />
            </div>
            <div className='mb-3'>
              <label htmlFor='vtime' className='form-label fs-5'>Time</label>
              <input type={'text'} className='form-control'
                placeholder='Enter time' name='vtime' value={vtime}
                onChange={(e) => onInputChange(e)} />
            </div>
            <div className='mb-3'>
              <label htmlFor='C' className='form-label fs-5'>Location</label>
              <input type={'text'} className='form-control'
                placeholder='Enter venue' name='vlocation' value={vlocation}
                onChange={(e) => onInputChange(e)} />
            </div>
            <button type="submit" className='btn btn-outline-primary'>Submit</button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>

      </div>
    </div>
    </div>
  )
}
