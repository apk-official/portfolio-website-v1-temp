const home = document.querySelector(".home");
const about = document.querySelector(".about");
const skill = document.querySelector(".skill");
const contact = document.querySelector(".contact");

const navAbout = about.addEventListener("click", () => {
  window.location.href = "../About/";
});
const navHome = home.addEventListener("click", () => {
  window.location.href = "../";
});
const navSkill = skill.addEventListener("click", () => {
  window.location.href = "../Skills/";
});
const navContact = contact.addEventListener("click", () => {
  window.location.href = "../Contact/";
});
