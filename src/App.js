import { Route, Routes } from "react-router-dom";
import "./App.css";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
