/**
 * Cloud Horizons Research & Studies Center
 * Main JavaScript - Shared functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initNavbar();
    setActiveNav();
    initLangSwitcher();
    applyStoredLang();
    initScrollReveal();
});

/* ========================================
   Navbar
   ======================================== */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    // Scroll effect
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Mobile toggle
    const toggle = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');
    const overlay = document.querySelector('.navbar-overlay');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            menu.classList.toggle('open');
            if (overlay) overlay.classList.toggle('active');
            document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
        });

        // Close on overlay click
        if (overlay) {
            overlay.addEventListener('click', () => {
                toggle.classList.remove('active');
                menu.classList.remove('open');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        // Close on link click (mobile)
        menu.querySelectorAll('.navbar-nav a').forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                menu.classList.remove('open');
                if (overlay) overlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

/* Set active nav link based on current page */
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar-nav a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/* ========================================
   Language Switcher (i18n)
   ======================================== */
function initLangSwitcher() {
    const buttons = document.querySelectorAll('.lang-btn');
    if (!buttons.length) return;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            switchLanguage(lang);
        });
    });
}

function switchLanguage(lang) {
    if (!window.translations || !window.translations[lang]) return;

    const t = window.translations[lang];

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // Update HTML dir and lang attributes
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
        document.body.style.fontFamily = "'Tajawal', 'Inter', sans-serif";
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
        document.body.style.fontFamily = "'Inter', 'Tajawal', sans-serif";
    }

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Store preference
    localStorage.setItem('ch_lang', lang);
}

function applyStoredLang() {
    const stored = localStorage.getItem('ch_lang') || 'en';
    switchLanguage(stored);
}

/* ========================================
   Scroll Reveal Animation
   ======================================== */
function initScrollReveal() {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
}

/* ========================================
   Background Particles
   ======================================== */
function initParticles() {
    const container = document.querySelector('.particles-bg');
    if (!container) return;

    const count = 30;
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${15 + Math.random() * 20}s`;
        particle.style.animationDelay = `${Math.random() * 15}s`;
        particle.style.width = `${2 + Math.random() * 3}px`;
        particle.style.height = particle.style.width;
        container.appendChild(particle);
    }
}

/* ========================================
   Counter Animation (used on home page)
   ======================================== */
function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                const suffix = el.dataset.suffix || '';
                const duration = 2000;
                const start = 0;
                const startTime = performance.now();

                function updateCounter(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    // Ease out cubic
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = Math.floor(eased * (target - start) + start);
                    
                    el.textContent = current + suffix;
                    
                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    }
                }

                requestAnimationFrame(updateCounter);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// Initialize counters when DOM is ready
document.addEventListener('DOMContentLoaded', animateCounters);
