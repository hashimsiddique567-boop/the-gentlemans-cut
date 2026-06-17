const reveals = document.querySelectorAll(".reveal");

function revealSections() {
  reveals.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 120) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxTitle = document.getElementById("lightboxTitle");
const closeLightbox = document.querySelector(".close-lightbox");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    lightbox.classList.add("active");
    lightboxImg.src = item.dataset.img;
    lightboxTitle.textContent = item.dataset.title;
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});

const bookingForm = document.getElementById("bookingForm");
const thankYou = document.getElementById("thank-you");

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  thankYou.classList.add("active");
  thankYou.scrollIntoView({ behavior: "smooth" });
  bookingForm.reset();
});
const aboutImages = [
  "image 1.png",
  "image2.png",
  "imge3.png",
  "ime4.png"
];

let currentImage = 0;

setInterval(() => {
  currentImage++;

  if (currentImage >= aboutImages.length) {
    currentImage = 0;
  }

  const slider = document.getElementById("aboutSlider");

  if (slider) {
    slider.style.opacity = "0";

    setTimeout(() => {
      slider.src = aboutImages[currentImage];
      slider.style.opacity = "1";
    }, 300);

  
  }

}, 3000);
.about-image img{
    width:100%;
    border-radius:20px;
    transition:opacity 0.5s ease-in-out;
}
