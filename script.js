// Smooth navbar shadow on scroll

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(15,23,42,0.95)";
    navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
  } else {
    navbar.style.background = "rgba(15,23,42,0.6)";
    navbar.style.boxShadow = "none";
  }
});


// Smooth scroll for navbar links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// Typing effect

const roles = [
  "IT Support Specialist",
  "Cybersecurity Enthusiast",
  "Junior System Administrator",
  "Tech Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;

const roleElement = document.querySelector(".hero-text h2");

function typeEffect() {

  if (charIndex < roles[roleIndex].length) {

    roleElement.textContent +=
      roles[roleIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, 80);

  } else {

    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {

  if (charIndex > 0) {

    roleElement.textContent =
      roles[roleIndex].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(eraseEffect, 40);

  } else {

    roleIndex++;

    if (roleIndex >= roles.length) {
      roleIndex = 0;
    }

    setTimeout(typeEffect, 300);
  }
}

roleElement.textContent = "";
typeEffect();

// Reveal animation

function revealSections() {

  const reveals =
    document.querySelectorAll(".reveal");

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;

    const revealTop =
      element.getBoundingClientRect().top;

    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealSections);

revealSections();