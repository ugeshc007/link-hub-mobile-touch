
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Apple, Smartphone } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-purple-100 p-4">
      <div className="w-full max-w-3xl text-center space-y-8">
        <div>
          <h1 className="text-5xl font-bold mb-4 text-purple-900">UWINN Mobil App</h1>
          <p className="text-xl text-purple-700 mb-8">Download our app now for iOS and Android</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* iOS Card */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-[#000000] overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-50">
              <CardTitle className="flex items-center justify-center gap-2">
                <Apple className="h-8 w-8 text-black" />
                <span>iOS App</span>
              </CardTitle>
              <CardDescription>Get it on the App Store</CardDescription>
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
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold">NEW</span>
                  <span className="text-sm text-gray-500">Version 2.5.1</span>
                </div>
                <p className="text-sm text-gray-600">Experience our premium UWINN iOS app with exclusive features.</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center bg-gradient-to-r from-gray-100 to-gray-50">
              <Button className="w-full" size="lg" variant="default">
                <Apple className="mr-2" />
                Download for iOS
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
                {/* Google Play logo */}
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <div className="absolute bg-[#4285F4] w-8 h-16 rounded-r-full left-4"></div>
                    <div className="absolute bg-[#34A853] w-8 h-8 rounded-bl-full bottom-4 left-4"></div>
                    <div className="absolute bg-[#FBBC05] w-8 h-8 rounded-tl-full top-4 left-4"></div>
                    <div className="absolute bg-[#EA4335] w-8 h-16 right-4 overflow-hidden">
                      <div className="bg-[#EA4335] w-16 h-16 rounded-full transform translate-x-8"></div>
                    </div>
                  </div>
                  <div className="text-center mt-2 font-bold text-lg">Play Store</div>
                </div>
              </div>
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">POPULAR</span>
                  <span className="text-sm text-gray-500">Version 2.4.8</span>
                </div>
                <p className="text-sm text-gray-600">Our feature-rich UWINN Android app with customization options.</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center bg-gradient-to-r from-green-50 to-blue-50">
              <Button className="w-full" size="lg" variant="secondary" style={{backgroundColor: "#3DDC84", color: "#000000"}}>
                <Smartphone className="mr-2" />
                Download for Android
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-purple-900">Experience UWINN on all devices</h2>
          <p className="text-purple-700 mb-6">
            Download our UWINN app today and enjoy a seamless mobile experience on your preferred platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="lg">
              <Smartphone className="mr-2" />
              Learn More
            </Button>
            <Button variant="outline" size="lg" className="border-purple-500 text-purple-500 hover:bg-purple-50">
              <Apple className="mr-2" />
              Compare Versions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
