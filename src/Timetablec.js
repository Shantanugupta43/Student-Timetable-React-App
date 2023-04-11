import React from 'react';
import './App.css';
import DeadlineThreeMod from './DeadlineThreeMod';
import LogoutComponent from './LogoutComponent';
import Navthree from './Navlayoutthree';
import TimetableLayoutthree from './Timetablelayoutthree';



function Timetablebs() {


  return (
    <main className="dash">
      <LogoutComponent/>
      <Navthree/>
      <h1>Welcome to the Timetable</h1>
      <TimetableLayoutthree/>
      <DeadlineThreeMod/>
    </main>
  );
}

export default Timetablebs;