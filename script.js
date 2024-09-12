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



// التبديل بين الوضع الفاتح والداكن
const themeToggleBtn = document.getElementById('themeToggle');
const burgerMenu = document.querySelector('.burger-menu');
const bodyElement = document.body;

themeToggleBtn.addEventListener('click', () => {
    const isLightTheme = bodyElement.classList.toggle('light-theme');
    bodyElement.classList.toggle('dark-theme', !isLightTheme); // تأكد من التبديل بشكل صحيح
});



document.getElementById('whatsappBtn').addEventListener('click', function(e) {
        e.preventDefault();
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const message = document.querySelector('textarea[name="message"]').value;
        const phoneNumber = '01275753325'; // ضع رقم هاتفك هنا
        const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank');
    });
