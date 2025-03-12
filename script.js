document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    const header = document.querySelector(".header");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("show");
    });

    let lastScroll = 0;
    window.addEventListener("scroll", () => {
        let currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll) {
            header.classList.add("hide");
        } else {
            header.classList.remove("hide");
        }
        lastScroll = currentScroll;
    });
});
