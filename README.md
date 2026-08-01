<p align="center">
  <img src="assets/images/logo.png" alt="Cloud Horizons Logo" width="120">
</p>

<h1 align="center">Cloud Horizons Research & Studies Center</h1>
<h3 align="center">مركز آفاق السحاب للبحوث والدراسات</h3>

<p align="center">
  <em>Inspiring Knowledge, Illuminating Horizons</em><br>
  <em>علمٌ يُلهم ومعرفة تُنير — نحو آفاق السحاب</em> <br>
   🤝 Developed as part of a team project.
</p>

<p align="center">
  <a href="https://www.facebook.com/share/1QAr4t6yid/">Facebook</a> •
  <a href="https://www.instagram.com/cloud_horizons">Instagram</a> •
  <a href="https://www.linkedin.com/company/cloud-horizons-research-and-studies-center/">LinkedIn</a>
</p>

---

## 📋 About

Cloud Horizons Research & Studies Center is a pioneering institution based in **Jordan**, specializing in Geographic Information Systems (GIS), Remote Sensing, Environmental Analysis, Urban Planning, and AI-driven geospatial solutions.

This repository contains the official website for the center, built as a static multi-page site with bilingual support (English & Arabic).

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure & semantic markup |
| **CSS3** | Custom styling, animations, glassmorphism |
| **JavaScript (Vanilla)** | Interactivity, i18n, scroll effects |
| **Tailwind CSS (CDN)** | Utility-first CSS supplement |
| **Google Fonts** | Inter (English) + Tajawal (Arabic) |

## 📁 Project Structure

```
project/
├── index.html                 # Home page (fully designed)
├── about.html                 # About Us (placeholder)
├── services.html              # Services (placeholder)
├── blog.html                  # Blog & News (placeholder)
├── contact.html               # Contact Us (placeholder)
├── assets/
│   ├── images/
│   │   ├── logo.png           # Center logo
│   │   ├── hero-bg.png        # Hero section background
│   │   └── about-preview.png  # About section image
│   ├── css/
│   │   ├── styles.css         # Global styles & design system
│   │   ├── navbar.css         # Navbar & language switcher styles
│   │   ├── footer.css         # Footer styles
│   │   └── home.css           # Home page specific styles
│   └── js/
│       ├── main.js            # Core functionality (navbar, scroll, particles)
│       └── i18n.js            # Translations (English & Arabic)
├── components/
│   ├── navbar.html            # Navbar reference component
│   └── footer.html            # Footer reference component
├── .gitignore
└── README.md
```

## ✅ Completed Pages

- [x] **Home Page** — Fully designed with:
  - Hero section with animated stats counter
  - Services overview (6 cards)
  - About preview section
  - Vision & Mission cards
  - Achievements/highlights counter
  - Call-to-action section
- [x] **Navbar** — Fixed header with scroll effect, responsive mobile menu, bilingual switcher
- [x] **Footer** — 4-column layout with social links, quick links, services, and contact info

## 🚧 Placeholder Pages (Under Development)

These pages have the basic structure (navbar + footer + placeholder content) and are ready for team members to build out:

| Page | Planned Content |
|---|---|
| **About Us** | Center info, objectives, fields of work, team |
| **Services** | GIS, Remote Sensing, Environmental Analysis, Urban Planning, AI, Training |
| **Blog & News** | Articles, publications, event announcements |
| **Contact Us** | Contact form, location map, email & phone |

## 🌐 Bilingual Support (i18n)

The site supports **English** and **Arabic** with a language switcher in the navbar:

- All translatable text uses `data-i18n` attributes
- Translations are defined in `assets/js/i18n.js`
- Switching to Arabic automatically enables **RTL** layout
- Language preference is persisted via `localStorage`

### Adding New Translations

1. Open `assets/js/i18n.js`
2. Add your key to both `en` and `ar` objects:
   ```js
   en: {
       my_new_key: "English text",
   },
   ar: {
       my_new_key: "النص العربي",
   }
   ```
3. Use in HTML:
   ```html
   <span data-i18n="my_new_key">English text</span>
   ```

## 🎨 Design System

The site uses a custom dark theme with CSS custom properties:

| Token | Value | Usage |
|---|---|---|
| `--color-bg-primary` | `#0B1929` | Main background |
| `--color-bg-secondary` | `#0F2135` | Section backgrounds |
| `--color-accent` | `#5AAFCC` | Primary accent (teal) |
| `--color-accent-light` | `#7CC5DD` | Hover states |
| `--color-text-primary` | `#FFFFFF` | Headings |
| `--color-text-secondary` | `#B0C4D8` | Body text |

### Key Design Features
- 🌊 **Glassmorphism** cards with backdrop blur
- ✨ **Floating particles** background animation
- 📜 **Scroll reveal** animations on sections
- 🔢 **Animated counters** for statistics
- 📱 **Fully responsive** design (mobile, tablet, desktop)

## 🚀 Getting Started

### Open Directly
Simply open `index.html` in any modern browser. No build step or server required.

### With Local Server (Optional)
```bash
# Python
python -m http.server 8080

# Node.js
npx serve .

# VS Code
# Use the "Live Server" extension
```

Then visit `http://localhost:8080`

## 👥 Contributing

When building new pages, please follow these guidelines:

1. **Copy the navbar & footer** from any existing page (they are inlined in each HTML file)
2. **Use the design system** — reference `styles.css` for available CSS variables and utility classes
3. **Add `data-i18n` attributes** to all user-facing text and update `i18n.js` with translations
4. **Keep the glass card pattern** — use `.glass-card` class for content containers
5. **Add `.reveal` class** to sections for scroll-triggered animations
6. **Test RTL layout** — switch to Arabic and verify layout doesn't break

## 📞 Contact

- **Email:** horizons.rasc@gmail.com
- **Phone:** +962 79 363 2223
- **Location:** Jordan

---

<p align="center">
  © 2026 Cloud Horizons Research & Studies Center. All rights reserved.
</p>
