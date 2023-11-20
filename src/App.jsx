import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Cartpage from "./pages/cart/Cartpage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="w-full">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cartpage />} />
      </Routes>
    </div>
  );
}

export default App;
