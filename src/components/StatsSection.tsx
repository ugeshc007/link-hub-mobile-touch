
import { TrendingUp } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const StatsSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full bg-uwinn-purple text-white py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6 md:mb-10">
          <TrendingUp className="h-5 md:h-6 w-5 md:w-6" />
          <h2 className="text-xl md:text-2xl font-semibold">Our Growth</h2>
        </div>
        
        <div className={`grid grid-cols-2 ${isMobile ? 'gap-3' : 'md:grid-cols-4 gap-6'} text-center`}>
          <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-lg">
            <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 animate-count-up" data-target="100000">100K+</div>
            <div className="text-xs md:text-sm uppercase tracking-wide opacity-80">Downloads</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-lg">
            <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 animate-count-up" data-target="4.8">4.8</div>
            <div className="text-xs md:text-sm uppercase tracking-wide opacity-80">App Rating</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-lg">
            <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 animate-count-up" data-target="50000">50K+</div>
            <div className="text-xs md:text-sm uppercase tracking-wide opacity-80">Active Users</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-lg">
            <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 animate-count-up" data-target="25">25+</div>
            <div className="text-xs md:text-sm uppercase tracking-wide opacity-80">Countries</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
