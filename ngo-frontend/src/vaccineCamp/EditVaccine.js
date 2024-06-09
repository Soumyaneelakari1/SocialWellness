import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

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
    <div className='container'>
      <div className='row'>
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

          <div className='text center'>Add Vaccine Camp</div>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='vaccine' className='form-label'>Vaccine</label>
              <input type={"text"} className='form-control'
                placeholder='Enter Vaccine name' name='vaccine' value={vaccine}
                onChange={(e) => onInputChange(e)} />
            </div>
            <div className='mb-3'>
              <label htmlFor='vdate' className='form-label'>Date</label>
              <input type={"date"} className='form-control'
                placeholder='Select Date' name='vdate' value={vdate}
                onChange={(e) => onInputChange(e)} />
            </div>
            <div className='mb-3'>
              <label htmlFor='vtime' className='form-label'>Time</label>
              <input type={'text'} className='form-control'
                placeholder='Enter time' name='vtime' value={vtime}
                onChange={(e) => onInputChange(e)} />
            </div>
            <div className='mb-3'>
              <label htmlFor='C' className='form-label'>Location</label>
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
  )
}
