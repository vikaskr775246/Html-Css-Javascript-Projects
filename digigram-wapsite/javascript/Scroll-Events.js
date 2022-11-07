window.addEventListener('scroll', function () {
    let BackToTop = document.querySelector(".back-to-top");
    BackToTop.style.visibility = "hidden";
    if (pageYOffset >= 460) {
        BackToTop.style.visibility = "visible";
        BackToTop.addEventListener("click", function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    };
});