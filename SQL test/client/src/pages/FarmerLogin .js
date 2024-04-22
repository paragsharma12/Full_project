import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import parag from "../images/5048173.webp";  

import { Link } from 'react-router-dom';

const FarmerLogin = () => {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  //const [loginStatus,setLoginStatus] = useState("");
  const navigate = useNavigate();
  const login =() =>{
    Axios.post('http://localhost:3002/login',{
    uname: username,
    password: password,
    }).then(res =>{
      if(res.data==="Success"){
        //setLoginStatus(response.data.message);
        alert("Login Successful");
        navigate('/');
        
      }else{
        //setLoginStatus(response.data[0].uname);
        alert("No record exist");
      }
    })
    .catch(err => console.log(err));
  };

  return (
    <>
      <nav className="navbar">
        <div className="ss">
          <Link className="first" to="/">
            <img className="img1" src={parag} alt="" /> CROP FINDER
          </Link>
        </div>
        <div className="ask">
          <Link to="/">Home</Link>
          <Link to="#">About us</Link>
          <Link to="/login" className="btn1">
            Log in
          </Link>
          <Link to="/signup" className="btn1">
            Sign up
          </Link>
        </div>
      </nav>

      <div id="man">
        <h1 className="lh1">Farmer Log In</h1>
        <form>
          <div id="first">
            <i className="fa-solid fa-user"></i>
            <input type="text" id="username" placeholder="username" onChange={(e) =>{
              setUsername(e.target.value);
            }}/>
          </div>
          <div id="second">
            <i className="fa-solid fa-lock"></i>
            <input type="password" id="password" placeholder="password" onChange={(e) =>{
              setPassword(e.target.value);
            }}/>
          </div>
          <button id="nn" type="submit" onClick={login}>
          <Link to="/">SUBMIT</Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default FarmerLogin;
