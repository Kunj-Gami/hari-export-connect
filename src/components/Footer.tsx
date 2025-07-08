
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-green-600 to-green-800 p-2 rounded-lg">
                <span className="text-white font-bold text-lg">SHI</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Shree Hari International</h3>
                <p className="text-green-400 text-sm">Premium Agro Exports</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Leading exporter of premium quality agro commodities, spices, and cold-pressed oils from Gujarat, India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/themeetsagar" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-green-400 transition-colors">Our Products</Link></li>
              <li><Link to="/manufacturing" className="text-gray-300 hover:text-green-400 transition-colors">Manufacturing</Link></li>
              <li><Link to="/why-choose-us" className="text-gray-300 hover:text-green-400 transition-colors">Why Choose Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Coriander Seeds</span></li>
              <li><span className="text-gray-300">Cumin Seeds</span></li>
              <li><span className="text-gray-300">Groundnut Kernels</span></li>
              <li><span className="text-gray-300">Cold Pressed Oils</span></li>
              <li><span className="text-gray-300">Spices & More</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-1" />
                <span className="text-gray-300 text-sm">
                  Morzar, Bhanvad, Devbhoomi Dwarka, Gujarat, India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">+91 7777974441</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">shreehariexpoter11@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Shree Hari International. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
