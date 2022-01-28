import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import AuthProvider from './Pages/Contexts/AuthProvider/AuthProvider';
import Register from './Pages/Register/Register';
import TravelExperience from './Pages/TravelExperience/TravelExperience';
import Blogs from './Pages/Blogs/Blogs/Blogs';
import Private from './Pages/Private/Private';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddBlog from './Pages/AddBlog/AddBlog';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';
import DashboardHome from './Pages/DashboarhHome/DashboardHome';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blogs" element={<Blogs />} />
            {/* <Route path="/addblog" element={<AddBlog />} />
            <Route path="/makeadmin" element={<MakeAdmin />} /> */}
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard" element={<DashboardHome />} />
              <Route path="/dashboard/makeadmin" element={<MakeAdmin />} />
              <Route path="/dashboard/addblog" element={<AddBlog />} />
            </Route>
            <Route path="/blog/:Id" element={<Private><TravelExperience /></Private>}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
