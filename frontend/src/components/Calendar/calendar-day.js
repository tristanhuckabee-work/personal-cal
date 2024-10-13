import React, {useState} from 'react';
import './calendar.css'

function CalendarDay({day, date, month, cls, noti}) {

  return (
    <div
      key={`${date}${month}`}
      className={`day ${cls} ${day === 0 || day === 6 ? 'weekend' : ''}`}
    >
      <p className={ `${cls} ${day === 0 || day === 6 ? 'weekend' : ''}`}>{`${date}`}</p>
      { noti && <div className='cd-noti'>!</div> }
    </div>
  );
}

export default CalendarDay;