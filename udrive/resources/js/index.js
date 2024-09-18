window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((element) => {
    const position = element.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible"); // optional, if you want the animation to reverse
    }
  });
});
