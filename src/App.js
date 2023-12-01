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
import MyFoodOrders from './Components/Pages/Roles/UserRole/Pages/MyFoodOrders';
import FoodBookingPage from './Components/Pages/Services/Food/FoodBookingPage';
import ShowAllRooms from './Components/Pages/Services/Rooms/ShowAllRooms';
import SingleRoomDetails from './Components/Pages/Services/Rooms/SingleRoomDetails';
import FoodOrders from './Components/Pages/Roles/AdminRole/Pages/FoodOrders';
import RequireAdmin from './Components/Pages/RequireAuth/RequireAdmin';
import NavbarTwo from './Components/Pages/Header/NavbarTwo';


function App() {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith('/admin') ||
                    location.pathname.startsWith('/user') ||
                    location.pathname.startsWith('/staff');

  return (
    <div>
      {!hideNavbar && <NavbarTwo />}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<RequireAuth><Products></Products></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path='/reset-password' element={<ForgotPassword></ForgotPassword>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/rooms' element={<ShowAllRooms></ShowAllRooms>}></Route>
        <Route path='room/:roomId' element={<SingleRoomDetails></SingleRoomDetails>}></Route>
        <Route path='/food' element={<Food></Food>}></Route>
        <Route path='/food/:foodId' element={<RequireAuth><FoodBookingPage></FoodBookingPage></RequireAuth>}></Route>
        <Route path='/available-rooms' element={<AvailableRooms></AvailableRooms>}></Route>
        <Route path='/book-room/:roomId' element={<RequireAuth><BookRoomPage></BookRoomPage></RequireAuth>}></Route>
        <Route path='/admin' element={<RequireAdmin><AdminLayout><AdminDashboard></AdminDashboard></AdminLayout></RequireAdmin>}></Route>
        <Route path='/admin/view-orders' element={<RequireAdmin><AdminLayout><ViewOrders></ViewOrders></AdminLayout></RequireAdmin>}></Route>
        <Route path='/admin/view-food-orders' element={<RequireAdmin><AdminLayout><FoodOrders></FoodOrders></AdminLayout></RequireAdmin>}></Route>
        <Route path='/admin/add-room' element={<RequireAdmin><AdminLayout><AddRoom></AddRoom></AdminLayout></RequireAdmin>}></Route>
        <Route path='/admin/all-room' element={<RequireAdmin><AdminLayout><AllRooms></AllRooms></AdminLayout></RequireAdmin>}></Route>
        <Route path='/admin/all-food' element={<RequireAdmin><AdminLayout><AllFoods></AllFoods></AdminLayout></RequireAdmin>}></Route>
        <Route path='/admin/add-task' element={<RequireAdmin><AdminLayout><AddTask></AddTask></AdminLayout></RequireAdmin>}></Route>
        <Route path='/admin/manage-users' element={<RequireAdmin><AdminLayout><ManageUsers></ManageUsers></AdminLayout></RequireAdmin>}></Route>
        <Route path='/admin/add-food' element={<RequireAdmin><AdminLayout><CreateFood></CreateFood></AdminLayout></RequireAdmin>}></Route>
        <Route path='/user/' element={<RequireAuth><UserLayout><UserDashboard></UserDashboard></UserLayout></RequireAuth>}></Route>
        <Route path='/user/my-orders' element={<RequireAuth><UserLayout><MyOrders></MyOrders></UserLayout></RequireAuth>}></Route>
        <Route path='/user/my-food-orders' element={<RequireAuth><UserLayout><MyFoodOrders></MyFoodOrders></UserLayout></RequireAuth>}></Route>
        <Route path='/staff/' element={<StaffLayout><StaffDashboard></StaffDashboard></StaffLayout>}></Route>
        <Route path='/staff/view-task' element={<StaffLayout><ViewTask></ViewTask></StaffLayout>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
