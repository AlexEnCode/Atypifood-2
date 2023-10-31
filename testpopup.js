let modalBtns = [...document.querySelectorAll(".button")];
modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display = "block";
  };
});
let closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    let modal = btn.closest(".modal");
    modal.style.display = "none";
  };
});
window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
};



<!-- a surprimer -->
<form action="Accueil.html" method="get">
  <section id="entete">
    <button> <img src="Logo/logo poulpe.png" alt="ATYPIFOOD" id="logofondblanc"></button>
  </section>
  <br>
  <section id="boutonentete">
<!-- a surprimer -->