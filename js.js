var navBar = document.getElementById("navBar");
var darkModeBtn = document.getElementById("darkModeBtn");
var lightModeBtn = document.getElementById("lightModeBtn");
var body = document.getElementById("body");

darkModeBtn.addEventListener("click", function() {
    body.classList.add("darkMode");
    lightModeBtn.classList.remove("hide");
    darkModeBtn.classList.add("hide");
})

lightModeBtn.addEventListener("click", function() {
    body.classList.remove("darkMode");
    darkModeBtn.classList.remove("hide");
    lightModeBtn.classList.add("hide");
})

function responsiveNavBar() {
    if (navBar.classList.contains('closedNavBar')) {
        navBar.classList.remove('closedNavBar');
        navBar.classList.add('openNavBar');
    }
    else {
        navBar.classList.remove('openNavBar');
        navBar.classList.add('closedNavBar');
    }
}

