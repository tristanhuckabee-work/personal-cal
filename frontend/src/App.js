// import logo from './logo.svg';
import './App.css';
import Calendar from './components/Calendar';

const DAYS_IN_MONTH = {
  1 : 31, 3 : 31, 4 : 30, 5 : 31, 6 : 30,
  7 : 31, 8 : 31, 9 : 30, 10: 31, 11: 30, 12: 31
}

function App() {
  let td = new Date();
  let today = {
    day: td.getDate(),
    month: td.getMonth() + 1,
    year: td.getFullYear(),
  }

  if (today.year % 4 === 0 && today.year % 100 === 0 && today.year % 400 === 0 ) today.ly = true;
  if (today.month === 2) {
    if (today.ly) today.d_in_m = 29;
    else today.d_in_m = 28;
  } else {
    today.d_in_m = DAYS_IN_MONTH[today.month];
  }

  return (
    <Calendar today={today} />
  );
}

export default App;
