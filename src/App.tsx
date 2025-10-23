import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Gustave from "./pages/Gustave";
import Maelle from "./pages/Maelle";
import Lune from "./pages/Lune";
import Sciel from "./pages/Sciel";
import TheHeartOfTheCanvas from "./pages/TheHeartOfTheCanvas";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Gustave" element={<Gustave />} />
          <Route path="/Maelle" element={<Maelle />} />
          <Route path="/Lune" element={<Lune />} />
          <Route path="/Sciel" element={<Sciel />} />
          <Route path="/TheHeartOfTheCanvas" element={<TheHeartOfTheCanvas />} />
          <Route path="/success" element={<Success />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
