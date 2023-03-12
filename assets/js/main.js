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

// document.getElementById("courses-dropdown").innerHTML = dropdown;

// if(document.getElementById("header").innerHTML)

// let pageViews = localStorage.getItem('pageViews');

// if (!pageViews) {
//     pageViews = 1;
// } else {
//     pageViews = parseInt(pageViews) + 1;
// }

// localStorage.setItem('pageViews', pageViews);

// const pageViewsElement = document.getElementById('page-views');
// pageViewsElement.textContent = pageViews;