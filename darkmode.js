function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    const elements = document.querySelectorAll('.navbar, .header, .footer, .breadcrumb, .dropdown-menu, .card, .menu-item, .gallery img, .cart-item, .about img, .language-switcher button, .breadcrumb li a, .star-rating .selected');
    elements.forEach(element => {
        element.classList.toggle('dark-mode');
    });

    // Toggle navbar background and theme
    const navbar = document.querySelector('.navbar');
    if (body.classList.contains('dark-mode')) {
        navbar.classList.remove('bg-light', 'navbar-light');
        navbar.classList.add('bg-dark', 'navbar-dark');
    } else {
        navbar.classList.remove('bg-dark', 'navbar-dark');
        navbar.classList.add('bg-light', 'navbar-light');
    }
}

// Optional: Save user preference for dark mode
function saveDarkModePreference() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Load user preference for dark mode
function loadDarkModePreference() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        toggleDarkMode();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadDarkModePreference();
    document.getElementById('darkModeToggle').addEventListener('click', () => {
        toggleDarkMode();
        saveDarkModePreference();
    });
});
