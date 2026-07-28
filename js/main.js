// DARK MODE
document.addEventListener('DOMContentLoaded', () => {

    /* ---  DARK MODE AVEC LOCALSTORAGE --- */
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

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
const navbar = document.getElementById('mainNav');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Aminiion au scrolle POURQUOI PARTICIPER
const reveals = document.querySelectorAll(".reveal");
if (reveals.length) {
    window.addEventListener("scroll", () => {
        reveals.forEach(item => {
            const windowHeight = window.innerHeight;
            const top = item.getBoundingClientRect().top;
            if (top < windowHeight - 120) {
                item.classList.add("active");
            }
        });
    });
}

// Aminiion au scrolle THEME
const hiddens = document.querySelectorAll(".hidden");
if (hiddens.length) {
    window.addEventListener("scroll", () => {
        hiddens.forEach(item => {
            const windowHeight = window.innerHeight;
            const top = item.getBoundingClientRect().top;
            if (top < windowHeight - 120) {
                item.classList.add("active");
            }
        });
    });
}

// BOUTON RETOUR EN HAUT (Smooth Scroll)
const btn = document.getElementById('topBtn');
if (btn) {
    window.addEventListener('scroll', () => {
        btn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// compteur CHIFFRE CLE
const counters = document.querySelectorAll('.counter');
const vitesse = 200;

counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');

    const updateCount = () => {
        const count = +counter.innerText;
        const increment = target / vitesse;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});

// COMPTEUR DATE DE L'EVENEMENT
const dateCible = new Date("2026-11-20T09:00:00").getTime();

const joursEl = document.getElementById("days");
const heuresEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondesEl = document.getElementById("seconds");

function updateCountdown() {
    if (!joursEl || !heuresEl || !minutesEl || !secondesEl) return;

    const maintenant = new Date().getTime();
    const difference = dateCible - maintenant;

    if (difference < 0) {
        clearInterval(interval);
        joursEl.innerText = "00";
        heuresEl.innerText = "00";
        minutesEl.innerText = "00";
        secondesEl.innerText = "00";
        return;
    }

    const jours = Math.floor(difference / (1000 * 60 * 60 * 24));
    const heures = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const secondes = Math.floor((difference % (1000 * 60)) / 1000);

    joursEl.innerText = String(jours).padStart(2, "0");
    heuresEl.innerText = String(heures).padStart(2, "0");
    minutesEl.innerText = String(minutes).padStart(2, "0");
    secondesEl.innerText = String(secondes).padStart(2, "0");
}

updateCountdown();
const interval = setInterval(updateCountdown, 1000);

// NAVBAR MENU
const menuBtn = document.querySelector(".menu-btn");
const navLink = document.querySelector(".nav-link");

if (menuBtn && navLink) {
    menuBtn.addEventListener("click", () => {
        navLink.classList.toggle("active");
    });
}

document.querySelectorAll(".nav-link a").forEach(link => {
    link.addEventListener("click", () => {
        if (navLink) navLink.classList.remove("active");
    });
});

// VALIDATION FORMULAIRE
const form = document.getElementById("contactform");

if (form) {
    form.addEventListener("submit", function(e){
        e.preventDefault();

        let valide = true;

        function erreur(id, Message){
            let champ = document.getElementById(id);
            let small = champ.nextElementSibling;
            champ.style.border = "2px solid red";
            small.textContent = Message;
            valide = false;
        }

        function ok(id){
            let champ = document.getElementById(id);
            champ.style.border = "2px solid green";
            champ.nextElementSibling.textContent = "";
        }

        if(document.getElementById("nom").value.trim() === ""){
            erreur("nom", "Nom obligatoire");
        } else {
            ok("nom");
        }

        let email = document.getElementById("email").value;
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!regex.test(email)){
            erreur("email", "Email invalide");
        } else {
            ok("email");
        }

        let tel = document.getElementById("telephone").value;
        if(tel.length < 8){
            erreur("telephone", "Minimum 8 chiffres");
        } else {
            ok("telephone");
        }

        let participation = document.getElementById("participation");
        if(participation.value === ""){
            erreur("participation", "Choisir une participation");
        } else {
            ok("participation");
        }

        let pays = document.getElementById("pays");
        if(pays.value === ""){
            erreur("pays", "Choisir un pays");
        } else {
            ok("pays");
        }

        let messageField = document.getElementById("Message");
        if(messageField.value.trim().length < 20){
            erreur("Message", "Minimum 20 caractères");
        } else {
            ok("Message");
        }

        if(valide){
            document.querySelector(".success").style.display = "block";
            form.reset();

            setTimeout(() => {
                document.querySelector(".success").style.display = "none";
            }, 4000);
        }
    });
}

// FILTRE INTERVENANTS
const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".speaker-card");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        cards.forEach(card => {
            if (filter === "all" || card.dataset.category === filter) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }
        });
    });
});


// FILTRAGE TABLEAU PROGRAMME
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(btn => btn.classList.remove("active"));
        contents.forEach(content => content.classList.remove("active"));

        tab.classList.add("active");

        document
            .getElementById(tab.dataset.day)
            .classList.add("active");

    });

});
// Année dynamique dans le footer
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}