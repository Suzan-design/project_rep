var home = document.getElementById("home");
var products = document.getElementById("products");
var trainers = document.getElementById("trainers");
var contact = document.getElementById("contact");

window.onscroll = function () {
    var navbar = document.getElementById("nav");

    if (scrollY > 680) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
}
home.onmouseover = function () {
    home.style.color = "blue";
}
home.onmouseleave = function () {
    home.style.color = "gray";
}
home.onclick = function () {
    home.style.color = "blue";
}
products.onclick = function () {
    home.style.color = "blue";
}
trainers.onclick = function () {
    home.style.color = "blue";
}
contact.onclick = function () {
    home.style.color = "blue";
}
products.onmouseover = function () {
    products.style.color = "blue";
}
products.onmouseleave = function () {
    products.style.color = "gray";
}
trainers.onmouseover = function () {
    trainers.style.color = "blue";
}
trainers.onmouseleave = function () {
    trainers.style.color = "gray";
}
contact.onmouseover = function () {
    contact.style.color = "blue";
}
contact.onmouseleave = function () {
    contact.style.color = "gray";
}


