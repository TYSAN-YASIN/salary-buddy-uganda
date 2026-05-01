import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import HomeScreen from "./pages/HomeScreen.tsx";
import TransferScreen from "./pages/TransferScreen.tsx";
import ScanScreen from "./pages/ScanScreen.tsx";
import SalaryScreen from "./pages/SalaryScreen.tsx";
import ProfileScreen from "./pages/ProfileScreen.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Index />}>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/transfer" element={<TransferScreen />} />
            <Route path="/scan" element={<ScanScreen />} />
            <Route path="/salary" element={<SalaryScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
