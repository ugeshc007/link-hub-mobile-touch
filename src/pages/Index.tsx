
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Apple, Smartphone } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 p-4">
      <div className="w-full max-w-3xl text-center space-y-8">
        <div>
          <h1 className="text-5xl font-bold mb-4 text-blue-900">My Mobile App</h1>
          <p className="text-xl text-blue-700 mb-8">Download our app now for iOS and Android</p>
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
              <AspectRatio ratio={9/16} className="bg-black rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=1200" 
                  alt="iOS App Screenshot" 
                  className="h-full w-full object-cover"
                />
              </AspectRatio>
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold">NEW</span>
                  <span className="text-sm text-gray-500">Version 2.5.1</span>
                </div>
                <p className="text-sm text-gray-600">Experience our premium iOS app with exclusive features.</p>
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
              <AspectRatio ratio={9/16} className="bg-black rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&h=1200" 
                  alt="Android App Screenshot" 
                  className="h-full w-full object-cover"
                />
              </AspectRatio>
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">POPULAR</span>
                  <span className="text-sm text-gray-500">Version 2.4.8</span>
                </div>
                <p className="text-sm text-gray-600">Our feature-rich Android app with customization options.</p>
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
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">Experience our app on all devices</h2>
          <p className="text-blue-700 mb-6">
            Download our app today and enjoy a seamless mobile experience on your preferred platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="lg">
              <Smartphone className="mr-2" />
              Learn More
            </Button>
            <Button variant="outline" size="lg" className="border-blue-500 text-blue-500 hover:bg-blue-50">
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
