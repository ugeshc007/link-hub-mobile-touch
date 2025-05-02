
import { LayoutGrid } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const features = [
  {
    title: "Easy Shopping",
    description: "Browse thousands of products with our intuitive interface and advanced filtering options.",
    icon: "🛍️",
  },
  {
    title: "Secure Payments",
    description: "Multiple secure payment options with end-to-end encryption for all transactions.",
    icon: "🔒",
  },
  {
    title: "Fast Delivery",
    description: "Track your orders in real-time with our advanced delivery tracking system.",
    icon: "🚚",
  },
  {
    title: "Exclusive Deals",
    description: "Get access to app-only deals and promotions you won't find anywhere else.",
    icon: "🏷️",
  },
  {
    title: "Customer Support",
    description: "24/7 in-app customer support to assist you with any questions or issues.",
    icon: "💬",
  },
  {
    title: "Wishlist & Favorites",
    description: "Save items for later and create personalized collections of your favorite products.",
    icon: "❤️",
  },
];

const FeaturesSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full bg-gray-50 py-10 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-8 md:mb-10">
          <LayoutGrid className="text-uwinn-purple h-5 md:h-6 w-5 md:w-6" />
          <h2 className="text-xl md:text-2xl font-semibold text-uwinn-purple">App Features</h2>
        </div>
        
        <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-2 lg:grid-cols-3'} gap-4 md:gap-6`}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-4 md:p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300 border border-uwinn-purple/10 hover:border-uwinn-purple/30"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-uwinn-purple/10 rounded-full flex items-center justify-center text-lg md:text-xl mb-3 md:mb-4">
                {feature.icon}
              </div>
              <h3 className="text-base md:text-lg font-medium text-uwinn-purple mb-1 md:mb-2">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
