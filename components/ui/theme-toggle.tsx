"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 100);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={cn(
        "flex items-center gap-1 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
    >
      <div className="flex justify-between items-center gap-1">
        <div
          className={cn(
            "flex justify-center items-center w-9 h-9 rounded-full transition-all duration-300",
            isDark ? "bg-muted" : "bg-transparent"
          )}
        >
          <Moon
            className={cn(
              "w-4 h-4 transition-colors duration-300",
              isDark ? "text-primary" : "text-foreground/40"
            )}
            strokeWidth={2}
          />
        </div>
        <div
          className={cn(
            "flex justify-center items-center w-9 h-9 rounded-full transition-all duration-300",
            isDark ? "bg-transparent" : "bg-muted"
          )}
        >
          <Sun
            className={cn(
              "w-4 h-4 transition-colors duration-300",
              isDark ? "text-foreground/40" : "text-primary"
            )}
            strokeWidth={2}
          />
        </div>
      </div>
    </button>
  );
}
