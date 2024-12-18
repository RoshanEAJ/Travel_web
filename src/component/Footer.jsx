import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="bg-gray-800 text-white py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 text-white">
                    <div className="ml-10">
                        <h2 className="text-2xl font-bold mb-4">Travel Agency</h2>
                        <p className="mb-4">Your trusted partner for unforgettable travel experiences. Explore the world with us.</p>
                    </div>
                    <div className="flex flex-col md:items-center ml-10">
                        <h2 className="text-xl font-bold mb-2">Quick Links</h2>
                        <div className="flex flex-col space-y-2 mb-2">
                            <Link to="/">Home</Link>
                            <Link to="/gallery">Gallery</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/about">About</Link>
                        </div>
                    </div>
                    <div className="">
                        <h3 className="text-lg font-bold mb-2 ml-10">Follow Us</h3>
                        <div className="flex space-x-4 mb-4 ml-10">
                            <FaFacebookF size={24} className="text-blue-500 hover:text-blue-600" />
                            <FaInstagram size={24} className="text-pink-500 hover:text-pink-600" />
                            <FaTwitter size={24} className="text-blue-400 hover:text-blue-400" />
                            <FaYoutube size={24} className="text-red-500 hover:text-red-600" />
                        </div>
                        <form className="flex items-center mt-8 text-black ml-10">
                            <input type='email' placeholder="Enter your Email" className="p-2 rounded-l" />
                            <button className="bg-blue-500 text-white p-2 rounded-r">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900 p-4 text-white">
                <div className="flex justify-between mt-8 border-t border-gray-700 pt-4">
                    <p>© 2024 Travel Agency. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link to='/privacy-policy'>Privacy Policy</Link>
                        <Link to='/terms-of-services'>Terms of Services</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
