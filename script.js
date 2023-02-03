window.addEventListener("load", () => {
  document.getElementById("current").classList.add("grad-border");
});

function openMenu() {
  document.getElementById("mobile-menu").classList.toggle("open");
}
function addBorder(x) {
  x.classList.add("grad-border");
}
function removeBorder(x) {
  x.classList.remove("grad-border");
  document.getElementById("current").classList.add("grad-border");
}
