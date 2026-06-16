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