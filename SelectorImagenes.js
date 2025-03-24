let index = 0;
const images = document.querySelectorAll('.image');
let interval;

function showImage(newIndex) {
    images[index].classList.remove('active');
    index = (newIndex + images.length) % images.length;
    images[index].classList.add('active');
    resetTimer();
}

function nextImage() {
    showImage(index + 1);
}

function prevImage() {
    showImage(index - 1);
}

function resetTimer() {
    clearInterval(interval);
    interval = setInterval(nextImage, 4000);
}

interval = setInterval(nextImage, 4000);

let index1 = 0;
const images1 = document.querySelectorAll('.image1');
let interval1;

function showImage1(newIndex1) {
    images1[index1].classList.remove('active1');
    index1 = (newIndex1 + images1.length) % images1.length;
    images1[index1].classList.add('active1');
    resetTimer1();
}

function nextImage1() {
    showImage1(index1 + 1);
}

function prevImage1() {
    showImage1(index1 - 1);
}

function resetTimer1() {
    clearInterval(interval1);
    interval1 = setInterval(nextImage1, 5200);
}

interval1 = setInterval(nextImage1, 5200);