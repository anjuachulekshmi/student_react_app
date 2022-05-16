import logo from './logo.svg';
import './App.css';
import Addstudent from './components/Addstudent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Searchstudent from './components/Searchstudent';

function App() {
  return (
   <>
   <Addstudent/>
   <Searchstudent/>
   </>
  );
}

export default App;
