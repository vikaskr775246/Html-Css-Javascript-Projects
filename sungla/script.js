// loader-start
window.addEventListener('DOMContentLoaded', e => {
    const loader_bg = document.getElementById('loader-bg');
    loader_bg.style.opacity = '0';
    if (loader_bg.style.opacity) {
        setTimeout(() => { loader_bg.style.display = 'none'; }, 900)
    };
});
// loader end
// nav manu start
const menu = document.querySelector('#menu').children;
for (let i = 1; i < menu.length - 1; i++) {
    menu[i].addEventListener('mouseover', function() {
        menu[i].children[0].classList.add('active');
        if (i == 5) {
            menu[i].children[0].classList.add('login-active');
        }
    });
    menu[i].addEventListener('mouseout', function() {
        menu[i].children[0].classList.remove('active');
        if (i == 5) {
            menu[i].children[0].classList.remove('login-active');
        }
    });
};

window.addEventListener('resize', function(e) {
    // console.clear();
    const screen_width = e.target.outerWidth;
    if (screen_width <= 1150) {
        // console.log('hii')
        for (let i = 5; i < menu.length; i++) {
            menu[i].setAttribute('style', 'display:none;')
        }
    } else {
        for (let i = 5; i < menu.length; i++) {
            menu[i].setAttribute('style', 'display:list-item;')
        }
    }
});
// nav manu end
const clients_wapper = document.querySelector("#clients-wapper");
const clients_box = document.querySelectorAll(".clients-box");
const circles = document.querySelectorAll(".circle");
const obj = {
    dorts_fun(idx = 0) {
        for (const ci of circles) {
            ci.classList.remove('active');
        }
        circles[idx].classList.add('active');
    },
    transform_fun(idx = 0) {
        let x = clients_box[0].getBoundingClientRect().width;
        clients_wapper.style.transform = `translateX(-${(x + 160) * idx}px)`;
    },
};
let slideIndex = 0;
let timeout;
let fun_button = (n) => {
    slideIndex = n
    clearTimeout(timeout);
    return slider();
};
const slider = () => {
    // console.log(slideIndex);
    obj.transform_fun(slideIndex);
    obj.dorts_fun(slideIndex);

    slideIndex++
    if (slideIndex >= circles.length) slideIndex = 0;

    timeout = setTimeout(slider, 4000);
};
slider();
window.onresize = () => slider;
