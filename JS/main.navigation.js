(() => {
    const button = document.querySelector(".js-nav-button");
    const button2 = document.querySelector(".js-button-back");
    const button3 = document.querySelector(".js-text-back");
    const menu = document.querySelector(".js-main-navigation__list");

    const toggleClass = () => {
        menu.classList.toggle("main-navigation__list--open");
    };

    button.addEventListener("click", toggleClass);
    button2.addEventListener("click", toggleClass);
    button3.addEventListener("click", toggleClass);

})();