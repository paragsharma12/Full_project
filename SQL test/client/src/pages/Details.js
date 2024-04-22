import React from 'react';
import parag from "../images/5048173.webp";  
import { Link } from 'react-router-dom';

const Details = () => {
  return (
    <>
        <nav className="navbar">
          <div className="ss">
            <Link className="first" to="#">
              <img className="img1" src={parag} alt="" />
              CROP FINDERy

            </Link>
          </div>
          <div className="ask">
            <Link to="#">Home</Link>
            <Link to="#">About us</Link>
            <button className="btn1">Log in</button>
            <button className="btn1">Sign in</button>
          </div>
        </nav>
        <div className="det">
          <div className="img">
            <img src="./image/farmer-using-laptop-on-tractor-top-2773408-2319315.png" alt="" />
          </div>
          <div>
            <form>
              <h2>Crop Information Form</h2>
              <div className="form-group">
                <label htmlFor="farmerName">Farmer Name:</label>
                <input type="text" id="farmerName" name="farmerName" placeholder="Enter farmer name" required />
                </div>

                <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" placeholder="Enter age" required />
                </div>

                <div className="form-group">
                <label htmlFor="state">State:</label>
                <select id="state" name="state" required>
                    <option value="">Select state</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                </select>
                </div>

                <div className="form-group">
                <label htmlFor="district">District:</label>
                <input type="text" id="district" name="district" placeholder="Enter district" required />
                </div>

                <div className="form-group">
                <label htmlFor="villageTown">Village/Town:</label>
                <input type="text" id="villageTown" name="villageTown" placeholder="Enter village/town" required />
                </div>

                <div className="form-group">
                <label htmlFor="cropName">Crop Name:</label>
                <input type="text" id="cropName" name="cropName" placeholder="Enter crop name" required />
                </div>

                <div className="form-group">
                <label htmlFor="cropType">Crop Type:</label>
                <select id="cropType" name="cropType" required>
                    <option value="">Select crop type</option>
                    <option value="Grains">Grains</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Fruits">Fruits</option>
                </select>
                </div>

                <div className="form-group">
                <label htmlFor="weather">Weather:</label>
                <input type="text" id="weather" name="weather" placeholder="Enter weather information" required />
                </div>

                <div className="form-group">
                <label htmlFor="temperature">Temperature:</label>
                <input type="text" id="temperature" name="temperature" placeholder="Enter temperature information" required />
                </div>

                <div className="form-group">
                <label htmlFor="soilQuality">Soil Quality:</label>
                <input type="text" id="soilQuality" name="soilQuality" placeholder="Enter soil quality information" required />
                </div>

                <div className="form-group">
                <label htmlFor="waterAvailability">Availability of Water:</label>
                <select id="waterAvailability" name="waterAvailability" required>
                    <option value="">Select availability</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                </div>

                <div className="form-group full">
                <label htmlFor="pesticides">Types of Pesticides:</label>
                <textarea id="pesticides" name="pesticides" placeholder="Enter types of pesticides"></textarea>
                </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
    </>
  );
};

export default Details;
