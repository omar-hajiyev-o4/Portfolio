export const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  };
  
  export const getSavedTheme = () => {
    return localStorage.getItem('portfolio-theme') || 'blue';
  };