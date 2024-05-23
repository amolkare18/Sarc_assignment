
//import logo from './logo.svg';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
//import Contact from './screens/Contact';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Background from "./components/Background";
//import nav from"./nav.css";


function App() {
  return (
    <>
    <div classNameName='animated-background'>
    <Router>
    <div classNameName="App">
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
     </Routes>
    </div>
    </Router>
    </div>
    <Background/>
    

</>
  )
}

export default App;

