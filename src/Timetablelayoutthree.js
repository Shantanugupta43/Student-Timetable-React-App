import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './TimetableLayout.css';

const localizer = momentLocalizer(moment);

const TimetableLayoutthree = () => {
  const [events] = useState([
    {
      id: 1,
      title: 'Business Economics, (B001), 9:30-11-00 ',
      start: new Date(2023, 4, 23, 9, 30),
      end: new Date(2023, 4, 23, 11, 0),
    },
    {
      id: 2,
      title: 'Introduction to Accounting and Statistics, (B102), 12:00-13:00',
      start: new Date(2023, 4, 29, 12, 0),
      end: new Date(2023, 4, 29, 13, 0),
    },
    {
      id: 3,
      title: 'Operations Management, (B006), 15-30-16:30',
      start: new Date(2023, 4, 29, 15, 30),
      end: new Date(2023, 4, 29, 16, 30),
    },

    {
      id: 4,
      title: 'People and Organisations, (B104), 9-00-11:00',
      start: new Date(2023, 4, 30, 9, 0),
      end: new Date(2023, 4, 30, 11, 0),
    },

    {
      id: 5,
      title: 'Information and the Organisation, (B201), 8-00-11:00',
      start: new Date(2023, 5, 2, 8, 0),
      end: new Date(2023, 5, 2, 11, 0),
    },

    {
      id: 6,
      title: 'Marketing for Business, (B004), 12-00-13:00',
      start: new Date(2023, 5, 5, 12, 0),
      end: new Date(2023, 5, 5, 13, 0),
    },

    {
      id: 7,
      title: 'International Business, (B001), 8-00-12:00',
      start: new Date(2023, 5, 16, 8, 0),
      end: new Date(2023, 5, 16, 12, 0),
    },

    {
      id: 8,
      title: 'International Economics , (B006), 11-30-15:00',
      start: new Date(2023, 5, 28, 11, 30),
      end: new Date(2023, 5, 28, 15, 0),
    },

    {
      id: 9,
      title: 'International Economics , (B006), 11-30-15:00',
      start: new Date(2023, 6, 5, 11, 30),
      end: new Date(2023, 6, 5, 15, 0),
    },

    {
      id: 10,
      title: 'Marketing for Business, (B004), 12-00-13:00',
      start: new Date(2023, 6, 7, 12, 0),
      end: new Date(2023, 6, 7, 13, 0),
    },


    {
      id: 11,
      title: 'People and Organisations, (B104), 9-00-11:00',
      start: new Date(2023, 6, 19, 9, 0),
      end: new Date(2023, 6, 19, 11, 0),
    },


    {
      id: 12,
      title: 'Operations Management, (B006), 15-30-16:30',
      start: new Date(2023, 6, 24, 15, 30),
      end: new Date(2023, 6, 24, 16, 30),
    },

    

  ]);

  


  return (
    <div>
      <h2>34256189 Student Timetable</h2>
      <div style={{ height: '500pt' }}>
        <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" />
      </div>
    </div>
  );
};

export default TimetableLayoutthree;