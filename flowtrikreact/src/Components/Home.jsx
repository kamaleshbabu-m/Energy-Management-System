import React, {useState,useEffect} from "react";
import Session from './chargesession';
import Login from './Login';
import About from './About.jsx';
import Users from './Bouton';
import DashBoard from './DashBoard';
import {AppBar,Tabs,Tab ,Button} from '@mui/material';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { redirect , Navigate} from "react-router-dom";



const Home = (props) =>{






 
console.log(props);

  const [page, setPage] = useState('session');
   const [logout, setLogout] = useState('false');

  const renderSwitch = () =>{
    
  switch(page) {
      case 'home':
      return <p>Home</p> ;
      case 'session':
      return <Session />;
      case 'dashboard':
      return <DashBoard />;
      case 'about':
      return <About/>;
      case 'users':
      return <Users />;
      default:
      return <p>default</p>;
       }
}

  

  useEffect(()=>{
},[]);
 

  return(
  <>
  {logout === 'true'? 
      <Navigate to="/" replace={true} />  :
      <div>
      <h3 align='right'>Hi {props.username}!!!</h3>
         <AppBar  color="primary" style={{ position: 'fixed' }}>
         <Tabs fullWidth={true}
          centered >
          <Tab label="Dashboard" onClick={() => {setPage('dashboard')}} value={2} index={2}/>
          <Tab label="ChargeSession" onClick={() => {setPage('session')}} value={0} index={0}/>
          <Tab label="UserDetails" onClick={() => {setPage('users')}} value={1} index={1}/>
          <Tab label="About" onClick={() => {setPage('about')}} value={3} index={3}/>
          </Tabs>
          </AppBar>
          <Button variant="contained" color="error" onClick={()=>{setLogout('true')}}>Log Out</Button>
          
           
          {renderSwitch () }
        
      </div>}

  </>
      );
  
}


export default Home;