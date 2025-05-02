
import { MessageSquareHeart } from "lucide-react";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const testimonials = [
  {
    name: "Sarah L.",
    avatar: "SL",
    rating: 5,
    text: "UWINN has completely transformed how I shop. The app is intuitive and offers amazing deals!"
  },
  {
    name: "Michael T.",
    avatar: "MT",
    rating: 5,
    text: "I've been using UWINN for 6 months and the customer service is exceptional. Highly recommend!"
  },
  {
    name: "Jessica K.",
    avatar: "JK",
    rating: 4,
    text: "Great selection of products and the delivery is always on time. The app is very easy to navigate."
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto py-8 md:py-12 px-4">
      <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
        <MessageSquareHeart className="text-uwinn-purple h-5 md:h-6 w-5 md:w-6" />
        <h2 className="text-xl md:text-2xl font-semibold text-uwinn-purple">What Our Users Say</h2>
      </div>
      
      <div className="relative h-auto md:h-64">
        {testimonials.map((testimonial, idx) => (
          <div 
            key={idx}
            className={`${isMobile ? "" : "absolute w-full"} transition-all duration-500 transform ${
              idx === activeIndex 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 translate-x-full hidden md:block"
            }`}
          >
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 border border-uwinn-purple/20">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-uwinn-purple text-white flex items-center justify-center font-bold mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-uwinn-purple">{testimonial.name}</p>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-3 h-3 md:w-4 md:h-4 ${i < testimonial.rating ? "text-yellow-500" : "text-gray-300"}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-600 italic">&ldquo;{testimonial.text}&rdquo;</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${
              idx === activeIndex ? "bg-uwinn-purple" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
