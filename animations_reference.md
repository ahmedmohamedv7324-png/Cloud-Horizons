# 🎬 Cloud Horizons — Animation Reference Document

> توثيق شامل لكل الـ Animations المستخدمة في موقع **مركز آفاق السحاب للبحوث والدراسات**

---

## 📑 Table of Contents

1. [CSS Keyframe Animations](#1-css-keyframe-animations)
2. [CSS Transition Effects](#2-css-transition-effects)
3. [JavaScript-Driven Animations](#3-javascript-driven-animations)
4. [Animation Usage Map](#4-animation-usage-map)

---

## 1. CSS Keyframe Animations

### 1.1 `fadeInUp`
📁 **File:** [styles.css](file:///c:/Users/GooGle/OneDrive/Desktop/GMT/assets/css/styles.css#L228-L237)

| Property | Value |
|---|---|
| **Type** | Entrance Animation |
| **Duration** | `0.6s` |
| **Easing** | `ease` |
| **Movement** | 30px → 0 (bottom to top) |

```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

**Used on:**
- `.hero-badge` — delay: `0s`
- `.hero-title` — delay: `0.1s`
- `.hero-title-ar` — delay: `0.2s`
- `.hero-description` — delay: `0.3s`
- `.hero-actions` — delay: `0.4s`
- `.hero-stats` — delay: `0.5s`

> [!NOTE]
> Uses `animation-fill-mode: both` on hero elements to keep the final state and respect the delay.

---

### 1.2 `fadeInLeft`
📁 **File:** [styles.css](file:///c:/Users/GooGle/OneDrive/Desktop/GMT/assets/css/styles.css#L239-L248)

| Property | Value |
|---|---|
| **Type** | Entrance Animation |
| **Duration** | `0.6s` |
| **Easing** | `ease` |
| **Movement** | -30px → 0 (left to right) |

```css
@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
```

**Used via:** `.animate-fade-in-left` utility class

---

### 1.3 `fadeInRight`
📁 **File:** [styles.css](file:///c:/Users/GooGle/OneDrive/Desktop/GMT/assets/css/styles.css#L250-L259)

| Property | Value |
|---|---|
| **Type** | Entrance Animation |
| **Duration** | `0.8s` |
| **Easing** | `ease` |
| **Movement** | 30px → 0 (right to left) |

```css
@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
```

**Used on:**
- `.hero-visual` — delay: `0.3s`, duration: `0.8s`

---

### 1.4 `slideInDown`
📁 **File:** [styles.css](file:///c:/Users/GooGle/OneDrive/Desktop/GMT/assets/css/styles.css#L261-L270)

| Property | Value |
|---|---|
| **Type** | Entrance Animation |
| **Duration** | N/A (defined, available for use) |
| **Easing** | N/A |
| **Movement** | -100% → 0 (top to bottom) |

```css
@keyframes slideInDown {
    from {
        opacity: 0;
        transform: translateY(-100%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

> [!TIP]
> This animation is defined but not actively assigned to any element. Available as a utility for future use.

---

### 1.5 `pulse`
📁 **File:** [styles.css](file:///c:/Users/GooGle/OneDrive/Desktop/GMT/assets/css/styles.css#L272-L279)

| Property | Value |
|---|---|
| **Type** | Looping / Attention |
| **Duration** | `2s` |
| **Iteration** | `infinite` |
| **Effect** | Opacity pulsing (1 → 0.5 → 1) |

```css
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
```

**Used on:**
- `.hero-badge .pulse-dot` — النقطة الخضراء في badge الـ Hero
- `.placeholder-content .status-badge .dot` — نقطة الحالة في الصفحات placeholder

---

### 1.6 `shimmer`
📁 **File:** [styles.css](file:///c:/Users/GooGle/OneDrive/Desktop/GMT/assets/css/styles.css#L281-L288)

| Property | Value |
|---|---|
| **Type** | Looping / Decorative |
| **Effect** | Background position shift (-200% → 200%) |

```css
@keyframes shimmer {
    0% {
        background-position: -200% center;
    }
    100% {
        background-position: 200% center;
    }
}
```

> [!TIP]
> Defined but not actively used. Useful for loading skeletons or shining text effects.

---

### 1.7 `floatParticle`
📁 **File:** [styles.css](file:///c:/Users/GooGle/OneDrive/Desktop/GMT/assets/css/styles.css#L210-L225)

| Property | Value |
|---|---|
| **Type** | Looping / Background |
| **Duration** | Random `15s–35s` (set via JS) |
| **Delay** | Random `0s–15s` (set via JS) |
| **Iteration** | `infinite` |
| **Easing** | `linear` |
| **Effect** | Rising from bottom + 720° rotation |

```css
@keyframes floatParticle {
    0% {
        transform: translateY(100vh) rotate(0deg);
        opacity: 0;
    }
    10% {
        opacity: 0.15;
    }
    90% {
        opacity: 0.15;
    }
    100% {
        transform: translateY(-100px) rotate(720deg);
        opacity: 0;
    }
}
```

**Used on:**
- `.particle` elements — 30 جزيء يتم إنشاؤها ديناميكيًا بـ JavaScript

---

### 1.8 `float`
📁 **File:** [home.css](file:///c:/Users/GooGle/OneDrive/Desktop/GMT/assets/css/home.css#L193-L196)

| Property | Value |
|---|---|
| **Type** | Looping / Decorative |
| **Duration** | `6s` |
| **Iteration** | `infinite` |
| **Easing** | `ease-in-out` |
| **Effect** | Gentle vertical bob (0 → -10px → 0) |

```css
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}
```

**Used on:**
- `.hero-float-card` — الكروت العائمة حول صورة الـ Hero
  - `.float-card-1` (🛰️ Remote Sensing) — delay: `0s`
  - `.float-card-2` (🗺️ GIS Mapping) — delay: `2s`
  - `.float-card-3` (🤖 AI Solutions) — delay: `4s`

> [!NOTE]
> The staggered delays create a wave-like floating effect where cards bob at different times.

---

### 1.9 `rotateBg`
📁 **File:** [home.css](file:///c:/Users/GooGle/OneDrive/Desktop/GMT/assets/css/home.css#L515-L518)

| Property | Value |
|---|---|
| **Type** | Looping / Background |
| **Duration** | `20s` |
| **Iteration** | `infinite` |
| **Easing** | `linear` |
| **Effect** | Full 360° continuous rotation |

```css
@keyframes rotateBg {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
```

**Used on:**
- `.cta-card::before` — radial gradient خلفي يدور ببطء في الـ CTA section

---

## 2. CSS Transition Effects

### 2.1 Navbar Scroll Effect
📁 **File:** [navbar.css](file:///c:/Users/GooGle/OneDrive/Desktop/GMT/assets/css/navbar.css#L5-L23)

| State | Effect |
|---|---|
| **Default** | `background: transparent`, no blur |
| **Scrolled** (>50px) | `background: rgba(11,25,41,0.92)`, `backdrop-filter: blur(20px)`, border + shadow |
| **Transition** | `all 0.3s ease` |

---

### 2.2 Navbar Links Hover
📁 **File:** [navbar.css](file:///c:/Users/GooGle/OneDrive/Desktop/GMT/assets/css/navbar.css#L82-L114)

| Effect | Description |
|---|---|
| **Color** | `text-secondary` → `accent` |
| **Background** | transparent → `glass-light` |
| **Underline** | `scaleX(0)` → `scaleX(1)` centered underline (20px wide, 2px height) |
| **Transition** | `all 0.2s ease` |

---

### 2.3 Hamburger Menu Toggle
📁 **File:** [navbar.css](file:///c:/Users/GooGle/OneDrive/Desktop/GMT/assets/css/navbar.css#L179-L189)

| Span | Transform |
|---|---|
| **1st line** | `rotate(45deg) translate(5px, 5px)` → forms ✕ |
| **2nd line** | `opacity: 0` → disappears |
| **3rd line** | `rotate(-45deg) translate(5px, -5px)` → forms ✕ |
| **Transition** | `all 0.2s ease` |

---

### 2.4 Mobile Menu Slide
📁 **File:** [navbar.css](file:///c:/Users/GooGle/OneDrive/Desktop/GMT/assets/css/navbar.css#L197-L214)

| State | Position |
|---|---|
| **Closed** | `right: -100%` |
| **Open** | `right: 0` |
| **RTL Closed** | `left: -100%` |
| **RTL Open** | `left: 0` |
| **Transition** | `right/left 0.3s ease` |
| **Overlay** | fade in (`opacity: 0→1`) with `visibility` toggle |

---

### 2.5 Service Card Hover
📁 **File:** [home.css](file:///c:/Users/GooGle/OneDrive/Desktop/GMT/assets/css/home.css#L243-L274)

| Effect | Description |
|---|---|
| **Lift** | `translateY(-5px)` |
| **Border** | `border-color` → `border-hover` |
| **Shadow** | `shadow-glow` appears |
| **Top Bar** | Gradient bar `scaleX(0→1)` from left |
| **Learn More** | Gap increases `0.4rem→0.75rem` (arrow slides right) |
| **Transition** | `all 0.3s ease` |

---

### 2.6 Highlight Card Hover
📁 **File:** [home.css](file:///c:/Users/GooGle/OneDrive/Desktop/GMT/assets/css/home.css#L467-L471)

| Effect | Description |
|---|---|
| **Lift** | `translateY(-3px)` |
| **Border** | → `border-hover` |
| **Shadow** | `shadow-glow` |
| **Transition** | `all 0.3s ease` |

---

### 2.7 Button Hover Effects
📁 **File:** [styles.css](file:///c:/Users/GooGle/OneDrive/Desktop/GMT/assets/css/styles.css#L148-L169)

| Button Type | Effect |
|---|---|
| **`.btn-primary`** | `translateY(-2px)` + enhanced glow shadow |
| **`.btn-outline`** | `translateY(-2px)` + fill with accent color |
| **Transition** | `all 0.3s ease` |

---

### 2.8 Glass Card Hover
📁 **File:** [styles.css](file:///c:/Users/GooGle/OneDrive/Desktop/GMT/assets/css/styles.css#L182-L186)

| Effect | Description |
|---|---|
| **Lift** | `translateY(-4px)` |
| **Border** | → `border-hover` |
| **Shadow** | `shadow-glow` |
| **Transition** | `all 0.3s ease` |

---

### 2.9 Footer Social Icons Hover
📁 **File:** [footer.css](file:///c:/Users/GooGle/OneDrive/Desktop/GMT/assets/css/footer.css#L97-L103)

| Effect | Description |
|---|---|
| **Lift** | `translateY(-3px)` |
| **Background** | `glass-light` → `accent` |
| **Color** | `text-secondary` → `bg-primary` |
| **Shadow** | `0 4px 15px rgba(90,175,204,0.3)` |
| **Transition** | `all 0.2s ease` |

---

### 2.10 Footer Links Hover
📁 **File:** [footer.css](file:///c:/Users/GooGle/OneDrive/Desktop/GMT/assets/css/footer.css#L141-L154)

| Effect | Description |
|---|---|
| **Color** | → `accent` |
| **Slide** | `padding-left: +5px` (RTL: `padding-right: +5px`) |
| **Arrow** | `opacity: 0→1` on hover |
| **Transition** | `all 0.2s ease` |

---

### 2.11 Navbar Logo Hover
📁 **File:** [navbar.css](file:///c:/Users/GooGle/OneDrive/Desktop/GMT/assets/css/navbar.css#L45-L47)

| Effect | Description |
|---|---|
| **Scale** | `scale(1.05)` on logo image |
| **Transition** | `transform 0.3s ease` |

---

## 3. JavaScript-Driven Animations

### 3.1 Scroll Reveal
📁 **File:** [main.js](file:///c:/Users/GooGle/OneDrive/Desktop/GMT/assets/js/main.js#L137-L156)

| Property | Value |
|---|---|
| **Trigger** | `IntersectionObserver` (threshold: `0.1`, rootMargin: `0px 0px -50px 0px`) |
| **Initial State** | `opacity: 0`, `translateY(30px)` |
| **Active State** | `opacity: 1`, `translateY(0)` |
| **Transition** | `all 0.8s cubic-bezier(0.4, 0, 0.2, 1)` |
| **Stagger** | `100ms` delay between consecutive elements |
| **One-shot** | Element is unobserved after reveal |

```css
.reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.reveal.active {
    opacity: 1;
    transform: translateY(0);
}
```

**Applied to elements with class `.reveal`:**
- Services header & cards
- About section image, text, features, button
- Vision & Mission cards
- Highlight/Achievement cards
- CTA card

---

### 3.2 Counter Animation
📁 **File:** [main.js](file:///c:/Users/GooGle/OneDrive/Desktop/GMT/assets/js/main.js#L181-L216)

| Property | Value |
|---|---|
| **Trigger** | `IntersectionObserver` (threshold: `0.5`) |
| **Duration** | `2000ms` |
| **Easing** | Cubic ease-out: `1 - (1 - progress)³` |
| **Method** | `requestAnimationFrame` loop |
| **One-shot** | Counter is unobserved after animation |

**Applied to elements with `data-count` attribute:**

| Element | Target | Suffix |
|---|---|---|
| Hero Stat 1 | `50` | `+` |
| Hero Stat 2 | `20` | `+` |
| Hero Stat 3 | `100` | `+` |
| Achievement 1 | `50` | `+` |
| Achievement 2 | `20` | `+` |
| Achievement 3 | `15` | `+` |
| Achievement 4 | `100` | `+` |

---

### 3.3 Particle Generation
📁 **File:** [main.js](file:///c:/Users/GooGle/OneDrive/Desktop/GMT/assets/js/main.js#L161-L176)

| Property | Value |
|---|---|
| **Count** | 30 particles |
| **Size** | Random `2px–5px` |
| **Position** | Random horizontal (`0–100%`) |
| **Duration** | Random `15s–35s` |
| **Delay** | Random `0s–15s` |
| **Color** | `--color-accent` at `0.15` opacity |
| **Animation** | `floatParticle` keyframe (see §1.7) |

---

### 3.4 Navbar Scroll State
📁 **File:** [main.js](file:///c:/Users/GooGle/OneDrive/Desktop/GMT/assets/js/main.js#L18-L31)

| Property | Value |
|---|---|
| **Trigger** | `scroll` event, threshold: `50px` |
| **Effect** | Toggles `.scrolled` class on navbar |
| **Visual** | Transparent → frosted glass with blur |

---

## 4. Animation Usage Map

> خريطة توضح أين يُستخدم كل نوع من الـ Animation في الصفحة

```
┌─────────────────────────────────────────────────┐
│  NAVBAR                                         │
│  ├─ Scroll: transparent → glass blur            │
│  ├─ Links: underline scaleX + color change      │
│  ├─ Logo: scale(1.05) hover                     │
│  ├─ Mobile: slide from right + overlay fade     │
│  └─ Hamburger: 3 lines → ✕ rotation            │
├─────────────────────────────────────────────────┤
│  HERO SECTION                                   │
│  ├─ Background: static image + gradient overlay │
│  ├─ Particles: floatParticle (30x, infinite)    │
│  ├─ Badge: fadeInUp (0s delay) + pulse dot      │
│  ├─ Title: fadeInUp (0.1s delay)                │
│  ├─ Arabic Title: fadeInUp (0.2s delay)         │
│  ├─ Description: fadeInUp (0.3s delay)          │
│  ├─ Buttons: fadeInUp (0.4s delay)              │
│  ├─ Stats: fadeInUp (0.5s) + counter animation  │
│  ├─ Visual Card: fadeInRight (0.3s delay)       │
│  └─ Float Cards: float (6s, staggered delays)  │
├─────────────────────────────────────────────────┤
│  SERVICES SECTION                               │
│  ├─ Header: scroll reveal                       │
│  ├─ Cards: scroll reveal + hover lift           │
│  └─ Top bar: gradient scaleX on hover           │
├─────────────────────────────────────────────────┤
│  ABOUT PREVIEW                                  │
│  ├─ Image: scroll reveal                        │
│  ├─ Text: scroll reveal (staggered)             │
│  ├─ Features: scroll reveal                     │
│  └─ Button: scroll reveal                       │
├─────────────────────────────────────────────────┤
│  VISION & MISSION                               │
│  └─ Cards: scroll reveal                        │
├─────────────────────────────────────────────────┤
│  ACHIEVEMENTS                                   │
│  ├─ Cards: scroll reveal + hover lift           │
│  └─ Numbers: counter animation (ease-out cubic) │
├─────────────────────────────────────────────────┤
│  CTA SECTION                                    │
│  ├─ Card: scroll reveal                         │
│  └─ Background: rotateBg (20s, infinite)        │
├─────────────────────────────────────────────────┤
│  FOOTER                                         │
│  ├─ Social icons: lift + glow hover             │
│  └─ Links: slide + arrow reveal hover           │
└─────────────────────────────────────────────────┘
```

---

## ⏱️ Timing Variables Reference

| Variable | Value | Used For |
|---|---|---|
| `--transition-fast` | `0.2s ease` | Hover effects, links, small interactions |
| `--transition-normal` | `0.3s ease` | Cards, buttons, navbar state changes |
| `--transition-slow` | `0.5s ease` | Available for slower transitions |

---

> [!IMPORTANT]
> الـ animations `slideInDown` و `shimmer` معرّفين في الكود لكن **غير مستخدمين** حاليًا. متاحين للاستخدام المستقبلي.
