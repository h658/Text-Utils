import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/alert';

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
       setAlert(null)
    },2000)
  }

const removeBodyClasses=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-primary')
}

 const enableMode = (cls) => {
  removeBodyClasses();
  console.log(cls)
document.body.classList.add('bg-'+ cls)
    if (mode === 'light') {
      setMode ('dark');
      document.body.style.backgroundColor = 'rgb(0 18 72 / 76%)',
 showAlert("Dark mode has been enabled","success");
 document.title= 'Text Utils - Dark Mode'
    } 
    else {
      setMode ('light');
      document.body.style.backgroundColor = 'white',
     showAlert("Light mode has been enabled","success");
     document.title= 'Text Utils'
    }
  }
  return (
    <>
    <Router>
      <Navbar title="Text Utils" mode={mode} toggleMode={enableMode} />
      <Alert alert= {alert}/>

      <div className="container my-3">
      <Routes>

        <Route exact path= "/about" element={<About/>}/>
        <Route exact path= "/" element=  {<TextForm heading="Enter the word to analyze below" mode={mode} showAlert={showAlert}/>} />
        
      </Routes>
     </div>
     </Router>
    </>

  )
}

export default App
