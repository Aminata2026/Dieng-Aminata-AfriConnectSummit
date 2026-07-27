
// DARK MODE
document.addEventListener('DOMContentLoaded', () => {

    /* ---  DARK MODE AVEC LOCALSTORAGE --- */
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Vérifier la préférence sauvegardée
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        if (darkModeToggle) darkModeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            darkModeToggle.innerHTML = isDark ? '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-stars-fill"></i>';
        });
    }
})      
// NAVBAR DYNAMIQUE AU SCROLL 
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('mainNav');

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
     });
    