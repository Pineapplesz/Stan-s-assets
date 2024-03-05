const hamMenu = document.querySelector(".burger-menu");

const offScreenMenu = document.querySelector(".menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});

document.addEventListener('click', function (event) {
    const targetElement = event.target;

    if (!offScreenMenu.contains(targetElement) && !hamMenu.contains(targetElement) && offScreenMenu.classList.contains("active")) {
        hamMenu.classList.toggle("active");
        offScreenMenu.classList.toggle("active");
    }
});
