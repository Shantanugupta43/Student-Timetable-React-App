import React from 'react';
import './App.css';
import DeadlineOneMod from './DeadlineOneMod';
import LogoutComponent from './LogoutComponent';
import Nav from './Navlayout';
import TimetableLayoutone from './Timetablelayoutone';


function Timetablecs() {


  return (
    <main className="dash">
      <LogoutComponent/>
      <Nav/>
      <h1>Welcome to the Timetable</h1>
      <TimetableLayoutone/>
      <DeadlineOneMod/>
    </main>
  );
}

export default Timetablecs;
