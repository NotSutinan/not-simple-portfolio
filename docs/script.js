// Confirming script is linked
console.log("Sutinan's Portfolio Script Loaded!");

const themeSwitch = document.getElementById('checkbox');
const body = document.body;

// Function to set the theme
function setTheme(theme) {
    if (theme === 'light') {
        body.classList.add('light-theme');
        themeSwitch.checked = true;
    } else {
        body.classList.remove('light-theme');
        themeSwitch.checked = false;
    }
}

// Load theme from localStorage on initial load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    // Default to dark theme if no theme is saved or if saved theme is 'dark'
    setTheme(savedTheme === 'light' ? 'light' : 'dark'); 
});

// Event listener for the theme switch
themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        setTheme('light');
        localStorage.setItem('theme', 'light');
    } else {
        setTheme('dark');
        localStorage.setItem('theme', 'dark');
    }
});


// Example: Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
