const loader = document.getElementById("preLoader");
const body = document.getElementById("body");

window.addEventListener("load", function () {
    loader.classList.add("preloader");
    body.classList.add("over");
    setTimeout(function () {
        body.classList.remove("over");
        loader.style.display = "none";
    }, 500);
});