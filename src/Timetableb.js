import React, { useEffect } from "react";
import './App.css';
import DeadlineTwoMod from './DeadlineTwoMod';
import LogoutComponent from './LogoutComponent';
import Navtwo from './Navlayouttwo';

import TimetableLayouttwo from './Timetablelayouttwo';


function Timetablemr() {

  useEffect(() => {
    document.title = "Timetable";  
  }, []);


  return (
    <main className="dash">
      <LogoutComponent/>
      <Navtwo/>
      <h1>Welcome to the Timetable</h1>
      <TimetableLayouttwo/>
      <DeadlineTwoMod/>
    </main>
  );
}

export default Timetablemr;