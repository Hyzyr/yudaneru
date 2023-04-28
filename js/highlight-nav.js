const anchors = document.querySelectorAll(".anchor[id]");
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset; // Get current scroll position
  anchors.forEach((current) => {
    const section = current.nextElementSibling;
    const sectionHeight = section.offsetHeight;
    const sectionTop = current.offsetTop - 250;
    let sectionId = current.getAttribute("id");
    let currentSection = document.querySelector(
      `.scrollTab[href*="${sectionId}"]`
    );
    if (!currentSection) {
      console.log(sectionId);
      return;
    }
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      currentSection.classList.add("active");
    } else {
      currentSection.classList.remove("active");
    }
  });
}
