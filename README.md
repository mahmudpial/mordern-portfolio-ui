# Professional UI/UX Design Portfolio

A modern, highly interactive, and modular Single Page Application (SPA) portfolio website designed for a UI/UX Designer. Built with a focus on premium aesthetics, this portfolio features smooth animations, a dynamic component-loading architecture, and a clean, maintainable codebase.

## 🌟 Features

- **Dynamic Component Loading:** The application uses a modular architecture. `index.html` acts as the orchestrator, dynamically fetching and injecting HTML partials (like Hero, Services, Works) from the `pages/` directory.
- **Premium Aesthetics:** Features custom hover animations, flowing data timeline effects, and high-quality UI/UX principles driven by Tailwind CSS.
- **Interactive Works Carousel:** An auto-playing slider showcasing projects, complete with hover-to-pause functionality and pagination dots.
- **Testimonial Slider:** A sleek, depth-based carousel for client reviews.
- **Typewriter Effect:** An engaging, blinking-cursor typewriter animation in the Hero section.
- **Scroll-Triggered Counters:** Number statistics that automatically count up when they scroll into the user's viewport.
- **Modular JavaScript:** Logic is cleanly separated into domain-specific files (`sliders.js`, `typewriter.js`, `counters.js`, `main.js`) for excellent maintainability.

## 🛠️ Tech Stack

- **HTML5:** Semantic HTML structure and modular partials.
- **Tailwind CSS:** Utility-first CSS framework (loaded via CDN) for rapid, responsive UI styling and custom animations.
- **Vanilla JavaScript:** ES6+ JavaScript handling DOM manipulation, Intersection Observers, data fetching, and interval-based animations without relying on heavy frameworks like React or jQuery.

## 📂 Project Structure

```text
portfolio-project-app/
│
├── index.html               # Main entry point and orchestrator
├── README.md                # Project documentation
│
├── js/                      # Modular JavaScript files
│   ├── main.js              # Component fetching and app initialization
│   ├── sliders.js           # Works and Testimonials carousel logic
│   ├── typewriter.js        # Hero section typing animation
│   └── counters.js          # Intersection Observer number counters
│
├── pages/                   # HTML partials injected into index.html
│   ├── hero.html            # Hero / Header section
│   ├── services.html        # Services & Stats section
│   ├── experience.html      # Animated timeline section
│   ├── works.html           # Works / Projects carousel
│   ├── testimonials.html    # Client reviews
│   └── contact.html         # Footer and contact information
│
└── images/                  # Static assets and graphics
```

## 🚀 How to Run Locally

Because the project uses the JavaScript `fetch()` API to dynamically load the HTML partials from the `pages/` folder, it **cannot** be run directly from the file system (e.g., `file:///`) due to browser CORS policies. 

You must serve it through a local web server.

### Option 1: Python HTTP Server (Recommended)
If you have Python installed, open your terminal, navigate to the project directory, and run:
```bash
python3 -m http.server 3000
```
Then, open your browser and navigate to `http://localhost:3000`.

### Option 2: VS Code Live Server
If you are using Visual Studio Code, you can install the **Live Server** extension.
1. Open the project folder in VS Code.
2. Right-click on `index.html`.
3. Select **"Open with Live Server"**.

## 🎨 Design & Typography

- **Primary Fonts:** `Plus Jakarta Sans` for clean, modern readability, and `Caveat` for stylish, cursive accents.
- **Color Palette:** A highly curated premium palette featuring deep brand darks (`#0f2631`), vibrant orange (`#F0593B`), and soft creams (`#F8F7F2`).

---
*Designed & Developed by Pial.Dev*
