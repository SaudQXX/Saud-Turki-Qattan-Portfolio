/**
 * Projects JavaScript
 * Dynamically loads and renders projects and experiences from JSON.
 */

async function loadData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(`Could not load data from ${url}:`, error);
    return [];
  }
}

function renderProjects(projects, lang, containerId = 'projects-container', limit = null) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = '';
  
  const projectsToRender = limit ? projects.slice(0, limit) : projects;
  
  if (projectsToRender.length === 0) {
    const emptyMsg = lang === 'ar' ? 'لا توجد مشاريع مضافة حالياً.' : 'No projects currently added.';
    container.innerHTML = `
      <div class="empty-state reveal slide-up" style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; color: var(--text-secondary); border: 1px dashed var(--border-gold); border-radius: var(--radius-lg); background: var(--bg-card); width: 100%; margin-top: 2rem;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 1rem;"><rect width="20" height="14" x="2" y="3" rx="2" ry="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
        <p style="font-size: 1.1rem; font-weight: 500; margin-bottom: 0.5rem; color: var(--text-primary);">${emptyMsg}</p>
        <p style="font-size: 0.85rem; color: var(--text-muted);">${lang === 'ar' ? 'يمكنك إضافة بطاقات مشاريع جديدة في ملف data/projects.json' : 'You can add new project cards in data/projects.json'}</p>
      </div>
    `;
    return;
  }
  
  const hasModal = !!document.getElementById('project-modal');
  
  projectsToRender.forEach((proj, index) => {
    const title = lang === 'ar' && proj.titleAr ? proj.titleAr : proj.title;
    const desc = lang === 'ar' && proj.descriptionAr ? proj.descriptionAr : proj.description;
    const btnText = window.translations ? window.translations[lang].btn_open_project : (lang === 'ar' ? 'فتح المشروع' : 'Open Project');
    
    // Add delay for staggered animation
    const delayClass = `delay-${(index % 5) * 100 + 100}`;
    
    const tagsHTML = proj.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    const onClickAction = proj.demo && proj.demo !== '#' 
      ? `window.open('${proj.demo}', '_blank')` 
      : (hasModal ? `window.openProjectModal('${proj.id}')` : `window.location.href='projects.html'`);
    
    const card = document.createElement('div');
    card.className = `card project-card reveal slide-up ${delayClass} hover-lift`;
    card.innerHTML = `
      <div class="img-zoom-container project-img-wrapper">
        <img src="${proj.image}" alt="${title}" class="project-img" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxMTExMTEiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM1NTUiIGR5PSIuM2VtIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QbGFjZWhvbGRlcjwvdGV4dD48L3N2Zz4='">
      </div>
      <div class="project-content">
        <div class="project-header">
          <h3 class="project-title">${title}</h3>
          <span class="status-badge status-${proj.status.toLowerCase()}">${proj.status}</span>
        </div>
        <p class="project-desc">${desc}</p>
        <div class="project-tags">
          ${tagsHTML}
        </div>
        <div class="project-actions">
          <button class="btn-primary" onclick="${onClickAction}">${btnText}</button>
          <a href="${proj.github && proj.github !== '#' ? proj.github : window.CONFIG.github}" target="_blank" rel="noopener noreferrer" class="icon-btn" title="GitHub">
            <svg class="glow-icon" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="${proj.demo && proj.demo !== '#' ? proj.demo : '#'}" target="${proj.demo && proj.demo !== '#' ? '_blank' : '_self'}" rel="noopener noreferrer" class="icon-btn" title="Demo">
            <svg class="glow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
  
  // Re-trigger observer for new dynamic content
  setTimeout(() => {
    const ev = new Event('init-animations');
    window.dispatchEvent(ev);
  }, 100);
}

function renderExperience(experience, lang, containerId = 'experience-timeline') {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = '';
  
  if (experience.length === 0) {
    const emptyMsg = lang === 'ar' ? 'لا توجد خبرات مضافة حالياً.' : 'No experience currently added.';
    container.innerHTML = `
      <div class="empty-state reveal slide-up" style="text-align: center; padding: 4rem 2rem; color: var(--text-secondary); border: 1px dashed var(--border-gold); border-radius: var(--radius-lg); background: var(--bg-card); width: 100%;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 1rem;"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
        <p style="font-size: 1.1rem; font-weight: 500; margin-bottom: 0.5rem; color: var(--text-primary);">${emptyMsg}</p>
        <p style="font-size: 0.85rem; color: var(--text-muted);">${lang === 'ar' ? 'يمكنك إضافة بطاقات خبرات جديدة في ملف data/experience.json' : 'You can add new experience cards in data/experience.json'}</p>
      </div>
    `;
    container.style.setProperty('--timeline-bar-display', 'none');
    return;
  }
  
  container.style.setProperty('--timeline-bar-display', 'block');
  
  experience.forEach((exp, index) => {
    const title = lang === 'ar' && exp.titleAr ? exp.titleAr : exp.title;
    const desc = lang === 'ar' && exp.descriptionAr ? exp.descriptionAr : exp.description;
    
    const delayClass = `delay-${(index % 5) * 100 + 100}`;
    
    const item = document.createElement('div');
    item.className = `timeline-item reveal slide-right ${delayClass}`;
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content card hover-lift">
        <div class="timeline-year">${exp.year}</div>
        <h3 class="timeline-title">${title}</h3>
        <p class="timeline-desc">${desc}</p>
      </div>
    `;
    container.appendChild(item);
  });
  
  setTimeout(() => {
    const ev = new Event('init-animations');
    window.dispatchEvent(ev);
  }, 100);
}

