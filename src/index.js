import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Auth from "./pages/Auth.js";
import Home from "./pages/Home";
import Puzzles from "./pages/Puzzles";
import Inbox from "./pages/Inbox";
import Forum from "./pages/Forum";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Auth />} />
          <Route path="puzzles" element={<Puzzles />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="forum" element={<Forum />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);