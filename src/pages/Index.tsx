
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Apple, Smartphone, Instagram, Facebook, MessageSquare } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-purple-100 p-4">
      <div className="w-full max-w-3xl text-center space-y-8">
        <div>
          <h1 className="text-5xl font-bold mb-4 text-purple-900">UWINN Mobil App</h1>
          <p className="text-xl text-purple-700 mb-8">Download our app now for iOS, Android, and Huawei devices</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-semibold inline-flex items-center">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-1"></span>
                    COMING SOON
                  </span>
                </div>
                <p className="text-xs text-gray-600">Our iOS app is currently under development.</p>
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
                    src="/lovable-uploads/515efab5-037c-42b8-9319-aed74d6acd7c.png" 
                    alt="Google Play Store" 
                    className="w-12 h-12 object-contain" 
                  />
                </div>
                <div className="text-center mt-1 font-bold text-sm">Play Store</div>
              </div>
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold inline-flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-1"></span>
                    AVAILABLE
                  </span>
                  <span className="text-xs text-gray-500">v1.2.5</span>
                </div>
                <p className="text-xs text-gray-600">Feature-rich Android app with customization options.</p>
              </div>
            </CardContent>
            <CardFooter className="bg-green-50 border-t p-3">
              <Button 
                className="w-full font-semibold rounded-md shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl text-black" 
                style={{backgroundColor: "#3DDC84"}}
                onClick={() => window.open("https://play.google.com/store/apps/details?id=com.uwinn.app&pcampaignid=web_share", "_blank")}
              >
                <Smartphone className="mr-2 h-4 w-4" />
                Download
              </Button>
            </CardFooter>
          </Card>
          
          {/* Huawei AppGallery Card */}
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
            <CardHeader className="bg-red-50 pb-4 border-b">
              <div className="w-12 h-12 mx-auto bg-[#C41E3A] rounded-full flex items-center justify-center mb-2">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="white"/>
                  <path d="M11.99 6L8.97 11.79L6 17.59H17.98L15.01 11.79L11.99 6Z" fill="#C41E3A"/>
                </svg>
              </div>
              <CardTitle className="text-lg">Huawei App</CardTitle>
              <CardDescription>Available on AppGallery</CardDescription>
            </CardHeader>
            <CardContent className="p-4 flex-grow">
              <div className="flex flex-col items-center py-3 bg-red-50 rounded-lg border border-red-100 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48" className="drop-shadow-md">
                  <circle cx="24" cy="24" r="20" fill="#C41E3A" />
                  <path d="M24 8L18 22L12 36H36L30 22L24 8Z" fill="white" />
                </svg>
                <div className="text-center mt-1 font-bold text-sm">AppGallery</div>
              </div>
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-semibold inline-flex items-center">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-1"></span>
                    AVAILABLE
                  </span>
                  <span className="text-xs text-gray-500">v1.2.5</span>
                </div>
                <p className="text-xs text-gray-600">Get our app on Huawei through AppGallery.</p>
              </div>
            </CardContent>
            <CardFooter className="bg-red-50 border-t p-3">
              <Button 
                className="w-full font-semibold rounded-md shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl text-white" 
                style={{backgroundColor: "#C41E3A"}}
                onClick={() => window.open("https://appgallery.cloud.huawei.com/ag/n/app/C114029649?locale=en_US&source=appshare&subsource=C114029649", "_blank")}
              >
                <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="white"/>
                  <path d="M11.99 6L8.97 11.79L6 17.59H17.98L15.01 11.79L11.99 6Z" fill="#C41E3A"/>
                </svg>
                Download
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* Our Digital Platforms Section */}
        <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-purple-900">Our Digital Platforms</h2>
          <p className="text-purple-700 mb-6">
            We're committed to staying connected and accessible wherever you are. You can reach us and stay updated through the following platforms:
          </p>
          
          <div className="space-y-6">
            {/* Instagram Platform */}
            <div className="p-4 border border-purple-200 rounded-lg bg-purple-50 flex items-start">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Instagram className="h-6 w-6 text-purple-700" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-medium text-purple-900 flex items-center">
                  <span>🔹 Instagram</span>
                </h3>
                <p className="text-purple-700 mt-1">
                  Follow us on Instagram for quick updates, behind-the-scenes glimpses, and engaging visual content that brings our brand to life.
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-3 border-purple-300 text-purple-700 hover:bg-purple-100"
                  onClick={() => window.open("https://www.instagram.com/uwinn.official", "_blank")}
                >
                  <Instagram className="h-4 w-4 mr-2" />
                  Follow Us
                </Button>
              </div>
            </div>
            
            {/* Facebook Platform */}
            <div className="p-4 border border-blue-200 rounded-lg bg-blue-50 flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Facebook className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-medium text-blue-900 flex items-center">
                  <span>🔹 Facebook</span>
                </h3>
                <p className="text-blue-700 mt-1">
                  Join our Facebook community to connect with our team, stay informed on announcements, promotions, and customer support.
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-3 border-blue-300 text-blue-700 hover:bg-blue-100"
                  onClick={() => window.open("https://www.facebook.com/uwinn.updates", "_blank")}
                >
                  <Facebook className="h-4 w-4 mr-2" />
                  Join Us
                </Button>
              </div>
            </div>
            
            {/* WhatsApp Platform */}
            <div className="p-4 border border-green-200 rounded-lg bg-green-50 flex items-start">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                  <path d="M9 10a0.5 0.5 0 0 0 1 0V9a0.5 0.5 0 0 0-1 0v1zm0 0a5 5 0 0 0 5 5h1a0.5 0.5 0 0 0 0-1h-1a0.5 0.5 0 0 0 0 1"></path>
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-medium text-green-900 flex items-center">
                  <span>🔹 WhatsApp</span>
                </h3>
                <p className="text-green-700 mt-1">
                  Need direct assistance or want to place an order quickly? Reach us on WhatsApp for instant communication.
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-3 border-green-300 text-green-700 hover:bg-green-100"
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
      </div>
    </div>
  );
};

export default Index;
