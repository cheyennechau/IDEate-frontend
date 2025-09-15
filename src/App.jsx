import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "@/pages/Signup";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Review from "@/pages/Review";
import Header from "@/components/Header";

import "@/App.css"
import "@/index.css"

const App = () => {
  return (
      <Router>
        {(location.pathname == "/dashboard" || location.pathname == "/review") && <Header />}
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </Router>
  );
};

export default App;
