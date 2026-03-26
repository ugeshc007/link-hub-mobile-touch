
import { Instagram, Facebook, Youtube, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatsSection from "@/components/StatsSection";

import LottoBalls from "@/components/LottoBalls";

const platforms = [
  {
    name: "Instagram",
    icon: Instagram,
    description: "Follow us for quick updates, behind-the-scenes glimpses, and engaging visual content.",
    url: "https://www.instagram.com/instwin.official",
    label: "INSTWIN OFFICIAL",
    color: "#E1306C",
    gradientBg: "bg-gradient-to-r from-[#FCAF45]/5 via-[#E1306C]/5 to-[#833AB4]/5",
    iconBg: "bg-gradient-to-br from-[#FCAF45] via-[#E1306C] to-[#833AB4]",
    borderColor: "border-[#E1306C]/20",
    btnClass: "border-[#E1306C]/30 text-[#E1306C] hover:bg-[#E1306C]/10 hover:border-[#E1306C]/60",
  },
  {
    name: "Facebook",
    icon: Facebook,
    description: "Connect with us for community updates, announcements, and the latest news.",
    url: "https://www.facebook.com/instwin.official",
    label: "INSTWIN OFFICIAL",
    color: "#1877F2",
    gradientBg: "bg-[#1877F2]/5",
    iconBg: "bg-[#1877F2]",
    borderColor: "border-[#1877F2]/20",
    btnClass: "border-[#1877F2]/30 text-[#1877F2] hover:bg-[#1877F2]/10 hover:border-[#1877F2]/60",
  },
  {
    name: "YouTube",
    icon: Youtube,
    description: "Subscribe for video tutorials, product demonstrations, and exclusive content.",
    url: "https://www.youtube.com/@instwin.official",
    label: "INSTWIN OFFICIAL",
    color: "#FF0000",
    gradientBg: "bg-[#FF0000]/5",
    iconBg: "bg-[#FF0000]",
    borderColor: "border-[#FF0000]/20",
    btnClass: "border-[#FF0000]/30 text-[#FF0000] hover:bg-[#FF0000]/10 hover:border-[#FF0000]/60",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    description: "Join our WhatsApp channel for instant updates and direct communication.",
    url: "https://whatsapp.com/channel/0029VbC5BbOKmCPKyoHetZ1q",
    label: "WHATSAPP CHANNEL",
    color: "#25D366",
    gradientBg: "bg-[#25D366]/5",
    iconBg: "bg-[#25D366]",
    borderColor: "border-[#25D366]/20",
    btnClass: "border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366]/60",
  },
];

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-muted/30 to-background overflow-x-hidden">
      {/* Hero Section */}
      <div className="w-full uwinn-gradient py-10 md:py-24 px-3 md:px-4 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl" />
        </div>

        <div className="w-full max-w-3xl mx-auto text-center space-y-6 relative z-10">
          <div className="flex flex-col items-center justify-center gap-4 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl scale-150" />
              <img 
                src="/lovable-uploads/instwin-logo.png" 
                alt="InstWin Logo" 
                className="h-32 sm:h-40 md:h-52 w-auto relative z-10 drop-shadow-2xl hover-scale" 
              />
            </div>
            <p className="text-sm md:text-base uppercase tracking-[0.4em] text-white/70 font-light">Welcome</p>
            <LottoBalls />
            <div className="flex items-center justify-center gap-2 -mt-2">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/40" />
              <Sparkles className="h-4 w-4 text-uwinn-accent" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/40" />
            </div>
          </div>
        </div>
      </div>

      {/* Digital Platforms Section */}
      <div className="w-full max-w-3xl mx-auto -mt-6 mb-6 md:mb-12 px-3 md:px-4">
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 border border-border/50">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-3xl font-bold text-uwinn-purple">Our Digital Platforms</h2>
            <p className="text-uwinn-purple/60 mt-2 max-w-lg mx-auto text-sm md:text-base">
              Stay connected and accessible wherever you are
            </p>
          </div>
          
          <div className="space-y-3 md:space-y-4">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <div 
                  key={platform.name}
                  className={`p-3 md:p-5 border ${platform.borderColor} rounded-xl ${platform.gradientBg} flex items-center transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`${platform.iconBg} p-2.5 md:p-3.5 rounded-xl md:rounded-2xl mr-3 md:mr-4 shadow-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div className="text-left w-full">
                    <h3 className="text-base md:text-lg font-semibold" style={{ color: platform.color }}>
                      {platform.name}
                    </h3>
                    <p className="text-uwinn-purple/60 mt-0.5 md:mt-1 text-xs md:text-sm hidden sm:block">
                      {platform.description}
                    </p>
                    <div className="mt-2 md:mt-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className={`w-full font-semibold rounded-lg transition-all duration-300 text-xs md:text-sm ${platform.btnClass}`}
                        onClick={() => window.open(platform.url, "_blank")}
                      >
                        <Icon className="h-3.5 w-3.5 md:h-4 md:w-4 mr-1.5 md:mr-2" />
                        {platform.label}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Keno Game */}
      <KenoGame />

      {/* Stats Section */}
      <StatsSection />
    </div>
  );
};

export default Index;
