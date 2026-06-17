const revealElements = document.querySelectorAll(".reveal");

revealElements.forEach((element) => {
  element.classList.add("active");
});

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
