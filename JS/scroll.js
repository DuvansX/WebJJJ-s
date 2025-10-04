// Esperar a que cargue TODO (incluyendo la pantalla de carga)
window.addEventListener('load', function() {
    
    // Pequeño delay para asegurar que la pantalla de carga se quitó
    setTimeout(iniciarAnimaciones, 500);
    
});

function iniciarAnimaciones() {
    
    // Agregar clases reveal a los elementos
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.classList.add('reveal');
        if (index === 1) card.style.transitionDelay = '0.2s';
        if (index === 2) card.style.transitionDelay = '0.4s';
    });
    
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.classList.add('reveal');
    });
    
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach((card, index) => {
        card.classList.add('reveal-zoom');
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        if (index % 2 === 0) {
            card.classList.add('reveal-left');
        } else {
            card.classList.add('reveal-right');
        }
        card.style.transitionDelay = `${index * 0.15}s`;
    });
    
    const newsletter = document.querySelector('.newsletter-section');
    if (newsletter) {
        newsletter.classList.add('reveal');
    }
    
    const socialIcons = document.querySelectorAll('.icon');
    socialIcons.forEach((icon, index) => {
        icon.classList.add('reveal-zoom');
        icon.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Función para detectar cuando un elemento es visible
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Función mejorada para detectar visibilidad parcial
    function isElementPartiallyInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        
        const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
        const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
        
        return (vertInView && horInView);
    }
    
    // Función para activar animaciones
    function checkAnimations() {
        const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-rotate, .reveal-blur');
        
        revealElements.forEach(element => {
            if (isElementPartiallyInViewport(element)) {
                element.classList.add('active');
            }
        });
    }
    
    // Ejecutar al cargar
    checkAnimations();
    
    // Ejecutar al hacer scroll
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(checkAnimations, 50);
    });
    
    // También ejecutar al redimensionar
    window.addEventListener('resize', checkAnimations);
}