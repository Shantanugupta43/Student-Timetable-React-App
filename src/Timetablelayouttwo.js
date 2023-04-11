import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './TimetableLayout.css';

const localizer = momentLocalizer(moment);

const TimetableLayouttwo = () => {
  const [events] = useState([
    {
      id: 1,
      title: 'Fundamentals of Marketing Communications, (B101), 8:00-10-00 ',
      start: new Date(2023, 3, 26, 8, 0),
      end: new Date(2023, 3, 26, 10, 0),
    },
    {
      id: 2,
      title: 'Introduction to Digital Marketing, (B009), 8:00-10:30',
      start: new Date(2023, 3, 27, 8, 0),
      end: new Date(2023, 3, 27, 10, 30),
    },
    {
      id: 3,
      title: 'Principles of Marketing, (B103), 15-30-17:00',
      start: new Date(2023, 4, 2, 15, 30),
      end: new Date(2023, 4, 2, 17, 0),
    },

    {
      id: 4,
      title: 'Understanding Consumer Markets, (B000), 9-00-10:00',
      start: new Date(2023, 4, 5, 9, 0),
      end: new Date(2023, 4, 5, 10, 0),
    },

    {
      id: 5,
      title: 'Research Methods for Business, (B205), 8-00-12:00',
      start: new Date(2023, 4, 8, 8, 0),
      end: new Date(2023, 4, 8, 12, 0),
    },

    {
      id: 6,
      title: 'Business Start-Up, (B009), 13-00-16:00',
      start: new Date(2023, 4, 12, 13, 0),
      end: new Date(2023, 4, 12, 16, 0),
    },

    {
      id: 7,
      title: 'Communicating Through Design, (B008), 12-00-15:00',
      start: new Date(2023, 4, 24, 12, 0),
      end: new Date(2023, 4, 24, 15, 0),
    },

    {
      id: 8,
      title: 'Branding: Integrated Digital Campaigns , (B101), 11-30-15:00',
      start: new Date(2023, 4, 30, 11, 30),
      end: new Date(2023, 4, 30, 15, 0),
    },

  ]);

  


  return (
    <div>
      <h2>12345678 Student Timetable</h2>
      <div style={{ height: '500pt' }}>
        <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" />
      </div>
    </div>
  );
};

export default TimetableLayouttwo;