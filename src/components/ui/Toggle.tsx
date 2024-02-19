"use client"
 
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {motion} from 'framer-motion'

 
export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    // Toggle between light and dark themes directly
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    // Render the button for toggling theme
    <Button onClick={toggleTheme} variant="outline" size='icon' className=" rounded-full text-primary">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}