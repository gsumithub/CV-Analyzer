import { createContext, useContext, useEffect, useState } from 'react';

// Create a theme context with default values
const ThemeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

// Custom hook to access the theme context
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
  // Check local storage for saved theme preference or use system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      return savedTheme === 'true';
    }
    // Check system preference if no saved preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Update local storage and apply dark mode class to html element
  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  // Return provider with theme context value
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext; 