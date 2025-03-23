
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  // Detect if we're on a project page
  const isProjectPage = location.pathname.includes("/project/");

  // Handle scroll for glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3 glass" : "py-5 bg-transparent"
        }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {isProjectPage && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/portfolio/")}
              className="mr-2 animate-fade-in"
              aria-label="Back to home"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 hover:-translate-x-1"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </Button>
          )}
          <a
            href="/portfolio/"
            className="text-lg font-medium tracking-tight hover:opacity-80 transition-opacity"
          >
            George Nosachev
          </a>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
            className="relative w-9 h-9 rounded-full overflow-hidden"
          >
            <span className="sr-only">Toggle theme</span>
            <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
              style={{ opacity: theme === "light" ? 0 : 1 }}>
              <Sun className="h-5 w-5" />
            </span>
            <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
              style={{ opacity: theme === "light" ? 1 : 0 }}>
              <Moon className="h-5 w-5" />
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
