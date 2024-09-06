const ramen = document.getElementById("ramen-menu");
const sushi = document.getElementById("sushi-menu");
const drinks = document.getElementById("drinks-menu");
const desserts = document.getElementById("desserts-menu");
let ramenBtn = document.getElementById("ramen-btn");
let sushiBtn = document.getElementById("sushi-btn");
let drinksBtn = document.getElementById("drinks-btn");
let dessertsBtn = document.getElementById("desserts-btn");

const sections = {
  ramen: { section: ramen, button: ramenBtn },
  sushi: { section: sushi, button: sushiBtn },
  drinks: { section: drinks, button: drinksBtn },
  desserts: { section: desserts, button: dessertsBtn },
};

function showMenu(menu) {
  Object.keys(sections).forEach((key) => {
    if (key === menu) {
      showSection(sections[key].section);
      sections[key].button.classList.add("bg-main", "text-white");
    } else {
      hiddeSection(sections[key].section);
      sections[key].button.classList.remove("bg-main", "text-white");
    }
  });
}

function showSection(section) {
  section.classList.remove("invisible", "hidden");
  section.classList.add("visible");
}

function hiddeSection(section) {
  section.classList.add("invisible", "hidden");
  section.classList.remove("visible");
}

ramenBtn.addEventListener("click", () => showMenu("ramen"));
sushiBtn.addEventListener("click", () => showMenu("sushi"));
drinksBtn.addEventListener("click", () => showMenu("drinks"));
dessertsBtn.addEventListener("click", () => showMenu("desserts"));

// Inicializar mostrando la sección de ramen
showMenu("ramen");

//*ESTE CODIGO HACE LO MISMO PERO ES MENOS OPTIMIZADO */
// const ramen = document.getElementById("ramen-menu");
// const sushi = document.getElementById("sushi-menu");
// const drinks = document.getElementById("drinks-menu");
// let ramenBtn = document.getElementById("ramen-btn");
// let sushiBtn = document.getElementById("sushi-btn");
// let drinksBtn = document.getElementById("drinks-btn");

// function showRamen() {
//   ramenBtn.addEventListener("click", () => {
//     showSection(ramen);
//     hiddeSection(sushi);
//     hiddeSection(drinks);
//     if (ramen.classList.contains("visible")) {
//       ramenBtn.classList.add("bg-main", "text-white");
//       sushiBtn.classList.remove("bg-main", "text-white");
//       drinksBtn.classList.remove("bg-main", "text-white");
//     }
//   });
// }

// function showSushi() {
//   sushiBtn.addEventListener("click", () => {
//     showSection(sushi);
//     hiddeSection(ramen);
//     hiddeSection(drinks);
//     if (sushi.classList.contains("visible")) {
//       sushiBtn.classList.add("bg-main", "text-white");
//       ramenBtn.classList.remove("bg-main", "text-white");
//       drinksBtn.classList.remove("bg-main", "text-white");
//     }
//   });
// }

// function showDrinks() {
//   drinksBtn.addEventListener("click", () => {
//     showSection(drinks);
//     hiddeSection(ramen);
//     hiddeSection(sushi);
//     if (drinks.classList.contains("visible")) {
//       drinksBtn.classList.add("bg-main", "text-white");
//       ramenBtn.classList.remove("bg-main", "text-white");
//       sushiBtn.classList.remove("bg-main", "text-white");
//     }
//   });
// }

// function showSection(section) {
//   section.classList.remove("invisible");
//   section.classList.remove("hidden");
//   section.classList.add("visible");
// }

// function hiddeSection(section) {
//   section.classList.add("invisible");
//   section.classList.add("hidden");
//   section.classList.remove("visible");
// }

// showSushi();
// showRamen();
// showDrinks();
