import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Authentication from "./components/Athentication";
import Home from "./components/Home";
import Verification from "./components/Varification";
import Profile from "./components/profile";
import OTP from './components/OTP'

function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/varify" element={<Verification />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
