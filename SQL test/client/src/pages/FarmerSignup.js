
import React, { useState } from 'react';
import Axios from 'axios';
import parag from "../images/5048173.webp";  
import { Link } from 'react-router-dom';

const FarmerSignup = () => {
  const [phoneReg,setPhoneReg] = useState("");
  const [usernameReg,setUsernameReg] = useState("");
  const [ageReg,setAgeReg] = useState("");
  const [addressReg,setAddressReg] = useState("");
  const [passwordReg,setPasswordReg] = useState("");
  const [cpasswordReg,setCpasswordReg] = useState("");

  const register =() =>{
    Axios.post('http://localhost:3002/signup',{
    phone: phoneReg,  
    uname: usernameReg,
    age: ageReg,
    address: addressReg,
    password: passwordReg,
    cpassword: cpasswordReg,
    }).then((response)=>{
      console.log(response);
    });
  };

  return (
    <>
      <nav className="navbar">
        <div className="ss">
          <a className="first" href="/">
            <img className="img1" src={parag} alt="" /> CROP FINDER
          </a>
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

      <div id="fffman">
        <h1>Farmer Registration</h1>
        <form>
        <div id="ffsix">
            <i className="fa-solid fa-user"></i>
            <input type="number" id="fphone" placeholder="phone number" onChange={(e) =>{
              setPhoneReg(e.target.value);
            }}/>
          </div>
          <div id="ffirst">
            <i className="fa-solid fa-user"></i>
            <input type="text" id="fusername" placeholder="Farmer name" onChange={(e) =>{
              setUsernameReg(e.target.value);
            }}/>
          </div>

          <div id="fthird">
            <i className="fa-solid fa-circle-dot"></i>
            <input type="number" id="femid" placeholder="Age" onChange={(e) =>{
              setAgeReg(e.target.value);
            }}/>
          </div>
          <div id="fsecond">
            <i className="fa-solid fa-location-dot"></i>
            <input type="email" id="femail" placeholder="Address" onChange={(e) =>{
              setAddressReg(e.target.value);
            }}/>
          </div>
          <div id="ffourth">
            <i className="fa-solid fa-lock"></i>
            <input type="password" id="fpassword" placeholder="Password" onChange={(e) =>{
              setPasswordReg(e.target.value);
            }}/>
          </div>
          <div id="ffive">
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              id="fcpassword"
              placeholder="Confirm password"
              onChange={(e) =>{
                setCpasswordReg(e.target.value);
              }}
            />
          </div>

          <button id="fnn" type="submit" onClick={register}>
            <Link to="/login">SUBMIT</Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default FarmerSignup;
