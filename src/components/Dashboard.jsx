import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import TimeCounter from './TimeCounter';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Badge from '@material-ui/core/Badge';
import { seatsLeft, user } from '../utils/constants';
import { convertDateIntoString, getTimeRange } from '../utils/methods';
import { classScheduleList } from '../utils/data';
import { ToastContainer, toast } from 'react-toastify';
import '../styles/dashboard.scss';
import 'react-toastify/dist/ReactToastify.css';


function Dashboard({ timeIsUp, setTimeIsUp }) {
  const checkBookings = classScheduleList?.filter(val => val.isBooked)?.length;
  const [classesBooked, setClassesBooked] = useState(0);
  
  localStorage.setItem('userFirstName', user.firstName);
  localStorage.setItem('userLastName', user.lastName);
  localStorage.setItem('userID', user.id);

  const sendClassObj = classObj => {
    classObj.isBooked = true;
    setClassesBooked(classesBooked+1);
  }

  timeIsUp && (checkBookings<3) && toast.error("Sorry, you can not book anymore. Time is up!");
  !timeIsUp && !(checkBookings<3) && toast.error("You have done the maximum bookings for this week.")

  return (
    <div className="page-content">
       <div className="cart-container">
        <NavLink to='/cart'>
          <Badge badgeContent={checkBookings} showZero color="primary">
            <AiOutlineShoppingCart />
          </Badge>
        </NavLink>
      </div>
      <ToastContainer position="top-center" />
      <div className="counter-container">
        <TimeCounter timeIsUp={timeIsUp} setTimeIsUp={setTimeIsUp} />
      </div>
      <h2 className="heading">Claim Your Free Trial Class</h2>
      <h4 className="sub-heading">Class Schedule <div>Free Seats Left: 
        <span>{seatsLeft}</span></div>
        </h4>
      <table className="class-schedule">
        <tbody>
          <tr>
            <th>Subject</th>
            <th>Date</th>
            <th>Time</th>
            <th>Availability</th>
          </tr>
          {classScheduleList.map(classObj => (
            <tr key={classObj.id}>
              <td>{classObj.subject}</td>
              <td>{convertDateIntoString(classObj.date)}</td>
              <td>{getTimeRange(classObj.startTime, classObj.endTime)}</td>
              <td>{classObj.seatsAvailable - (classObj.isBooked ? 1 : 0)} seats available</td>
              <td>
                <button className={classObj.seatsAvailable === 0 ? 'class-full-btn' : (classObj.isBooked ? 'booked-btn':'')} onClick={(classesBooked+1) <= 3 ? (() => sendClassObj(classObj)) : undefined} disabled = {(classObj.seatsAvailable === 0 ? (true) : (timeIsUp ? true : (checkBookings<3 ? false : true )))}>{classObj.seatsAvailable === 0 ? 'Full' : (classObj.isBooked ? 'Booked' : 'Book Now')}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;