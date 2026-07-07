import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import CategoryBar from "./components/CategoryBar/CategoryBar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>

        <Sidebar />

        <div style={{ flex: 1 }}>

          <CategoryBar />

          <Home />

        </div>

      </div>

    </>
  );
}

export default App;