function toggleMenu() {
    const menu = document.getElementById('menu');
    const burger = document.querySelector('.burger-menu');
    
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        menu.classList.add('hide');
    } else {
        menu.classList.remove('hide');
        menu.classList.add('show');
    }

    burger.classList.toggle('active');
}

// إغلاق القائمة عند الضغط خارجها
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const burger = document.querySelector('.burger-menu');
    const isClickInside = menu.contains(event.target) || burger.contains(event.target);
    
    if (!isClickInside && menu.classList.contains('show')) {
        closeMenu();
    }
});

function closeMenu() {
    const menu = document.getElementById('menu');
    const burger = document.querySelector('.burger-menu');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        menu.classList.add('hide');
    }
    burger.classList.remove('active');
}

function scrollToSection(sectionId) {
    // التمرير للأعلى بسرعة
    window.scrollTo({
        top: document.querySelector(sectionId).offsetTop,
        behavior: 'smooth'
    });
    
    closeMenu();
}



window.addEventListener('scroll', function() {
    const skillsSection = document.getElementById('skills');
    const skillsPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if(skillsPosition < screenPosition) {
        document.querySelectorAll('.skill-level').forEach(skill => {
            skill.style.width = skill.style.getPropertyValue('--skill-width');
        });
    }
});
