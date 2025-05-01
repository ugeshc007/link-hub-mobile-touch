
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
        <div className="flex justify-between items-center py-5 md:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/f65f0e03-213e-462f-9e2e-3b4374087774.png" 
                alt="UWINN Logo" 
                className="h-12 w-auto" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-uwinn-purple hover:text-uwinn-light font-medium text-lg transition-colors">
              Home
            </Link>
            <Link to="#" className="text-uwinn-purple hover:text-uwinn-light font-medium text-lg transition-colors">
              About
            </Link>
            <Link to="#" className="text-uwinn-purple hover:text-uwinn-light font-medium text-lg transition-colors">
              Features
            </Link>
            <Link to="#" className="text-uwinn-purple hover:text-uwinn-light font-medium text-lg transition-colors">
              Contact
            </Link>
            <Button variant="default" size="lg" className="bg-uwinn-light hover:bg-uwinn-dark text-white">
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
              className="text-uwinn-purple hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
            <Link
              to="/"
              className="block py-2 text-uwinn-purple font-medium text-lg hover:text-uwinn-light"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="#"
              className="block py-2 text-uwinn-purple font-medium text-lg hover:text-uwinn-light"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="#"
              className="block py-2 text-uwinn-purple font-medium text-lg hover:text-uwinn-light"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link
              to="#"
              className="block py-2 text-uwinn-purple font-medium text-lg hover:text-uwinn-light"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button
              variant="default"
              size="lg"
              className="w-full bg-uwinn-light hover:bg-uwinn-dark text-white mt-3"
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
