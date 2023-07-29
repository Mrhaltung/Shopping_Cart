import "./App.css";
import CartsPage from "./components/CartsPage";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductCard />} />
          <Route path="/cart" element={<CartsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
