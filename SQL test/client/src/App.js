import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Details from "./pages/Details";
import FarmerLogin from "./pages/FarmerLogin ";
import FarmerSignup from "./pages/FarmerSignup";
import Home from "./pages/Home";
import "./AllCss/App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/details" element={<Details/>}/>
          <Route path="/login" element={<FarmerLogin/>}/>
          <Route path="/signup" element={<FarmerSignup/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
