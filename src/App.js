import "./App.css";
import Header from "../src/components/header/Header";
import MainNavbar from "./components/main-Navbar";
import Footer from "./components/footer/Footer";
import About from "./components/About/About";
import Working from "./workingprocess/Working";
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(()=>{
    AOS.init({
     duration:3000,
     easing:'ease-in-out',
     once:false,
   });
  },[]);
  useEffect(()=>{
  AOS.refresh()
 })
 
  return (
  <div className="App">
    <MainNavbar />
    <Header />
    <About />
    <Working />
    <Footer />
  </div>
  );
}
export default App;
