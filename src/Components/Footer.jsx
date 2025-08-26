import React from 'react'
import { FaApple, FaGooglePlay, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo + Tagline */}
        <div>
          <img
            src="./Images/logo-long.svg"
            alt="Heyfood Logo"
            className="h-10 w-auto"
          />
          <p className="mt-2 text-gray-700">Your food delivered within minutes.</p>

          {/* App Buttons */}
          <div className="flex gap-3 mt-4">
            <a
              href="#"
              className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <FaApple size={20} />
              <span className="text-sm">App Store</span>
            </a>
            <a
              href="#"
              className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <FaGooglePlay size={20} />
              <span className="text-sm">Play Store</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-white ">
            <a href="#" className='bg-black rounded-full p-0.5'><FaFacebookF size={20} /></a>
            <a href="#" className='bg-black rounded-full p-0.5'><FaTwitter size={20} /></a>
            <a href="#" className='bg-black rounded-full p-0.5'><FaInstagram size={20} /></a>
            <a href="#" className='bg-black rounded-full p-0.5'><FaLinkedinIn size={20} /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Get To Know Us</h3>
          <ul className="space-y-2 text-green-600">
            <li><a href="#">About Us</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Let Us Help You</h3>
          <ul className="space-y-2 text-green-600">
            <li><a href="#">Support</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Restaurants Near Me</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Doing Business</h3>
          <ul className="space-y-2 text-green-600">
            <li><a href="#">Become a driver</a></li>
            <li><a href="#">Become a partner restaurant</a></li>
          </ul>

          {/* QR Code */}
          <div className="mt-6">
            <img
              src="./Images/download-qr.svg" 
              alt="QR Code"
              className="w-24 h-24"
            />
            <div className="flex gap-6 mt-3 md:mt-0 text-green-600 font-medium">
          <a href="#">Terms Of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 text-center text-sm  items-center px-6">
        <p className="text-black">© 2025 Hey Technologies Limited. All rights reserved</p>
        
      </div>
    </footer>
    </div>
  )
}

export default Footer
