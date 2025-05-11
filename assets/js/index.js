let slideIndex = 0;
const slides = document.querySelectorAll(".slider--slide");
const dots = document.querySelectorAll(".dot");
const toggleMenu = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
let sliderTimer;

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

  clearTimeout(sliderTimer);
  sliderTimer = setTimeout(showSlides, 3000);
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

toggleMenu.addEventListener("click", () => {
  if (navMenu.classList.contains("open-menu")) {
    navMenu.classList.remove("open-menu");
  } else {
    navMenu.classList.add("open-menu");
  }
});

// Close menu if click occurs outside of toggleMenu or navMenu
document.addEventListener("click", (event) => {
  if (!navMenu.contains(event.target) && !toggleMenu.contains(event.target)) {
    navMenu.classList.remove("open-menu");
  }
});

// Initialize slider
// showSlides();
