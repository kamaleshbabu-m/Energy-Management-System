import React, {useState} from "react";
import validate from "./ValidateInfo";
import Axios from 'axios';
import "./Register.css";
import { Container,
             Paper,
             Button,
             TextField}
              from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useForm from "./useForm";

const Register = (props) =>{

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [post, setPost] = useState('');


     const handleSubmit = (event) =>{
     event.preventDefault();
    
      
     alert("registered");
      
     

  }
  

    return(
    <div>
     <form onSubmit ={()=>handleSubmit()}>
        <h1>Register</h1>


        <h1><label htmlFor="name">Name:</label> 
        <TextField type="text" placeholder="" id="name" name="name" required/> </h1>


        <h1><label htmlFor="gender">Gender:</label> 
        <TextField type="text" placeholder="" id="gender" name="gender" required/> </h1>



        <h1><label htmlFor="email">E-mail:</label> 
        <TextField type="text" placeholder="" id="email" name="email" required/> </h1>

        <h1><label htmlFor="phone">Phone:</label> 
        <TextField type="phonenumber" pattern="^[0-9]" placeholder="" id="phone" name="phone" required/> </h1>

        <h1><label htmlFor="password">Password:</label> 
        <TextField type="password" placeholder="" id="password" name="password" required/> </h1>

        


        <Button variant="contained" color="success" type="submit">Register</Button>
      </form>
       
      <Button variant="contained" onClick={() => props.onFormToggle('login')}>Already Have An Account</Button>

       </div>
          );
    
}


export default Register;