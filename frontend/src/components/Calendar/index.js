import React, { useState, useEffect } from 'react';
import CalendarDay from './calendar-day';

import './calendar.css'

const MONTHS = [
  '', 'January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'
]
const D_IN_M = {
  1: 31, 3: 31, 4: 30, 5: 31, 6: 30,
  7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
}
const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

function Calendar({ today }) {
  const [month, setMonth] = useState(today.month);
  const [day, setDay] = useState(today.day);
  const [year, setYear] = useState(today.year);
  const [dinm, setDinm] = useState(today.d_in_m);

  useEffect(() => {
    if (today.month != month || today.year != year) {
      if (month > 12) {
        setMonth(1);
        setYear(year + 1);
      } else if (month < 1) {
        setMonth(12)
        setYear(year - 1);
      }
      setDay(32);

      let ly = false;
      if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) ly = true;
      if (month === 2) {
        if (ly) setDinm(29);
        else setDinm(28);
      } else {
        setDinm(D_IN_M[month]);
      }
    } else {
      setMonth(today.month)
      setYear(today.year)
      setDay(today.day);

      let ly = false;
      if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) ly = true;
      if (month === 2) {
        if (ly) setDinm(29);
        else setDinm(28);
      } else {
        setDinm(D_IN_M[month]);
      }
    }
  }, [month])

  const labels = () => DAYS.map(day => {
    return (<div
      key={`${day}-label`}
      className={`label ${day}`}
    >
      <p>{`${day}`}</p>
    </div>)
  });

  const days = () => {
    console.log(today);
    let first = new Date(`${MONTHS[month]} 1, ${year}`).getDay();
    let res = [];

    for (let d = 0; d < first; d++) {
      res.push(<CalendarDay day={8} date={''} month={month - 1} cls="prev-mo" />)
    }

    for (let d = 1; d <= dinm; d++) {
      if (first === 7) first = 0;

      let cls = d === day ? 'today' : d < day ? 'prev' : 'next';
      res.push(<CalendarDay day={first} date={d} month={month} cls={cls} noti={true} />)

      first++;
    }

    return res;
  }

  return (
    <div id='calendar'>
      <div id="c-change-month">
        <div id='pmo'
          onClick={() => {
            setMonth(month - 1);
          }}
        >&lsaquo;</div>
        <h1>{MONTHS[month]}</h1>
        <div id='nmo'
          onClick={() => {
            setMonth(month + 1);
          }}
        >&rsaquo;</div>
      </div>
      <div id='day-container'>
        {labels()}
        {days()}
      </div>
      <h2>{year}</h2>
    </div>
  );
}

export default Calendar;