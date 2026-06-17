// Smooth scroll + reveal animations
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Gallery lightbox
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxTitle = document.getElementById("lightboxTitle");
const closeLightbox = document.querySelector(".close-lightbox");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (!lightbox || !lightboxImg || !lightboxTitle) return;

    lightbox.classList.add("active");
    lightboxImg.src = item.getAttribute("data-img");
    lightboxTitle.textContent = item.getAttribute("data-title");
  });
});

if (closeLightbox) {
  closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });
}

if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });
}

// Booking form thank-you section
const bookingForm = document.getElementById("bookingForm");
const thankYouSection = document.getElementById("thank-you");

if (bookingForm && thankYouSection) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    thankYouSection.style.display = "flex";
    thankYouSection.scrollIntoView({
      behavior: "smooth"
    });

    bookingForm.reset();
  });
}

// About image slider
const aboutSlider = document.getElementById("aboutSlider");

const aboutImages = [
  "image 1.png",
  "image2.png",
  "imge3.png",
  "ime4.png"
];

let currentAboutImage = 0;

if (aboutSlider) {
  setInterval(() => {
    aboutSlider.style.opacity = "0";

    setTimeout(() => {
      currentAboutImage = (currentAboutImage + 1) % aboutImages.length;
      aboutSlider.src = aboutImages[currentAboutImage];
      aboutSlider.style.opacity = "1";
    }, 300);
  }, 2500);
}
