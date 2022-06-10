import React from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import App from "../pages/app";
import '../css/style.css'
import '../css/responsive.css'

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <App />
    </div>
  )
}

export default MainLayout
