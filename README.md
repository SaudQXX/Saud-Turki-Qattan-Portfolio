# Premium Developer Portfolio Website

A high-end, responsive, bilingual (Arabic & English) developer portfolio designed with deep slate/gold aesthetics, micro-interactions, and premium glass-morphism. This project is built using 100% pure vanilla frontend technologies (HTML5, CSS3, Vanilla JS) with zero frameworks or heavy build-tool dependencies, offering instantaneous loading speeds and seamless cross-platform optimization.

---

## 📄 Table of Contents
1. [Introduction](#1-introduction)
2. [Key Features](#2-key-features)
3. [Project Structure](#3-project-structure)
4. [Getting Started & Local Development](#4-getting-started--local-development)
5. [Customization Guide](#5-customization-guide)
6. [Dynamic Projects Management (`projects.json`)](#6-dynamic-projects-management-projectsjson)
7. [Dynamic Experience Management (`experience.json`)](#7-dynamic-experience-management-experiencejson)
8. [Bilingual Translation System (i18n)](#8-bilingual-translation-system-i18n)
9. [Assets & Resource Management](#9-assets--resource-management)
10. [Animation Engine](#10-animation-engine)
11. [JavaScript Architecture](#11-javascript-architecture)
12. [CSS & Styling Guide](#12-css--styling-guide)
13. [Coding Best Practices](#13-coding-best-practices)
14. [Common Mistakes & Troubleshooting](#14-common-mistakes--troubleshooting)
15. [Frequently Asked Questions (FAQ)](#15-frequently-asked-questions-faq)
16. [Maintenance & Scaling](#16-maintenance--scaling)
17. [Conclusion](#17-conclusion)

---

## 1. Introduction

### Project Overview
This repository hosts the official personal portfolio website for **Saud Turki Qattan**. Built from the ground up for speed, durability, and visual elegance, it showcases a developer's profile, dynamic professional timeline, and interactive project repository. The application implements premium design principles, with sleek dark slate backdrops, custom-crafted glowing borders, floating physics animations, and a real-time language switcher that instantly aligns layouts based on writing direction (RTL/LTR).

### Target Goal
The ultimate goal of this website is to serve as a comprehensive, central hub for all of Saud's past, current, and future technological ventures (including ORYX). It aims to deliver a unified, premium brand identity that remains highly performant, extremely easy to maintain, and adaptable to any device size from pocket-sized smartphones to ultra-wide desktop monitors.

### Technology Stack
* **HTML5**: Semantically structured templates with accessibility metadata and lazy-loading support.
* **CSS3 (Custom Properties & Responsive Units)**: Styled using highly organized custom variables, modular layouts, responsive media grids, and premium motion keyframes.
* **Vanilla JavaScript (ES6+)**: Handles dynamic asynchronous fetching, translation switching, DOM manipulation, custom state rendering, and scroll-reveal integrations.
* **JSON (State Representation)**: Standardized data structures representing portfolios and professional experience, decoupling content from core UI code.

---

## 2. Key Features

| Feature | Description |
| :--- | :--- |
| **Responsive Design** | Custom media queries that perfectly auto-scale layouts between smartphones, tablets, and desktop workstations without content stretching. |
| **Arabic & English Support** | Full bilingual support, allowing users to switch languages instantly without reloading the page or losing current scroll states. |
| **RTL / LTR Automatic Direction** | Fluid transition of text alignment, sidebars, arrows, and exit directions between Left-to-Left (LTR) and Right-to-Left (RTL). |
| **Dynamic Projects Engine** | High-speed dynamic rendering of projects from a central database file using AJAX fetch with fallback offline placeholders. |
| **Dynamic Timeline** | An interactive professional timeline loaded dynamically, displaying career stages, certifications, and academic milestones in chronological order. |
| **JSON Driven Content** | Decouples data from the presentation layer. Content can be updated entirely by modifying secure, clean JSON files. |
| **Interactive Project Modal** | Floating modal with full details, external live demonstration links, and original code repository links that open safely in new tabs. |
| **Smooth Animations** | Staggered slide-ups, custom fade-ins, floating physics for profile pictures, and pulse effects configured for premium visual pacing. |
| **Glass Navbar** | A sticky navigation header boasting high-transparency frosted effects using `backdrop-filter: blur()`. |
| **Dark Premium Theme** | Elegant void-black and deep-slate palette styled with warm luxury gold borders (`--border-gold`) and subtle typography pairings. |
| **GitHub Pages Ready** | 100% static nature means zero server-side configurations are required. Ready to be deployed to GitHub Pages with single-click actions. |
| **No Frameworks** | Pure, dependency-free development yielding zero package vulnerability issues and instant page-load performance. |
| **No Build Tools** | Works straight out of the box. No compiler, bundler, transpiler, or webpack configurations required for simple deployment. |

---

## 3. Project Structure

Below is the directory mapping of the static portfolio application. Each directory and file is designed to hold specific modular responsibilities:

```text
├── assets/                  # Directory for user-uploaded resources (images, illustrations)
│   └── profile.png          # Primary profile portrait of Saud Turki Qattan
├── css/                     # Styling layer containing modular stylesheets
│   ├── animations.css       # Keyframes, fade-ins, float cycles, and hover translations
│   ├── layout.css           # Global grids, headers, section paddings, and utility boundaries
│   ├── responsive.css       # Screen breakpoints (mobile, tablet, desktop scaling overrides)
│   └── style.css            # Custom properties, colors, scrollbars, and core global elements
├── data/                    # JSON data store (serves as the static local database)
│   ├── experience.json      # Array of experiences (years, titles, descriptions in English/Arabic)
│   └── projects.json        # Array of projects (github/demo links, tags, images, titles, status)
├── js/                      # Core logic files for DOM operations and state
│   ├── animations.js        # Intersection Observer for scroll-driven item reveals
│   ├── language.js          # Bilingual translation maps, DOM strings injector, and RTL logic
│   ├── main.js              # Global window config, global data links, and navbar state
│   └── projects.js          # AJAX loaders, project filters, and active card modal rendering
├── resources/               # Vector graphical assets and generic utility files
├── contact.html             # The contact card view
├── experience.html          # Career achievements and credentials showcase
├── index.html               # Main homepage containing Saud's pitch and introductory bio
├── projects.html            # Portfolio project filter and detailed dynamic showcard view
├── metadata.json            # AI Studio applet configuration (contains metadata & frame properties)
├── .env.example             # Example environment file indicating configurable variables
├── .gitignore               # Ignored local runtime directories (e.g., node_modules, build outputs)
├── package.json             # Applet dependencies configuration (for development server)
└── README.md                # Comprehensive documentation file (This file)
```

### Module Responsibilities Detail:
1. **`index.html`**: The portal entry point. It hosts the hero slider, the high-end floating profile graphic, and localized overview cards.
2. **`data/`**: Allows instant updates to the portfolio. Anyone can modify, append, or purge experiences and projects without touching fragile HTML structures.
3. **`css/`**: Segmented to ensure styles don't conflict. Structural spacing resides in `layout.css` while screen scale modifications are isolated in `responsive.css`.

---

## 4. Getting Started & Local Development

This project is configured as a lightweight, zero-overhead static website. There are two easy ways to launch and view the portfolio locally:

### Option A: Direct Local Execution (No Installation Required)
Since the portfolio consists of static assets, you can run it directly:
1. Clone or download the repository to your local storage.
2. Double-click `index.html` to open it in any modern web browser (Chrome, Safari, Firefox, Edge).
*Note: Due to browser security restrictions on localized file protocols (`file://`), dynamic AJAX requests from `data/*.json` might trigger CORS blocks on some browsers if launched raw. To ensure all dynamic project files load smoothly, use Option B.*

### Option B: Local Server Launch (Recommended)
You can launch a lightweight local development server. We provide a pre-configured Node development command inside `package.json`:

```bash
# 1. Install optional dev dependencies
npm install

# 2. Boot up the local server
npm run dev
```
Once booted, open your browser and navigate to the provided host address (usually `http://localhost:3000`).

### Option C: Production Bundling & Hosting Deployments
If you are running this inside a production cluster, Cloud Run, or custom container, the bundle commands are ready:

```bash
# Build the application
npm run build

# Start the Node.js serving wrapper
npm start
```

### Deploying to GitHub Pages (FREE Static Hosting)
1. Initialize a Git repository in the folder: `git init`.
2. Commit all files: `git add . && git commit -m "Initial portfolio commit"`.
3. Create a public repository on your GitHub account.
4. Push your local files to your remote repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```
5. On your GitHub Repository webpage, navigate to **Settings** > **Pages**.
6. Under **Build and deployment**, select **Deploy from a branch**.
7. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
8. Your portfolio will go live on `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/` in under a minute!

---

## 5. Customization Guide

You can easily adapt this entire portfolio template to represent yourself. Below are the step-by-step instructions for global customizations:

### Adjusting Name & Global Contact Links
All basic social and global contact paths are controlled from a centralized configuration object in `/js/main.js`. Open the file and locate the `window.CONFIG` block:

```javascript
// Located at the top of /js/main.js
window.CONFIG = {
  github: "https://github.com/SaudQXX",              // Paste your custom GitHub profile link
  discord: "https://discord.com/users/saudqxx",      // Paste your Discord developer/server link
  email: "saudqattan000@gmail.com",                  // Replace with your business email address
  ownerName: "Saud Qattan"                           // Replace with your display name
};
```
*Modifying this object instantly propagates changes across the header links, footer copy blocks, email buttons, and backup modal targets on all four pages.*

### Customizing English & Arabic Text Content
All other primary titles, descriptive subheadings, and interactive buttons are stored in the translations table in `/js/language.js`. To alter any paragraph or text on the homepage, experience page, or contact page:
1. Open `/js/language.js`.
2. Locate the `translations` constant:
   - Modify strings within the `en` block for English displays.
   - Modify strings within the `ar` block for Arabic displays.

```javascript
const translations = {
  en: {
    hero_title: "AI & Web Developer | Systems Builder | Founder of ORYX",
    about_desc: "Your customized English biography text goes here...",
    // ...
  },
  ar: {
    hero_title: "مطور ذكاء اصطناعي وويب | باني أنظمة | مؤسس ORYX",
    about_desc: "تعديل نص النبذة التعريفية باللغة العربية...",
    // ...
  }
};
```

### Modifying Design Tokens, Colors, and Fonts
Theme parameters are controlled via CSS Variables inside `/css/style.css`.
Open `/css/style.css` and locate the `:root` pseudo-class:

```css
:root {
  /* Color Tokens */
  --bg-void:        #030303;    /* Absolute darkest backdrop */
  --bg-card:        rgba(15, 15, 15, 0.7); /* Translucent glass card background */
  --text-primary:   #ffffff;    /* Primary highlight reading color */
  --text-secondary: #a0aec0;    /* Muted text */
  --border-gold:    rgba(197, 160, 89, 0.3); /* Luxury gold border accent */
  --accent-gold:    #c5a059;    /* Pure solid gold highlight */
  
  /* Typography Tokens */
  --font-display:   'Inter', sans-serif;
  --font-serif:     'Inter', sans-serif;
  --font-arabic:    'Cairo', sans-serif;
}
```
*Simply change these hexadecimal colors to alter the entire aesthetic of the website (e.g., swapping gold elements for neon teal or steel blue).*

---

## 6. Dynamic Projects Management (`projects.json`)

All project showcases on `projects.html` and `index.html` are generated on-the-fly from `/data/projects.json`. Classification of projects no longer relies on their placement order inside the JSON file. Instead, it is governed explicitly by a dynamic `"type"` attribute.

### Schema Structure & Fields

Every project entry within the JSON array supports the following schema properties:

| Field Name | Data Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `id` | String | Yes | A unique string identifier used by the modal engine (e.g. `"pro-01"`). |
| `type` | String | Yes | The project classification. Must be either `"main"` (renders as a Main Project and features on the Homepage) or `"secondary"` (renders as a Secondary Project). |
| `title` | String | Yes | The name of the project shown when the English layout is active. |
| `titleAr` | String | No | The name of the project shown when the Arabic layout is active. |
| `description` | String | Yes | Project breakdown/summary in English. |
| `descriptionAr` | String | No | Project breakdown/summary in Arabic. |
| `image` | String | Yes | Path to the preview screenshot (relative path or absolute URL). |
| `status` | String | Yes | Project status tag: e.g., `"Active"`, `"Completed"`, `"Beta"`, `"Archived"`. |
| `tags` | Array of Strings | Yes | Core programming languages or tools used (e.g. `["React", "Node", "AI"]`). |
| `github` | String | Yes | Project repository URL. Set to `"#"` to fallback to your global GitHub profile. |
| `demo` | String | Yes | Live application link. Set to `"#"` if no preview server is hosted. |

### Complete JSON Example

Here is a fully formatted example to paste inside `/data/projects.json`:

```json
[
  {
    "id": "project-01",
    "type": "main",
    "title": "ORYX Neural Core Engine",
    "titleAr": "محرك نواة أوريكس العصبي",
    "description": "An automated AI orchestration system designed to process natural language datasets and deliver contextual reasoning pipelines.",
    "descriptionAr": "نظام أتمتة وتنسيق ذكاء اصطناعي مصمم لمعالجة البيانات اللغوية وتقديم مسارات تحليلية واستنتاجات سياقية.",
    "image": "assets/project_neural_core.jpg",
    "status": "Active",
    "tags": ["Gemini API", "Node.js", "TypeScript", "Docker"],
    "github": "https://github.com/SaudQXX/neural-core",
    "demo": "https://oryx-demo.example.com"
  },
  {
    "id": "project-02",
    "type": "secondary",
    "title": "Autonomous Systems Grid",
    "titleAr": "شبكة الأنظمة المستقلة",
    "description": "A lightweight distributed pipeline managing real-time websocket transactions and edge cluster diagnostics.",
    "descriptionAr": "خط معالجة خفيف لتنسيق اتصالات الويب سوكيت الفورية وتشخيص الخوادم في الشبكات الموزعة.",
    "image": "assets/project_grid.jpg",
    "status": "Completed",
    "tags": ["Vanilla JS", "Websockets", "CSS3 Grid"],
    "github": "#",
    "demo": "#"
  }
]
```

### Adding, Editing, or Deleting Projects
* **To Add a Project**: Append a new JSON block with all required fields to the list inside `/data/projects.json`. Ensure there is a separating comma `,` between items.
* **To Edit a Project**: Open `/data/projects.json` and change the desired fields (e.g. renaming a title or updating a status). Save the file, and the changes will reflect on the website immediately.
* **To Delete a Project**: Delete the specific block containing that project from the JSON array.

---

## 7. Dynamic Experience Management (`experience.json`)

The timeline shown in `experience.html` is dynamically generated from `/data/experience.json`.

### Schema Structure & Fields

| Field Name | Data Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `year` | String | Yes | The timeframe or exact date range (e.g. `"2025 - Present"`, `"2024"`). |
| `title` | String | Yes | The job title, academic achievement, or certification name in English. |
| `titleAr` | String | No | The job title, academic achievement, or certification name in Arabic. |
| `description` | String | Yes | Detailed description of duties, skills gained, or milestones achieved in English. |
| `descriptionAr` | String | No | Detailed description of duties, skills gained, or milestones in Arabic. |

### Complete JSON Example

Below is a complete, ready-to-use array for `/data/experience.json`:

```json
[
  {
    "year": "2024 - 2026",
    "title": "Chief Systems Architect at ORYX",
    "titleAr": "كبير مهندسي الأنظمة في أوريكس",
    "description": "Designed and deployed custom micro-architectures, integrating distributed machine learning models with standard enterprise APIs.",
    "descriptionAr": "تصميم ونشر معماريات دقيقة متكاملة، وربط نماذج تعلم الآلة الموزعة مع واجهات برمجة التطبيقات للمؤسسات."
  },
  {
    "year": "2023",
    "title": "Full Stack Web Innovator",
    "titleAr": "مبتكر ويب متكامل",
    "description": "Developed and maintained highly responsive portfolio sites, single-page client engines, and fast-parsing static pipelines.",
    "descriptionAr": "تطوير وصيانة مواقع ويب عالية الاستجابة، محركات العميل أحادية الصفحة، ومسارات تحليل البيانات السريعة."
  }
]
```

---

## 8. Bilingual Translation System (i18n)

The application handles full page translations instantly using client-side JavaScript.

### How the Translation System Works
1. Every static string inside HTML pages is marked with a special attribute: `data-i18n="KEY"`. For example:
   ```html
   <h1 class="hero-title" data-i18n="hero_name">Saud Turki Qattan</h1>
   ```
2. When the user clicks the language button, `/js/language.js` triggers `setLanguage(lang)`:
   - Stores the selected language key (`"en"` or `"ar"`) inside the user's browser `localStorage` as `'lang'`.
   - Modifies the document metadata on the root `<html>` element:
     * Sets `lang` to `"ar"` or `"en"`.
     * Changes `dir` (Direction) to `"rtl"` for Arabic or `"ltr"` for English.
   - Searches the entire DOM for elements with `data-i18n` and replaces their `textContent` with the respective string from `/js/language.js`:
     ```javascript
     document.querySelectorAll('[data-i18n]').forEach(el => {
       const key = el.getAttribute('data-i18n');
       if (translations[lang] && translations[lang][key]) {
         el.textContent = translations[lang][key];
       }
     });
     ```
   - Dispatches a custom global window event `'languageChanged'` so that dynamic scripts (like `/js/projects.js`) know to reload and render projects or experience timelines in the new target language.

---

## 9. Assets & Resource Management

To keep the application modular and easily maintainable, keep assets organized within their dedicated folders using clean naming conventions:

### Recommended Folder Layout & Placement

| File Category | Project Location | Recommended Formats | Suggested Dimension / Spec |
| :--- | :--- | :--- | :--- |
| **Profile Photo** | `/assets/profile.png` | PNG, WebP | `400 x 400 pixels` (Circular crop safe) |
| **Project Previews** | `/assets/` (e.g. `assets/proj-1.jpg`) | JPEG, WebP | Aspect Ratio `16:9` (e.g. `800 x 450 pixels`) |
| **Technical SVG Logos**| `/resources/` | SVG | Vector format, transparent backdrops |
| **Background Textures**| `/resources/` | SVG | Transparent/low-opacity patterns |

### Image Error Fallback Architecture
If a custom project image specified in `projects.json` fails to load, or if the profile avatar is missing on local runs, our JavaScript (`/js/main.js` and `/js/projects.js`) catches the error (`onerror`) and displays a beautiful CSS-based circular fallback showing the initial letter of Saud's name, or a styled, dark vector code mock-up card for projects.

---

## 10. Animation Engine

Animations bring the interface to life by providing visual hierarchy and feedback. They are split into two layers:

### The Layout Classes (`css/animations.css`)
* **`.reveal`**: Starts at `opacity: 0` and is translated downwards by `40px` with a cubic bezier transition.
* **`.reveal.active`**: Turns `opacity: 1` and moves to its natural coordinate (`translateY(0)`).
* **`.slide-up`**: A keyframe animation that fades in and glides upward.
* **`.slide-right`**: Translates elements in from the side. Handles writing directions by auto-reversing in RTL mode via custom selectors:
  ```css
  [dir="rtl"] .slide-right {
    transform: translateX(30px);
    animation-name: slideRightRTL;
  }
  ```
* **`.float-anim`**: A continuous, physics-inspired hovering loop that gently moves profile avatars up and down over a 6-second cycle.
* **`.hover-lift`**: A high-performance hover state that lifts cards by `-8px` and casts a subtle glowing gold shadow.

### The JavaScript Scroll Observer (`js/animations.js`)
The `animations.js` module sets up an `IntersectionObserver` that watches the viewport. When any element tagged with `.reveal` is scrolled into view (reaches a 10% visibility threshold), the observer appends the `.active` class to trigger the CSS transition, then immediately stops watching (`unobserve`) to save CPU rendering cycles.

---

## 11. JavaScript Architecture

Each JavaScript file has a single responsibility to ensure ease of maintenance:

```text
       ┌────────────────────────────────────────────────────────┐
       │                       window                           │
       └──────────────────────────┬─────────────────────────────┘
                                  │
         ┌────────────────────────┼────────────────────────┐
         ▼                        ▼                        ▼
  ┌─────────────┐          ┌─────────────┐          ┌─────────────┐
  │   main.js   │          │ language.js │          │ projects.js │
  ├─────────────┤          ├─────────────┤          ├─────────────┤
  │ • CONFIG    │          │ • i18n Maps │          │ • Load JSON │
  │ • Init DOM  │◄─────────┤ • RTL/LTR   ├─────────►│ • Render DOM│
  │ • Socials   │ (LS-Sync)│ • Switcher  │ (Trigger)│ • Modals    │
  └─────────────┘          └─────────────┘          └─────────────┘
                                  ▲
                                  │ (Syncs Observer)
                           ┌──────┴──────┐
                           │animations.js│
                           └─────────────┘
```

### `main.js`
Acts as the global bootstrapper. It loads developer links, auto-populates all footer and anchor properties from the central configuration, tracks the active navigation tabs based on file paths, and sets up fallback states for missing images.

### `language.js`
Maintains the localized vocabulary lists. Controls layout direction triggers, writes active keys to `localStorage`, and updates navigation menus when users toggle languages.

### `projects.js`
Handles asynchronous file fetching from `data/projects.json` and `data/experience.json`. Builds cards dynamically, handles empty array templates smoothly, and implements modal pop-ups for closer detail reviews.

### `animations.js`
Configures viewport detection observers, linking scroll progress to visual entry transitions.

---

## 12. CSS & Styling Guide

The styling system is split into four stylesheets:

### 1. `style.css`
Declares the CSS variables (palette, typography family, custom scrollbar tracks, global radius curves). Contains scrollbar scroll layouts, container rules, and card rules.

### 2. `layout.css`
Specifies structural boundaries including:
* Responsive CSS Grids for card displays.
* Translucent Glass Navbars with sticky behaviors.
* Grid alignments for footer columns, social link lists, and hero sections.

### 3. `responsive.css`
Contains screen size breakpoints. It overrides layout alignments when viewports shrink:
* **Tablets (< 768px)**: Rearranges navigation items into vertical centering structures to avoid overlapping.
* **Smartphones (< 576px)**: Modifies font hierarchies, shrinks the hero image to fit smaller screens, and centers description details.

### 4. `animations.css`
Houses transition curves, staggered animation delays, hover offsets, and direction-aware slide overrides.

---

## 13. Coding Best Practices

To maintain a clean codebase, adhere to these project rules:

1. **No Inline CSS**: Do not write `style="..."` in HTML tags. This degrades readability and bypasses CSS caching. Declare styles inside classes in the `/css/` folder.
2. **No Inline JavaScript**: Avoid writing inline listeners (e.g. `<button onclick="doSomething()">`). All event bindings must be implemented inside `/js/` modules using `addEventListener`.
3. **Decoupled Data**: Never hardcode raw text descriptions inside projects or experience files. Keep them cataloged inside `/data/*.json` or `/js/language.js`.
4. **Semantics First**: Maintain search engine optimization (SEO) and web accessibility standards by using appropriate tags (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`) with meaningful `alt` attributes.
5. **Well-Commented Code Blocks**: Each function should be preceded by a brief descriptive comment explaining its purpose and input parameters.

---

## 14. Common Mistakes & Troubleshooting

Below are common errors you might encounter during customization and how to fix them:

### 1. Dynamic Projects / Timeline Are Not Displaying
* **Symptom**: The console displays `HTTP error! status: 404` or the page shows empty state boxes.
* **Root Cause**: You opened `index.html` directly using the local path protocol (`file://`), and your browser blocked the AJAX request, or the file paths in the `fetch()` call do not match your folders.
* **Solution**: Launch a local web server (refer to [Option B in Getting Started](#option-b-local-server-launch-recommended)) or double-check that your JSON files are named exactly `projects.json` and `experience.json` inside the `data/` folder.

### 2. The Language Toggle Displays Blank Labels
* **Symptom**: Page toggles languages, but some text vanishes entirely.
* **Root Cause**: An element has a `data-i18n="xyz"` attribute, but the key `xyz` does not exist inside either the `en` or `ar` maps in `/js/language.js`.
* **Solution**: Ensure every `data-i18n` attribute has a corresponding key-value pair inside **both** languages inside `/js/language.js`.

### 3. JSON Syntax Crashes the Page
* **Symptom**: Console throws `SyntaxError: Unexpected token ... in JSON`.
* **Root Cause**: JSON is highly sensitive to missing quotes, extra trailing commas, or curly braces.
* **Solution**: Paste your modified JSON file into a verification tool like [JSONLint](https://jsonlint.com/) to spot and fix syntax mistakes.

---

## 15. Frequently Asked Questions (FAQ)

### Q: How do I add a new project showcase?
1. Open `/data/projects.json`.
2. Append a new object inside the array containing your project's unique `id`, titles, descriptions, preview image path, status, languages used, and links.
3. Reload your browser, and it will render instantly on the page!

### Q: How do I change my primary profile picture?
1. Save your new portrait photo inside the `/assets/` directory.
2. Rename it to `profile.png` (overwriting the old image), or modify the image source path in `index.html` to target your new file.

### Q: Can I add a third language (e.g. French)?
Yes! 
1. Open `/js/language.js`.
2. Add a new translation block (e.g. `fr: { ... }`) containing French translations for all strings.
3. Update `setLanguage(lang)` to support the new language, and add support for its writing direction (LTR).

### Q: How do I add a completely new page to my portfolio?
1. Duplicate `index.html` and rename it (e.g., `services.html`).
2. Update the navigation links in all pages to include `<a href="services.html" class="nav-link" data-i18n="nav_services">`.
3. Add the corresponding translations for your new menu item inside `/js/language.js`.

### Q: How do I change the website's highlight colors?
Open `/css/style.css` and modify the hex values for `--accent-gold` and `--border-gold` to your desired colors.

---

## 16. Maintenance & Scaling

As your portfolio grows, keep these tips in mind to maintain high performance:
* **Image Compression**: Always run your project preview screenshots through compression utilities (such as TinyPNG or squoosh.app) to convert them into WebP format before uploading. This keeps pages loading instantly.
* **Keep JSONs Small**: When adding projects, keep lists clean. If you have over 10 projects, render the top 6 prominently and archive older projects by creating a secondary archive section.
* **Clean Code Separation**: If you write custom modules, avoid polluting `main.js`. Create a new file (e.g., `/js/services.js`) and link it inside your HTML.

---

## 17. Conclusion

This personal portfolio is a perfect blend of high-end design, clean vanilla code, and lightweight architecture. By managing your professional experiences and projects through decoupled JSON structures, you have an extensible, fast, and secure developer portfolio that will serve as a lasting testament to your technical craft for years to come.

*Designed and engineered with pride by Saud Turki Qattan.*
