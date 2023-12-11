import React from 'react';
import './DateTask.css';

const DateTask = ({date}) => {
  
  const newDate = new Date(date.seconds*1000)
  
  const month = newDate.toLocaleString('en-US', { month: 'long' });
  const day =  newDate.toLocaleString('en-US', { day: '2-digit' });
  const time = newDate.toLocaleTimeString('en-US');
  const year = newDate.getFullYear();

  return (
    <div className='task-date'>
      <div className='task-date__month'>{month}</div>
      <div className='task-date__year'>{year}</div>
      <div className='task-date__day'>{day}</div>
      <div className='task-date__year'>{time}</div>
    </div>
  );
};

export default DateTask;