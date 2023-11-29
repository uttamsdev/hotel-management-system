import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Products from './Components/Pages/Products/Products';
import Login from './Components/Pages/LoginAccounts/Login';
import Register from './Components/Pages/LoginAccounts/Register';
import NotFound from './Components/Pages/Shared/NotFound';
import RequireAuth from './Components/Pages/RequireAuth/RequireAuth';
import ForgotPassword from './Components/Pages/LoginAccounts/ForgotPassword';
import Navbar from './Components/Pages/Shared/Navbar';
import Contact from './Components/Pages/Services/Contact/Contact';
import Hall from './Components/Pages/Services/Hall/Hall';
import Food from './Components/Pages/Services/Food/Food';
import AvailableRooms from './Components/Pages/Services/Rooms/AvailableRooms';
import BookRoomPage from './Components/Pages/Services/Rooms/BookRoomPage';
import AdminLayout from './Components/Pages/Roles/AdminRole/Layout/AdminLayout';
import AdminDashboard from './Components/Pages/Roles/AdminRole/Pages/AdminDashboard';
import ViewOrders from './Components/Pages/Roles/AdminRole/Pages/ViewOrders';
import AddRoom from './Components/Pages/Roles/AdminRole/Pages/AddRoom';
import AllRooms from './Components/Pages/Roles/AdminRole/Pages/AllRooms';
import AddTask from './Components/Pages/Roles/AdminRole/Pages/AddTask';
import UserLayout from './Components/Pages/Roles/UserRole/Layout/UserLayout';
import UserDashboard from './Components/Pages/Roles/UserRole/Pages/UserDashboard';
import MyOrders from './Components/Pages/Roles/UserRole/Pages/MyOrders';
import StaffLayout from './Components/Pages/Roles/StaffRole/Layout/StaffLayout';
import StaffDashboard from './Components/Pages/Roles/StaffRole/Pages/StaffDashboard';
import ViewTask from './Components/Pages/Roles/StaffRole/Pages/ViewTask';
import ManageUsers from './Components/Pages/Roles/AdminRole/Pages/ManageUsers';
import CreateFood from './Components/Pages/Roles/AdminRole/Pages/CreateFood';
import AllFoods from './Components/Pages/Roles/AdminRole/Pages/AllFoods';


function App() {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith('/admin') ||
                    location.pathname.startsWith('/user') ||
                    location.pathname.startsWith('/staff');

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<RequireAuth><Products></Products></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path='/reset-password' element={<ForgotPassword></ForgotPassword>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/hall' element={<Hall></Hall>}></Route>
        <Route path='/food' element={<Food></Food>}></Route>
        <Route path='/available-rooms' element={<AvailableRooms></AvailableRooms>}></Route>
        <Route path='/book-room/:roomId' element={<RequireAuth><BookRoomPage></BookRoomPage></RequireAuth>}></Route>
        <Route path='/admin' element={<AdminLayout><AdminDashboard></AdminDashboard></AdminLayout>}></Route>
        <Route path='/admin/view-orders' element={<AdminLayout><ViewOrders></ViewOrders></AdminLayout>}></Route>
        <Route path='/admin/add-room' element={<AdminLayout><AddRoom></AddRoom></AdminLayout>}></Route>
        <Route path='/admin/all-room' element={<AdminLayout><AllRooms></AllRooms></AdminLayout>}></Route>
        <Route path='/admin/all-food' element={<AdminLayout><AllFoods></AllFoods></AdminLayout>}></Route>
        <Route path='/admin/add-task' element={<AdminLayout><AddTask></AddTask></AdminLayout>}></Route>
        <Route path='/admin/manage-users' element={<AdminLayout><ManageUsers></ManageUsers></AdminLayout>}></Route>
        <Route path='/admin/add-food' element={<AdminLayout><CreateFood></CreateFood></AdminLayout>}></Route>
        <Route path='/user/' element={<UserLayout><UserDashboard></UserDashboard></UserLayout>}></Route>
        <Route path='/user/my-orders' element={<UserLayout><MyOrders></MyOrders></UserLayout>}></Route>
        <Route path='/staff/' element={<StaffLayout><StaffDashboard></StaffDashboard></StaffLayout>}></Route>
        <Route path='/staff/view-task' element={<StaffLayout><ViewTask></ViewTask></StaffLayout>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
