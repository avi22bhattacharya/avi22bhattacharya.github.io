var slideIndex = 0;
var slides = document.querySelectorAll('#slideshow h1');

function showSlides() {
slideIndex++;
if (slideIndex >= slides.length) {
slideIndex = 0;
}

for (var i = 0; i < slides.length; i++) {
slides[i].classList.remove('active');
}

slides[slideIndex].classList.add('active');
}

setInterval(showSlides, 2000);

