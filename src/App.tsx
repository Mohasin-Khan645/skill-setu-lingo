import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/main-layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import TranslationHub from "./pages/TranslationHub";
import ContentLibrary from "./pages/ContentLibrary";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <MainLayout>
              <Home />
            </MainLayout>
          } />
          <Route path="/dashboard" element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          } />
          <Route path="/translate" element={
            <MainLayout>
              <TranslationHub />
            </MainLayout>
          } />
          <Route path="/content" element={
            <MainLayout>
              <ContentLibrary />
            </MainLayout>
          } />
          <Route path="/content/text" element={
            <MainLayout>
              <ContentLibrary />
            </MainLayout>
          } />
          <Route path="/content/audio" element={
            <MainLayout>
              <ContentLibrary />
            </MainLayout>
          } />
          <Route path="/content/video" element={
            <MainLayout>
              <ContentLibrary />
            </MainLayout>
          } />
          <Route path="/content/assessments" element={
            <MainLayout>
              <ContentLibrary />
            </MainLayout>
          } />
          <Route path="/analytics" element={
            <MainLayout>
              <Analytics />
            </MainLayout>
          } />
          <Route path="/profile" element={
            <MainLayout>
              <Profile />
            </MainLayout>
          } />
          <Route path="/settings" element={
            <MainLayout>
              <Settings />
            </MainLayout>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
