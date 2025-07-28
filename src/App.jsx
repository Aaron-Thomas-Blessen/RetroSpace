import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Programs from "./pages/Programs";
import Courses from "./pages/Courses";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:programId" element={<Programs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<Courses />} />
      </Routes>
    </Router>
  );
}

export default App;
