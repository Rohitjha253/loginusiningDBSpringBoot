import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import './App.css';
import Register from './component/Register';
import Home from './component/Home';
import Login from './component/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element= { <Home/>} />
      <Route path="/register" element= { <Register/>} />
      <Route path="/" element= { <Login/>} />
    </Routes>
</BrowserRouter>
  );
}

export default App;
