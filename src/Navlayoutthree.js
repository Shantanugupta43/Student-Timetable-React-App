import './App.css';
import { NavLink } from 'react-router-dom';

function Navthree() {
  return (

    <header className="navcontainer">
    <nav>
        <ul>
        <NavLink exact to="/timetablebs"><li>Timetable</li></NavLink>
        <NavLink exact to="/timetablebs/Depthree"><li>Departmental Events</li></NavLink>
        </ul>
    </nav>

    </header>

    
  );
}

export default Navthree;