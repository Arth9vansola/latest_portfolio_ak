import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const darkTheme = {
    primary: '#050816',
    secondary: '#aaa6c3',
    tertiary: '#151030',
    black100: '#100d25',
    black200: '#090325',
    white100: '#f3f3f3',
    textPrimary: '#ffffff',
    textSecondary: '#aaa6c3',
    gradient: 'from-purple-500 to-blue-500',
    cardBg: '#151030',
    navbarBg: 'rgba(5, 8, 22, 0.9)',
  };

  return (
    <ThemeContext.Provider value={{ 
      isDark: true, 
      theme: darkTheme,
      colors: darkTheme 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};