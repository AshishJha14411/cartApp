import { Route, Routes } from "react-router-dom";
import "./App.css";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