// Modal Logic
let currentProjects = [];

window.openProjectModal = function(id) {
  const proj = currentProjects.find(p => p.id === id);
  if (!proj) return;
  
  const lang = document.documentElement.lang || 'en';
  const title = lang === 'ar' && proj.titleAr ? proj.titleAr : proj.title;
  const desc = lang === 'ar' && proj.descriptionAr ? proj.descriptionAr : proj.description;
  
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-desc').textContent = desc;
  document.getElementById('modal-img').src = proj.image;
  document.getElementById('modal-img').alt = title;
  document.getElementById('modal-github').href = proj.github && proj.github !== '#' ? proj.github : window.CONFIG.github;
  document.getElementById('modal-demo').href = proj.demo && proj.demo !== '#' ? proj.demo : '#';
  document.getElementById('modal-demo').target = proj.demo && proj.demo !== '#' ? '_blank' : '_self';
  
  const modal = document.getElementById('project-modal');
  modal.classList.add('active');
};

window.closeModal = function() {
  document.getElementById('project-modal').classList.remove('active');
};

document.addEventListener('DOMContentLoaded', async () => {
  const isProjectsPage = !!document.getElementById('main-projects-container');
  const isHomePage = !!document.getElementById('home-projects-grid');
  const isExperiencePage = !!document.getElementById('main-experience-timeline') || !!document.getElementById('experience-timeline');
  
  const defaultLang = document.documentElement.lang || 'ar';
  
  if (isProjectsPage || isHomePage) {
    currentProjects = await loadData('data/projects.json');
    if (isProjectsPage) {
      const mainProjects = currentProjects.filter(p => p.type === 'main');
      const secondaryProjects = currentProjects.filter(p => p.type === 'secondary');
      renderProjects(mainProjects, defaultLang, 'main-projects-container');
      renderProjects(secondaryProjects, defaultLang, 'secondary-projects-container');
    }
    if (isHomePage) {
      const featured = currentProjects.filter(p => p.type === 'main');
      renderProjects(featured, defaultLang, 'home-projects-grid');
    }
  }
  
  if (isExperiencePage) {
    const experienceData = await loadData('data/experience.json');
    if (document.getElementById('main-experience-timeline')) {
      const mainExp = experienceData.filter(e => e.type === 'main');
      const secondaryExp = experienceData.filter(e => e.type === 'secondary');
      renderExperience(mainExp, defaultLang, 'main-experience-timeline');
      renderExperience(secondaryExp, defaultLang, 'secondary-experience-timeline');
    } else {
      renderExperience(experienceData, defaultLang);
    }
    
    // Listen for language changes to re-render
    window.addEventListener('languageChanged', (e) => {
      if (document.getElementById('main-experience-timeline')) {
        const mainExp = experienceData.filter(e => e.type === 'main');
        const secondaryExp = experienceData.filter(e => e.type === 'secondary');
        renderExperience(mainExp, e.detail.lang, 'main-experience-timeline');
        renderExperience(secondaryExp, e.detail.lang, 'secondary-experience-timeline');
      } else {
        renderExperience(experienceData, e.detail.lang);
      }
    });
  }
  
  if (isProjectsPage || isHomePage) {
    window.addEventListener('languageChanged', (e) => {
      if (isProjectsPage) {
        const mainProjects = currentProjects.filter(p => p.type === 'main');
        const secondaryProjects = currentProjects.filter(p => p.type === 'secondary');
        renderProjects(mainProjects, e.detail.lang, 'main-projects-container');
        renderProjects(secondaryProjects, e.detail.lang, 'secondary-projects-container');
      }
      if (isHomePage) {
        const featured = currentProjects.filter(p => p.type === 'main');
        renderProjects(featured, e.detail.lang, 'home-projects-grid');
      }
    });
  }
  
  // Close modal on overlay click
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) window.closeModal();
    });
  }
});
