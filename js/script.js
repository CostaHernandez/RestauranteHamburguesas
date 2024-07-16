// Seleccionar los elementos del DOM
const searchBtn = document.querySelector('#search-btn');
const searchForm = document.querySelector('.header .search-form');
const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .navbar');

// Función para alternar la visibilidad del formulario de búsqueda
searchBtn.onclick = () => {
    searchBtn.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// Función para alternar la visibilidad del menú de navegación
menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    searchBtn.classList.remove('fa-times');
    searchForm.classList.remove('active');
}

// Función para cerrar el formulario de búsqueda y el menú de navegación al desplazarse por la página
window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchForm.classList.remove('active');
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// Cerrar el formulario de búsqueda si se hace clic fuera de él
document.addEventListener('click', (e) => {
    if (!searchForm.contains(e.target) && !searchBtn.contains(e.target)) {
        searchBtn.classList.remove('fa-times');
        searchForm.classList.remove('active');
    }
});

// Cerrar el menú de navegación si se hace clic fuera de él
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
        menuBtn.classList.remove('fa-times');
        navbar.classList.remove('active');
    }
});
