import React from 'react';
import HeroImg from "../../assets/blogs/project-slide1.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();  // Initialize navigate

    return (
        <div style={{ backgroundImage: `url(${HeroImg})`, backgroundSize: "cover", backgroundPosition: "top" }}>
            <div className="min-h-[650px] md:min-h-[750px] bg-gradient-to-r from-black/80 to-primary/60 pt-3 pb-10 md:pt-48">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 text-white">
                        {/* Hero Text Section */}
                        <div className="flex flex-col items-center text-center gap-5 lg:items-start lg:text-left lg:max-w-[450px]">
                            <motion.h1 className="text-5xl lg:text-7xl font-bold">
                                Join us in changing lives
                            </motion.h1>
                            <motion.p>
                                We desire to provide loan lending services at your fingertips
                            </motion.p>
                            <div className="space-x-4">
                                <motion.button className="btn-primary">
                                    Get Started
                                </motion.button>
                                {/* Fixed Login Button */}
                                <motion.button
                                    className="btn-outline"
                                    onClick={() => navigate("/login")} // Navigate to login
                                >
                                    Login
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
