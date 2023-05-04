import './App.css';
import Nav from './Navlayout';
import './Deplayout.css';
import LogoutComponent from './LogoutComponent';
import React, { useEffect } from "react";

function Depone() {

  useEffect(() => {
    document.title = "Departmental Events";  
  }, []);

  return (
    <main className="dash">
    <LogoutComponent/>
    <Nav/>
    <h1>Departmental Events-</h1>
    <section className="departmentcontainer">
    <h2>Tech Hub Event</h2>
    <p>Date/Time: 23rd July 2023, 9am </p>
    <p>Description: Showcasing all the tech research projects from the department of Computer Science at ground floor. </p>
    </section>
    <section className="departmentcontainer">
    <h2>Coding Wars</h2>
    <p>Date/Time: 31st July 2023, 4pm </p>
    <p>Description: Calling all the candidates within the department on floor (THGO1) where all the candidates would have to code a piece of software.  </p>
    </section>
    <section className="departmentcontainer">
    <h2>Guest Lecture by Industry Professionals</h2>
    <p>Date/Time: 12th August 2023, 1pm </p>
    <p>Description: Name A, Name B and Name C are arriving at Edge Hill University to share their experience working in tech. The event would take place in the Conference room hall of tech hub. All students within the department are invited.  </p>
    </section>
    </main>

    
  );
}

export default Depone;