import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Apple, Smartphone, Instagram, Facebook, MessageCircle, Youtube, Globe, CheckCircle } from "lucide-react";
import StatsSection from "@/components/StatsSection";
import { useIsMobile } from "@/hooks/use-mobile";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section with Downloads - Optimized for mobile */}
      <div className="w-full uwinn-gradient py-8 md:py-16 px-4">
        <div className="w-full max-w-3xl mx-auto text-center space-y-6">
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-white">UWINN Mobile App</h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 md:mb-8">Download our app now for iOS, Android, and Huawei devices</p>
          </div>
          
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'md:grid-cols-3 gap-6'} animate-fade-in`} style={{animationDelay: "0.2s"}}>
            {/* Android Card */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <CardHeader className="bg-green-50 pb-4 border-b">
                <div className="w-12 h-12 mx-auto bg-[#3DDC84] rounded-full flex items-center justify-center mb-2">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Android App</CardTitle>
                <CardDescription>Get it on Google Play</CardDescription>
                <div className="flex items-center justify-center mt-2">
                  <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200 flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" />
                    <span>Available v2.5.1</span>
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow"></CardContent>
              <CardFooter className="bg-green-50 border-t p-3">
                <Button 
                  className="w-full font-semibold rounded-md shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl text-white" 
                  style={{backgroundColor: "#000000"}}
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
                <div className="flex items-center justify-center mt-2">
                  <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200 flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" />
                    <span>Available v2.5.1</span>
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow"></CardContent>
              <CardFooter className="bg-red-50 border-t p-3">
                <Button 
                  className="w-full font-semibold rounded-md shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl text-white" 
                  style={{backgroundColor: "#000000"}}
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
                <div className="flex items-center justify-center mt-2">
                  <Badge variant="outline" className="bg-gray-100 text-gray-500 border-gray-200 flex items-center gap-1">
                    <span>Coming Soon</span>
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow"></CardContent>
              <CardFooter className="bg-gray-50 border-t p-3">
                <Button 
                  className="w-full text-white font-semibold rounded-md shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  style={{backgroundColor: "#000000"}}
                  disabled
                >
                  <Apple className="mr-2 h-4 w-4" />
                  Coming Soon
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Facebook Pages Section */}
      <div className="w-full max-w-3xl mx-auto mt-12 mb-6 p-4 md:p-6 bg-blue-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-[#1877F2]">Our Facebook Pages</h2>
        <p className="text-uwinn-purple mb-6">
          Connect with us on Facebook to stay updated with our latest announcements, events, and promotions:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Main Facebook Page */}
          <Card className="shadow-md hover:shadow-xl transition-all duration-300 border border-[#1877F2]/20">
            <CardHeader className="bg-gradient-to-r from-[#1877F2]/10 to-[#1877F2]/5 pb-4 border-b">
              <div className="bg-[#1877F2] p-3 rounded-full mb-2 w-12 h-12 mx-auto flex items-center justify-center">
                <Facebook className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg text-[#1877F2]">UWINN Updates</CardTitle>
              <CardDescription>Official announcements and updates</CardDescription>
            </CardHeader>
            <CardContent className="py-4">
              <p className="text-sm text-gray-600">
                Follow our main updates page for official announcements, product releases, and important news.
              </p>
            </CardContent>
            <CardFooter className="bg-gradient-to-r from-[#1877F2]/10 to-[#1877F2]/5 border-t p-4 flex justify-center">
              <Button 
                variant="outline"
                className="border-[#1877F2] text-[#1877F2] hover:bg-[#1877F2]/10"
                onClick={() => window.open("https://facebook.com/uwinn.updates", "_blank")}
              >
                <Facebook className="mr-2 h-4 w-4" />
                Visit Page
              </Button>
            </CardFooter>
          </Card>
          
          {/* Live Facebook Page */}
          <Card className="shadow-md hover:shadow-xl transition-all duration-300 border border-[#1877F2]/20">
            <CardHeader className="bg-gradient-to-r from-[#1877F2]/10 to-[#1877F2]/5 pb-4 border-b">
              <div className="bg-[#1877F2] p-3 rounded-full mb-2 w-12 h-12 mx-auto flex items-center justify-center">
                <Facebook className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg text-[#1877F2]">UWINN Live</CardTitle>
              <CardDescription>Live events and community interactions</CardDescription>
            </CardHeader>
            <CardContent className="py-4">
              <p className="text-sm text-gray-600">
                Join our live community page for interactive sessions, live events, and community discussions.
              </p>
            </CardContent>
            <CardFooter className="bg-gradient-to-r from-[#1877F2]/10 to-[#1877F2]/5 border-t p-4 flex justify-center">
              <Button 
                variant="outline"
                className="border-[#1877F2] text-[#1877F2] hover:bg-[#1877F2]/10"
                onClick={() => window.open("https://facebook.com/uwinn.live", "_blank")}
              >
                <Facebook className="mr-2 h-4 w-4" />
                Visit Page
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      {/* Our Digital Platforms Section */}
      <div className="w-full max-w-3xl mx-auto mt-12 mb-12 p-4 md:p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-uwinn-purple">Our Digital Platforms</h2>
        <p className="text-uwinn-purple mb-6">
          We're committed to staying connected and accessible wherever you are. You can reach us and stay updated through the following platforms:
        </p>
        
        <div className="space-y-4">
          {/* Instagram Platform */}
          <div className="p-4 border border-[#E1306C]/20 rounded-lg bg-gradient-to-r from-[#FCAF45]/5 to-[#E1306C]/5 flex items-start">
            <div className="bg-gradient-to-br from-[#FCAF45] via-[#E1306C] to-[#833AB4] p-3 rounded-full mr-4 shadow-md flex-shrink-0">
              <Instagram className="h-6 w-6 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-medium text-[#E1306C] flex items-center">
                <span>Instagram</span>
              </h3>
              <p className="text-uwinn-purple/90 mt-1">
                Follow us on Instagram for quick updates, behind-the-scenes glimpses, and engaging visual content.
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-3 border-[#E1306C]/30 text-[#E1306C] hover:bg-[#E1306C]/10"
                onClick={() => window.open("https://www.instagram.com/uwinn.official", "_blank")}
              >
                <Instagram className="h-4 w-4 mr-2" />
                Follow Us
              </Button>
            </div>
          </div>
          
          {/* Facebook Platform */}
          <div className="p-4 border border-[#1877F2]/20 rounded-lg bg-[#1877F2]/5 flex items-start">
            <div className="bg-[#1877F2] p-3 rounded-full mr-4 shadow-md flex-shrink-0">
              <Facebook className="h-6 w-6 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-medium text-[#1877F2] flex items-center">
                <span>Facebook</span>
              </h3>
              <p className="text-uwinn-purple/90 mt-1">
                Join our Facebook community to connect with our team, stay informed on announcements and promotions.
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-3 border-[#1877F2]/30 text-[#1877F2] hover:bg-[#1877F2]/10"
                onClick={() => window.open("https://www.facebook.com/uwinn.updates", "_blank")}
              >
                <Facebook className="h-4 w-4 mr-2" />
                Join Us
              </Button>
            </div>
          </div>

          {/* YouTube Platform */}
          <div className="p-4 border border-[#FF0000]/20 rounded-lg bg-[#FF0000]/5 flex items-start">
            <div className="bg-[#FF0000] p-3 rounded-full mr-4 shadow-md flex-shrink-0">
              <Youtube className="h-6 w-6 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-medium text-[#FF0000] flex items-center">
                <span>YouTube</span>
              </h3>
              <p className="text-uwinn-purple/90 mt-1">
                Subscribe to our YouTube channel for video tutorials, product demonstrations, and exclusive content.
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-3 border-[#FF0000]/30 text-[#FF0000] hover:bg-[#FF0000]/10"
                onClick={() => window.open("https://youtube.com/@uwinn-live?si=tNDbTwU-pQlEJnku", "_blank")}
              >
                <Youtube className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
          
          {/* WhatsApp Platform */}
          <div className="p-4 border border-[#25D366]/20 rounded-lg bg-[#25D366]/5 flex items-start">
            <div className="bg-[#25D366] p-3 rounded-full mr-4 shadow-md flex-shrink-0">
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                <path d="M9 10a0.5 0.5 0 0 0 1 0V9a0.5 0.5 0 0 0-1 0v1zm0 0a5 5 0 0 0 5 5h1a0.5 0.5 0 0 0 0-1h-1a0.5 0.5 0 0 0 0 1"></path>
              </svg>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-medium text-[#25D366] flex items-center">
                <span>WhatsApp</span>
              </h3>
              <p className="text-uwinn-purple/90 mt-1">
                Need direct assistance or want to place an order quickly? Reach us on WhatsApp for instant communication.
              </p>
              <div className="flex flex-col space-y-3 mt-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/10"
                  onClick={() => window.open("https://api.whatsapp.com/send/?phone=971564367791&text=Hello%20there!&type=phone_number&app_absent=0", "_blank")}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Customer Care: +971 564367791
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/10"
                  onClick={() => window.open("https://whatsapp.com/channel/0029Vaa3hUQCXC3DdWFL3Z2d", "_blank")}
                >
                  <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                    <path d="M9 10a0.5 0.5 0 0 0 1 0V9a0.5 0.5 0 0 0-1 0v1zm0 0a5 5 0 0 0 5 5h1a0.5 0.5 0 0 0 0-1h-1a0.5 0.5 0 0 0 0 1"></path>
                  </svg>
                  WhatsApp Channel
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/10"
                  onClick={() => window.open("https://whatsapp.com/channel/0029Vb5aczmEQIahTQ0nrW2B", "_blank")}
                >
                  <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                    <path d="M9 10a0.5 0.5 0 0 0 1 0V9a0.5 0.5 0 0 0-1 0v1zm0 0a5 5 0 0 0 5 5h1a0.5 0.5 0 0 0 0-1h-1a0.5 0.5 0 0 0 0 1"></path>
                  </svg>
                  Alternative Channel
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
