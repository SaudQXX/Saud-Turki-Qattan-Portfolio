/**
 * Main JavaScript
 * Handles global configuration, UI interactions, and smooth reveals.
 */

// Global Config
window.CONFIG = {
  github: "https://github.com/SaudQXX",
  discord: "https://discord.com/users/saudqxx",
  email: "saudqattan000@gmail.com",
  ownerName: "Saud Qattan"
};

document.addEventListener('DOMContentLoaded', () => {
  // Update social links
  document.querySelectorAll('[data-link="github"]').forEach(el => {
    el.href = window.CONFIG.github;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });
  document.querySelectorAll('[data-link="discord"]').forEach(el => {
    el.href = window.CONFIG.discord;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });
  document.querySelectorAll('[data-link="email"]').forEach(el => {
    el.href = `mailto:${window.CONFIG.email}`;
  });
  
  // Update texts
  document.querySelectorAll('[data-text="owner"]').forEach(el => el.textContent = window.CONFIG.ownerName);
  document.querySelectorAll('[data-text="year"]').forEach(el => el.textContent = new Date().getFullYear());
  
  // Set active nav link based on current path
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';
  
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === page) {
      link.classList.add('active');
    }
  });

  // Handle missing profile image
  const profileImg = document.getElementById('profile-img');
  if (profileImg) {
    profileImg.onerror = function() {
      // Create a fallback circular placeholder
      const parent = this.parentElement;
      this.style.display = 'none';
      const placeholder = document.createElement('div');
      placeholder.style.width = '100%';
      placeholder.style.height = '100%';
      placeholder.style.backgroundColor = 'var(--bg-card)';
      placeholder.style.border = '1px solid var(--border-color)';
      placeholder.style.borderRadius = '50%';
      placeholder.style.display = 'flex';
      placeholder.style.alignItems = 'center';
      placeholder.style.justifyContent = 'center';
      placeholder.style.fontSize = '4rem';
      placeholder.style.color = 'var(--text-secondary)';
      placeholder.textContent = window.CONFIG.ownerName.charAt(0);
      parent.appendChild(placeholder);
    };
  }
});
