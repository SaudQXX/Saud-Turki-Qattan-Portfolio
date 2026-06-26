/**
 * Language Switcher JavaScript
 * Handles i18n between English and Arabic
 */

const translations = {
  en: {
    nav_home: "Home",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_contact: "Contact",
    hero_name: "Saud Turki Qattan",
    hero_title: "AI & Web Developer | Systems Builder | Founder of ORYX",
    hero_desc: "Developer and innovator working on AI, web development, systems, and tech ideas, building scalable solutions.",
    role_ai: "AI Developer",
    role_web: "Web Developer",
    role_systems: "Systems Builder",
    role_founder: "Founder of ORYX",
    btn_projects: "View Projects",
    btn_github: "GitHub",
    btn_about: "About",
    about_title: "Who is Saud?",
    about_desc: "I am a developer and innovator dedicated to building future-ready tech projects and scalable systems. My focus lies in Artificial Intelligence, Web Development, and Systems Architecture, bringing all my current and future works under one professional identity.",
    btn_open_project: "Open Project",
    btn_demo: "Demo",
    featured_projects_title: "Featured Projects",
    projects_title: "All Projects",
    projects_main_title: "Main Projects",
    projects_secondary_title: "Secondary Projects",
    experience_title: "Professional Experience",
    contact_title: "Get in Touch",
    contact_desc: "Feel free to reach out to me through my social profiles below. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
    contact_email: "Email Me",
    contact_discord: "Join Discord",
    contact_location: "Riyadh, Saudi Arabia"
  },
  ar: {
    nav_home: "الرئيسية",
    nav_projects: "المشاريع",
    nav_experience: "الخبرات",
    nav_contact: "تواصل معي",
    hero_name: "سعود تركي قطان",
    hero_title: "مطور ذكاء اصطناعي وويب | باني أنظمة | مؤسس ORYX",
    hero_desc: "مطور ومبتكر يعمل على مشاريع في الذكاء الاصطناعي، تطوير الويب، الأنظمة، والأفكار التقنية.",
    role_ai: "AI Developer",
    role_web: "Web Developer",
    role_systems: "Systems Builder",
    role_founder: "Founder of ORYX",
    btn_projects: "عرض المشاريع",
    btn_github: "GitHub",
    btn_about: "نبذة عني",
    about_title: "من هو سعود؟",
    about_desc: "أنا مطور ومبتكر أعمل على بناء مشاريع تقنية وأنظمة مستقبلية. ينصب تركيزي على صناعة حلول قابلة للتطوير في مجالات الذكاء الاصطناعي وتطوير الويب، بحيث أجمع كافة أعمالي الحالية والمستقبلية تحت هوية تقنية واحدة تعكس الاحترافية.",
    btn_open_project: "فتح المشروع",
    btn_demo: "عرض حي",
    featured_projects_title: "مشاريع مميزة",
    projects_title: "جميع المشاريع",
    projects_main_title: "المشاريع الرئيسية",
    projects_secondary_title: "المشاريع الفرعية",
    experience_title: "الخبرات المهنية",
    contact_title: "تواصل معي",
    contact_desc: "لا تتردد في التواصل معي عبر حساباتي الاجتماعية أدناه. أنا دائمًا منفتح لمناقشة المشاريع الجديدة، الأفكار الإبداعية أو فرص العمل معًا.",
    contact_email: "راسلني",
    contact_discord: "Discord",
    contact_location: "الرياض، المملكة العربية السعودية"
  }
};

window.translations = translations;

function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // Update translation nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  // Dispatch event for other scripts (like projects dynamic loading)
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'ar';
  setLanguage(savedLang);
  
  const langSwitch = document.getElementById('lang-switch');
  if (langSwitch) {
    langSwitch.textContent = savedLang === 'en' ? 'العربية' : 'English';
    langSwitch.addEventListener('click', () => {
      const currentLang = document.documentElement.lang;
      const newLang = currentLang === 'en' ? 'ar' : 'en';
      langSwitch.textContent = newLang === 'en' ? 'العربية' : 'English';
      setLanguage(newLang);
    });
  }
});
