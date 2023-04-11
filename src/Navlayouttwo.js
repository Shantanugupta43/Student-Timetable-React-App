import './App.css';
import { NavLink } from 'react-router-dom';

function Navtwo() {
  return (

    <header>
    <nav>
        <ul>
        <NavLink exact to="/timetablemr"><li>Timetable</li></NavLink>
        <NavLink exact to="/timetablemr/Deptwo"><li>Departmental Events</li></NavLink>
        </ul>
    </nav>

    </header>

    
  );
}

export default Navtwo;