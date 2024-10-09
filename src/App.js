import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AuthPage from "./page/AuthPage";

function App() {
  return (
    <Router>
      <div>
        <AuthPage />
      </div>
    </Router>
  );
}

export default App;
