let navlinks = document.querySelector(".navlinks");
let burger = document.querySelector(".hamburger");
let first_span = burger.firstElementChild;
let secend_span = first_span.nextElementSibling;
let last_span = burger.lastElementChild;
let navbar = document.querySelector(".navbar");
let br = document.querySelectorAll(".br");
function hamburger() {
    if (navlinks.style.display == "flex") {
        navlinks.style.display = "none";
        navbar.style.height = "70px";
        console.log("haaaa");
        for (const r of br) {
            r.style.filter = "blur(0px)";
        }
    }
    else {
        navlinks.style.display = "flex";
        navbar.style.height = "300px";
        for (const t of br) {
            t.style.filter = "blur(6px)";
        }
    }
}
for (const b of br) {
    b.addEventListener("click", function () {
        if (screen.width <= 730) {
            for (const remo of br) {
                remo.style.filter = "blur(0px)";
                navlinks.style.display = "none";
                navbar.style.height = "70px";
            }
        }
    });
};
window.addEventListener("scroll", function () {
    let scr = Math.floor(pageYOffset)
    if (scr >= 900) {
        navbar.style.position = "fixed";
        navbar.style.top = "0px";
    }
    else {
        navbar.style.position = "absolute";
        navbar.style.top = "20px";
    }
});