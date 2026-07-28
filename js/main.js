
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
// Aminiion au scrolle POURQUOI PARTICIPER
     const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

    reveals.forEach(item=>{

        const windowHeight = window.innerHeight;

        const top = item.getBoundingClientRect().top;

        if(top < windowHeight-120){

            item.classList.add("active");
        }
    });
});
// Aminiion au scrolle THEME
    const hiddens = document.querySelectorAll(".hidden");

window.addEventListener("scroll",()=>{

    hiddens.forEach(item=>{

        const windowHeight = window.innerHeight;

        const top = item.getBoundingClientRect().top;

        if(top < windowHeight-120){

            item.classList.add("active");
        }
    });
});
// BOUTON RETOUR EN HAUT (Smooth Scroll) 
    const btn = document.getElementById('topBtn');
    window.addEventListener('scroll', () => {
        btn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

// compteur CHIFFRE CLE
// On sélectionne tous les éléments qui ont la classe "counter"
const counters = document.querySelectorAll('.counter');

// Vitesse de l'animation (plus le chiffre est petit, plus c'est rapide)
const vitesse = 200;

// On parcourt chaque compteur trouvé sur la page
    counters.forEach(counter => {

    // On récupère la valeur finale à atteindre (ex: 1200, 48, 3, 12)
    const target = +counter.getAttribute('data-target');

    // Fonction qui va incrémenter le compteur petit à petit
    const updateCount = () => {

        // On récupère la valeur actuelle affichée (au début : 0)
        const count = +counter.innerText;

        // On calcule de combien on doit augmenter à chaque étape
        // (plus la cible est grande, plus on avance vite)
        const increment = target / vitesse;

        if (count < target) {
            // On ajoute l'incrément et on arrondit vers le haut
            counter.innerText = Math.ceil(count + increment);

            // On rappelle la fonction un peu plus tard (effet d'animation)
            setTimeout(updateCount, 20);
        } else {
            // Quand on a atteint la cible, on affiche la valeur exacte
            counter.innerText = target;
        }
    };

    // On lance l'animation pour ce compteur
    updateCount();
});
// COMPTEUR DATE DE L'EVENEMENT
const dateCible = new Date("2026-11-20T09:00:00").getTime();

// On récupère les éléments HTML une seule fois (plus performant)
const joursEl = document.getElementById("days");
const heuresEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondesEl = document.getElementById("seconds");

// Fonction qui met à jour le compte à rebours
function updateCountdown() {

    // Date et heure actuelles
    const maintenant = new Date().getTime();

    // Différence en millisecondes entre la date cible et maintenant
    const difference = dateCible - maintenant;

    // Si l'événement est déjà passé, on arrête et on affiche 0
    if (difference < 0) {
        clearInterval(interval);
        joursEl.innerText = "00";
        heuresEl.innerText = "00";
        minutesEl.innerText = "00";
        secondesEl.innerText = "00";
        return;
    }

    // Calcul des jours, heures, minutes, secondes restants
    const jours = Math.floor(difference / (1000 * 60 * 60 * 24));
    const heures = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const secondes = Math.floor((difference % (1000 * 60)) / 1000);

    // padStart(2, "0") permet d'afficher toujours 2 chiffres (ex: 05 au lieu de 5)
    joursEl.innerText = String(jours).padStart(2, "0");
    heuresEl.innerText = String(heures).padStart(2, "0");
    minutesEl.innerText = String(minutes).padStart(2, "0");
    secondesEl.innerText = String(secondes).padStart(2, "0");
}

// On lance la fonction immédiatement (pour éviter d'attendre 1 seconde au chargement)
updateCountdown();

