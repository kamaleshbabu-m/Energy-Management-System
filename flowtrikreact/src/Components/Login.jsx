import React, {useState} from "react";
import Axios from 'axios';
import { Navigate } from "react-router-dom";
import DashBoard from "./DashBoard";
import Home from "./Home";
 
import { Container,
        Box,
             Paper,
             Button,
             TextField}
              from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Flex, Icon, Text } from "@chakra-ui/react";


const Login = (props) =>{
   
	 const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [auth, setAuth] = useState('false');



    const handleSubmit = (event) => {
        event.preventDefault();
         
        Axios.get(`http://localhost:3002/api/login/${email}/${pass}`).then((response) =>{
              if (!response.data || response.data.length == 0) {
                   
                    console.log("no");
                 
               }
               else{
                   setAuth(true);
                   console.log("yes" + auth);
                  
                  
               }

       } 
       )
        .catch(err => {                                                                          //to handle the error
            console.log('Oh noooo!!');
            console.log(err);
          });
 
              

    }

   

	return(
  <div>
	{auth === true ? ( <Navigate to="/home" replace={true} /> ):<Paper>
  
  <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

        <h1>Login</h1>
        <h1><label display='flex' htmlFor="email">E-mail:</label>
         
        <TextField value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="" id="email" name="email" /> </h1>
       
        <h1><label  htmlFor="password">Password:</label>
        <TextField value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="" id="password" name="password" /> </h1>
        <br />
        <Button variant="contained" color="success" type="submit">Log In</Button>
    </Box>
      
       <Button variant="contained" onClick={() => props.onFormToggle('register')} >Don't Have An Account</Button>

       </Paper>}

       </div>
		  );
	
}


export default Login;