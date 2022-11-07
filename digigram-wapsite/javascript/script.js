// ------- Pricing-Plan -------
let myPlan = document.querySelectorAll(".plan");
for (let e of myPlan) {
    e.addEventListener("click", function () {
        for (const l of myPlan) {
            l.classList.remove("pricing-plan-active");
        }
        this.classList.add("pricing-plan-active");
    });
};

// ------- slider-image -------
let person = document.querySelectorAll(".person");
let dot = document.querySelectorAll(".dot");
show_person();
let set_c = setInterval(function () {
    for (const d of dot) {
        d.classList.toggle("slider-active");
        for (const pe of person) {
            if (d.className.length == 17) {
                if (screen.width <= 1024) {
                    pe.style.transform = "translateX(-64rem)";
                    if (screen.width <= 768) {
                        pe.style.transform = "translateX(-40.5rem)";
                        if (screen.width <= 600) {
                            pe.style.transform = "translateX(-36.2rem)";
                            if (screen.width <= 524) {
                                pe.style.transform = "translateX(-32rem)";
                                if (screen.width <= 460) {
                                    pe.style.transform = "translateX(-28rem)";
                                    if (screen.width <= 395) {
                                        pe.style.transform = "translateX(-24rem)";
                                        if (screen.width <= 330) {
                                            pe.style.transform = "translateX(-20.5rem)";
                                            if (screen.width <= 280) {
                                                pe.style.transform = "translateX(-18rem)";
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    pe.style.transform = "translateX(-71.3rem)";
                }
            } else {
                pe.style.transform = "translateX(0)";
            }
        }
    }
}, 5000);

function show_person(e) {
    for (const d of dot) {
        d.addEventListener("click", function () {
            for (const o of dot) {
                o.classList.remove("slider-active");
            }
            this.classList.add("slider-active");
            for (const son of person) {
                if (dot[1].className.length == 17) {
                    son.style.transform = "translateX(-71.3rem)";
                }
                if (dot[0].className.length == 17) {
                    son.style.transform = "translateX(0)";
                }
            }
        });
    }
}
// ------- our-blog -------
let card = document.querySelectorAll(".card");
for (const c of card) {
    c.addEventListener("click", function () {
        for (const t of card) {
            t.classList.remove("blog-active");
        }
        this.classList.add("blog-active");
    });
}
// ------- Counter -------
let count = document.querySelectorAll(".count");
let speed = 200;
count.forEach(counter => {
    function update() {
        let target = counter.getAttribute("data-target");
        let inner = +counter.innerHTML;
        let inc = Math.floor(target/speed);
        // console.log(target);
        if (inner < target) {
            // console.log("haa");
            counter.innerHTML = inner + inc;
            setTimeout(update,1);
        }else{
            counter.innerHTML = target.replace(/\B(?=(\d{3})+(?!\d))/g,",");
        }
    };
    update();
});
let retion = document.querySelector(".retion");
// console.log(retion);
var num = 0;
ret()
function ret() {
    num++
    let target = retion.getAttribute("data-target");
    // console.log(num);
    if (num < target) {
        // console.log("haa");
        retion.innerHTML = num+"%";
        setTimeout(ret, 10);
    }else{
        retion.innerHTML = target+"%";
    }
}