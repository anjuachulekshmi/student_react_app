import logo from './logo.svg';
import './App.css';
import Addstudent from './components/Addstudent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Searchstudent from './components/Searchstudent';
import Header from './components/Header';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';


function App() {
  return (
   <>
 
   <BrowserRouter>
   <Routes>
     <Route path='/' exact element={<Addstudent />} />

     
     <Route path='/search' exact element={<Searchstudent/>} />

    
     </Routes>
     </BrowserRouter>
   
   </>
  );
}

export default App;
