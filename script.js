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

document.addEventListener("DOMContentLoaded", function () {
    const projectsContainer = document.querySelector(".projects-container");
    const projects = document.querySelector(".projects");
    const projectCards = document.querySelectorAll(".project-card");

    let totalWidth = 0;

    projectCards.forEach(card => {
        const style = window.getComputedStyle(card);
        const marginRight = parseFloat(style.marginRight);
        totalWidth += card.offsetWidth + marginRight;
    });

    // إذا كان العرض الإجمالي للبطاقات أقل من عرض الحاوية (الشاشة)
    if (totalWidth < projectsContainer.offsetWidth) {
        projects.style.justifyContent = "center";
    } else {
        projects.style.justifyContent = "flex-start";
    }
});

