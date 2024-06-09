import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddCamp() {
    let navigate = useNavigate();
    const currdate = new Date();
    const initialTime = "0:00:AM";
    const [camp, setCamp] = useState({
        date: currdate.toISOString().split('T')[0], // Format date to yyyy-mm-dd
        time: initialTime,
        day: "",
        venue: ""
    });

    const { date, time, day, venue } = camp;

    const onInputChange = (e) => {
        const { name, value } = e.target;
        
        if (name === 'hour' || name === 'minute' || name === 'period') {
            const [hour, minute, period] = time.split(/[:\s]/);
            const newTime = {
                hour: name === 'hour' ? value : hour,
                minute: name === 'minute' ? value : minute,
                period: name === 'period' ? value : period
            };
            setCamp({
                ...camp,
                time: `${newTime.hour}:${newTime.minute} ${newTime.period}`
            });
        } else {
            setCamp({
                ...camp,
                [name]: value
            });
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/bloodDonation', camp);
        navigate('/');
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow' style={{ backgroundColor: 'lightblue' }}>
                    <div className='text-center fs-2 my-3 fw-semibold text-primary-emphasis p-3 rounded'>Add Blood Donation Camp</div>
                    <form onSubmit={onSubmit}>
                        <div className='mb-3'>
                            <label htmlFor='date' className='form-label fs-5'>Date</label>
                            <input
                                type='date'
                                className='form-control'
                                placeholder='Select Date'
                                name='date'
                                value={date}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='time' className='form-label fs-5'>Time (Hours : Minutes : AM/PM)</label>
                            <div className='d-flex'>
                                <select
                                    className='form-select me-2'
                                    name='hour'
                                    value={time.split(':')[0]}
                                    onChange={onInputChange}
                                >
                                    {[...Array(13).keys()].map(hour => (
                                        <option key={hour} value={hour}>
                                            {hour}
                                        </option>
                                    ))}
                                </select>
                                <span className='align-self-center me-1'>:</span>
                                <select
                                    className='form-select me-2'
                                    name='minute'
                                    value={time.split(':')[1].split(' ')[0]}
                                    onChange={onInputChange}
                                >
                                    {[...Array(60).keys()].map(minute => (
                                        <option key={minute} value={minute < 10 ? `0${minute}` : minute}>
                                            {minute < 10 ? `0${minute}` : minute}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    className='form-select'
                                    name='period'
                                    value={time.split(' ')[1]}
                                    onChange={onInputChange}
                                >
                                    <option value='AM'>AM</option>
                                    <option value='PM'>PM</option>
                                </select>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='day' className='form-label fs-5'>Day</label>
                            <select
                                className='form-control'
                                placeholder='Select day'
                                name='day'
                                value={day}
                                onChange={onInputChange}
                            >
                                <option value=''>Select a Day</option>
                                <option value='Sunday'>Sunday</option>
                                <option value='Monday'>Monday</option>
                                <option value='Tuesday'>Tuesday</option>
                                <option value='Wednesday'>Wednesday</option>
                                <option value='Thursday'>Thursday</option>
                                <option value='Friday'>Friday</option>
                                <option value='Saturday'>Saturday</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='venue' className='form-label fs-5'>Venue</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter venue'
                                name='venue'
                                value={venue}
                                onChange={onInputChange}
                            />
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>Submit</button>
                        <Link className='btn btn-outline-danger mx-2' to='/'>
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
