import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './TimetableLayout.css';

const localizer = momentLocalizer(moment);

const TimetableLayoutone = () => {
  const [events] = useState([
    {
      id: 1,
      title: 'Fundamentals of Web Coding, (THF01), 8:30-11-00 ',
      start: new Date(2023, 4, 1, 8, 30),
      end: new Date(2023, 4, 1, 11, 0),
    },
    {
      id: 2,
      title: 'Server and Client Scripting, (THG02), 11:00-13:00',
      start: new Date(2023, 4, 18, 11, 0),
      end: new Date(2023, 4, 18, 13, 0),
    },
    {
      id: 3,
      title: 'Fundamentals of User Experience Design, (THF02), 15-30-18:00',
      start: new Date(2023, 4, 22, 15, 30),
      end: new Date(2023, 4, 22, 18, 0),
    },

    {
      id: 4,
      title: 'Employability, (THF06), 9-00-11:00',
      start: new Date(2023, 4, 22, 9, 0),
      end: new Date(2023, 4, 22, 11, 0),
    },

    {
      id: 5,
      title: 'Web Application Development, (THG01), 8-00-12:00',
      start: new Date(2023, 4, 24, 8, 0),
      end: new Date(2023, 4, 24, 12, 0),
    },

    {
      id: 6,
      title: 'Data Driven Design, (THF04), 12-00-13:00',
      start: new Date(2023, 4, 29, 12, 0),
      end: new Date(2023, 4, 29, 13, 0),
    },

    {
      id: 7,
      title: 'Foundation of Computer Science, (THG01), 8-00-12:00',
      start: new Date(2023, 5, 5, 8, 0),
      end: new Date(2023, 5, 5, 12, 0),
    },

    {
      id: 8,
      title: 'Digital World: Information Systems and Design , (THF06), 11-30-15:00',
      start: new Date(2023, 5, 8, 11, 30),
      end: new Date(2023, 5, 8, 15, 0),
    },

    {
      id: 9,
      title: 'Digital World: Information Systems and Design , (THF06), 11-30-15:00',
      start: new Date(2023, 5, 15, 11, 30),
      end: new Date(2023, 5, 15, 15, 0),
    },

    {
      id: 10,
      title: 'Foundation of Computer Science, (THG01), 8-00-12:00',
      start: new Date(2023, 5, 20, 8, 0),
      end: new Date(2023, 5, 20, 12, 0),
    },

    {
      id: 11,
      title: 'Web Application Development, (THG01), 8-00-12:00',
      start: new Date(2023, 6, 10, 8, 0),
      end: new Date(2023, 6, 10, 12, 0),
    },

    {
      id: 12,
      title: 'Fundamentals of User Experience Design, (THF02), 15-30-18:00',
      start: new Date(2023, 6, 13, 15, 30),
      end: new Date(2023, 6, 13, 18, 0),
    },

  ]);

  


  return (
    <div>
      <h2>24661562 Student Timetable</h2>
      <div style={{ height: '500pt' }}>
        <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" />
      </div>
    </div>
  );
};

export default TimetableLayoutone;


