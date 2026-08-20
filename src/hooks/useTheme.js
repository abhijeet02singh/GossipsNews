/**
 * Custom hook for managing theme (dark/light mode)
 */

import { useState, useEffect } from 'react';
import { THEMES, THEME_STORAGE_KEY } from '../constants/appConstants';

/**
 * Hook for managing application theme
 * @returns {Object} Theme state and toggle function
 */
export const useTheme = () => {
  const [theme, setTheme] = useState(THEMES.LIGHT);

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? THEMES.DARK : THEMES.LIGHT);
    
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
  };

  const applyTheme = (themeName) => {
    document.documentElement.setAttribute('data-theme', themeName);
  };

  return {
    theme,
    toggleTheme,
    isDark: theme === THEMES.DARK
  };
};
