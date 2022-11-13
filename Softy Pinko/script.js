const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const nav_links = document.getElementById("nav-links");
hamburger.onclick = function () {
    this.classList.toggle("active");
    nav.classList.toggle("animat-nav");
    nav_links.classList.toggle("hide");
};
(function () {
    const tetimonials_card = document.querySelectorAll(".tetimonials-card");
    var x = Math.max(tetimonials_card[0].clientHeight, tetimonials_card[1].clientHeight, tetimonials_card[2].clientHeight);
    tetimonials_card.forEach(elm => {
        elm.style.height = `${x}px`;
    });
}());
(function () {
    const nav_ancar = document.querySelectorAll(".nav-ancar");
    window.addEventListener("scroll", function () {
        const scroll_y = Math.trunc(pageYOffset);
        const size = [0, 609, 1462, 2026, 2730, 3872, 4721];
        nav_ancar.forEach((elm, idx) => {
            if (scroll_y >= size[idx]) {
                for (const remove of nav_ancar) {
                    remove.classList.remove("nav-active");
                }
                elm.classList.add("nav-active");
            }
        });
        console.log(scroll_y);
    });
}());