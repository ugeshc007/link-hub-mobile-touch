
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Apple, Smartphone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 p-4">
      <div className="w-full max-w-3xl text-center space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-blue-900">My Mobile App</h1>
          <p className="text-xl text-blue-700 mb-8">Download our app now for iOS and Android</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Apple className="h-6 w-6" />
                iOS App
              </CardTitle>
              <CardDescription>Get it on the App Store</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt="iOS App Screenshot" 
                  className="h-48 rounded-md object-contain"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button className="w-full" size="lg">
                <Apple className="mr-2" />
                Download for iOS
              </Button>
            </CardFooter>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Smartphone className="h-6 w-6" />
                Android App
              </CardTitle>
              <CardDescription>Get it on Google Play</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Android App Screenshot" 
                  className="h-48 rounded-md object-contain"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button className="w-full" size="lg" variant="secondary">
                <Smartphone className="mr-2" />
                Download for Android
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">Experience our app on all devices</h2>
          <p className="text-blue-700 mb-6">
            Download our app today and enjoy a seamless mobile experience on your preferred platform.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg">
              <Smartphone className="mr-2" />
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
