import './App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutComponent() {

    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/');
    };



  return (
<p>You are now logged in. <button onClick={handleClick}>Logout</button></p>
 
  );
}

export default LogoutComponent;
