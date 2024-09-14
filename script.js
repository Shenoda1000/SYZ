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

document.addEventListener("DOMContentLoaded", function() {
    const jobTitleElement = document.querySelector('.job-title');
    jobTitleElement.textContent = "Front-End";
});

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
const switchInput = document.getElementById('switch');
const body = document.body;

// عندما يتم تغيير حالة الـ switch
switchInput.addEventListener('change', () => {
    // تبديل الثيم
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
});



document.getElementById('whatsappBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const name = encodeURIComponent(document.querySelector('input[name="name"]').value);
    const email = encodeURIComponent(document.querySelector('input[name="email"]').value);
    const message = encodeURIComponent(document.querySelector('textarea[name="message"]').value);
    const phoneNumber = '201275753325'; // رقم هاتفك مع رمز الدولة
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
});
