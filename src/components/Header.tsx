
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/f65f0e03-213e-462f-9e2e-3b4374087774.png" 
                alt="UWINN Logo" 
                className="h-14 w-auto" 
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
