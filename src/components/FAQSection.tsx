
import { MessageSquareQuestion } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

const faqs = [
  {
    question: "How do I download the UWINN app?",
    answer: "You can download the UWINN app from Google Play Store for Android devices, Huawei App Gallery for Huawei devices, and soon from the Apple App Store for iOS devices. Just click on the download buttons at the top of this page."
  },
  {
    question: "Is the UWINN app free to download?",
    answer: "Yes, the UWINN app is completely free to download and use. There are no hidden charges or subscription fees."
  },
  {
    question: "Which devices are compatible with the UWINN app?",
    answer: "The UWINN app is compatible with Android devices (version 7.0 and above), Huawei devices with AppGallery, and soon will be available for iOS devices (iPhone and iPad)."
  },
  {
    question: "How do I create an account on the UWINN app?",
    answer: "After downloading the app, open it and tap on the 'Sign Up' button. You can create an account using your email address, phone number, or through your social media accounts."
  },
  {
    question: "Is my personal information safe on the UWINN app?",
    answer: "Yes, we take data security very seriously. All personal information is encrypted and stored securely. We never share your data with third parties without your consent."
  },
  {
    question: "How do I contact customer support?",
    answer: "You can contact our customer support team through the app's Help section, via email at support@uwinn.com, or through our social media platforms listed on this page."
  }
];

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(current => 
      current.includes(index)
        ? current.filter(item => item !== index)
        : [...current, index]
    );
  };

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-10">
          <MessageSquareQuestion className="text-uwinn-purple h-6 w-6" />
          <h2 className="text-2xl font-semibold text-uwinn-purple">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-uwinn-purple/20 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow transition-shadow duration-300"
            >
              <Collapsible open={openItems.includes(index)}>
                <CollapsibleTrigger 
                  className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
                  onClick={() => toggleItem(index)}
                >
                  <h3 className="font-medium text-lg text-uwinn-purple">{faq.question}</h3>
                  <div 
                    className={`h-6 w-6 rounded-full flex items-center justify-center border border-uwinn-purple/20 transition-transform duration-300 ${
                      openItems.includes(index) ? "rotate-180 bg-uwinn-purple text-white" : "bg-white text-uwinn-purple"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 pt-0 text-gray-600 border-t border-uwinn-purple/10 animate-accordion-down bg-uwinn-purple/5">
                  {faq.answer}
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
