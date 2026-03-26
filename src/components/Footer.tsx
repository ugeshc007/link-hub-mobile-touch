
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-uwinn-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <img 
            src="/lovable-uploads/instwin-logo.png" 
            alt="InstWin Logo" 
            className="h-12 w-auto" 
          />
          <p className="text-gray-300 max-w-md">
            Stay connected with InstWin across all our digital platforms.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/instwin.official" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-uwinn-accent transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/instwin.official" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-uwinn-accent transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://www.youtube.com/@instwin.official" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-uwinn-accent transition-colors">
              <Youtube size={20} />
            </a>
            <a href="https://whatsapp.com/channel/0029VbC5BbOKmCPKyoHetZ1q" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-uwinn-accent transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-600/20 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} InstWin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
