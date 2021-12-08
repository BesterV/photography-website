
function menuPressed() {
    var menu = document.getElementById("nav-icon4");
    menu.classList.toggle("open");

    var el = document.getElementsByClassName("menu-block-mobile")[0];
    el.classList.toggle("menu-hidden");
}