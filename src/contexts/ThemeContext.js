import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for saved theme preference or default to system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Check system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(systemPrefersDark);
    }
  }, []);

  // Apply theme to document body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: {
      // Background colors
      background: isDarkMode ? '#0f172a' : '#ffffff',
      backgroundSecondary: isDarkMode ? '#1e293b' : '#f8fafc',
      backgroundTertiary: isDarkMode ? '#334155' : '#f1f5f9',
      
      // Surface colors (cards, modals, etc.)
      surface: isDarkMode ? '#1e293b' : '#ffffff',
      surfaceElevated: isDarkMode ? '#334155' : '#ffffff',
      
      // Text colors
      text: isDarkMode ? '#f8fafc' : '#1e293b',
      textSecondary: isDarkMode ? '#cbd5e1' : '#64748b',
      textMuted: isDarkMode ? '#94a3b8' : '#94a3b8',
      
      // Border colors
      border: isDarkMode ? '#334155' : '#e2e8f0',
      borderLight: isDarkMode ? '#475569' : '#f1f5f9',
      
      // Primary brand colors (remain consistent)
      primary: '#4f46e5',
      primaryDark: '#3730a3',
      primaryLight: '#6366f1',
      
      // Secondary colors
      secondary: '#14b8a6',
      secondaryDark: '#0f766e',
      secondaryLight: '#2dd4bf',
      
      // Status colors
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
      
      // Hover states
      hover: isDarkMode ? '#475569' : '#f1f5f9',
      activeBackground: isDarkMode ? '#475569' : '#e2e8f0',
      
      // Header specific colors
      headerBackground: isDarkMode ? '#1e293b' : '#1f2937', // Keep dark header in both modes
      headerText: '#ffffff', // Always white text on dark header
      headerBorder: isDarkMode ? '#475569' : '#374151',
      
      // Shadows
      shadow: isDarkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)',
      shadowMedium: isDarkMode ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.15)',
      shadowLarge: isDarkMode ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.25)',
    },
    
    // Gradients
    gradients: {
      primary: isDarkMode 
        ? 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)'
        : 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)',
      secondary: isDarkMode
        ? 'linear-gradient(135deg, #14b8a6 0%, #2dd4bf 100%)'
        : 'linear-gradient(135deg, #14b8a6 0%, #2dd4bf 100%)',
      hero: isDarkMode
        ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
        : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      card: isDarkMode
        ? 'linear-gradient(145deg, #1e293b 0%, #334155 100%)'
        : 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};