const sliders = {
    1: { current: 0, slides: [], interval: null, delay: 4000, isTransitioning: false },
    2: { current: 0, slides: [], interval: null, delay: 5200, isTransitioning: false }
};

window.onload = () => {
    for (let i = 1; i <= 2; i++) {
        sliders[i].slides = document.querySelectorAll(`#slider${i} .slide`);
        showSlide(i, sliders[i].current);
        startAutoSlide(i);
    }
};

function showSlide(sliderId, index) {
    const slider = sliders[sliderId];
    

    slider.isTransitioning = true;
    

    clearInterval(slider.interval);
    clearTimeout(slider.timeout);
    

    slider.slides.forEach((slide) => {
        const video = slide.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
           
            video.onended = null;
            video.onerror = null;
        }
    });
    

    slider.slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
    
    slider.current = index;
    

    const currentSlide = slider.slides[index];
    const currentVideo = currentSlide.querySelector('video');
    
    if (currentVideo) {
        console.log('Mostrando video en slide', index);
        

        currentVideo.play().then(() => {
            console.log('Video iniciado correctamente');
            slider.isTransitioning = false;
        }).catch(e => {
            console.log('Error reproduciendo video:', e);
    
            slider.timeout = setTimeout(() => {
                nextSlide(sliderId);
            }, slider.delay);
            slider.isTransitioning = false;
        });
        
  
        currentVideo.onended = () => {
            console.log('Video terminado, pasando al siguiente slide');
            if (!slider.isTransitioning) {
                nextSlide(sliderId);
            }
        };
        
     
        currentVideo.onerror = () => {
            console.log('Error en el video, pasando al siguiente slide');
            if (!slider.isTransitioning) {
                slider.timeout = setTimeout(() => {
                    nextSlide(sliderId);
                }, slider.delay);
            }
        };
        

        slider.securityTimeout = setTimeout(() => {
            if (currentVideo && !currentVideo.ended && currentVideo.currentTime > 0) {
                console.log('Video muy largo, forzando siguiente slide después de 30s');
                if (!slider.isTransitioning) {
                    nextSlide(sliderId);
                }
            }
        }, 30000);
        
    } else {
        console.log('Mostrando imagen en slide', index);
        // Si es una imagen, usar el timer normal
        slider.timeout = setTimeout(() => {
            nextSlide(sliderId);
        }, slider.delay);
        slider.isTransitioning = false;
    }
}

function nextSlide(sliderId) {
    const slider = sliders[sliderId];
    
    // Prevenir clics múltiples rápidos
    if (slider.isTransitioning) {
        console.log('Transición en progreso, ignorando clic');
        return;
    }
    
    const newIndex = (slider.current + 1) % slider.slides.length;
    showSlide(sliderId, newIndex);
}

function prevSlide(sliderId) {
    const slider = sliders[sliderId];
    
    // Prevenir clics múltiples rápidos
    if (slider.isTransitioning) {
        console.log('Transición en progreso, ignorando clic');
        return;
    }
    
    const newIndex = (slider.current - 1 + slider.slides.length) % slider.slides.length;
    showSlide(sliderId, newIndex);
}

function resetTimer(sliderId) {
    const slider = sliders[sliderId];
    clearInterval(slider.interval);
    clearTimeout(slider.timeout);
    clearTimeout(slider.securityTimeout);
    startAutoSlide(sliderId);
}

function startAutoSlide(sliderId) {

}