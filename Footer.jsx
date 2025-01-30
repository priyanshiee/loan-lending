import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";

const importantLinks = [
    { name: "Home", link: "/home" },
    { name: "About", link: "/about" },
    { name: "Service", link: "/service" },
    { name: "Login", link: "/login" },
];

const links = [
    { name: "Privacy Policy", link: "/privacy" },
    { name: "Service", link: "/service" },
    { name: "About Us", link: "/about" },
];

// FooterLinks Component
const FooterLinks = ({ links }) => {
    return (
        <ul className="flex flex-col gap-3">
            {links.map((item, index) => (
                <li key={index}>
                    <a href={item.link} className="hover:text-gray-300">
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

const Footer = () => {
    return (
        <div className="text-white rounded-t-3xl bg-gradient-to-r from-violet-950 to-violet-900">
            <div className="mx-auto max-w-[1200px] p-4">
                {/* Footer Content Section */}
                <div className="grid py-5 md:grid-cols-3">
                    <div className="px-4 py-8">
                        <h1 className="mb-3 text-justify text-xl sm:text-left sm:text-3xl">
                            <a href="/#" className="uppercase">
                                Leisure
                                <span className="inline-block font-bold text-primary">
                                    Loans
                                </span>
                            </a>
                        </h1>
                        <p>Lending Made Simple</p>
                        <div className="flex items-center gap-3 mt-3">
                            <FaLocationArrow />
                            <p>Jaipur, Rajasthan</p>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                            <FaMobileAlt />
                            <p>+21 234 567 987</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:pl-10 col-span-2">
                        <div className="px-4 py-8">
                            <h1 className="mb-3 text-xl font-bold sm:text-left sm:text-xl">
                                Important Links
                            </h1>
                            <FooterLinks links={importantLinks} />
                        </div>
                        <div className="px-4 py-8">
                            <h1 className="mb-3 text-xl font-bold sm:text-left sm:text-xl">
                                Links
                            </h1>
                            <FooterLinks links={links} />
                        </div>
                        <div className="px-4 py-8">
                            <h1 className="mb-3 text-xl font-bold sm:text-left sm:text-xl">
                                Social Links
                            </h1>
                            <div className="space-y-3">
                                <h1>Subscribe to our newsletter</h1>
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="rounded-full px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                                />
                                <div className="flex gap-3 mt-6 items-center">   
                                    <a href="#" className="duration-200 hover:scale-105">
                                        <FaInstagram className="text-3xl"/>
                                    </a>
                                    <a href="#" className="duration-200 hover:scale-105">
                                        <FaFacebook className="text-3xl"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Copyright Section */}
                <div className="bottom-footer">
                    <p className="border-t-2 border-gray-300/50 py-6 text-center">
                        © 2025. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
