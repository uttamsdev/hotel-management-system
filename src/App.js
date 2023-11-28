import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Products from './Components/Pages/Products/Products';
import Login from './Components/Pages/LoginAccounts/Login';
import Register from './Components/Pages/LoginAccounts/Register';
import NotFound from './Components/Pages/Shared/NotFound';
import RequireAuth from './Components/Pages/RequireAuth/RequireAuth';
import ForgotPassword from './Components/Pages/LoginAccounts/ForgotPassword';
import Navbar from './Components/Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<RequireAuth><Products></Products></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path='/reset-password' element={<ForgotPassword></ForgotPassword>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
