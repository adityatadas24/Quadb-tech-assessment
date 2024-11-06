import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskField from "./Components/TaskField/TaskField";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginSignup from "./Components/LoginSignup/LoginSignup";

const App = () => {
  return (
    <div className="task w-full">
      <Routes>
        <Route path="/" element={<LoginSignup />} />

        <Route path="/task" element={<TaskField />} />
      </Routes>
    </div>
  );
};

export default App;


