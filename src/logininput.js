import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { useNavigate } from 'react-router-dom';
import "./App.css"
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login";
    async function fetchData() {
      const response = await fetch('/studentlist.csv');
      console.log(response);
      const text = await response.text();
      

      Papa.parse(text, {
        header: true, // do not expect a header row
        delimiter: ',', // specify the delimiter used in the CSV file
        skipEmptyLines: true, // skip empty lines
        encoding: 'UTF-8',
        complete: function (results) {
          if (results.errors.length > 0) {
            console.error('CSV parsing error:', results.errors);
            alert('Error parsing CSV file');
          } else {
            setUserData(results.data);
          }
        },
        error: function (err, file, inputElem, reason) {
          console.error('CSV loading error:', err);
          alert('Error loading CSV file');
        },
      });
    }
    fetchData();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
  
    const firstData = userData[0];
    const match = firstData.Username === username && firstData.Password === password;
    const secondData = userData[1];
    const matchtwo = secondData.Username === username && secondData.Password === password;
    const thirdData = userData[2];
    const matchthree = thirdData.Username === username && thirdData.Password === password;
  
    if (match) {
    navigate(`/timetablecs/${firstData.Username}`);
    } else if (matchtwo) {
      navigate(`/timetablemr/${secondData.Username}`);
    } else if(matchthree){
      navigate(`/timetablebs/${thirdData.Username}`);
    } else {
      alert('Invalid username or password');
    }

  };
  
  

  return (
    <main className="loginlayout">
    <h1>Timetable Login</h1>
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className = "data"
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Login</button>
    </form>
    </main>
  );
}

export default LoginForm;
