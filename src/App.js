import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import PlayPage from "./pages/PlayPage";
import LearnPage from "./pages/LearnPage";
import PuzzlePage from "./pages/PuzzlesPage";
import NewsPage from "./pages/NewsPage";
import SocialPage from "./pages/SocialPage";
import WatchPage from "./pages/WatchPage";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="App">
          <SideBar />

          <div className="content">
          <Routes>
          <Route path="/home" element={<HomePage />} />
            <Route path="/play" element={<PlayPage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/puzzle" element={<PuzzlePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/social" element={<SocialPage />} />
            <Route path="/watch" element={<WatchPage />} />
          </Routes>
        </div>
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
