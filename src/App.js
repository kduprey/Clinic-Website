import './App.css';
import Header from './Header';
import {useState} from 'react'
import Home from './Home';
import About from './About';
import Contact from './Contact'
import Appointment from './Appointment';
import {Routes, Route} from 'react-router-dom'



function App() {
const [tab, setTab] = useState("Home")

if(tab === "Home"){return(
  <div>
      <Header setTab = {setTab}/>
      <Home/>
  </div>
)
}
if(tab === "About"){
  return(
    <div>
      <Header setTab = {setTab} />
      <About/>
    </div>
  )
}
if(tab === "Contact"){
  return(
    <div>
      <Header setTab = {setTab} />
      <Contact/>
    </div>
  )
}
if(tab === "Appointment"){
  return(
    <div>
      <Header setTab = {setTab}/>
      <Appointment/>
    </div>
  )
}
}

export default App;
