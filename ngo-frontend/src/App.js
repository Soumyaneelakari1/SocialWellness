import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import AddUser from './pages/AddUser';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './pages/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      {/* <AddUser/> */}
      {/* hrllo */}
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/home" element={<Home />} />
          {/* <Route exact path="/viewuser/:id" element={<ViewUser />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
