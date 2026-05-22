const themeToggleBtn = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    rootElement.setAttribute('data-theme', currentTheme);
    updateButtonText(currentTheme);
}

themeToggleBtn.addEventListener('click', () => {
    
    let theme = rootElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
        rootElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        updateButtonText('light');
    } else {
        rootElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateButtonText('dark');
    }
});

function updateButtonText(theme) {
    if (theme === 'dark') {
        themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
        themeToggleBtn.textContent = '🌙 Dark Mode';
    }
}