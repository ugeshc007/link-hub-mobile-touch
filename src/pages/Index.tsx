
import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatsSection from "@/components/StatsSection";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Hero Section */}
      <div className="w-full uwinn-gradient py-12 md:py-20 px-4">
        <div className="w-full max-w-3xl mx-auto text-center space-y-4 animate-fade-in">
          <div className="flex flex-col items-center justify-center gap-4">
            <img 
              src="/lovable-uploads/instwin-logo.png" 
              alt="InstWin Logo" 
              className="h-20 md:h-24 w-auto" 
            />
            <div>
              <p className="text-sm md:text-base uppercase tracking-[0.3em] text-gray-200 mb-1">Welcome To</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white">INSTWIN</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Our Digital Platforms Section */}
      <div className="w-full max-w-3xl mx-auto mt-8 md:mt-12 mb-8 md:mb-12 p-4 md:p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-uwinn-purple">Our Digital Platforms</h2>
        <p className="text-uwinn-purple/80 mb-4 md:mb-6">
          We're committed to staying connected and accessible wherever you are. You can reach us and stay updated through the following platforms:
        </p>
        
        <div className="space-y-4">
          {/* Instagram */}
          <div className="p-3 md:p-4 border border-[#E1306C]/20 rounded-lg bg-gradient-to-r from-[#FCAF45]/5 to-[#E1306C]/5 flex flex-col md:flex-row items-start">
            <div className="bg-gradient-to-br from-[#FCAF45] via-[#E1306C] to-[#833AB4] p-3 rounded-full mb-3 md:mb-0 md:mr-4 shadow-md flex-shrink-0 self-center md:self-start">
              <Instagram className="h-6 w-6 text-white" />
            </div>
            <div className="text-left w-full">
              <h3 className="text-lg font-medium text-[#E1306C]">Instagram</h3>
              <p className="text-uwinn-purple/80 mt-1">
                Follow us on Instagram for quick updates, behind-the-scenes glimpses, and engaging visual content.
              </p>
              <div className="mt-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-[#E1306C]/30 text-[#E1306C] hover:bg-[#E1306C]/10"
                  onClick={() => window.open("https://www.instagram.com/instwin.official", "_blank")}
                >
                  <Instagram className="h-4 w-4 mr-2" />
                  INSTWIN OFFICIAL
                </Button>
              </div>
            </div>
          </div>

          {/* Facebook */}
          <div className="p-3 md:p-4 border border-[#1877F2]/20 rounded-lg bg-[#1877F2]/5 flex flex-col md:flex-row items-start">
            <div className="bg-[#1877F2] p-3 rounded-full mb-3 md:mb-0 md:mr-4 shadow-md flex-shrink-0 self-center md:self-start">
              <Facebook className="h-6 w-6 text-white" />
            </div>
            <div className="text-left w-full">
              <h3 className="text-lg font-medium text-[#1877F2]">Facebook</h3>
              <p className="text-uwinn-purple/80 mt-1">
                Connect with us on Facebook for community updates, announcements, and the latest news about InstWin.
              </p>
              <div className="mt-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-[#1877F2]/30 text-[#1877F2] hover:bg-[#1877F2]/10"
                  onClick={() => window.open("https://www.facebook.com/instwin.official", "_blank")}
                >
                  <Facebook className="h-4 w-4 mr-2" />
                  INSTWIN OFFICIAL
                </Button>
              </div>
            </div>
          </div>

          {/* YouTube */}
          <div className="p-3 md:p-4 border border-[#FF0000]/20 rounded-lg bg-[#FF0000]/5 flex flex-col md:flex-row items-start">
            <div className="bg-[#FF0000] p-3 rounded-full mb-3 md:mb-0 md:mr-4 shadow-md flex-shrink-0 self-center md:self-start">
              <Youtube className="h-6 w-6 text-white" />
            </div>
            <div className="text-left w-full">
              <h3 className="text-lg font-medium text-[#FF0000]">YouTube</h3>
              <p className="text-uwinn-purple/80 mt-1">
                Subscribe to our YouTube channel for video tutorials, product demonstrations, and exclusive content.
              </p>
              <div className="mt-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-[#FF0000]/30 text-[#FF0000] hover:bg-[#FF0000]/10"
                  onClick={() => window.open("https://www.youtube.com/@instwin.official", "_blank")}
                >
                  <Youtube className="h-4 w-4 mr-2" />
                  INSTWIN OFFICIAL
                </Button>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="p-3 md:p-4 border border-[#25D366]/20 rounded-lg bg-[#25D366]/5 flex flex-col md:flex-row items-start">
            <div className="bg-[#25D366] p-3 rounded-full mb-3 md:mb-0 md:mr-4 shadow-md flex-shrink-0 self-center md:self-start">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <div className="text-left w-full">
              <h3 className="text-lg font-medium text-[#25D366]">WhatsApp</h3>
              <p className="text-uwinn-purple/80 mt-1">
                Need direct assistance or want to stay updated? Join our WhatsApp channel for instant communication.
              </p>
              <div className="mt-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/10"
                  onClick={() => window.open("https://whatsapp.com/channel/0029VbC5BbOKmCPKyoHetZ1q", "_blank")}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WHATSAPP CHANNEL
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <StatsSection />
    </div>
  );
};

export default Index;
