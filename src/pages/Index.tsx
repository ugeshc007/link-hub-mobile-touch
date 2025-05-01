
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Apple, Smartphone, Instagram, Facebook } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-purple-100 p-4">
      <div className="w-full max-w-3xl text-center space-y-8">
        <div>
          <h1 className="text-5xl font-bold mb-4 text-purple-900">UWINN Mobil App</h1>
          <p className="text-xl text-purple-700 mb-8">Download our app now for iOS, Android, and Huawei devices</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* iOS Card */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-[#000000] overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-50">
              <CardTitle className="flex items-center justify-center gap-2">
                <Apple className="h-8 w-8 text-black" />
                <span>iOS App</span>
              </CardTitle>
              <CardDescription>Coming Soon to App Store</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex justify-center items-center py-10 bg-gray-50 rounded-lg mb-4">
                {/* Apple App Store logo */}
                <div className="flex flex-col items-center">
                  <Apple className="h-24 w-24 text-black" />
                  <div className="text-center mt-2 font-bold text-lg">App Store</div>
                </div>
              </div>
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-semibold">COMING SOON</span>
                </div>
                <p className="text-sm text-gray-600">Our iOS app is currently under development. Stay tuned for updates!</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center bg-gradient-to-r from-gray-100 to-gray-50">
              <Button className="w-full" size="lg" variant="outline" disabled>
                <Apple className="mr-2" />
                Coming Soon
              </Button>
            </CardFooter>
          </Card>

          {/* Android Card */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-[#3DDC84] overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
              <CardTitle className="flex items-center justify-center gap-2">
                <Smartphone className="h-8 w-8 text-[#3DDC84]" />
                <span>Android App</span>
              </CardTitle>
              <CardDescription>Get it on Google Play</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex justify-center items-center py-10 bg-[#3DDC84]/10 rounded-lg mb-4">
                {/* Google Play Store logo */}
                <div className="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="96" height="96">
                    <path fill="#4db6ac" d="M7.705,4.043C7.292,4.15,7,4.507,7,5.121v37.758c0,0.614,0.292,0.971,0.705,1.078l22.607-19.957 L7.705,4.043z"/>
                    <path fill="#dce775" d="M33.237,18.36l-2.925-1.6l-22.607,20l22.607,20l2.925-1.6l6.594-5.806L41,43.922V4.078 l-1.169-0.68L33.237,18.36z"/>
                    <path fill="#d32f2f" d="M8.417,43.802L30.97,24L8.417,4.198C8.137,4.337,7.975,4.687,7.975,5.121v37.758 C7.975,43.313,8.137,43.663,8.417,43.802z"/>
                    <path fill="#fbc02d" d="M41.142,24l-7.905-7.905l-2.242,1.381l6.283,6.524l-6.283,6.524l2.242,1.381L41.142,24z"/>
                  </svg>
                  <div className="text-center mt-2 font-bold text-lg">Play Store</div>
                </div>
              </div>
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">AVAILABLE</span>
                  <span className="text-sm text-gray-500">Version 1.2.5</span>
                </div>
                <p className="text-sm text-gray-600">Download our feature-rich UWINN Android app with customization options.</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center bg-gradient-to-r from-green-50 to-blue-50">
              <Button 
                className="w-full" 
                size="lg" 
                variant="secondary" 
                style={{backgroundColor: "#3DDC84", color: "#000000"}}
                onClick={() => window.open("https://play.google.com/store/apps/details?id=com.uwinn.app&pcampaignid=web_share", "_blank")}
              >
                <Smartphone className="mr-2" />
                Download for Android
              </Button>
            </CardFooter>
          </Card>
          
          {/* Huawei AppGallery Card */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-[#C41E3A] overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-red-50 to-blue-50">
              <CardTitle className="flex items-center justify-center gap-2">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#C41E3A"/>
                  <path d="M11.99 6L8.97 11.79L6 17.59H17.98L15.01 11.79L11.99 6Z" fill="white"/>
                </svg>
                <span>Huawei App</span>
              </CardTitle>
              <CardDescription>Available on AppGallery</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex justify-center items-center py-10 bg-[#C41E3A]/10 rounded-lg mb-4">
                {/* Huawei AppGallery logo */}
                <div className="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="96" height="96">
                    <circle cx="24" cy="24" r="20" fill="#C41E3A" />
                    <path d="M24 8L18 22L12 36H36L30 22L24 8Z" fill="white" />
                  </svg>
                  <div className="text-center mt-2 font-bold text-lg">AppGallery</div>
                </div>
              </div>
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-semibold">AVAILABLE</span>
                  <span className="text-sm text-gray-500">Version 1.2.5</span>
                </div>
                <p className="text-sm text-gray-600">Get our app on Huawei devices through the AppGallery store.</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center bg-gradient-to-r from-red-50 to-blue-50">
              <Button 
                className="w-full" 
                size="lg" 
                variant="secondary" 
                style={{backgroundColor: "#C41E3A", color: "#FFFFFF"}}
                onClick={() => window.open("https://appgallery.cloud.huawei.com/ag/n/app/C114029649?locale=en_US&source=appshare&subsource=C114029649", "_blank")}
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="white"/>
                  <path d="M11.99 6L8.97 11.79L6 17.59H17.98L15.01 11.79L11.99 6Z" fill="#C41E3A"/>
                </svg>
                Download for Huawei
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-purple-900">Experience UWINN on all devices</h2>
          <p className="text-purple-700 mb-6">
            Download our UWINN app today and enjoy a seamless mobile experience on your preferred platform.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <Button 
              variant="outline" 
              size="lg" 
              className="flex gap-2 border-purple-500 text-purple-700 hover:bg-purple-50"
              onClick={() => window.open("https://www.instagram.com/uwinn.official", "_blank")}
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="flex gap-2 border-purple-500 text-purple-700 hover:bg-purple-50"
              onClick={() => window.open("https://www.facebook.com/uwinn.updates", "_blank")}
            >
              <Facebook className="h-5 w-5" />
              Facebook
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="flex gap-2 border-purple-500 text-purple-700 hover:bg-purple-50"
              onClick={() => window.open("https://whatsapp.com/channel/0029Vaa3hUQCXC3DdWFL3Z2d", "_blank")}
            >
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                <path d="M9 10a0.5 0.5 0 0 0 1 0V9a0.5 0.5 0 0 0-1 0v1zm0 0a5 5 0 0 0 5 5h1a0.5 0.5 0 0 0 0-1h-1a0.5 0.5 0 0 0 0 1"></path>
              </svg>
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
