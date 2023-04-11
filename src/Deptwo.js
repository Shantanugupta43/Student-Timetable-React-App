import './App.css';
import './Deplayout.css';
import Navtwo from './Navlayouttwo';
import LogoutComponent from './LogoutComponent';

function Deptwo() {
  return (
    <main className="dash">
    <LogoutComponent/>
    <Navtwo/>
    <h1>Departmental Events-</h1>
    <section className="departmentcontainer">
    <h2>Promote! Promote! Promote!</h2>
    <p>Date/Time: 30th July 2023, 11am </p>
    <p>Description: Participants have to create promotional materials that are eye-catching, informative, and appealing to the target audience on a given case. This may include posters, flyers, social media graphics, email campaigns, and website content. The activity is scheduled in room B001 and all candidates from Marketing Department are invited. </p>
    </section>
    <section className="departmentcontainer">
    <h2>Guest Lecture</h2>
    <p>Date/Time: 31st July 2023, 12:00pm </p>
    <p>Description: Name A, Name B and Name C are arriving at Edge Hill University to share their experience working in Marketing Industry. The event would take place in Main Business room at first floor. </p>
    </section>
    <section className="departmentcontainer">
    <h2>Networking Event Saturday</h2>
    <p>Date/Time: 19th August 2023, 10am </p>
    <p>Description: The department will organise networking events for students to connect with alumni and professionals in the marketing industry. Join the industry experts in room B110 at ground floor. </p>
    </section>
    </main>

    
  );
}

export default Deptwo;