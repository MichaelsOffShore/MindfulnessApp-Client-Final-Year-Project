import React from "react";
import { useState } from "react";
import "./styling/App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import logo from './Images/logo.jpg';

function App() {
  
  localStorage.setItem("token", "");
  localStorage.setItem("link", "");

  const navigate = useNavigate();

 
  const [token, setToken] = useState("");

  const handleChange = (event) => {
    setToken(event.target.value);
  };

  const submitData = (e) => {
    e.preventDefault();
    if(token === ""){
      window.alert("Invalid Token, Please use a valid Token!");
      return;
    }
    var tokenValid = false;    
    axios.get("http://localhost:8000/tokenValidation?token=" + token)
  .then(response => {
    
    console.log("TOKEN RESPONSE IS: " + response.data);
    tokenValid = (response.data[0] === 1);
    
if(tokenValid){
  
console.log("Token is valid");
localStorage.setItem("token", token);
localStorage.setItem("link", response.data[1]);
      
navigate("/pages/Home");
}else{
  console.log("Token is NOT valid");
  window.alert("Invalid Token, Please use a valid Token!");
}
  })
  .catch(error => {
    console.log(error);
    window.alert("There has been an error, please try again later...");
  });
  
  };

  
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mindfulness App</title>
      </Helmet>
      <h1 className="header">Mindfulness The App</h1> 

      <div class="login">
      <img src={logo} alt="mindfulness logo"></img>

        <form onSubmit={submitData}>
          <label>
            Token:&nbsp;&nbsp;
            <input
              class="inputBox"
              type="text"
              id="token"
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <button type="submit" className="loginButton">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;

