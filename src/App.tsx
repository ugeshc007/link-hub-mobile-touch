
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet";
import { Menu } from "lucide-react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          {/* Mobile Menu */}
          <div className="fixed top-4 right-4 z-50">
            <Sheet>
              <SheetTrigger asChild>
                <button className="bg-uwinn-purple text-white p-2 rounded-full shadow-lg">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  <a href="/" className="px-4 py-2 hover:bg-uwinn-purple/10 rounded-md transition-colors">
                    Home
                  </a>
                  <a href="/faq" className="px-4 py-2 hover:bg-uwinn-purple/10 rounded-md transition-colors">
                    FAQ
                  </a>
                  <a href="/contact" className="px-4 py-2 hover:bg-uwinn-purple/10 rounded-md transition-colors">
                    Contact
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
