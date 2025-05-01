
import { TrendingUp } from "lucide-react";

const StatsSection = () => {
  return (
    <div className="w-full bg-uwinn-purple text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-10">
          <TrendingUp className="h-6 w-6" />
          <h2 className="text-2xl font-semibold">Our Growth</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
            <div className="text-4xl font-bold mb-2 animate-count-up" data-target="100000">100K+</div>
            <div className="text-sm uppercase tracking-wide opacity-80">Downloads</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
            <div className="text-4xl font-bold mb-2 animate-count-up" data-target="4.8">4.8</div>
            <div className="text-sm uppercase tracking-wide opacity-80">App Rating</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
            <div className="text-4xl font-bold mb-2 animate-count-up" data-target="50000">50K+</div>
            <div className="text-sm uppercase tracking-wide opacity-80">Active Users</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
            <div className="text-4xl font-bold mb-2 animate-count-up" data-target="25">25+</div>
            <div className="text-sm uppercase tracking-wide opacity-80">Countries</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
