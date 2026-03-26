
import { TrendingUp } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const stats = [
  { value: "100K+", label: "Downloads" },
  { value: "4.8", label: "App Rating" },
  { value: "50K+", label: "Active Users" },
  { value: "25+", label: "Countries" },
];

const StatsSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full bg-uwinn-purple text-white py-10 md:py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-2 mb-8 md:mb-12">
          <TrendingUp className="h-5 md:h-6 w-5 md:w-6 text-uwinn-accent" />
          <h2 className="text-xl md:text-2xl font-bold tracking-wide">Our Growth</h2>
        </div>
        
        <div className={`grid grid-cols-2 ${isMobile ? 'gap-3' : 'md:grid-cols-4 gap-6'} text-center`}>
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="bg-white/10 backdrop-blur-md p-5 md:p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-3xl md:text-5xl font-extrabold mb-1 md:mb-2 text-uwinn-accent">{stat.value}</div>
              <div className="text-xs md:text-sm uppercase tracking-widest opacity-70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
