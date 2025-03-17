

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".typing-effect").forEach((element) => {
    let texts = element.dataset.text.split("|");
    let textIndex = 0;
    let charIndex = 0;

    function typeEffect() {
      if (charIndex < texts[textIndex].length) {
        element.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 190);
      } else {
        setTimeout(() => {
          element.innerHTML = "";
          charIndex = 0;
          textIndex = (textIndex + 1) % texts.length;
          typeEffect();
        }, 2000);
      }
    }

    typeEffect();
  });
});




// smooth scrolling 

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollToPlugin);

  window.addEventListener("wheel", (event) => {
    event.preventDefault();

    gsap.to(window, {
      duration: 0.8, // Smooth yet fast
      scrollTo: window.scrollY + event.deltaY * 2, // Adjusts speed
      ease: "power1.out",
      overwrite: true // Cancels previous animation & applies new scroll immediately
    });
  }, { passive: false });
});



// JavaScript for Curtain Menu Toggle
const menuButton = document.querySelector(".hamburger-menu");
const closeButton = document.querySelector("#closeMenu");
const curtainMenu = document.querySelector("#curtainMenu");

menuButton.addEventListener("click", () => {
    curtainMenu.classList.add("menu-active");
});

closeButton.addEventListener("click", () => {
    curtainMenu.classList.remove("menu-active");
});







