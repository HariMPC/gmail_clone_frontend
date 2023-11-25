import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/layout/Main/main';
import HomePage from './components/layout/HomePage/HomePage';
import Register from './components/layout/Registerpage/Register';
import Login from './components/layout/Loginpage/Login';
import Resetpass from './components/layout/ResetPass/Resetpass';
import Newpass from './components/layout/NewPass/Newpass';

function App() {

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Resetpass" element={<Resetpass/>}/>
      <Route path="/Newpass" element={<Newpass/>}/>
      <Route path="/Inbox" element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
