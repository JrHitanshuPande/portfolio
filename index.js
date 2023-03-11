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

// // Mobile Smooth Scroll 
const about1 = document.querySelector(".about0");

document.querySelector(".about2").addEventListener("click", () => {
    about.scrollIntoView({ behavior: "smooth" });
});

const skillz1 = document.querySelector(".skills");

document.querySelector(".skill1").addEventListener("click", () => {
    skillz.scrollIntoView({ behavior: "smooth" });
});



const educa1 = document.querySelector(".Education");

document.querySelector(".Educat1").addEventListener("click", () => {
    educa.scrollIntoView({ behavior: "smooth"});
});

const cont1 = document.querySelector(".contactme");

document.querySelector(".contacts1").addEventListener("click", () => {
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


  // Mobile Nav Bar

  const navbut = document.querySelector(".fa-bars") ;
  navbut.onclick = function ()
  {
    
    mobilenavb = document.querySelector(".mobilenav");
    mobilenavb.classList.toggle("active");
  }
  