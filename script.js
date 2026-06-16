const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 120) {
      section.classList.add("active");
    }
  });
});

reveals.forEach((section) => {
  if (section.getBoundingClientRect().top < window.innerHeight) {
    section.classList.add("active");
  }
});