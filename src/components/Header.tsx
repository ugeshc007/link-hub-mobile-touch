
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-purple-900">UWINN</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">
              Home
            </Link>
            <Link to="#" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">
              About
            </Link>
            <Link to="#" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">
              Features
            </Link>
            <Link to="#" className="text-gray-700 hover:text-purple-700 font-medium transition-colors">
              Contact
            </Link>
            <Button variant="default" className="bg-purple-700 hover:bg-purple-800">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-3">
            <Link
              to="/"
              className="block py-2 text-gray-700 font-medium hover:text-purple-700"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="#"
              className="block py-2 text-gray-700 font-medium hover:text-purple-700"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="#"
              className="block py-2 text-gray-700 font-medium hover:text-purple-700"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link
              to="#"
              className="block py-2 text-gray-700 font-medium hover:text-purple-700"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button
              variant="default"
              className="w-full bg-purple-700 hover:bg-purple-800 mt-2"
              onClick={toggleMenu}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
