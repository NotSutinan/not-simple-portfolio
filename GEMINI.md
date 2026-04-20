# Project Overview

This project is a personal portfolio website for Sutinan Not, a Data Analyst. It is a static website built using HTML, CSS, and JavaScript. The site features a modern design with a dark theme, responsive layouts, and uses the 'JetBrains Mono' font. It aims to showcase Sutinan's professional profile, including their bio, selected projects, key skills, and contact information.

# Building and Running

This is a static website project. It does not require a compilation or build step to run locally.

1.  **To view the website locally:**
    *   Simply open the `index.html` file in any modern web browser.

2.  **Local Storage:**
    *   The `script.js` utilizes `localStorage` to remember the user's theme preference (dark or light mode). This functionality works directly within the browser.

3.  **Deployment:**
    *   The project was planned for deployment using GitHub Pages, as documented in `plan/our_plan.md`.

# Development Conventions

*   **HTML Structure:** Uses semantic HTML5 tags (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`) for better structure and accessibility.
*   **CSS Styling:**
    *   Employs CSS variables (`:root`) for managing a theming system, supporting both a dark and a light mode (`body.light-theme`).
    *   Utilizes `JetBrains Mono` font imported from Google Fonts.
    *   Incorporates responsive design principles using media queries to adapt to various screen sizes.
    *   CSS Grid and Flexbox are used for layout management.
*   **JavaScript Interactivity:** Basic client-side enhancements are implemented in `script.js`, including:
    *   Theme toggling functionality.
    *   Smooth scrolling for navigation links.
*   **Documentation:** A `plan/our_plan.md` file provides instructional context for setting up, developing, and deploying the portfolio.
*   **Code Style:** Code is formatted for readability, with consistent indentation and spacing.

# Key Files

*   **`index.html`**: The main structure and content of the portfolio website.
*   **`style.css`**: Contains all the styling for the website, including theming and responsiveness.
*   **`script.js`**: Handles interactive elements like theme switching and smooth scrolling.
*   **`plan/our_plan.md`**: Documentation outlining the plan for developing and deploying the portfolio.
*   **`images/`**: Directory intended for storing project-related images or assets.
