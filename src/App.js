import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home'
import { CallPepers } from './pages/CallPepers';
import Submission from './components/Submission';
import Registration from './components/Registration';


function App() {
  return (
    <div>
      <Router>
         <Routes>
           <Route path='/' Component={Home}/>
           <Route path='/call for papers' Component={CallPepers}/>
           <Route path='/submission' Component={Submission}/>
           <Route path='/register' Component={Registration}/>
           
         </Routes>
      </Router>
    </div>
   
  );
}

export default App;
