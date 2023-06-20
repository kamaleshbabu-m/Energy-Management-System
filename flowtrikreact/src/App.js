import "./App.css";
import {useState} from "react"; 
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route ,
  useNavigate
} from "react-router-dom";  
 
import Login from "./Components/Login";
import Register from "./Components/Register";
import DashBoard from "./Components/DashBoard";
import Home from "./Components/Home";
import Bouton from "./Components/Bouton";
//import DashBoard from "./Components/copydashboard";
  
function App() {
  const navigate = useNavigate();
 const [currentForm, setcurrentForm]= useState('login');
 const [auth, setAuth] = useState('0');

 const changeForm = (formName) =>{

 	setcurrentForm(formName);
 }
 
  return (

   <div align='center'>
  	
      <Routes>
        <Route path="/" element={currentForm === 'login'? <Login onFormToggle={changeForm} /> : currentForm === 'register'? <Register onFormToggle={changeForm}/> : <DashBoard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login navigate={navigate} />} />
        <Route path="/dash" element={<Login navigate={DashBoard} />} />
        
	   <Route path="/Bouton" element={<Bouton />} />
       <Route path="/home" element={<Home />} />
       
      </Routes>
    
    </div>
  );
}
  
export default App;