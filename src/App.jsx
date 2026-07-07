import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div
          style={{
            color: "white",
            padding: "30px",
            fontSize: "25px"
          }}
        >
          Home Page
        </div>
      </div>
    </>
  );
}

export default App;