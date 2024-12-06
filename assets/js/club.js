// let currentSlide = 0;
// const slides = document.querySelectorAll('.testimonial-slide');
// const dots = document.querySelectorAll('.pagination-dot');

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.classList.remove('active');
//         dots[i].classList.remove('active');
//     });
//     slides[index].classList.add('active');
//     dots[index].classList.add('active');
// }

// function nextSlide() {
//     currentSlide = (currentSlide + 1) % slides.length;
//     showSlide(currentSlide);
// }

// dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         currentSlide = index;
//         showSlide(currentSlide);
//     });
// });

// setInterval(nextSlide, 5000);

// let currentSlide = 0;
// const slides = document.querySelectorAll('.testimonial-slide');
// const dots = document.querySelectorAll('.pagination-dot');

// // Show specific slide
// function showSlide(index) {
//   slides.forEach((slide, i) => {
//     slide.classList.remove('active');
//     dots[i].classList.remove('active');
//   });
//   slides[index].classList.add('active');
//   dots[index].classList.add('active');
// }

// // Auto slide to next
// function nextSlide() {
//   currentSlide = (currentSlide + 1) % slides.length;
//   showSlide(currentSlide);
// }

// // Slide to previous
// function prevSlide() {
//   currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//   showSlide(currentSlide);
// }

// // Manual pagination navigation
// dots.forEach((dot, index) => {
//   dot.addEventListener('click', () => {
//     currentSlide = index;
//     showSlide(currentSlide);
//   });
// });

// // Auto slide every 5 seconds
// setInterval(nextSlide, 5000);



// let currentSlide = 0;
// const slides = document.querySelectorAll('.testimonial-slide');
// const dots = document.querySelectorAll('.pagination-dot');

// // Show specific slide
// function showSlide(index) {
//   slides.forEach((slide, i) => {
//     slide.classList.remove('active'); // Hide all slides
//     dots[i].classList.remove('active'); // Reset all dots
//   });
//   slides[index].classList.add('active'); // Show the active slide
//   dots[index].classList.add('active'); // Activate the corresponding dot
// }

// // Auto slide to next
// function nextSlide() {
//   currentSlide = (currentSlide + 1) % slides.length;
//   showSlide(currentSlide);
// }

// // Slide to previous
// function prevSlide() {
//   currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//   showSlide(currentSlide);
// }

// // Manual pagination navigation
// dots.forEach((dot, index) => {
//   dot.addEventListener('click', () => {
//     currentSlide = index;
//     showSlide(currentSlide);
//   });
// });

// // Auto slide every 5 seconds
// setInterval(nextSlide, 5000);

// // Initialize first slide display
// showSlide(currentSlide);


let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.pagination-dot');

// Show specific slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active'); // Hide all slides
    dots[i].classList.remove('active'); // Reset all dots
  });
  slides[index].classList.add('active'); // Show the active slide
  dots[index].classList.add('active'); // Activate the corresponding dot
}

// Auto slide to next
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Slide to previous
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Manual pagination navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Initialize the first slide and auto-slide every 5 seconds
window.onload = function() {
  showSlide(currentSlide); // Ensure the first slide is displayed
};
setInterval(nextSlide, 5000);
