import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import CategoryBar from "./components/CategoryBar/CategoryBar";

function App() {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ flex: 1 }}>
          <CategoryBar />

          <div
            style={{
              color: "white",
              padding: "30px"
            }}
          >
            Video Grid Coming Soon...
          </div>

        </div>

      </div>
    </>
  );
}

export default App;