import React, { useEffect, useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import AuthContext from '../AuthContext';

export default function VaccineCamp() {
  const [camps, setCamps] = useState([]);
  const [userRole, setUserRole] = useState('');
  const { authState } = useContext(AuthContext);
  const { id } = useParams();

  useEffect(() => {
    loadCamps();
    fetchUserRole(authState.userId);
  }, []);

  const loadCamps = async () => {
    try {
      const res = await axios.get("http://localhost:8080/vaccineCamp");
      setCamps(res.data);
    } catch (error) {
      console.error("Error loading camps:", error);
    }
  };

  const fetchUserRole = async (userId) => {
    const res = await axios.get(`http://localhost:8080/user/role?userId=${userId}`);
    setUserRole(res.data);
    console.log(userRole)
  };

  const deleteCamp = async (id) => {
    await axios.delete(`http://localhost:8080/vaccineCamp/${id}`);
    loadCamps();
  }
  return (
    <div className="container">
      <h2 className='my-3'>Vaccination Centres</h2>
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Vaccine Name</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Venue</th>
            </tr>
          </thead>
          <tbody>
            {camps.map((camp, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{camp.vaccine}</td>
                <td>{camp.vdate}</td>
                <td>{camp.vtime}</td>
                <td>{camp.vlocation}</td>
                <td>
                {userRole === 'admin' && (
                    <>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editVaccine/${camp.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteCamp(camp.id)}
                  >
                    Delete
                  </button>
                  </>
                )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link className='btn btn-primary' to='/addvaccine'>Add Vaccination Camp</Link>
    </div>

  )
}
