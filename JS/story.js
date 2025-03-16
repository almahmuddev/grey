
    gsap.registerPlugin(ScrollToPlugin);

let isScrolling = false;

window.addEventListener("wheel", (event) => {
  event.preventDefault();

  if (!isScrolling) {
    isScrolling = true;

    gsap.to(window, {
      duration: 0.8, 
      scrollTo: window.scrollY + event.deltaY * 2.5, 
      ease: "power1.out",
      onComplete: () => isScrolling = false
    });
  }
}, { passive: false });

