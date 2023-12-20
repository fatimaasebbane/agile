import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home'


function App() {
  return (
    <div>
      <Router>
         <Routes>
           <Route path='/' Component={Home}/>
         </Routes>
      </Router>
    </div>
   
  );
}

export default App;
