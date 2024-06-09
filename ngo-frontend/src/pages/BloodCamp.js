import React, { useEffect, useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import AuthContext from '../AuthContext';

export default function BloodCamp() {
  const[camps,setCamps] = useState([]);
  const [userRole, setUserRole] = useState('');
  const { id } = useParams();
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    loadCamps();
    fetchUserRole(authState.userId);
  },[]);

  const loadCamps = async () =>{
    const res = await axios.get("http://localhost:8080/bloodDonation");
    setCamps(res.data);
  };

  const fetchUserRole = async (userId) => {
    const res = await axios.get(`http://localhost:8080/user/role?userId=${userId}`);
    setUserRole(res.data);
    console.log(userRole)
  };


  const deleteCamp = async(id) => {
    await axios.delete(`http://localhost:8080/bloodDonation/${id}`);
    loadCamps();
  }
    return (
        <div className="container">
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">S.N</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Day</th>
                <th scope="col">Venue</th>
              </tr>
            </thead>
            <tbody>
               {camps.map((camp, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index+1}
                  </th>
                  <td>{camp.date}</td>
                  <td>{camp.time}</td>
                  <td>{camp.day}</td>
                  <td>{camp.venue}</td>
                  <td>
                  {userRole === 'admin' && (
                    <>
                      <Link className="btn btn-outline-primary mx-2" to={`/editCamp/${camp.id}`}>
                        Edit
                      </Link>
                      <button className="btn btn-danger mx-2" onClick={() => deleteCamp(camp.id)}>
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
        {userRole === 'admin' && (
        <Link className="btn btn-primary" to="/addcamp">
          Add Blood Donation Camp
        </Link>
      )}
    </div>
        
    )
}
