import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/Login";   
import Home from "./Home/Home"; 
import Cart from "./Cart/CArt";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Login />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
