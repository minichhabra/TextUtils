
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)
  const showAlert=(message,type)=>{
   setalert({
       msg:message,
       type:type
   })
   setTimeout(() => {
     setalert(null);
   }, 3000);
  }
  const toggleMode=()=>{
    if(mode === 'dark')
    {
    setmode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
    }
    else
    {
    setmode('dark');
    document.body.style.backgroundColor='#084298';
    showAlert("Dark mode has been enabled","success");
    }
  }
  return (
    
    <>
    <Router>
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <Switch>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
          </Route>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          
        </Switch>
   
   
   </div>
   </Router>
    </>
  );
}

export default App;
