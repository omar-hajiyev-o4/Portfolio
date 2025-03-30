import { useEffect } from 'react';

export const useAnimation = (selector, options = {}) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate');
          }, index * 100);
        } else {
          entry.target.classList.remove('animate'); 
        }
      });
    }, options);

    elements.forEach(el => observer.observe(el));
    return () => elements.forEach(el => observer.unobserve(el));
  }, [selector, options]);
};