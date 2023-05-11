import React,{ useState } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar"; 
import TextForms from "./components/TextForms";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert= (message, type)=>{
    setAlert ({ msg: message,
    type: type
    })
    setTimeout(() => {
     setAlert(null);
  }, 1500);
  }
  

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#100336';
    showAlert('Dark Mode is enabled','success');
  }
  else{   
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert('Light Mode is enabled','success');

  }
  }
  return (
    <>
      <Router>
      <Navbar title='WordsWorld' aboutTxt='About Us' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          			<Route exact path="/AboutUs" element={<AboutUs mode={mode} />} />
          			<Route exact path="/" element={<TextForms showAlert={showAlert}heading='Enter The Text To Analyze Below' mode={mode}/>} />
        		</Routes>
      </div>
          
    </Router>
    </>
  );
}

export default App;
