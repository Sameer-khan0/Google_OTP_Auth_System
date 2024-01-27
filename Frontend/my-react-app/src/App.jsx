import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Authentication from "./components/Athentication";
import Home from "./components/Home";
import Verification from "./components/Varification";
import Profile from "./components/profile";

function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/user/:id/verify/:token" element={<Verification />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
