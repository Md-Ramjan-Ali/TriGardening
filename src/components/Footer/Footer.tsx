import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2D5016] text-white py-12 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-white pb-10">
        {/* Brand Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">TriGardening</h3>
          <p className="text-white">Your Slogan goes here</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-base font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-white">
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
            <li><a href="#" className="hover:text-white transition">Shippings</a></li>
            <li><a href="#" className="hover:text-white transition">Referral Program</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-base font-semibold mb-3">Categories</h4>
          <ul className="space-y-2 text-white">
            <li><a href="#" className="hover:text-white transition">Plants</a></li>
            <li><a href="#" className="hover:text-white transition">Tools</a></li>
            <li><a href="#" className="hover:text-white transition">Fertilizers</a></li>
            <li><a href="#" className="hover:text-white transition">Pesticides</a></li>
          </ul>
        </div>

        {/* Connect Section */}
        <div>
          <h4 className="text-base font-semibold mb-3">Connect With Us</h4>
          <div className="flex items-center space-x-4 mb-4">
            <a href="#" aria-label="Facebook" className="hover:text-green-300">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-green-300">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-green-300">
              <FaTwitter />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-green-300">
              <FaYoutube />
            </a>
          </div>
          <p className="text-white text-sm mb-1">support@trigardening.com</p>
          <p className="text-white font-semibold text-sm mt-3">Call Now</p>
          <p className="text-white text-sm">+8801234567890</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-white text-sm mt-8">
        © 2025 <span className="font-medium text-white">TriGardening</span>. All Rights Reserved
      </div>
    </footer>
  )
}
