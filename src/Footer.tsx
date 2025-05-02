
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, HelpCircle, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-uwinn-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-uwinn-accent">UWINN</h3>
            <p className="text-gray-300 mb-4">
              Bringing mobile solutions to users across all platforms. Our apps are designed
              with user experience and innovation in mind.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/uwinn.official" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-uwinn-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/uwinn.updates" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-uwinn-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://facebook.com/uwinn.live" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-uwinn-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-uwinn-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-uwinn-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-uwinn-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-uwinn-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-uwinn-accent transition-colors">Features</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-uwinn-accent transition-colors flex items-center gap-2">
                  <HelpCircle size={16} />
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-uwinn-accent transition-colors flex items-center gap-2">
                  <Mail size={16} />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Download Links */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-uwinn-accent">Download Our App</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.uwinn.app&pcampaignid=web_share" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-uwinn-accent transition-colors">Google Play Store</a>
              </li>
              <li>
                <a href="https://appgallery.cloud.huawei.com/ag/n/app/C114029649?locale=en_US&source=appshare&subsource=C114029649" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-uwinn-accent transition-colors">Huawei AppGallery</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-uwinn-accent transition-colors">iOS App Store (Coming Soon)</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-uwinn-accent">Contact Us</h3>
            <p className="text-gray-300 mb-2">Have questions? Reach out to us!</p>
            <a href="mailto:contact@uwinn.app" className="text-gray-300 hover:text-uwinn-accent transition-colors block mb-2">
              contact@uwinn.app
            </a>
            <a href="https://api.whatsapp.com/send/?phone=971564367791&text=Hello%20there!&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-uwinn-accent transition-colors">
              WhatsApp Channel
            </a>
            <a href="https://whatsapp.com/channel/0029Vaa3hUQCXC3DdWFL3Z2d" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-uwinn-accent transition-colors block mt-2">
              Main Channel
            </a>
            <a href="https://whatsapp.com/channel/0029Vb5aczmEQIahTQ0nrW2B" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-uwinn-accent transition-colors block mt-2">
              Additional Channel
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-opacity-20 border-gray-600 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} UWINN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
