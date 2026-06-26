// useTheme hook - manages theme state
// This will be implemented in future sprints

import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('dark');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Set specific theme
  const setThemeMode = (mode) => {
    setTheme(mode);
    localStorage.setItem('theme', mode);
  };

  return {
    theme,
    toggleTheme,
    setThemeMode,
    isDarkMode: theme === 'dark',
    isLightMode: theme === 'light',
  };
};

export default useTheme;
