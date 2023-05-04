import './App.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (

    <header className="navcontainer">
    <nav>
        <ul>
        <NavLink exact to="/timetablecs"><li>Timetable</li></NavLink>
        <NavLink exact to="/timetablecs/Depone"><li>Departmental Events</li></NavLink>
        </ul>
    </nav>

    </header>

    
  );
}

export default Nav;