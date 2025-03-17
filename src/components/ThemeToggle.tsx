
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/ThemeProvider";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative h-10 w-10 rounded-full transition-all duration-500 ease-in-out"
    >
      <Sun
        className={`h-5 w-5 absolute transition-all duration-500 ${
          theme === "light"
            ? "scale-100 rotate-0 opacity-100"
            : "scale-0 rotate-90 opacity-0"
        }`}
      />
      <Moon
        className={`h-5 w-5 absolute transition-all duration-500 ${
          theme === "dark"
            ? "scale-100 rotate-0 opacity-100"
            : "scale-0 rotate-90 opacity-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
