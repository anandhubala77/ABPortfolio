import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
       

        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
