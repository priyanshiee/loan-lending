import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/Hero";
import OverviewCounter from "./components/OverviewCounter/OverviewCounter";
import OurVision from "./components/OurVision/OurVision";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import VideoBanner from "./components/Video Banner/VideoBanner.jsx";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Login from "./register/login.jsx"; 
import PaymentRescheduler from "./components/Payment/PaymentRescheduler.jsx";


const Registration = () => <div>Registration Page</div>;

function App() {
  const [showLogin, setShowLogin] = useState(false);

  // Open the login modal
  const handleLoginOpen = () => {
    setShowLogin(true);
  };

  // Close the login modal
  const handleLoginClose = () => {
    setShowLogin(false);
  };

  return (
    <Router>
      <main className="overflow-x-hidden bg-white h-screen">
        <Navbar />

        {/* Button to open the login modal */}
        <button onClick={handleLoginOpen}>Open Login</button>

        {/* Conditionally render the login modal */}
        {showLogin && <Login onClose={handleLoginClose} />}

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login onClose={handleLoginClose} />} />
          <Route path="/register" element={<Registration />} />
        </Routes>

        <OverviewCounter />
        <OurVision />
        <Banner />
        <Banner2 />
        <VideoBanner />
        <Blogs />
        <PaymentRescheduler />
        <Footer />
      </main>
    </Router>
  );
}

export default App;
