import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";


// import './App.css';
// import React from 'react'; 
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/PreLoginHomepage/HomePage" 
// import SignIn from './components/SignIn/SignIn';
import Loginpage from './components/SignIn/Loginpage';
import Client_landing from './components/PreLoginHomepage/Client_landing';
import Advisor_landing from './components/PreLoginHomepage/Advisor_landing';



function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          
          <Route path="/dashboard">
            <Route  index element={<Home />} />
            
             <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              /> 
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>


{/* pre */}
<Route path="/" element={<HomePage />} />
<Route path="login" element={<Loginpage />} />
<Route path ="/advisor_landing" element= {<Advisor_landing />}/>

<Route path ="/client_landing" element= {<Client_landing />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
