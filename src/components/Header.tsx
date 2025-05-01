
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-uwinn-purple shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/f65f0e03-213e-462f-9e2e-3b4374087774.png" 
                alt="UWINN Logo" 
                className="h-10 w-auto" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-uwinn-accent font-medium transition-colors">
              Home
            </Link>
            <Link to="#" className="text-white hover:text-uwinn-accent font-medium transition-colors">
              About
            </Link>
            <Link to="#" className="text-white hover:text-uwinn-accent font-medium transition-colors">
              Features
            </Link>
            <Link to="#" className="text-white hover:text-uwinn-accent font-medium transition-colors">
              Contact
            </Link>
            <Button variant="default" className="bg-uwinn-light hover:bg-uwinn-dark text-white">
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
              className="text-white hover:bg-uwinn-dark"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-uwinn-purple border-t border-uwinn-dark">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-3">
            <Link
              to="/"
              className="block py-2 text-white font-medium hover:text-uwinn-accent"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="#"
              className="block py-2 text-white font-medium hover:text-uwinn-accent"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="#"
              className="block py-2 text-white font-medium hover:text-uwinn-accent"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link
              to="#"
              className="block py-2 text-white font-medium hover:text-uwinn-accent"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button
              variant="default"
              className="w-full bg-uwinn-light hover:bg-uwinn-dark text-white mt-2"
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
