// -------------------dropdown menu------------------ //
document.getElementById("click-to-drop").addEventListener("click", function () {
  document.querySelector(".menu-dropdown").classList.toggle("droped");
  document.querySelector(".arrow").classList.toggle("arrow-down");
});

// --------------main nav dropdown--------------- //
document.querySelector(".profile").addEventListener("click", function () {
  document
    .querySelector(".nav-dropdown")
    .classList.toggle("nav-dropdown-active");
});

// -------------delete-credit-cards-------------- //
const cards = document.querySelectorAll(".credit-card");
const del = document.querySelectorAll(".delete-icon");

for (let i = 0; i < del.length; i++) {
  const elemOne = del[0];
  const elemTwo = del[1];
  const elemThree = del[2];

  for (let i = 0; i < cards.length; i++) {
    var cardOne = cards[0];
    var cardTwo = cards[1];
    var cardThree = cards[2];
  }
  elemOne.addEventListener("click", function () {
    cardOne.style.display = "none";
  });
  elemTwo.addEventListener("click", function () {
    cardTwo.style.display = "none";
  });
  elemThree.addEventListener("click", function () {
    cardThree.style.display = "none";
  });
}

// ----------active-credit-cards---------- //
cards[0].addEventListener("click", function () {
  cards[0].classList.toggle("card-active");
});
cards[1].addEventListener("click", function () {
  cards[1].classList.toggle("card-active");
});
cards[2].addEventListener("click", function () {
  cards[2].classList.toggle("card-active");
});

// ------------ tabs section-------------- //
var tabLabels = document.querySelectorAll("#tabs li");
var tabPanes = document.getElementsByClassName("tab-contents");

function activateTab(e) {
  e.preventDefault();

  tabLabels.forEach(function (label, index) {
    label.classList.remove("active");
  });
  [].forEach.call(tabPanes, function (pane, index) {
    pane.classList.remove("active");
  });

  e.target.parentNode.classList.add("active");
  var clickedTab = e.target.getAttribute("href");
  document.querySelector(clickedTab).classList.add("active");
}

tabLabels.forEach(function (label, index) {
  label.addEventListener("click", activateTab);
});

// ------------ tabs section-------------- //
document.getElementById("tap1").addEventListener("click", function () {
  document.getElementById("tabs-active1").classList.toggle("activate-tabs");
});
document.getElementById("tap2").addEventListener("click", function () {
  document.getElementById("tabs-active2").classList.toggle("activate-tabs");
});
document.getElementById("tap3").addEventListener("click", function () {
  document.getElementById("tabs-active3").classList.toggle("activate-tabs");
});
document.getElementById("tap4").addEventListener("click", function () {
  document.getElementById("tabs-active4").classList.toggle("activate-tabs");
});
document.getElementById("tap5").addEventListener("click", function () {
  document.getElementById("tabs-active5").classList.toggle("activate-tabs");
});
document.getElementById("tap6").addEventListener("click", function () {
  document.getElementById("tabs-active6").classList.toggle("activate-tabs");
});
document.getElementById("tap7").addEventListener("click", function () {
  document.getElementById("tabs-active7").classList.toggle("activate-tabs");
});
document.getElementById("tap8").addEventListener("click", function () {
  document.getElementById("tabs-active8").classList.toggle("activate-tabs");
});
document.getElementById("tap9").addEventListener("click", function () {
  document.getElementById("tabs-active9").classList.toggle("activate-tabs");
});
document.getElementById("tap10").addEventListener("click", function () {
  document.getElementById("tabs-active10").classList.toggle("activate-tabs");
});

// ------------ hamburger menu -------------- //
var wrapper = document.querySelector(".wrapper");
document.querySelector(".hamburger").addEventListener("click", function () {
  wrapper.classList.toggle("mobile-menu");
  menuHider.style.display = "block";
});
var menuHider = document.querySelector(".hide-sidebar");
menuHider.addEventListener("click", function () {
  wrapper.classList.toggle("mobile-menu");
  menuHider.style.display = "none";
});
