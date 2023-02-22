// Smooth Scroll 
const about = document.querySelector(".about0");

document.querySelector(".about").addEventListener("click", () => {
    about.scrollIntoView({ behavior: "smooth" });
});

const skillz = document.querySelector(".skills");

document.querySelector(".skill").addEventListener("click", () => {
    skillz.scrollIntoView({ behavior: "smooth" });
});



const educa = document.querySelector(".Education");

document.querySelector(".Educat").addEventListener("click", () => {
    educa.scrollIntoView({ behavior: "smooth"});
});

const cont = document.querySelector(".contactme");

document.querySelector(".contacts").addEventListener("click", () => {
    educa.scrollIntoView({ behavior: "smooth"});
});
// Gamil hidden 
const viewButton = document.querySelector(".button");
const email = document.querySelector(".hidden");

viewButton.addEventListener("click", () => {
    if (email.style.display === "none") {
      email.style.display = "block";
      viewButton.textContent="Hide";
    } else {
      email.style.display = "none";
      viewButton.textContent="View";
    }
  });
