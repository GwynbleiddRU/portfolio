
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useParams, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";
import MultiImageProjectDetail from "@/pages/MultiImageProjectDetail";
import { getProjectById } from "@/lib/projectData";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/portfolio">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route
              path="/project/:id"
              element={
                <ProjectRouter />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

const ProjectRouter = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  // Route to the appropriate template based on project type
  return project.template === "multi-image"
    ? <MultiImageProjectDetail />
    : <ProjectDetail />;
};

export default App;
