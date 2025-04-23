const sliders = {
    1: { current: 0, slides: [], interval: null, delay: 4000 },
    2: { current: 0, slides: [], interval: null, delay: 5200 }
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
    slider.slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
    slider.current = index;
    resetTimer(sliderId);
}

function nextSlide(sliderId) {
    const slider = sliders[sliderId];
    const newIndex = (slider.current + 1) % slider.slides.length;
    showSlide(sliderId, newIndex);
}

function prevSlide(sliderId) {
    const slider = sliders[sliderId];
    const newIndex = (slider.current - 1 + slider.slides.length) % slider.slides.length;
    showSlide(sliderId, newIndex);
}

function resetTimer(sliderId) {
    const slider = sliders[sliderId];
    clearInterval(slider.interval);
    startAutoSlide(sliderId);
}

function startAutoSlide(sliderId) {
    const slider = sliders[sliderId];
    slider.interval = setInterval(() => nextSlide(sliderId), slider.delay);
}