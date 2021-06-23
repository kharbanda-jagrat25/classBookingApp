import React, { useState, useEffect } from 'react';
import { classScheduleList } from '../utils/data';
import { convertDateIntoString, getTimeRange } from '../utils/methods';
import { NavLink } from 'react-router-dom';

function Cart() {
  const [data, setData] = useState(classScheduleList);
  const [cancelledClass, setCancelledClass] = useState({});
  
  const handleClick = classItm => {
    classItm.isBooked = false;
    setData(classScheduleList);
    setCancelledClass(classItm);
  }

  useEffect(() => {
    handleClick(cancelledClass);
  });

  return (
    <div className="page-content">
      <h2 className="heading">Cart</h2>
      <table className="class-schedule">
        <tbody>
          <tr>
            <th>Subject</th>
            <th>Date</th>
            <th>Time</th>
            <th>Availability</th>
          </tr>
          {data.filter(classObj => classObj.isBooked).map(classItm =>
            <tr key={classItm.id}>
              <td>{classItm.subject}</td>
              <td>{convertDateIntoString(classItm.date)}</td>
              <td>{getTimeRange(classItm.startTime, classItm.endTime)}</td>
              <td>{classItm.seatsAvailable - (classItm.isBooked ? 1 : 0)}</td>
              <td>
                <button onClick={() => handleClick(classItm)}>Cancel</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
        <NavLink to='/'>Back to Dashboard</NavLink>
      </div>
    </div>
  );
}

export default Cart;