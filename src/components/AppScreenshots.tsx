
import { FileImage } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const AppScreenshots = () => {
  const isMobile = useIsMobile();
  
  const screenshots = [
    {
      src: "/lovable-uploads/515efab5-037c-42b8-9319-aed74d6acd7c.png",
      alt: "UWINN App Home Screen"
    },
    {
      src: "/lovable-uploads/d5f2d1a1-0acb-40af-b3b0-68978d87141c.png",
      alt: "UWINN App Products"
    },
    {
      src: "/lovable-uploads/ea408620-bd2b-47c8-a875-169d2bdf2b35.png",
      alt: "UWINN App Profile"
    },
    {
      src: "/lovable-uploads/f65f0e03-213e-462f-9e2e-3b4374087774.png",
      alt: "UWINN App Checkout"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-8 md:my-12 px-4">
      <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
        <FileImage className="text-uwinn-purple h-5 md:h-6 w-5 md:w-6" />
        <h2 className="text-xl md:text-2xl font-semibold text-uwinn-purple">App Screenshots</h2>
      </div>
      
      <Carousel className="w-full">
        <CarouselContent>
          {screenshots.map((screenshot, index) => (
            <CarouselItem key={index} className={isMobile ? "basis-full" : "md:basis-1/2 lg:basis-1/3"}>
              <div className="p-1">
                <div className="overflow-hidden rounded-xl border border-uwinn-purple/20 shadow-lg">
                  <div className="bg-uwinn-purple p-2 text-center text-white text-xs md:text-sm">
                    UWINN Mobile App
                  </div>
                  <div className="p-2 md:p-3 bg-gradient-to-b from-white to-gray-50">
                    <img
                      src={screenshot.src}
                      alt={screenshot.alt}
                      className="h-48 md:h-60 w-full object-contain rounded-lg animate-fade-in"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-4">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
};

export default AppScreenshots;
