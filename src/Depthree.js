import './App.css';
import './Deplayout.css';
import LogoutComponent from './LogoutComponent';
import Navthree from './Navlayoutthree';

function Depthree() {
  return (
    <main className="dash">
    <LogoutComponent/>
    <Navthree/>
    <h1>Departmental Events-</h1>
    <section className="departmentcontainer">
    <h2>Business Froggy</h2>
    <p>Date/Time: 20th June 2023, 2pm </p>
    <p>Description: Candidates are challenged to crack a case study and develop solutions to real-world international business problems. The event is scheduled at room B109 in the main Business building</p>
    </section>
    <section className="departmentcontainer">
    <h2>International Business Forums</h2>
    <p>Date/Time: 1st July 2023, 10am </p>
    <p>Description: The department is organising international business forums that focus on current issues and trends in the field. These forums could bring together scholars, practitioners, and policymakers to discuss and debate topics such as trade policy, globalization, and emerging markets. The event is going to take place in Main Business room no.9 at first floor. </p>
    </section>
    <section className="departmentcontainer">
    <h2>Cultural Event</h2>
    <p>Date/Time: 5th August 2023, 5pm </p>
    <p>Description: The department is organising cultural events that celebrate the diversity of international business. These events could feature food, music, dance, and other cultural traditions from different regions of the world, and provide opportunities for students and faculty to learn about different cultures and customs. The event is scheduled in the Main Hub. Dont forget to sign up at Edge Hill Website to enter the event. </p>
    </section>
    </main>

    
  );
}

export default Depthree;