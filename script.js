// Burger Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function closeMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = 'none';
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const burgerMenu = document.querySelector('.burger-menu');
    
    if (!burgerMenu.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = 'none';
    }
});



