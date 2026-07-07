import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import CategoryBar from "./components/CategoryBar/CategoryBar";

import Home from "./pages/Home/Home";
import SearchResults from "./pages/SearchResults/SearchResults";
import VideoDetails from "./pages/VideoDetails/VideoDetails";

function App() {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ flex: 1 }}>
          <CategoryBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:searchQuery" element={<SearchResults />} />
            <Route path="/watch/:videoId" element={<VideoDetails />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;