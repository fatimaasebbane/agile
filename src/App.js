import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home'
import { CallPepers } from './pages/CallPepers';


function App() {
  return (
    <div>
      <Router>
         <Routes>
           <Route path='/' Component={Home}/>
           <Route path='/call for papers' Component={CallPepers}/>
         </Routes>
      </Router>
    </div>
   
  );
}

export default App;
