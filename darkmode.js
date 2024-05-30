function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    const elements = document.querySelectorAll('.navbar, .header, .footer, .breadcrumb, .dropdown-menu, .card, .menu-item, .gallery img, .cart-item, .about img, .language-switcher button, .breadcrumb li a, .star-rating .selected');
    elements.forEach(element => {
        element.classList.toggle('dark-mode');
    });
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
