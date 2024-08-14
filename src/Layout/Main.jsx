import React from "react";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import "./Main.css";
import  { useState, useEffect } from "react";
import Preloader from "../Component/ui/Loader/Preloader";
const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or other loading processes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />; // Show the preloader if loading
  }
  return (
    <div className="bg">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
