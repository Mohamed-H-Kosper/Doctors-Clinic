import "./App.css";
import Header from "../src/components/header/Header";
import MainNavbar from "./components/main-Navbar";
import Footer from "./components/footer/Footer";
import About from "./components/About/About";
import Working from "./workingprocess/Working";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Authentication/Signup";
import Login from "./components/Authentication/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Dashboard/Profile";
import Favorite from "./components/Dashboard/Favorite";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  useEffect(() => {
    AOS.refresh();
  });

  return (
    <div className="App">
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} >
        <Route path="profile/:userId" element={<Profile />} />
        <Route path="favorite" element={<Favorite />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
