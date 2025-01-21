import React, { useEffect, useState } from 'react';
import './CalenderFinal.css';

function Calender() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [startDay, setStartDay] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const days = [];

    while (firstDayOfMonth.getMonth() === month) {
      days.push(new Date(firstDayOfMonth));
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }
    setDaysInMonth(days);
    setStartDay(new Date(year, month, 1).getDay());
  }, [currentDate]);

  const dayNames = ["S", "M", "T", "W", "T", "F", "S"];
  
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const isToday = (day) => {
    const today = new Date();
    return (
      day.getDate() === today.getDate() &&
      day.getMonth() === today.getMonth() &&
      day.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (day) => {
    return selectedDate && day.toDateString() === selectedDate.toDateString();
  };
  const handleDateclick =(date) => {
    setSelectedDate(date);
  }
  return (
    <div className='calender'>
      <div className="header">
        <button onClick={prevMonth}>&lt;</button>
        <span>
          {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
        </span>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="daynames">
        {dayNames.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="days">
        {Array.from({ length: startDay }).map((_, index) => (
          <div className="emptyday" key={index}></div>
        ))}
        {daysInMonth.map((day) => (
          <div
            key={day}
            className={`day ${isToday(day) ? "today" : ""} ${isSelected(day) ? "selected" : ""}`}
            onClick={() => setSelectedDate(day)}
          >
            {day.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calender;
