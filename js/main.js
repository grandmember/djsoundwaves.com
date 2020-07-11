const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari && window.innerWidth < 813) {
  const myNavLinks = document.getElementById("myNavLinks");
  const burger = document.querySelector(".burger");
  const logo = document.getElementById("logoTitle");
  burger.classList.remove("burger");
  myNavLinks.classList.remove("nav-links");
  myNavLinks.classList.add("nav-links-ios");
  logo.style.fontSize="1.5rem";
}

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Toggle Nav

    nav.classList.toggle("nav-active");

    // Animate Links

    // navLinks.forEach((link, index) => {
    //   if (link.style.animation) {
    //     link.style.animation = "";
    //   } else {
    //     link.style.animation = `navLinkFade 0.3s ease forwards ${
    //       index / 7 + 0.3
    //     }s`;
    //   }
    // });
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `bounce-7 1s ease forwards ${index / 7 + 0.1}s`;
      }
    });

    burger.classList.toggle("toggle");
  });
};
if (!(isSafari && window.innerWidth < 813)) {
  navSlide();
}
