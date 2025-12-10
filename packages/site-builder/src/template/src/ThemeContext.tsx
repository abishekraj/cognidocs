import React, { createContext, useContext, useEffect, useState } from 'react';
import { themes, getThemeById, type Theme } from './themes';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  availableThemes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'cognidocs-theme-id';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize from localStorage or default to GitBook Light
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedId = localStorage.getItem(THEME_STORAGE_KEY);
      if (savedId) {
        const savedTheme = getThemeById(savedId);
        if (savedTheme) return savedTheme;
      }
    }
    // Default to GitBook Light
    return themes[0];
  });

  useEffect(() => {
    const root = document.documentElement;

    // Apply theme mode (light/dark)
    if (theme.mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Apply theme colors as CSS variables
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });

    // Save theme ID to localStorage
    localStorage.setItem(THEME_STORAGE_KEY, theme.id);

    // Set data attribute for theme-specific styling
    root.setAttribute('data-theme', theme.id);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, availableThemes: themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
