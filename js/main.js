// c:\Users\32092\Desktop\projects\MORIAH\js\main.js

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const dropdown = document.querySelector(".dropdown");
const navLinks = document.querySelectorAll(".nav-list .nav-link");

const toggleMenu = () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
};

const closeMenu = () => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
    // Cerramos el submenú si está abierto
    if (dropdown && dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
    }
};

// Toggle para el menú de hamburguesa
hamburger.addEventListener("click", toggleMenu);

// Toggle para el submenú de Ministerios en móvil
if (dropdown) {
    dropdown.addEventListener("click", (e) => {
        // Solo activar en vista móvil (cuando el menú de hamburguesa es visible)
        if (hamburger.offsetParent !== null) {
            // Previene que el enlace principal navegue si tiene un submenú
            if (e.target.closest('.dropdown')) {
                e.preventDefault();
                dropdown.classList.toggle("active");
            }
        }
    });
}

// Cierra el menú si se hace clic en un enlace
navLinks.forEach(link => {
    // Si el enlace no está dentro de un dropdown, cierra el menú
    if (!link.closest('.dropdown-menu')) {
        link.addEventListener("click", closeMenu);
    }
});
