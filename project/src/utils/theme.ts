export const setTheme = (darkMode: boolean) => {
  // Update the HTML element with the dark class
  if (darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

export const getInitialTheme = (): boolean => {
  // Check local storage first
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme === 'dark';
  }
  
  // Otherwise check user preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};