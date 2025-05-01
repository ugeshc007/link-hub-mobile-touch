
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Apple, Smartphone, Instagram, Facebook, MessageSquare } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section with Downloads - Original section */}
      <div className="w-full uwinn-gradient py-16 px-4">
        <div className="w-full max-w-3xl mx-auto text-center space-y-8">
          <div className="animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 text-white">UWINN Mobile App</h1>
            <p className="text-xl text-gray-200 mb-8">Download our app now for iOS, Android, and Huawei devices</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
            {/* Android Card */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <CardHeader className="bg-green-50 pb-4 border-b">
                <div className="w-12 h-12 mx-auto bg-[#3DDC84] rounded-full flex items-center justify-center mb-2">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Android App</CardTitle>
                <CardDescription>Get it on Google Play</CardDescription>
              </CardHeader>
              <CardContent className="p-4 flex-grow">
                <div className="flex flex-col items-center py-3 bg-green-50 rounded-lg border border-green-100 mb-3">
                  <div className="bg-white p-1 rounded-lg shadow-md">
                    <img 
                      src="/lovable-uploads/9e35edaa-5ef7-4ffb-9e3c-acafed4674dc.png" 
                      alt="Google Play Store" 
                      className="w-12 h-12 object-contain" 
                    />
                  </div>
                  <div className="text-center mt-1 font-bold text-sm">Play Store</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold inline-flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-1"></span>
                    AVAILABLE
                  </span>
                  <span className="text-xs text-gray-500">v1.2.5</span>
                </div>
              </CardContent>
              <CardFooter className="bg-green-50 border-t p-3">
                <Button 
                  className="w-full font-semibold rounded-md shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl text-black" 
                  style={{backgroundColor: "#3DDC84"}}
                  onClick={() => window.open("https://play.google.com/store/apps/details?id=com.uwinn.app&pcampaignid=web_share", "_blank")}
                >
                  <img 
                    src="/lovable-uploads/9e35edaa-5ef7-4ffb-9e3c-acafed4674dc.png" 
                    alt="Google Play" 
                    className="h-4 w-4 mr-2" 
                  />
                  Download
                </Button>
              </CardFooter>
            </Card>
            
            {/* Huawei AppGallery Card */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <CardHeader className="bg-red-50 pb-4 border-b">
                <div className="w-12 h-12 mx-auto bg-[#C41E3A] rounded-full flex items-center justify-center mb-2">
                  <img 
                    src="/lovable-uploads/79861206-cbda-4ce0-96fa-a8b3d2ad9548.png" 
                    alt="Huawei AppGallery" 
                    className="h-6 w-6 object-contain" 
                  />
                </div>
                <CardTitle className="text-lg">Huawei App</CardTitle>
                <CardDescription>Available on AppGallery</CardDescription>
              </CardHeader>
              <CardContent className="p-4 flex-grow">
                <div className="flex flex-col items-center py-3 bg-red-50 rounded-lg border border-red-100 mb-3">
                  <img 
                    src="/lovable-uploads/79861206-cbda-4ce0-96fa-a8b3d2ad9548.png" 
                    alt="Huawei AppGallery" 
                    className="w-12 h-12 object-contain drop-shadow-md" 
                  />
                  <div className="text-center mt-1 font-bold text-sm">AppGallery</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-semibold inline-flex items-center">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-1"></span>
                    AVAILABLE
                  </span>
                  <span className="text-xs text-gray-500">v1.2.5</span>
                </div>
              </CardContent>
              <CardFooter className="bg-red-50 border-t p-3">
                <Button 
                  className="w-full font-semibold rounded-md shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl text-white" 
                  style={{backgroundColor: "#C41E3A"}}
                  onClick={() => window.open("https://appgallery.cloud.huawei.com/ag/n/app/C114029649?locale=en_US&source=appshare&subsource=C114029649", "_blank")}
                >
                  <img 
                    src="/lovable-uploads/79861206-cbda-4ce0-96fa-a8b3d2ad9548.png" 
                    alt="Huawei" 
                    className="h-4 w-4 mr-2" 
                  />
                  Download
                </Button>
              </CardFooter>
            </Card>

            {/* iOS Card */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <CardHeader className="bg-gray-50 pb-4 border-b">
                <div className="w-12 h-12 mx-auto bg-black rounded-full flex items-center justify-center mb-2">
                  <Apple className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">iOS App</CardTitle>
                <CardDescription>Coming Soon to App Store</CardDescription>
              </CardHeader>
              <CardContent className="p-4 flex-grow">
                <div className="flex flex-col items-center py-3 bg-gray-50 rounded-lg border border-gray-100 mb-3">
                  <Apple className="h-12 w-12 text-black" />
                  <div className="text-center mt-1 font-bold text-sm">App Store</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-semibold inline-flex items-center">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-1"></span>
                    COMING SOON
                  </span>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 border-t p-3">
                <Button 
                  className="w-full text-white font-semibold rounded-md shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  style={{backgroundColor: "#000000"}}
                >
                  <Apple className="mr-2 h-4 w-4" />
                  Coming Soon
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Our Digital Platforms Section - Moved above Features section */}
      <div className="w-full max-w-3xl mx-auto mt-12 mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-uwinn-purple">Our Digital Platforms</h2>
        <p className="text-uwinn-purple mb-6">
          We're committed to staying connected and accessible wherever you are. You can reach us and stay updated through the following platforms:
        </p>
        
        <div className="space-y-6">
          {/* Instagram Platform */}
          <div className="p-4 border border-uwinn-purple/20 rounded-lg bg-uwinn-purple/5 flex items-start">
            <div className="bg-uwinn-purple/10 p-3 rounded-full mr-4">
              <Instagram className="h-6 w-6 text-uwinn-purple" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-medium text-uwinn-purple flex items-center">
                <span>🔹 Instagram</span>
              </h3>
              <p className="text-uwinn-purple/90 mt-1">
                Follow us on Instagram for quick updates, behind-the-scenes glimpses, and engaging visual content that brings our brand to life.
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-3 border-uwinn-purple/30 text-uwinn-purple hover:bg-uwinn-purple/10"
                onClick={() => window.open("https://www.instagram.com/uwinn.official", "_blank")}
              >
                <Instagram className="h-4 w-4 mr-2" />
                Follow Us
              </Button>
            </div>
          </div>
          
          {/* Facebook Platform */}
          <div className="p-4 border border-uwinn-purple/20 rounded-lg bg-blue-50 flex items-start">
            <div className="bg-uwinn-purple/10 p-3 rounded-full mr-4">
              <Facebook className="h-6 w-6 text-uwinn-purple" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-medium text-uwinn-purple flex items-center">
                <span>🔹 Facebook</span>
              </h3>
              <p className="text-uwinn-purple/90 mt-1">
                Join our Facebook community to connect with our team, stay informed on announcements, promotions, and customer support.
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-3 border-uwinn-purple/30 text-uwinn-purple hover:bg-uwinn-purple/10"
                onClick={() => window.open("https://www.facebook.com/uwinn.updates", "_blank")}
              >
                <Facebook className="h-4 w-4 mr-2" />
                Join Us
              </Button>
            </div>
          </div>
          
          {/* WhatsApp Platform */}
          <div className="p-4 border border-uwinn-purple/20 rounded-lg bg-green-50 flex items-start">
            <div className="bg-uwinn-purple/10 p-3 rounded-full mr-4">
              <svg className="h-6 w-6 text-uwinn-purple" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                <path d="M9 10a0.5 0.5 0 0 0 1 0V9a0.5 0.5 0 0 0-1 0v1zm0 0a5 5 0 0 0 5 5h1a0.5 0.5 0 0 0 0-1h-1a0.5 0.5 0 0 0 0 1"></path>
              </svg>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-medium text-uwinn-purple flex items-center">
                <span>🔹 WhatsApp</span>
              </h3>
              <p className="text-uwinn-purple/90 mt-1">
                Need direct assistance or want to place an order quickly? Reach us on WhatsApp for instant communication.
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-3 border-uwinn-purple/30 text-uwinn-purple hover:bg-uwinn-purple/10"
                onClick={() => window.open("https://whatsapp.com/channel/0029Vaa3hUQCXC3DdWFL3Z2d", "_blank")}
              >
                <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                  <path d="M9 10a0.5 0.5 0 0 0 1 0V9a0.5 0.5 0 0 0-1 0v1zm0 0a5 5 0 0 0 5 5h1a0.5 0.5 0 0 0 0-1h-1a0.5 0.5 0 0 0 0 1"></path>
                </svg>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Theme Toggle */}
      <ThemeToggle />
    </div>
  );
};

export default Index;
