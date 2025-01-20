import React from "react";
import Homepage from "./routes/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated for React Router v6

const App = () => {
  return (
    <Router>
      <Routes> {/* Updated to use Routes */}
        <Route path="/" element={<Homepage />} />
        <Route
          path="/:roomName"
          element={<div><h1>Room Page</h1></div>} // Example for room page
        />
      </Routes> {/* Updated to use Routes */}
    </Router>
  );
};

export default App;
