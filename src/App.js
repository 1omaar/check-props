import React from 'react';
import ProfileCpt from './profile/ProfileCpt'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Image} from 'react-bootstrap';
const App= () => {
  const nameClick = (e) => {
    alert('Tebessi Omar');
  };
  return (
    
    <div style={{backgroundImage:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',height:'100vh'}}>
    <ProfileCpt fullName='Tebessi Omar' bio='Diplomée de une licence en génie mécanique' profession='Future Développeur JS' nameClick={nameClick}><Image src='/myPhoto.jpg' alt='omar' style={{height:'60vh'}} rounded/></ProfileCpt>
    </div>
  );
  }

export default App;
