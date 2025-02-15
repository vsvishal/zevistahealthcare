let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlides() {
  slides.forEach((slide, index) => {
    slide.style.display = "none";
    dots[index].classList.remove("active");
  });

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

// Initialize slider
showSlides();
