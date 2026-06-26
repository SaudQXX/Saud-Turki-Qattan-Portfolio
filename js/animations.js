/**
 * Animations JavaScript
 * Initializes Intersection Observer for scroll animations
 */

function initAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
  });
}

document.addEventListener('DOMContentLoaded', initAnimations);
window.addEventListener('init-animations', initAnimations);
