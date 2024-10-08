import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import News from "./pages/News";
import NoPage from "./pages/NoPage";
import Puzzles from "./pages/Puzzles";
import Forum from "./pages/Forum";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="learn" element={<Learn />} />
          <Route path="news" element={<News />} />
          <Route path="puzzles" element={<Puzzles />} />
          <Route path="forum" element={<Forum />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);