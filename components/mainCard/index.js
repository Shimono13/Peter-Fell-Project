const mainMenu = document.getElementById("mainMenu");
const floorsCard = document.getElementById("floorsCard");
const patiosCard = document.getElementById("patiosCard");
const drivewaysCard = document.getElementById("drivewaysCard");
const wallsCard = document.getElementById("wallsCard");
const poolCard = document.getElementById("poolCard");
const commercialCard = document.getElementById("commercialCard");
const publicCard = document.getElementById("publicCard");

floorsCard.addEventListener("mouseover", () => {
  mainMenu.classList.add("imgFloorsCard");
});
floorsCard.addEventListener("mouseleave", () => {
  mainMenu.classList.remove("imgFloorsCard");
});

patiosCard.addEventListener("mouseover", () => {
  mainMenu.classList.add("imgPatiosCard");
});
patiosCard.addEventListener("mouseleave", () => {
  mainMenu.classList.remove("imgPatiosCard");
});
drivewaysCard.addEventListener("mouseover", () => {
  mainMenu.classList.add("imgDrivewaysCard");
});
drivewaysCard.addEventListener("mouseleave", () => {
  mainMenu.classList.remove("imgDrivewaysCard");
});
wallsCard.addEventListener("mouseover", () => {
  mainMenu.classList.add("imgWallsCard");
});
wallsCard.addEventListener("mouseleave", () => {
  mainMenu.classList.remove("imgWallsCard");
});
poolCard.addEventListener("mouseover", () => {
  mainMenu.classList.add("imgPoolCard");
});
poolCard.addEventListener("mouseleave", () => {
  mainMenu.classList.remove("imgPoolCard");
});
commercialCard.addEventListener("mouseover", () => {
  mainMenu.classList.add("imgCommercialCard");
});
commercialCard.addEventListener("mouseleave", () => {
  mainMenu.classList.remove("imgCommercialCard");
});
publicCard.addEventListener("mouseover", () => {
  mainMenu.classList.add("imgPublicCard");
});
publicCard.addEventListener("mouseleave", () => {
  mainMenu.classList.remove("imgPublicCard");
});
