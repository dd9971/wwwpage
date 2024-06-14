let slideIndexDesktop = 0;
let slideIndexMobile = 0;

function plusSlides(n, sliderType) {
  if (sliderType === 'desktop') {
    showSlides(slideIndexDesktop += n, 'desktop');
  } else if (sliderType === 'mobile') {
    showSlides(slideIndexMobile += n, 'mobile');
  }
}

function showSlides(n, sliderType) {
  let i;
  let slides = document.querySelectorAll(`.${sliderType}-slider .slide`);
  if (n >= slides.length) {
    if (sliderType === 'desktop') {
      slideIndexDesktop = 0;
    } else if (sliderType === 'mobile') {
      slideIndexMobile = 0;
    }
  }
  if (n < 0) {
    if (sliderType === 'desktop') {
      slideIndexDesktop = slides.length - 1;
    } else if (sliderType === 'mobile') {
      slideIndexMobile = slides.length - 1;
    }
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (sliderType === 'desktop') {
    slides[slideIndexDesktop].style.display = "block";
  } else if (sliderType === 'mobile') {
    slides[slideIndexMobile].style.display = "block";
  }
}

// Inicjalizacja slajderów
document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndexDesktop, 'desktop');
  showSlides(slideIndexMobile, 'mobile');
});
