const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });
  });
});

let slides = document.querySelector(".slides");
let slideIndex = 0;
function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
}
function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.children.length;
  showSlide(slideIndex);
}
setInterval(nextSlide, 3000);

const iconselect = document.querySelector(".icon");
const navMenu = document.querySelector(".nav-menu");

iconselect.addEventListener("click", mobileMenu);

function mobileMenu() {
  iconselect.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// when we click  icon its close

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  iconselect.classList.remove("active");
  navMenu.classList.remove("active");
}

// //active nav bar
// const activePage = window.location.pathname;
// const navlinks = document.querySelectorAll('nav a')
//   .forEach(link => {
//     if (link.href.includes(`${activePage}`)) {
//       link.classList.add('actives');
//     }
//   });
