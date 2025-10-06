// ===== Navbar Scroll Effect =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// ===== Typewriting Effect for Name =====
const nameElement = document.getElementById('name');
const nameText = "Simran";
let nameIndex = 0;

function typeName() {
    if(nameIndex < nameText.length){
        nameElement.textContent += nameText[nameIndex];
        nameIndex++;
        setTimeout(typeName, 200);
    }
}
typeName();

// ===== Hero Paragraph Typing =====
const heroText = document.getElementById('hero-text');
const messages = ["Aspiring Software Developer", "Passionate about AI & ML"];
let msgIndex = 0, charIndex = 0;

function typeHeroText() {
    if(msgIndex < messages.length){
        if(charIndex < messages[msgIndex].length){
            heroText.textContent += messages[msgIndex][charIndex];
            charIndex++;
            setTimeout(typeHeroText, 100);
        } else {
            setTimeout(() => {
                heroText.textContent = "";
                charIndex = 0;
                msgIndex = (msgIndex + 1) % messages.length;
                typeHeroText();
            }, 2000);
        }
    }
}

// Start hero text typing after name is typed
setTimeout(typeHeroText, nameText.length * 200 + 500);

// ===== Project Cards Hover Effect =====
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "0.3s";
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = "scale(1)";
    });
});

// ===== Scroll Reveal Sections =====
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('section-visible');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));


// Smooth scrolling effect for navbar links
document.querySelectorAll('.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
