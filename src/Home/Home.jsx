import { useNavigate } from "react-router-dom";
import { GiCakeSlice } from "react-icons/gi";

import './Home.css'

function Login() {

  const navigate = useNavigate();

  function handleLogin() {
    navigate("/home");
    alert("hello") 
  }

  return (
    <div className="bg">
   <div className="log">
  <h1 className="headlog">
    Welcome to BakeHub <GiCakeSlice />
  </h1>

  <div className="inputGroup">
    <label>Name:</label>
    <input type="text" placeholder="Enter your Name" />
  </div>

  <div className="inputGroup">
    <label>Email:</label>
    <input type="email" placeholder="bakehub@gmail.com" />
  </div>

  <div className="inputGroup">
    <label>Password:</label>
    <input type="password" placeholder="Enter Password" />
  </div>

  <button onClick={handleLogin}>Login</button>
</div>

      
    </div>
  );
}

export default Login;
