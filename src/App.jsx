import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/Login";   
import Home from "./Home/Home"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
