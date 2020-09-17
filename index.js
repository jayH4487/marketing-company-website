const $closeNav = document.querySelector(".close-nav")
const $openNav = document.querySelector(".open-nav")
const $nav = document.querySelector(".nav")


$closeNav.addEventListener("click", () => $nav.style.left = "100%")

$openNav.addEventListener("click", () => $nav.style.left = "0%")