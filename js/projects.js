function renderExperience(experience, lang, containerId = 'experience-timeline') {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = '';
  
  if (!experience || experience.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="text-align: center; padding: 3rem 1rem; border: 1.5px dashed var(--border-color); border-radius: var(--border-radius); background: rgba(255,255,255,0.01);">
        <p style="color: var(--text-color); margin-bottom: 0.5rem; font-weight: 500;">${lang === 'ar' ? 'لا توجد خبرات مضافة حالياً' : 'No experiences added yet'}</p>
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
    
    const imageLink = exp.image || exp.certificate || '';
    const hasMedia = !!imageLink;
    
    let mediaHTML = '';
    if (exp.image) {
      mediaHTML = `
        <div class="experience-image-container" style="margin-top: 1rem; border-radius: 8px; overflow: hidden; max-height: 250px; border: 1px solid var(--border-color); background: rgba(255,255,255,0.03);">
          <img src="${exp.image}" alt="${title}" style="width: 100%; height: auto; max-height: 250px; object-fit: contain; display: block; margin: 0 auto;" referrerPolicy="no-referrer">
        </div>
      `;
    }
    
    const certificateHTML = hasMedia ? `
      <div class="experience-actions" style="margin-top: 1rem; display: flex; gap: 0.5rem;">
        <a href="${imageLink}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="font-size: 0.8rem; padding: 0.4rem 0.8rem; gap: 0.25rem; display: inline-flex; align-items: center; border-radius: 6px; text-decoration: none; border: 1px solid var(--border-color); background: transparent; color: var(--text-color); cursor: pointer; transition: all 0.2s;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
          <span>${lang === 'ar' ? 'عرض الشهادة' : 'View Certificate'}</span>
        </a>
      </div>
    ` : '';
    
    const item = document.createElement('div');
    item.className = `timeline-item reveal slide-right ${delayClass}`;
    item.innerHTML = `
      <div class="timeline-content">
        <div class="timeline-year">${exp.year}</div>
        <h3 class="timeline-title">${title}</h3>
        <p class="timeline-desc">${desc}</p>
        ${mediaHTML}
        ${certificateHTML}
      </div>
    `;
    container.appendChild(item);
  });
  
  setTimeout(() => {
    revealElements();
  }, 100);
}
