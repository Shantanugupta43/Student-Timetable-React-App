import './App.css';
import React, { useEffect } from "react";
import DeadlineOneMod from './DeadlineOneMod';
import LogoutComponent from './LogoutComponent';
import Nav from './Navlayout';
import TimetableLayoutone from './Timetablelayoutone';


function Timetablecs() {

  useEffect(() => {
    document.title = "Timetable";  
  }, []);


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
