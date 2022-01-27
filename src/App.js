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
            <Route path="/blog/:Id" element={<TravelExperience></TravelExperience>}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
