import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './logininput';
import Depone from './Depone';
import Deptwo from './Deptwo';
import Timetablecs from './Timetable';
import Timetablemr from './Timetableb';
import Timetablebs from './Timetablec';
import Depthree from './Depthree';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route exact path="/timetablecs/:username" element={<Timetablecs/>} />
          <Route exact path="/timetablecs" element={<Timetablecs />} />
          <Route exact path="/timetablecs/Depone" element={<Depone />} />
          
          <Route exact path="/timetablemr/:username" element={<Timetablemr />} />
          <Route exact path="/timetablemr" element={<Timetablemr />} />
          <Route exact path="/timetablemr/Deptwo" element={<Deptwo />} />

          <Route exact path="/timetablebs/:username" element={<Timetablebs />} />
          <Route exact path="/timetablebs" element={<Timetablebs />} />
          <Route exact path="/timetablebs/Depthree" element={<Depthree />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

